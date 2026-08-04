/* ============================================================
   SchoolFit Quest v4 — scoring engine

   Changes from v3:
   1. Every dimension carries a measurement confidence based on how
      many items informed it. Thinly measured dimensions are shrunk
      toward neutral instead of swinging to 0 or 100.
   2. Risk triggers only fire when the dimension driving them was
      actually measured well enough to justify it.
   3. School evidence level propagates: weaker-evidence attributes
      regress toward the dataset mean and widen the reported band.
   4. Family constraints are hard filters, not score penalties.
   5. Co-ed is never scored. It is a family filter and a tour note.
   6. Nothing in the output layer is hardcoded to any one interest.
   ============================================================ */

const K_SHRINK = 2.5;              // items needed before a dim is trusted
const EV_CONF  = {High:1.0, Medium:0.78, Low:0.55};

/* Evidence weighting applies to CULTURE attributes only.
   ------------------------------------------------------
   A school's music, sport, tech, academic, breadth and enterprise
   attributes are built from things that can be checked from outside:
   published programs, competition membership, subject lists, specialist
   pathways, ensemble counts. Aquinas runs a very large sport program
   whether or not anyone independent has ever written about the school.
   Those attributes are not weakened by an absent review.

   Culture attributes are different. "Teachers notice potential and
   direct opportunity" is a claim about lived experience, and for 9 of
   our 13 fee-paying schools the only source making it is the school
   itself. There is no external review of WA private schools, and
   searches of SEEK, Glassdoor and Indeed for Kennedy, Christ Church,
   Wesley, CBC Fremantle, Iona, Santa Maria, Aquinas and Carey
   Harrisdale found no current teaching-staff accounts at all.

   So culture attributes regress toward the middle of the field when
   the evidence behind them is thin, and program attributes do not.
   The effect is to stop a school being rewarded for a good website
   or punished for having no marketing department. */
/* visibility and teacher were removed from scoring entirely (see below),
   and grounded is now measured from ACARA socio-educational data, so the
   evidence discount applies only to what is left that still rests on
   school self-description. */
/* What is left that still rests partly on school self-description.
   structure, social and enterprise were removed from scoring entirely -
   all three correlated with FEE at +0.50 to +0.59 and with measured
   ICSEA at roughly zero, the same fingerprint as visibility and teacher.
   No source exists for any of them, and enterprise in particular
   decomposes into things measured properly elsewhere: whether a school
   lets a Year 8 lead (access pathways), whether lessons involve leading
   (pedagogy), and whether the cohort pushes back (peerAmbition, now
   derived from real ICSEA). */
const CULTURE_ATTRS = ["pressure","peerIntensity","autonomy","focus"];

/* NOTE ON enterprise. It was removed from scoring earlier today because
   the interpretive value correlated with FEE at +0.59 and with measured
   ICSEA at +0.07. It is now BACK, rebuilt from senior subject lists:
   Business Management and Enterprise, Economics, Accounting, Career and
   Enterprise, Certificate III Business. The rebuilt value correlates
   -0.18 with the old guess - unrelated, like every other attribute we
   have re-derived - and 0.35 rather than 0.64 with fee.

   The construct is NARROWER than the old label suggested. This measures
   whether a school teaches business and enterprise as SUBJECTS. It does
   not measure whether a child gets to lead things, which is what the
   child-side questions about organising events are really asking. Five
   schools have portal-locked handbooks and carry no value at all. */

/* WHY visibility AND teacher NO LONGER SCORE.
   -------------------------------------------
   Both correlated with school FEES at +0.84 and with measured ICSEA at
   0.09 and 0.20. That is the signature of a number derived from price
   rather than from anything about the school. No source for either
   exists at any of the 22 schools: there is no external review of WA
   private schools, and a search of every school's published material
   for pastoral group size and mentor continuity returned "not stated"
   for 13 of 22, with only 2 publishing a group size at all.

   Removing them took the fee correlation of a final recommendation from
   0.50 to 0.21, and the private-versus-public gap from 9.4 points to 0.5,
   while leaving the top of the list unchanged. Schools that were ahead on
   evidence stayed ahead; schools that were ahead on price did not.

   Both remain PROFILE dimensions: still measured on the child, still
   shaping the narrative, and now generating a tour question instead of
   a score. "How do you spot a capable student who is quietly coasting?"
   is a better thing for a parent to ask than a number nobody can source. */
const RISK_GATE = 0.5;             // min measurement confidence to fire a risk
const INTEREST_SHARE = 0.32;       // interests' share of the growth score
const INTEREST_DAMP  = 0.65;       // interests' weight relative to culture in fit

const clamp=(n,a=0,b=100)=>Math.max(a,Math.min(b,n));
const el=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

/* ---------- per-question bounds and values ---------- */
function optW(o,dim){ return (o.w&&o.w[dim])||0; }

function bounds(q,dim){
  if(!q.options && !q.items && !q.rows) return [0,0];
  if(q.options && !q.options.length) return [0,0];   // e.g. the suburb picker
  if(q.type==="bestworst"){
    let lo=Infinity,hi=-Infinity;
    q.items.forEach((m,mi)=>q.items.forEach((l,li)=>{
      if(mi===li)return;
      const v=2*optW(m,dim)-optW(l,dim);
      if(v<lo)lo=v; if(v>hi)hi=v;
    }));
    return [lo,hi];
  }
  if(q.type==="grid"){
    /* Ratings are read as deviation from this child's own average, so a
       child who rates everything 5 contributes nothing and a child who
       rates maths 5 and English 2 contributes a lot. Neutralises both
       the yea-sayers and the modest in one move. */
    let W=0; q.rows.forEach(r=>W+=Math.abs((r.d&&r.d[dim])||0));
    return W===0?[0,0]:[-2*W, 2*W];
  }
  if(q.type==="multi"){
    const vals=q.options.map(o=>optW(o,dim));
    const pos=vals.filter(v=>v>0).sort((a,b)=>b-a);
    const neg=vals.filter(v=>v<0).sort((a,b)=>a-b);
    const k=q.pick||vals.length;
    const hi=pos.slice(0,k).reduce((a,b)=>a+b,0);
    const lo=neg.slice(0,k).reduce((a,b)=>a+b,0);
    return [lo,hi];
  }
  const vals=q.options.map(o=>optW(o,dim));
  return [Math.min(...vals),Math.max(...vals)];
}

function value(q,r,dim){
  if(q.type==="grid"){
    const ids=q.rows.map(x=>x.id).filter(id=>r&&r[id]!==undefined);
    if(!ids.length) return 0;
    const mean=ids.reduce((s,id)=>s+r[id],0)/ids.length;
    return q.rows.reduce((s,row)=>{
      const w=(row.d&&row.d[dim])||0;
      if(!w || r[row.id]===undefined) return s;
      return s + (r[row.id]-mean)*w;
    },0);
  }
  if(q.type==="bestworst") return 2*optW(q.items[r.most],dim)-optW(q.items[r.least],dim);
  if(q.type==="multi") return (r||[]).reduce((sum,i)=>sum+optW(q.options[i],dim),0);
  return optW(q.options[r],dim);
}

function answered(q,r){
  if(r===undefined||r===null) return false;
  if(q.type==="suburb") return typeof r==="string" && r.length>0;
  if(q.type==="peers")  return r==="unknown" || Array.isArray(r);
  if(q.type==="bestworst") return r.most!==undefined && r.least!==undefined && r.most!==r.least;
  if(q.type==="grid") return typeof r==="object" && q.rows.every(x=>r[x.id]!==undefined);
  if(q.type==="multi") return Array.isArray(r) && (q.pick===0 ? true : r.length===q.pick);
  if(q.type==="rank2") return Array.isArray(r) && r.length===2;
  return true;
}

/* ---------- conditional questions ----------
   Sub-domain items only appear for a child who picked that interest.
   Clash items only appear once three interests exist to rank. The bank
   is larger than before, but any one child answers fewer items. */
function pickedTiles(responses){
  const q=childQuestions[0], r=responses[0];
  if(!Array.isArray(r)) return [];
  return r.map(i=>q.options[i] && q.options[i].id).filter(Boolean);
}
function isActive(q,responses){
  /* trigger:null means always ask — currently only the academic talent
     ladder, which applies whatever the child is interested in. */
  if(q.type==="subdomain"||q.type==="talent")
    return q.trigger===null || q.trigger.some(t=>pickedTiles(responses).includes(t));
  if(q.type==="clash")     return pickedTiles(responses).length>=3;
  return true;
}

/* ---------- interest ranking from the clash round robin ----------
   Three pairwise results over the child's own top three. Wins are
   counted, so a consistent answerer produces a clean 1-2-3 and an
   inconsistent one produces a tie — which we report rather than hide. */
function interestRanking(responses){
  const tiles=pickedTiles(responses);
  if(tiles.length<3) return null;
  const wins={}; tiles.forEach(t=>wins[t]=0);
  let asked=0;
  childQuestions.forEach((q,i)=>{
    if(q.type!=="clash") return;
    const r=responses[i];
    if(r!==0 && r!==1) return;
    const winner=tiles[q.pair[r]];
    if(winner===undefined) return;
    wins[winner]++; asked++;
  });
  if(asked===0) return null;
  const order=[...tiles].sort((a,b)=>wins[b]-wins[a]);
  const tied=new Set(Object.values(wins)).size < tiles.length;
  return {order, wins, tied, asked};
}

/* Weight the interest dimensions by that ranking. First choice is
   amplified, third damped. This is the change that makes a child who
   is music-first-then-tech rank differently from one for whom the two
   are equal. Previously both scored identically. */
const RANK_MULT=[1.3, 1.0, 0.76];
function applyInterestRank(scores,ranking){
  if(!ranking) return scores;
  const out={...scores};
  ranking.order.forEach((tid,i)=>{
    const tile=TILES.find(t=>t.id===tid);
    if(!tile || i>=RANK_MULT.length) return;
    Object.keys(tile.d).forEach(dim=>{
      if(!out[dim] || tile.d[dim]<=0) return;
      out[dim]={...out[dim], score: clamp(Math.round(50+(out[dim].score-50)*RANK_MULT[i]))};
    });
  });
  return out;
}

/* Interests named in Q1 but NOT confirmed by Q3 ("what have you
   actually done unprompted"). Named-but-not-done is the aspiration
   /behaviour gap, and it is worth showing a parent rather than
   quietly scoring it as though it were real. */
function unconfirmedInterests(responses){
  const named=pickedTiles(responses);
  const doneQ=childQuestions.findIndex(q=>q.type==="multi" && q.pick===0);
  const r=responses[doneQ];
  if(!Array.isArray(r)) return [];
  const done=r.map(i=>childQuestions[doneQ].options[i] && childQuestions[doneQ].options[i].id);
  return named.filter(t=>!done.includes(t));
}

/* ---------- tested versus resilient ----------
   A low score on a social dimension means one of two very different
   things: genuinely independent, or never tested. The tool cannot tell
   them apart from the child's answers alone, because a child who has
   always had friends has no reference point for needing them. The
   parent item resolves it. Where the answer is "never been an issue",
   these readings are reported as untested rather than as resilience. */
const UNTESTED_DIMS=["belonging","conflictRepair","changeTolerance","social"];
function socialUntested(parentScores){
  if(!parentScores) return false;
  const s=parentScores.socialTested;
  /* Read the OBSERVED value, not the shrunk score. Confidence shrinkage
     exists to stop a thinly-measured *trait* swinging to an extreme.
     This is not a trait — it is a fact the parent knows and reported.
     Damping it toward neutral would be treating knowledge as uncertainty. */
  return !!(s && s.n>0 && s.observed<=25);
}

/* Does this child's stated level of commitment justify letting a
   sub-domain move a ranking? Only club level and above. */
const TALENT_DIMS={academic:"talentAcademic", sport:"talentSport", music:"talentMusic",
                   computing:"talentComputing", art:"talentArt", drama:"talentDrama"};

/* Observed, not shrunk — "I play for a club outside school" is a fact the
   child reports, not an estimate about them. Catches the top two rungs of
   each ladder and leaves "just for fun" and "school teams" as flags only. */
function talentIn(scores,domain){
  const t=scores[TALENT_DIMS[domain]];
  return !!(t && t.n>0 && t.observed>=60);
}

/* Every domain the child is already working above school level in. */
function talents(scores){
  return Object.keys(TALENT_DIMS).filter(d=>talentIn(scores,d));
}

/* Back-compat for callers that only wanted "is this child serious about
   anything". Prefer talents() or talentIn() — knowing WHICH domain is the
   whole point, because every selective pathway is selective in one. */
function talentGate(scores){ return talents(scores).length>0; }

/* A selective or extension pathway is only meaningful to a child who could
   plausibly enter it. Returns the pathways at this school that match a
   domain the child is already working above school level in, so the card
   can surface the entry route rather than silently ranking a school the
   family may not be able to access.

   Deliberately NOT a score. Selective entry is a fact about access, not a
   measure of fit, and it must never quietly promote or demote a school. */
function relevantPathways(schoolName,scores){
  const r=(typeof RESEARCH!=="undefined") ? RESEARCH[schoolName] : null;
  if(!r) return [];
  const sel=(r.pedagogy||{}).selective_or_extension;
  if(!sel||!sel.detail) return [];
  const txt=sel.detail.toLowerCase();
  /* Most schools describe extension that is open to everyone already
     enrolled — "the school is non-selective but offers academic extension,
     scholarships and broad senior pathways". That is not a pathway a child
     gains entry to, and matching on "academic" or "extension" alone
     returned all 22 schools, which is the same as returning none.
     A pathway counts here only if entry is actually selected. */
  const openToAll = /non-selective/.test(txt);
  const NAMED = /gifted and talented|fully .*selective|academically selective|specialist |gate |high performance|aset|accelerated class|academic extension|academic excellence|excellence and creativity|keep\b/;
  if(openToAll && !NAMED.test(txt)) return [];
  const MATCH={
    academic:["gifted","talented","gate ","selective","academic extension","academic excellence","accelerated","high performance","aset","keep"],
    music:["music"], art:["visual art","art "], drama:["drama","performing"],
    sport:["sport","tennis","volleyball","netball","football","rowing"],
    computing:["stem","ict","robotic","engineering"]
  };
  return talents(scores)
    .filter(d=>(MATCH[d]||[]).some(k=>txt.includes(k)))
    .map(d=>({domain:d, status:sel.status, detail:sel.detail,
              selected:!openToAll,
              access:r.programAccess||null, entry:r.entryReality||null}));
}

/* The child's chosen sport and music specifics. */
function subDomains(responses){
  const out={};
  childQuestions.forEach((q,i)=>{
    if(q.type!=="subdomain") return;
    const r=responses[i];
    if(r===undefined || !q.options[r]) return;
    out[q.domain]=q.options[r].id;
  });
  return out;
}

/* ---------- known peers ----------
   Never scored. Returned as a note for the card, plus a risk entry only
   when the factors genuinely stack: a child who leans on one or two
   close friendships, does not settle easily into a new group, has never
   been tested on either, AND has nobody they know going. Any one of
   those alone is noise. Together it is a real, specific finding. */
function peerNote(schoolName, fam){
  if(!fam || !fam.knownPeers) return null;
  if(fam.knownPeers==="unknown") return null;
  const list=Array.isArray(fam.knownPeers)?fam.knownPeers:[];
  return list.includes(schoolName)
    ? {has:true,  text:"You know of children from their class heading here."}
    : {has:false, text:"Nobody you know of from their class is heading here."};
}
function peerRisk(s, schoolName, fam, untested){
  const n=peerNote(schoolName,fam);
  if(!n || n.has) return null;
  const leansOnFriends = CF(s,"belonging")>=0.45 && S(s,"belonging")>=60;
  const hardStart      = CF(s,"changeTolerance")>=0.45 && S(s,"changeTolerance")<=42;
  if(!(leansOnFriends && hardStart)) return null;
  return "Your child leans on one or two close friendships and does not find a cold start easy"
    + (untested ? ", and has never had that tested" : "")
    + ". Nobody you know of is heading here. That combination is worth weighing — though it is a reason to ask how the school settles new students, not a reason to follow the group.";
}

/* Sub-domain verdict for one school. Flags, never ranks — a ten-year-
   old's current favourite sport should not move a six-year decision,
   and "not yet researched" is reported as exactly that, never as
   absence. */
/* ---------- sub-domain verdict, with near neighbours ----------
   A child picks ONE thing the music department should buy. Answering that
   as a flat yes/no punishes narrow specialisms unfairly: only 2 of 22
   schools have a confirmed recording and production pathway, yet EVERY
   school that lacks one has contemporary music at strength 1 or 2. Telling
   a producer-first child that Melville is a risk - a school with confirmed
   strong contemporary music and full instrumental tuition - is simply
   wrong, and it drowns out everything else on the card.

   Production is a detail OF contemporary music, not a peer category. So
   when the exact pick is absent we walk to its nearest neighbours and say
   what IS there. A real warning is reserved for a child who is serious AND
   finds nothing in the neighbourhood either. */
const SUB_NEIGHBOURS = {
  music:{
    production:  ["contemporary","band","tuition"],
    contemporary:["production","guitar","band","tuition"],
    orchestral:  ["band","choral","tuition"],
    band:        ["orchestral","jazz","tuition"],
    jazz:        ["band","contemporary","tuition"],
    choral:      ["orchestral","tuition"],
    guitar:      ["contemporary","tuition"],
    tuition:     ["band","orchestral"]
  },
  sport:{}
};

function subDomainCheck(schoolName,subs,scores){
  const out=[];
  [["sport",SPORT_LABELS],["music",MUSIC_LABELS]].forEach(([domain,labels])=>{
    const key=subs[domain];
    if(!key) return;
    const state=programState(schoolName,domain,key);
    const label=labels[key]||key;
    const serious=scores?talentIn(scores,domain):false;

    if(state===2){ out.push({level:"strong", text:label+" is a notable strength here."}); return; }
    if(state===1){ out.push({level:"ok", text:label+" is offered here."+
      (serious?" Worth asking how far it goes for someone already working outside school.":"")}); return; }

    /* Exact pick absent or unchecked - look at the neighbourhood before
       saying anything alarming. */
    const near=(SUB_NEIGHBOURS[domain]||{})[key]||[];
    const found=near.map(k=>({k,st:programState(schoolName,domain,k)}))
                    .filter(x=>x.st===2||x.st===1)
                    .sort((a,b)=>b.st-a.st);
    if(found.length){
      const names=found.slice(0,2).map(x=>(labels[x.k]||x.k).toLowerCase());
      const lead=found[0].st===2?" is a strength here":" is offered here";
      out.push({level:"near",
        text:"No dedicated "+label.toLowerCase()+" pathway was found, but "+names[0]+lead+
             (names[1]?", along with "+names[1]:"")+". Worth asking what equipment is available and whether students can work that way within it."});
      return;
    }
    if(state===0){
      out.push({level:serious?"risk":"gap",
        text:serious
          ? "No evidence of "+label.toLowerCase()+" here, and nothing close to it either, for a child already working above school level in this. Confirm directly - it may be the deciding factor."
          : "No evidence found that this school offers "+label.toLowerCase()+", or anything close to it."});
      return;
    }
    out.push({level:"unknown", text:"This school has not been checked for "+label.toLowerCase()+" yet. Ask on the tour."});
  });
  return out;
}


/* ---------- scoring with confidence ---------- */
/* ---------- how much to trust an item ----------
   Remembering is better evidence than imagining. A child answering "in
   the class with the most rules, how is your work" is reporting something
   that happened. A child answering "which school day sounds better" is
   picturing a place they have never been, at ten years old, and their
   answer is a guess dressed as a preference.

   Both are worth asking - for a large part of secondary school there is
   nothing to remember yet - but they should not count the same. Response
   items keep full weight; preference items are damped.

   The parent bank is untouched: it has no preference-framed items at all,
   because a parent is always being asked what they have seen. */
/* Damp only the items that ask a child to IMAGINE a school, classroom or
   teacher they have never encountered and pick between two of them. Those
   are the guesses. Everything else - what they did, what is in front of
   them when they play, what they want to do next year - is either a fact
   or a plan, and both are better evidence than a hypothetical.

   A first attempt used a whitelist of "response" phrasings and damped
   things it should not have: "what's usually in front of you" is a fact,
   and "if nobody reminded you to practise, what would actually happen" is
   a response. Blacklisting the hypotheticals is the safer direction to
   get wrong. */
const IMAGINED = /which (school|classroom|teacher|would you|sounds|feels)|would you rather|sounds better|feels better|would you pick|which job|put you off more|rather be|rather have/i;
function itemWeight(q){
  if(q.type!=="choice") return 1;               // scenarios, grids, tiles, talent are all real
  return IMAGINED.test(q.prompt||"") ? 0.72 : 1;
}

function scoreQuestions(qs,responses){
  const out={};
  Object.keys(DIMS).forEach(dim=>{
    let raw=0,lo=0,hi=0,n=0;
    qs.forEach((q,i)=>{
      if(!q.options && !q.items && !q.rows) return;
      const r=responses[i];
      if(!answered(q,r)) return;
      const b=bounds(q,dim);
      if(b[0]===b[1]) return;                 // dim not present in this item
      const w=itemWeight(q);
      raw+=value(q,r,dim)*w; lo+=b[0]*w; hi+=b[1]*w; n++;
    });
    if(n===0){ out[dim]={score:50,observed:50,n:0,confidence:0}; return; }
    const observed=clamp(Math.round((raw-lo)/(hi-lo)*100));
    const confidence=n/(n+K_SHRINK);
    out[dim]={
      score: clamp(Math.round(50+(observed-50)*confidence)),
      observed, n,
      confidence: Math.round(confidence*100)/100
    };
  });
  return out;
}

/* Blend child and parent profiles by the family's chosen weighting. */
function blend(child,parent,mode){
  if(!parent) return child;
  const wC = mode==="parent"?0.35 : mode==="child"?0.8 : 0.55;
  const out={};
  Object.keys(DIMS).forEach(d=>{
    const c=child[d], p=parent[d];
    if(!p || p.n===0) { out[d]=c; return; }
    if(!c || c.n===0) { out[d]=p; return; }
    const n=c.n+p.n, confidence=n/(n+K_SHRINK);
    const observed=Math.round(c.observed*wC + p.observed*(1-wC));
    out[d]={score:clamp(Math.round(50+(observed-50)*confidence)),observed,n,confidence:Math.round(confidence*100)/100};
  });
  return out;
}

const S  = (s,d)=> (s[d]?s[d].score:50);
const CF = (s,d)=> (s[d]?s[d].confidence:0);

/* ---------- desired school vector ---------- */
function desiredSchoolVector(s){
  const mix=(a,b,wa)=>Math.round(S(s,a)*wa+S(s,b)*(1-wa));
  const cmin=(a,b)=>Math.min(CF(s,a),CF(s,b));
  return {
    v:{
      academic:      mix("academic","academicInterest",0.6),
    visualArt:     S(s,"visualArt"),
    languages:     S(s,"languages"),
    vet:           S(s,"vet"),
    formality:     S(s,"formality"),
    drama:         S(s,"drama"),
          peerAmbition:  mix("peerDrive","peerInfluence",0.62),
      peerIntensity: mix("resilience","pressure",0.65),
        autonomy:      S(s,"autonomy"),
      focus:         S(s,"focus"),
        pressure:      S(s,"pressure"),
      music:         S(s,"music"),
      tech:          S(s,"tech"),
      sport:         S(s,"sport"),
        breadth:       S(s,"breadth"),
    enterprise:    S(s,"enterprise"),
      grounded:      S(s,"grounded"),
      size:          S(s,"schoolSize")
    },
    c:{
      academic:cmin("academic","academicInterest"), visualArt:CF(s,"visualArt"), drama:CF(s,"drama"), languages:CF(s,"languages"), vet:CF(s,"vet"), formality:CF(s,"formality"), peerAmbition:cmin("peerDrive","peerInfluence"), peerIntensity:cmin("resilience","pressure"), autonomy:CF(s,"autonomy"), focus:CF(s,"focus"), pressure:CF(s,"pressure"), music:CF(s,"music"), tech:CF(s,"tech"),
      sport:CF(s,"sport"), breadth:CF(s,"breadth"), grounded:CF(s,"grounded"), enterprise:CF(s,"enterprise"),
      size:CF(s,"schoolSize")
    }
  };
}

/* ---------- relative attribute positioning ----------
   A family is choosing among these 21 schools, not against an
   absolute standard. Raw attributes sit in a narrow band (most
   schools score 60-90 on most things), so comparing them directly
   flattens every ranking toward the middle. We convert each
   attribute to its position within the dataset instead, which is
   the comparison the family is actually making. */
let ATTR_RANK=null;
function attrRank(){
  if(ATTR_RANK) return ATTR_RANK;
  ATTR_RANK={};
  Object.keys(schools[0].attrs).forEach(k=>{
    const vals=schools.map(s=>s.attrs[k]).filter(v=>v!==undefined);
    ATTR_RANK[k]=v=>{
      let below=0;
      vals.forEach(x=>{ if(x<v) below+=1; else if(x===v) below+=0.5; });
      return 6+(below/vals.length)*88;      // 6..94, keeps ends reachable
    };
  });
  return ATTR_RANK;
}

/* Attribute value. No evidence adjustment happens here — see below.

   THIS USED TO REGRESS WEAK-EVIDENCE ATTRIBUTES TOWARD 50, AND THAT
   WAS BACKWARDS. Match scores reward an attribute being *close to what
   the child wants*. Most children want something in the middle on most
   culture dimensions. So pulling an unverified school toward the middle
   moved it CLOSER to the average child and RAISED its score. Uncertainty
   was paying a dividend. Measured on a real profile, the change promoted
   Scotch and Christ Church five places each on no evidence whatsoever.

   Uncertainty must not move the point estimate. It belongs on the
   *weight*: an attribute nobody outside the school has ever corroborated
   should be less able to earn a strong match, and equally less able to
   cause a bad one. That is applied in schoolMatch via evTerm(). */
function evAttr(school,key){
  const raw=school.attrs[key];
  if(raw===undefined) return null;
  return attrRank()[key](raw);
}

/* Mean match term per dimension: what an average school scores against
   a given want. This is the "we don't know" fallback — the score you'd
   expect from a school picked blind. Cached; attrRank is already cached. */
let _NEUTRAL=null;
function neutralTerm(key,want){
  if(!_NEUTRAL) _NEUTRAL={};
  const vals=_NEUTRAL[key]||(_NEUTRAL[key]=schools
    .map(s=>s.attrs[key]).filter(v=>v!==undefined).map(v=>attrRank()[key](v)));
  if(!vals.length) return 50;
  return vals.reduce((a,v)=>a+(100-Math.abs(want-v)),0)/vals.length;
}

/* Blend a school's actual match term toward the blind-guess term in
   proportion to how weak the evidence is. High evidence keeps its full
   result. Low evidence keeps ~55% of the distance from average, so a
   school cannot earn a strong culture match on its own prospectus —
   and is not punished for lacking a marketing department either.
   Program attributes are externally checkable, so they pass through. */
function evTerm(school,key,want,actual){
  if(!CULTURE_ATTRS.includes(key)) return actual;
  const conf=EV_CONF[school.evidenceLevel]||0.7;
  const n=neutralTerm(key,want);
  return n+(actual-n)*conf;
}

/* ---------- risk triggers ---------- */
const RISK_RULES=[
  /* A child whose output runs on the teacher relationship, at a school
     that confirms it hands the pastoral adult over mid-secondary. Fires
     only where the handover is CONFIRMED - 13 of 22 schools never say,
     and silence is not a yes. */
  {dims:["teacher"], test:(s,a,school)=>{
     if(!school) return false;
     const ps=(typeof RESEARCH!=="undefined" && RESEARCH[school.name]||{}).pastoralStructure||{};
     return ps.sameAdultAcrossYears==="no" && S(s,"teacher")>68;
   }, pts:14,
   msg:"This child's effort tracks the adult in front of them, and this school confirms it changes its pastoral staffing partway through. Worth asking who picks them up and when."},

  {dims:["resilience"], test:(s,a)=>S(s,"resilience")<42 && a.peerIntensity>82, pts:26,
   msg:"This cohort's intensity may amplify a tendency to step back when others are ahead."},
  {dims:["resilience"], test:(s,a)=>S(s,"resilience")<50 && S(s,"resilience")>=42 && a.peerIntensity>76, pts:13,
   msg:"Support may be needed during the period when they are no longer among the strongest."},
  {dims:["pressure"], test:(s,a)=>S(s,"pressure")<44 && a.pressure>78, pts:22,
   msg:"The pressure profile of this environment looks higher than the child currently sustains comfortably."},
  {dims:["peerInfluence"], test:(s,a)=>S(s,"peerInfluence")>66 && a.peerAmbition<67, pts:20,
   msg:"Effort here would depend heavily on which friendship group forms, and cohort ambition varies."},
  {dims:["visibility"], test:(s,a)=>S(s,"visibility")>66 && a.visibility<72, pts:16,
   msg:"This environment may not actively surface a child who waits to be noticed."},
  {dims:["focus"], test:(s,a)=>S(s,"focus")>66 && a.focus<70, pts:18,
   msg:"Classroom focus varies more here than this child appears to need."},
  {dims:["teacher"], test:(s,a)=>S(s,"teacher")>70 && a.teacher<70, pts:11,
   msg:"Mentorship is central to this child's motivation, and the profile here is less certain on that."},
  {dims:["social"], test:(s,a)=>a.social!=null && S(s,"social")>72 && a.social<68, pts:9,
   msg:"The social and co-curricular ecosystem may feel narrower than this child wants."},
  {dims:["academic","academicInterest"], test:(s,a)=>S(s,"academic")>72 && a.academic<68, pts:14,
   msg:"Academic stretch may need to be sought out rather than being the default setting."},
  {dims:["grounded"], test:(s,a)=>S(s,"grounded")>70 && a.grounded<65, pts:12,
   msg:"The social mix here is narrower than this child's stated preference for a grounded environment."},
  /* Symmetric risks — v3 only ever flagged under-provision, never over-provision. */
  {dims:["autonomy"], test:(s,a)=>a.structure!=null && a.autonomy!=null && S(s,"autonomy")>70 && a.structure>78 && a.autonomy<50, pts:16,
   msg:"This is a tightly structured environment and this child works best with room to move. Over-structure is a real disengagement path, not a safe default."},
  {dims:["spaceNeed"], test:(s,a)=>S(s,"spaceNeed")>66 && a.breadth>82, pts:14,
   msg:"Commitment load here is high, and this child needs genuine downtime. Ask what is actually compulsory."},
  {dims:["statusTolerance"], test:(s,a)=>S(s,"statusTolerance")<36 && a.grounded<45, pts:15,
   msg:"Standing and reputation are more visible here than this child appears comfortable with."},
  {dims:["schoolSize"], test:(s,a)=>S(s,"schoolSize")<36 && a.size>75, pts:15,
   msg:"This is one of the largest schools in the set, and this child leans towards somewhere they would be known by name."},
  {dims:["breadth"], test:(s,a)=>S(s,"breadth")<35 && a.breadth>82, pts:9,
   msg:"This school spreads students across many things, while this child wants to go deep on one or two."}
];

/* ---------- alignment narrative ----------
   Phrases are written about the fit between this child and this
   environment, never as a judgement of the school. hiHi/loLo are
   agreements; hiLo/loHi are gaps in opposite directions. An empty
   string suppresses that combination as not worth saying. */
const PHRASE={
 academic:{
  hiHi:"the academic level should meet a child who wants to be pushed",
  hiLo:"academic stretch would need to be sought out rather than being the default setting",
  loHi:"the academic intensity runs higher than this child has asked for",
  loLo:"the academic pace is unlikely to feel like a burden"},
 teacher:{
  hiHi:"teacher relationships are a visible strength, and that is how this child's motivation runs",
  hiLo:"mentorship matters a great deal to this child, and the evidence for it here is thinner",
  loHi:"strong mentoring is available, though this child leans on it less than most",
  loLo:"little here depends on a close teacher relationship, which suits this child"},
 visibility:{
  hiHi:"staff are more likely to spot a child and direct opportunity to them rather than wait to be asked",
  hiLo:"this child tends to wait to be noticed, and opportunity here more often goes to those who ask",
  loHi:"opportunities are actively directed here, though this child would find them anyway",
  loLo:"this child goes looking for opportunities, which is how this environment works"},
 peerAmbition:{
  hiHi:"cohort ambition should carry a child whose effort tracks the group around them",
  hiLo:"effort would depend heavily on which friendship group forms, and ambition varies across the cohort",
  loHi:"peers here are notably driven, more so than this child needs",
  loLo:"cohort ambition varies, which matters less for a child who sets their own pace"},
 peerIntensity:{
  hiHi:"the intensity of the cohort matches what this child can currently sustain",
  hiLo:"this child can handle more intensity than this cohort typically generates",
  loHi:"the cohort runs hotter than this child currently finds comfortable",
  loLo:"the pace is gentler, which matches where this child is right now"},
 structure:{
  hiHi:"clear standards and follow-up are built into how the school runs",
  hiLo:"this child does their best work with checkpoints, and there is more latitude here",
  loHi:"the structure is tighter than this child has asked for",
  loLo:"there is room to move, which is how this child works"},
 autonomy:{
  hiHi:"students get real latitude over how they approach work",
  hiLo:"this child wants room to work their own way, and there is less of it here",
  loHi:"considerable freedom is on offer, more than this child needs",
  loLo:"how work is set is fairly prescribed, which this child is comfortable with"},
 focus:{
  hiHi:"classroom focus is consistent, which this child needs in order to hold their own standard",
  hiLo:"classroom focus varies more than this child appears to need",
  loHi:"classrooms run tightly, beyond what this child requires",
  loLo:"a livelier classroom would not cost this child much"},
 social:{
  hiHi:"there is a great deal going on socially, which is where this child draws energy",
  hiLo:"this child runs on social energy, and the ecosystem here is narrower",
  loHi:"the social and co-curricular scene is busy, more than this child seems to want",
  loLo:"a quieter social environment suits this child"},
 pressure:{
  hiHi:"this child sustains pressure well, and there is plenty of it",
  hiLo:"this child copes under pressure and would meet less of it here",
  loHi:"the pressure profile looks higher than this child currently sustains",
  loLo:"the pressure is moderate, which matches this child"},
 breadth:{
  hiHi:"the breadth of pathways matches a child who wants several rather than one",
  hiLo:"this child wants several pathways, and this school concentrates more narrowly",
  loHi:"a lot is expected across many areas, while this child wants to go deep on one or two",
  loLo:"students are able to concentrate here, which is what this child wants"},
 size:{
  hiHi:"it is one of the larger schools in this set, which is the kind of environment this child said suits them",
  hiLo:"this child leans towards a big school with plenty going on, and this is one of the smaller ones here",
  loHi:"this is one of the largest schools in the set, and this child leans towards somewhere they would be known",
  loLo:"it is one of the smaller schools here, which matches this child's preference for being known"},
 grounded:{
  hiHi:"the social mix is broad, which this child said matters to them",
  hiLo:"this child values a grounded, mixed environment and the intake here is narrower",
  loHi:"the intake is socially broad, more than this child specifically asked for",
  loLo:""},
 music:{hiHi:"music and performing arts are a real strength, and one of this child's top interests",
  hiLo:"music and performing arts matter to this child and are not among this school's stronger areas",
  loHi:"the arts are strong here, though not a priority for this child",loLo:""},
 tech:{hiHi:"technology and making are a real strength, and one of this child's top interests",
  hiLo:"technology and making matter to this child and are not among this school's stronger areas",
  loHi:"technology and design are strong here, though not a priority for this child",loLo:""},
 sport:{hiHi:"sport is a real strength, and one of this child's top interests",
  hiLo:"sport matters to this child and is not among this school's stronger areas",
  loHi:"sport is prominent here, though not a priority for this child",loLo:""},
 enterprise:{hiHi:"leadership and enterprise are a real strength, and one of this child's top interests",
  hiLo:"leadership and enterprise matter to this child and are not among this school's stronger areas",
  loHi:"leadership and enterprise programs are strong here, though not a priority for this child",loLo:""}
};

/* A mismatch has two very different flavours. The child wanting more
   than the school offers is a genuine watch-out. The school offering
   more than the child needs is not a problem — it is just unused
   capacity, and reporting the two together makes good schools look
   risky. They are separated here. */
function alignmentNotes(want,conf,A){
  const suits=[],deficits=[],surplus=[];
  Object.keys(PHRASE).forEach(k=>{
    if(A[k]===null||A[k]===undefined) return;
    const strength=Math.abs(want[k]-50)/50*(conf[k]||0);
    if(strength<0.20) return;                      // child didn't express this, or we didn't measure it
    const childHi=want[k]>=50, schoolHi=A[k]>=50;
    const gap=Math.abs(want[k]-A[k]);
    const text=PHRASE[k][(childHi?"hi":"lo")+(schoolHi?"Hi":"Lo")];
    if(!text) return;
    if(childHi===schoolHi){ if(gap<=26) suits.push({k,text,w:strength*(30-gap)}); }
    else if(gap>=22){
      const row={k,text,w:strength*gap};
      (childHi ? deficits : surplus).push(row);    // child wants more vs school gives more
    }
  });
  const take=(a,n)=>a.sort((x,y)=>y.w-x.w).slice(0,n).map(x=>x.text);
  return { suits:take(suits,4), watch:take(deficits,3), surplus:take(surplus,2) };
}

/* One-line lead describing what kind of environment this is, relative
   to the other twenty. Descriptive, not evaluative. */
function schoolCharacter(A){
  const traits=[];
  if(A.peerIntensity>=72) traits.push("a high-intensity cohort");
  else if(A.peerIntensity<=38) traits.push("a gentler pace");
  if(A.structure!=null && A.structure>=70) traits.push("tight structure");
  else if(A.autonomy>=72) traits.push("unusual latitude for students");
  if(A.breadth>=72) traits.push("a wide co-curricular spread");
  else if(A.breadth<=38) traits.push("a narrower set of pathways");
  if(A.grounded!=null && A.grounded>=72) traits.push("a socially broad intake");
  else if(A.grounded!=null && A.grounded<=32) traits.push("a narrower social intake");
  if(A.visibility!=null && A.visibility>=74) traits.push("staff who actively direct opportunity");
  return traits.slice(0,3);
}

/* ---------- academic streaming ----------
   A whole-school academic figure averages the extension class with the
   General and VET cohorts. For a child who will sit in a selected stream
   that average describes a room they will rarely be in. Melville is the
   clearest case: whole-school academic 76, but its Academic Extension is
   entered by testing, reports and NAPLAN. Hale is the mirror image -
   whole-school 91, but its extension is enrichment open to anyone already
   enrolled, so there is no selected room to join.

   What streaming changes is WHO IS IN THE ROOM, not what the school
   offers. Subject lists, results and pathways are school-level facts and
   are left alone. peerAmbition and peerIntensity are the attributes that
   actually move, so they are the only ones adjusted - and only for a
   child whose own answers say they work beyond their class.

   The size of the lift is set by HOW SELECTIVE ENTRY IS, which is
   recorded for every school, never by an invented guess at how the
   stream performs. Nobody publishes results by stream. */
/* Classified explicitly rather than by pattern-matching prose, because the
   prose does not distinguish the two things that matter. Three regex
   attempts each got it wrong in a different way: one credited John Curtin
   with an academic stream for its Gifted and Talented ARTS program, one
   read "the school is non-selective but offers academic extension" as a
   selected stream, and one used programAccess, which describes entry to
   the SCHOOL rather than to the stream.

   The real distinction is systemic, not a fee story. WA public GATE and
   Academic Extension programs are Department-designated and entered by
   testing. Independent-school "academic extension" is internal placement
   by a teacher, and none of the 22 publishes a selection method for it.
   That difference is real and worth encoding; it is not evidence that
   one sector teaches better. Reason recorded per school so it can be
   argued with. */
const STREAM_TIER = {
  "Perth Modern School":                             [4,"Whole school selective via the statewide Academic Selective Entry Test. The school average IS the stream, so no lift applies."],
  "Willetton Senior High School":                    [3,"Gifted and Talented academic entry, a separate statewide competitive process."],
  "Melville Senior High School — Academic Extension":[2,"Academic Extension selected by school testing, reports and NAPLAN - the only school that publishes its method."],
  "Applecross Senior High School — Academic Extension":[2,"Department Academic Extension, internal selection."],
  "Shenton College — HPL / GATE":                    [2,"Gifted and Talented Education plus High Performance Learning."],
  "Fremantle College":                               [2,"Gifted and Talented and Academic Excellence inside a comprehensive."],
  "Rossmoyne Senior High School":                    [2,"Specialist Mathematics is academic and selective. Its GATE Languages and Classical Music are other domains and do not count here."],
  "John Curtin College of the Arts":                 [1,"Its Gifted and Talented programs are ARTS, not academic. Counted for arts elsewhere, not for academic streaming."],
  "Christ Church Grammar School":                    [1,"Academic extension classes exist but the school is non-selective and publishes no selection method."],
  "Carey Baptist College — Harrisdale":              [1,"GATE Music and STEM are selective; general academic enrichment is not."],
  "CBC Fremantle":                                   [1,"Academic Excellence is performance-based continuation rather than selected entry."],
  "Corpus Christi College":                          [1,"Academic Excellence inside an explicitly non-selective school."],
  "Iona Presentation College":                       [1,"Academic Excellence inside an explicitly non-selective school."],
  "Aquinas College":                                 [1,"Non-selective; academic extension and scholarships only."],
  "Seton Catholic College":                          [1,"Accelerated classes published, no selection method stated."],
  "Kennedy Baptist College":                         [1,"KEEP is an internal extension pathway, not selected entry."],
  "Hale School":                                     [1,"Enrichment open to enrolled students; no selected academic stream found."],
  "Scotch College":                                  [1,"Enrichment and IB breadth; no selected academic stream found."],
  "All Saints’ College":                             [1,"Personalisation and acceleration, open to enrolled students."],
  "Santa Maria College":                             [1,"Academic enrichment and extension electives, not a selected stream."],
  "John XXIII College":                              [1,"Magis enrichment sits within normal admission."],
  "Wesley College":                                  [0,"No selected or named academic stream located."]
};
function streamTier(schoolName){ return (STREAM_TIER[schoolName]||[0])[0]; }
function streamReason(schoolName){ return (STREAM_TIER[schoolName]||[0,""])[1]; }

const STREAM_LIFT = [0, 0, 0.45, 0.70, 0];   // by tier; tier 4 needs none,
                                             // its average already IS the stream


/* ---------- selected programs in the OTHER domains ----------
   The academic case generalises. A child auditioned into Rossmoyne's
   Specialist Classical Music sits with auditioned players, not with the
   school's general music cohort - exactly the same argument as an
   Academic Extension class, and exactly the same limit on what we can
   claim. Nobody publishes results by program either, so the lift is
   again set by whether entry is SELECTED, never by a guess at how the
   program performs.

   Detected from program data we already hold rather than from prose:
   music.selective, arts.artSelective, and a named specialist sport
   program with a trial. */
function selectedProgram(schoolName, domain){
  const p=(typeof PROGRAMS!=="undefined") ? PROGRAMS[schoolName] : null;
  const r=(typeof RESEARCH!=="undefined") ? RESEARCH[schoolName] : null;
  if(domain==="music")  return !!(p && p.music && p.music.selective===2);
  if(domain==="art")    return !!(p && p.arts  && p.arts.artSelective===2);
  if(domain==="sport"){
    const sp=(r&&r.sport&&r.sport.specialistProgram)||"";
    /* A named program is not enough - it has to select. */
    return /trial|audition|application|selection|endorsed|academy/i.test(sp);
  }
  return false;
}

/* Which attribute a selected program in this domain lifts. Same principle
   as the academic case: the program changes WHO IS IN THE ROOM, so the
   peer attributes move and the school-level provision figures do not. */
const DOMAIN_PEERS = {music:["peerAmbition"], art:["peerAmbition"],
                      sport:["peerAmbition","peerIntensity"]};
const PROGRAM_LIFT = 0.40;   // below the academic tier-2 lift of 0.45,
                             // because a co-curricular program shapes less
                             // of a child's week than a streamed class does

/* ---------- how they read, and where they want it to happen ----------
   Two children with identical ability belong in different schools if one
   reads notation and the other plays by ear. Notation opens ATAR Music,
   orchestra, concert band and choral work. Playing by ear or from chords
   points at contemporary, guitar, jazz and production - not because it is
   lesser, but because those programs are built to work that way.

   And a child whose music lives OUTSIDE school needs far less from the
   school's program than one who wants to be in the ensembles. Serious and
   school-dependent are different things, and we used to conflate them. */
const READS_TO_SUBS = {
  notation:["orchestral","band","choral","jazz"],
  chords:  ["contemporary","guitar","band"],
  ear:     ["contemporary","guitar","production","jazz"],
  screen:  ["production","contemporary"],
  both:    []
};
function musicAnswer(responses, prompt){
  let out=null;
  childQuestions.forEach((q,i)=>{
    if(q.domain!=="music" || q.type!=="choice") return;
    if(!q.prompt.toLowerCase().includes(prompt)) return;
    const r=responses[i];
    if(r!==undefined && q.options[r]) out=q.options[r].id;
  });
  return out;
}
/* Which of the sport "where do you want it to happen" options they chose. */
function sportIntent(responses){
  let out=null;
  childQuestions.forEach((q,i)=>{
    if(q.domain!=="sport" || q.type!=="choice") return;
    if(!q.prompt.toLowerCase().includes("where do you want")) return;
    const r=responses[i];
    if(r!==undefined && q.options[r]) out=q.options[r].id;
  });
  return out;
}

function musicProfile(responses){
  const reads=musicAnswer(responses,"in front of you");
  const where=musicAnswer(responses,"where do you want your music");
  return {reads, where,
          leans: READS_TO_SUBS[reads]||[],
          schoolDependent: where==="schoolBig"||where==="schoolSub"||where==="more",
          selfSufficient:  where==="outside"};
}

/* ---------- sport: breadth and depth are different products ----------
   Willetton fields 17 sports and has one standout. John Curtin fields 2
   and has a specialist football program. Blended into a single number
   they land within a few points of each other, which serves neither
   child well.

   A kid who just likes playing wants BREADTH - something on every
   season, teams that will have them, no trials. A kid competing outside
   school wants DEPTH - their sport, taken seriously, with a coach who
   knows it. Same attribute, opposite readings.

   So we re-weight rather than adding a question. The child has already
   told us which they are: talentSport, and the "where do you want your
   sport to happen" answer. Nothing new to ask. */
function sportShape(schoolName){
  const p=(typeof PROGRAMS!=="undefined") ? PROGRAMS[schoolName] : null;
  const sp=(p&&p.sport)||{};
  const keys=["afl","cricket","netball","basketball","soccer","hockey","rugby","tennis",
              "volleyball","swimming","athletics","crosscountry","rowing","waterpolo","golf","sailing","surfing"];
  const v=keys.map(k=>sp[k]).filter(x=>x!=null);
  if(!v.length) return null;
  return {breadth:v.length/17*100,
          depth:v.reduce((a,b)=>a+b,0)/v.length*50,
          standouts:v.filter(x=>x===2).length};
}

/* ---------- match ---------- */
function schoolMatch(s,school,fam){
  const {v:want,c:conf}=desiredSchoolVector(s);
  const A={}; Object.keys(school.attrs).forEach(k=>A[k]=evAttr(school,k));
  /* If this child works beyond their class AND this school runs a stream
     they would be selected into, the peer group they meet is not the
     school average. Lift by selectivity of entry only. */
  /* ---------- steer the interest score by the child's own sub-domain ----------
     The headline music attribute blends all eight sub-domains, so it cannot
     tell a classical stronghold from a contemporary one - measured, its
     correlation with contemporary strength is 0.03. That pointed a
     production-first child at Rossmoyne, which has contemporary 1 and
     production 0.

     FIRST ATTEMPT WAS WRONG and is worth recording. It blended the school's
     figure toward the sub-domain value on every school. But 13 of 22 sit at
     production 1, so most schools were being pulled toward the middle and
     the steer washed out - Fremantle College, the one school with a
     confirmed production pathway, moved three points.

     Only the EXTREMES carry information. A confirmed strength is a real
     signal and a searched-and-absent is a real signal; "it exists" is not.
     So we move on 2 and 0 and leave 1 alone, and a near neighbour at
     strength 2 softens an absence rather than cancelling it. */
  /* A child who plays by ear gets steered toward the sub-domains that
     work that way, even if they never named one. And a child whose music
     lives outside school has the whole music weight damped, because the
     school's program matters less to them than to an ensemble player. */
  /* Re-read the sport attribute as breadth or depth depending on which
     this child actually needs. A casual player is served by a school with
     something on every season; a serious one by a school that takes their
     sport seriously. */
  const shape=sportShape(school.name);
  if(shape && A.sport!=null){
    const serious=talentIn(s,"sport");
    const where=(s&&s.__sport)||null;
    const casual = where==="casual" || (!serious && where!=="outside");
    if(serious || where==="outside"){
      A.sport=A.sport*0.35 + (shape.depth+Math.min(shape.standouts,4)*6)*0.65;
    } else if(casual){
      A.sport=A.sport*0.35 + shape.breadth*0.65;
    }
  }

  const mp=(s && s.__music) || null;
  if(mp && A.music!=null){
    if(mp.leans.length){
      const best=Math.max(...mp.leans.map(k=>programState(school.name,"music",k)).map(v=>v==null?-1:v));
      if(best===2) A.music=A.music+(94-A.music)*(talentIn(s,"music")?0.45:0.28);
      else if(best===0) A.music=A.music-(A.music-6)*(talentIn(s,"music")?0.40:0.22);
    }
    if(mp.selfSufficient) A.music=A.music*0.45+50*0.55;   // school program matters less
  }

  const subs=(s && s.__subs) || null;
  if(subs){
    [["music",subs.music],["sport",subs.sport]].forEach(([dom,key])=>{
      if(!key || A[dom]==null) return;
      const exact=programState(school.name,dom,key);
      if(exact!==2 && exact!==0) return;                 // 1 and unknown say nothing
      const serious=talentIn(s,dom);
      if(exact===2){
        A[dom]=A[dom]+(94-A[dom])*(serious?0.60:0.35);
        return;
      }
      /* Absent. Check the neighbourhood before marking it down hard. */
      const near=((SUB_NEIGHBOURS[dom]||{})[key]||[])
                   .map(k=>programState(school.name,dom,k)).filter(v=>v===2).length;
      const cut=(serious?0.55:0.30)*(near?0.45:1);       // a strong neighbour halves the cut
      A[dom]=A[dom]-(A[dom]-6)*cut;
    });
  }

  const tier=streamTier(school.name);
  const lifts={};
  if(talentIn(s,"academic")){
    const L=STREAM_LIFT[tier]||0;
    if(L>0) ["peerAmbition","peerIntensity"].forEach(k=>lifts[k]=Math.max(lifts[k]||0,L));
  }
  /* Same logic, other domains. A child only gets the benefit of a selected
     program in a domain they are actually working above school level in. */
  ["music","art","sport"].forEach(dom=>{
    if(!talentIn(s, dom==="art"?"art":dom)) return;
    if(!selectedProgram(school.name,dom)) return;
    (DOMAIN_PEERS[dom]||[]).forEach(k=>lifts[k]=Math.max(lifts[k]||0,PROGRAM_LIFT));
  });
  Object.entries(lifts).forEach(([k,L])=>{
    if(A[k]==null) return;
    A[k]=A[k]+(94-A[k])*L;
  });
  const evConf=EV_CONF[school.evidenceLevel]||0.7;

  /* --- natural fit: weight by how strongly the child expressed the
         dimension AND how well we actually measured it --- */
  const keys=Object.keys(want).filter(k=>A[k]!==null&&A[k]!==undefined);
  let acc=0,totW=0,measSum=0;
  keys.forEach(k=>{
    const strength=Math.abs(want[k]-50)/50;
    const c=conf[k]||0;
    const isInterest=["music","tech","sport","enterprise"].includes(k);
    const w=(0.4+1.6*strength*c)*(isInterest?INTEREST_DAMP:1);
    /* evTerm blends an unverifiable culture claim toward what an average
       school would score, so a prospectus cannot buy a strong match. */
    const term=evTerm(school,k,want[k],100-Math.abs(want[k]-A[k]));
    acc+=term*w; totW+=w; measSum+=c;
  });
  const natural=totW>0?acc/totW:50;
  const avgMeas=measSum/keys.length;

  /* --- growth opportunity: capacity in this child's real interests,
         plus developmental alignment on the dimensions that stretch --- */
  const interestDims=["academic","music","tech","sport","enterprise"];
  const top=interestDims.map(k=>({k,val:want[k]})).sort((a,b)=>b.val-a.val).slice(0,3);
  const capacity=top.reduce((sum,t)=>sum+A[t.k],0)/top.length;

  const dev=[];
  /* Null-safe. These read attributes directly rather than through the
     filtered key list, so a school missing one of them used to produce
     NaN for the whole growth score — and a NaN score silently sorts to
     the bottom of the list rather than erroring. Any attribute we cannot
     evidence is simply left out of the average instead. */
  const push=(cond,hit,wantK,attrK)=>{
    const a=A[attrK], wv=want[wantK];
    /* Guard BOTH sides. The attribute can be missing because we could not
       evidence it, and the want key can be missing because the dimension
       no longer scores at all. Either way the term is dropped rather than
       silently poisoning the average with NaN. */
    if(a===null||a===undefined||wv===null||wv===undefined) return;
    dev.push(cond ? a : 100-Math.abs(wv-a));
  };
  push(S(s,"peerInfluence")>65,1,"peerAmbition","peerAmbition");
  push(S(s,"focus")>65,1,"focus","focus");
  const wantIntensity=S(s,"resilience")<45?68:S(s,"resilience")<70?78:90;
  if(A.peerIntensity!=null) dev.push(100-Math.abs(wantIntensity-A.peerIntensity));
  push(S(s,"breadth")>65,1,"breadth","breadth");
  /* visibility and teacher used to contribute here too. They no longer
     score anywhere — see the note at the top of this file. */
  /* Interests are deliberately the smaller share. A ten-year-old's
     hobbies change; culture, teaching style and the opportunities a
     school actually creates do not, and they matter for six years.
     Interest alignment is a tiebreaker, not a driver. */
  const opportunity=capacity*INTEREST_SHARE+(dev.reduce((a,b)=>a+b,0)/dev.length)*(1-INTEREST_SHARE);

  /* --- risk: only from dimensions we measured well enough --- */
  let risk=4; const risks=[];
  RISK_RULES.forEach(rule=>{
    const c=Math.min(...rule.dims.map(d=>CF(s,d)));
    if(c<RISK_GATE) return;                      // not measured well enough to claim
    if(!rule.test(s,A,school)) return;   // school passed so a rule can read its research record
    risk+=rule.pts*(0.6+0.4*c);
    risks.push(rule.msg);
  });
  const pRisk=peerRisk(s,school.name,fam,fam&&fam.socialUntested);
  if(pRisk){ risk+=10; risks.push(pRisk); }
  risk=clamp(Math.round(risk),1,99);

  /* --- hard constraints: filters, never score penalties --- */
  const blocks=[],softs=[];
  if(fam){
    const g=school.gender||(school.coed?"coed":"boys");
    if(fam.eligibility==="boy" && g==="girls") blocks.push("Not open to boys.");
    if(fam.eligibility==="girl" && g==="boys") blocks.push("Not open to girls.");
    if(fam.coed==="coed" && g!=="coed") blocks.push("You asked for co-ed only.");
    if(fam.coed==="single" && g==="coed") blocks.push("You asked for single-sex only.");
    if(fam.coed==="leanCoed" && g!=="coed") softs.push("You lean co-ed; this is single-sex.");
    if(fam.coed==="leanSingle" && g==="coed") softs.push("You lean single-sex; this is co-ed.");
    if(fam.budget!=="any"){
      const cap=+fam.budget;
      if(school.fee>cap) blocks.push("Annual fees of about $"+school.fee.toLocaleString()+" are above the range you set.");
    }
    if(fam.faith==="none" && school.religion!=="secular") blocks.push("This is a faith-based school.");
    if(fam.faith==="light" && school.religion==="strong") softs.push("Religious identity is more prominent here than you preferred.");
    if(fam.faith==="want" && school.religion==="secular") softs.push("This is a secular school; you indicated you wanted a faith community.");
    if(fam.travel!=="any" && fam.suburb){
      const km=distanceFrom(fam.suburb,school.name);
      if(km!==null && km>+fam.travel)
        blocks.push("About "+km+" km away, beyond the "+fam.travel+" km you set.");
    }
  }

  /* --- composite, with an honesty band --- */
  const base=natural*0.58+opportunity*0.42;
  const score=clamp(Math.round(base-risk*0.18),1,99);
  /* Evidence now drives the band harder than it used to. A Low-evidence
     school genuinely could be anywhere on culture, and the number shown
     should admit that rather than implying a precision we don't have. */
  let band=Math.round((1-evConf)*26+(1-avgMeas)*9);
  if(fam && fam.socialUntested) band+=4;   // we know less than the scores imply

  const notes=alignmentNotes(want,conf,A);

  return {
    score, band,
    natural:clamp(Math.round(natural),1,99),
    opportunity:clamp(Math.round(opportunity),1,99),
    risk, riskLabel:riskLabel(risk), risks,
    eligible:blocks.length===0, blocks, softs,
    evConf, avgMeas,
    suits:notes.suits, watch:notes.watch, surplus:notes.surplus,
    peers:peerNote(school.name,fam),
    character:schoolCharacter(A)
  };
}

/* Sentence-level summary for the shortlist. Built from the same
   alignment data as the card, so the two can never disagree. */
function schoolBlurb(school,m){
  const cap=t=>t.charAt(0).toUpperCase()+t.slice(1);
  const parts=[];
  if(m.character.length) parts.push("Relative to the other twenty, this is a school with "+listJoin(m.character)+".");
  if(m.suits.length===0) parts.push("Nothing in this child's profile points strongly toward this environment.");
  else if(m.suits.length===1) parts.push(cap(m.suits[0])+".");
  else parts.push("It lines up on two things in particular: "+m.suits[0]+"; and "+m.suits[1]+".");
  if(m.watch.length) parts.push("The thing to check is that "+m.watch[0]+
    (m.watch.length>1?", and that "+m.watch[1]:"")+".");
  else if(m.surplus.length) parts.push("No real gap showed up. There is more on offer here than this child specifically needs — "+m.surplus[0]+" — which costs nothing, but is worth knowing you would be paying for it in fees or in time.");
  else parts.push("No clear mismatch surfaced, though thin evidence is not the same as a good sign — read the unknowns before treating that as reassurance.");
  return parts.join(" ");
}
function listJoin(a){
  if(a.length===1) return a[0];
  if(a.length===2) return a[0]+" and "+a[1];
  return a.slice(0,-1).join(", ")+" and "+a[a.length-1];
}
function riskLabel(n){ return n<25?"Low":n<48?"Moderate":n<70?"High":"Very high"; }

/* ---------- tour questions from unscored constructs ---------- */
const PROFILE_TOURS=[
  {d:"helpSeeking", dir:"low",  q:"How would you know my child was quietly struggling, before it showed up in a report?"},
  {d:"belonging",   dir:"high", q:"How are tutor or house groups formed, and what happens if a child doesn't click with theirs?"},
  {d:"schoolSize",  dir:"low",  q:"How many students are in Year 7, and how many adults would know my child by name in term one?"},
  {d:"changeTolerance",dir:"low",q:"What proportion of your Year 7 intake arrives from one or two feeder schools?"},
  {d:"statusTolerance",dir:"low",q:"Which kinds of achievement actually get celebrated here, and how visibly?"},
  {d:"statusTolerance",dir:"high",q:"What opportunities exist for a child who wants to compete and be recognised?"},
  {d:"conflictRepair",dir:"low", q:"How does the school handle a friendship breakdown that hasn't resolved on its own?"},
  {d:"empathy",     dir:"high", q:"What service, mentoring or peer-support roles are open to students from Year 7?"},
  {d:"spaceNeed",   dir:"high", q:"What is the minimum weekly co-curricular commitment, and how much of the week is unstructured?"},
  {d:"formality",   dir:"high", q:"How much of school life is formal — assembly, ceremony, uniform standards, house tradition?"},
  {d:"formality",   dir:"low",  q:"How much flexibility do students have in uniform, routine and how they approach work?"},
  {d:"cohortStability",dir:"high",q:"Do students stay with one class group across subjects, or move between groups?"},
  {d:"outdoor",     dir:"high", q:"What outdoor education runs in Years 7 to 10, and how much of it is compulsory?"},
  {d:"outdoor",     dir:"low",  q:"How much outdoor or camp time is compulsory, and what are the alternatives?"},
  {d:"effortSelfdir",dir:"low", q:"How quickly would I hear from the school if work stopped being handed in?"},
  {d:"mentorStyle", dir:"high", q:"Which staff member would hold an ongoing relationship with my child across Years 7 to 10?"},
  {d:"mentorStyle", dir:"low",  q:"How are subject specialists matched to students who want to go deeper than the class?"}
];

function profileTours(s){
  const out=[];
  PROFILE_TOURS.forEach(t=>{
    if(CF(s,t.d)<0.4) return;                    // don't ask on the basis of one item
    const v=S(s,t.d);
    if(t.dir==="low" && v<=42) out.push(t.q);
    if(t.dir==="high"&& v>=58) out.push(t.q);
  });
  return out;
}

/* Interests the child cares about that the school dataset cannot speak to. */
function unmappedInterests(answers){
  const picked=new Set();
  [0,2].forEach(qi=>{
    const q=childQuestions[qi], r=answers[qi];
    if(Array.isArray(r)) r.forEach(i=>{ if(q.options[i].unmapped) picked.add(q.options[i].unmapped); });
  });
  return [...picked];
}
