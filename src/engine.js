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
const RISK_GATE = 0.5;             // min measurement confidence to fire a risk

const clamp=(n,a=0,b=100)=>Math.max(a,Math.min(b,n));
const el=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

/* ---------- per-question bounds and values ---------- */
function optW(o,dim){ return (o.w&&o.w[dim])||0; }

function bounds(q,dim){
  if(q.type==="bestworst"){
    let lo=Infinity,hi=-Infinity;
    q.items.forEach((m,mi)=>q.items.forEach((l,li)=>{
      if(mi===li)return;
      const v=2*optW(m,dim)-optW(l,dim);
      if(v<lo)lo=v; if(v>hi)hi=v;
    }));
    return [lo,hi];
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
  if(q.type==="bestworst") return 2*optW(q.items[r.most],dim)-optW(q.items[r.least],dim);
  if(q.type==="multi") return (r||[]).reduce((sum,i)=>sum+optW(q.options[i],dim),0);
  return optW(q.options[r],dim);
}

function answered(q,r){
  if(r===undefined||r===null) return false;
  if(q.type==="bestworst") return r.most!==undefined && r.least!==undefined && r.most!==r.least;
  if(q.type==="multi") return Array.isArray(r) && (q.pick===0 ? true : r.length===q.pick);
  if(q.type==="rank2") return Array.isArray(r) && r.length===2;
  return true;
}

/* ---------- scoring with confidence ---------- */
function scoreQuestions(qs,responses){
  const out={};
  Object.keys(DIMS).forEach(dim=>{
    let raw=0,lo=0,hi=0,n=0;
    qs.forEach((q,i)=>{
      if(!q.options && !q.items) return;
      const r=responses[i];
      if(!answered(q,r)) return;
      const b=bounds(q,dim);
      if(b[0]===b[1]) return;                 // dim not present in this item
      raw+=value(q,r,dim); lo+=b[0]; hi+=b[1]; n++;
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
      teacher:       S(s,"teacher"),
      visibility:    S(s,"visibility"),
      peerAmbition:  mix("peerDrive","peerInfluence",0.62),
      peerIntensity: mix("resilience","pressure",0.65),
      structure:     S(s,"structure"),
      autonomy:      S(s,"autonomy"),
      focus:         S(s,"focus"),
      social:        S(s,"social"),
      pressure:      S(s,"pressure"),
      music:         S(s,"music"),
      tech:          S(s,"tech"),
      sport:         S(s,"sport"),
      enterprise:    S(s,"enterprise"),
      breadth:       S(s,"breadth"),
      grounded:      S(s,"grounded")
    },
    c:{
      academic:cmin("academic","academicInterest"), teacher:CF(s,"teacher"), visibility:CF(s,"visibility"),
      peerAmbition:cmin("peerDrive","peerInfluence"), peerIntensity:cmin("resilience","pressure"),
      structure:CF(s,"structure"), autonomy:CF(s,"autonomy"), focus:CF(s,"focus"),
      social:CF(s,"social"), pressure:CF(s,"pressure"), music:CF(s,"music"), tech:CF(s,"tech"),
      sport:CF(s,"sport"), enterprise:CF(s,"enterprise"), breadth:CF(s,"breadth"), grounded:CF(s,"grounded")
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

/* An attribute from a weaker-evidence school is pulled back toward
   the middle of the field. We do not claim to know it as precisely. */
function evAttr(school,key){
  const conf=EV_CONF[school.evidenceLevel]||0.7;
  const raw=school.attrs[key];
  if(raw===undefined) return null;
  const rel=attrRank()[key](raw);
  return 50+(rel-50)*(0.65+0.35*conf);
}

/* ---------- risk triggers ---------- */
const RISK_RULES=[
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
  {dims:["social"], test:(s,a)=>S(s,"social")>72 && a.social<68, pts:9,
   msg:"The social and co-curricular ecosystem may feel narrower than this child wants."},
  {dims:["academic","academicInterest"], test:(s,a)=>S(s,"academic")>72 && a.academic<68, pts:14,
   msg:"Academic stretch may need to be sought out rather than being the default setting."},
  {dims:["grounded"], test:(s,a)=>S(s,"grounded")>70 && a.grounded<65, pts:12,
   msg:"The social mix here is narrower than this child's stated preference for a grounded environment."},
  /* Symmetric risks — v3 only ever flagged under-provision, never over-provision. */
  {dims:["autonomy"], test:(s,a)=>S(s,"autonomy")>70 && a.structure>78 && a.autonomy<50, pts:16,
   msg:"This is a tightly structured environment and this child works best with room to move. Over-structure is a real disengagement path, not a safe default."},
  {dims:["spaceNeed"], test:(s,a)=>S(s,"spaceNeed")>66 && a.breadth>82, pts:14,
   msg:"Commitment load here is high, and this child needs genuine downtime. Ask what is actually compulsory."},
  {dims:["statusTolerance"], test:(s,a)=>S(s,"statusTolerance")<36 && a.grounded<45, pts:15,
   msg:"Standing and reputation are more visible here than this child appears comfortable with."},
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
  if(A.structure>=70) traits.push("tight structure");
  else if(A.autonomy>=72) traits.push("unusual latitude for students");
  if(A.breadth>=72) traits.push("a wide co-curricular spread");
  else if(A.breadth<=38) traits.push("a narrower set of pathways");
  if(A.grounded>=72) traits.push("a socially broad intake");
  else if(A.grounded<=32) traits.push("a narrower social intake");
  if(A.visibility>=74) traits.push("staff who actively direct opportunity");
  return traits.slice(0,3);
}

/* ---------- match ---------- */
function schoolMatch(s,school,fam){
  const {v:want,c:conf}=desiredSchoolVector(s);
  const A={}; Object.keys(school.attrs).forEach(k=>A[k]=evAttr(school,k));
  const evConf=EV_CONF[school.evidenceLevel]||0.7;

  /* --- natural fit: weight by how strongly the child expressed the
         dimension AND how well we actually measured it --- */
  const keys=Object.keys(want).filter(k=>A[k]!==null&&A[k]!==undefined);
  let acc=0,totW=0,measSum=0;
  keys.forEach(k=>{
    const strength=Math.abs(want[k]-50)/50;
    const c=conf[k]||0;
    const w=0.4+1.6*strength*c;
    acc+=(100-Math.abs(want[k]-A[k]))*w; totW+=w; measSum+=c;
  });
  const natural=totW>0?acc/totW:50;
  const avgMeas=measSum/keys.length;

  /* --- growth opportunity: capacity in this child's real interests,
         plus developmental alignment on the dimensions that stretch --- */
  const interestDims=["academic","music","tech","sport","enterprise"];
  const top=interestDims.map(k=>({k,val:want[k]})).sort((a,b)=>b.val-a.val).slice(0,3);
  const capacity=top.reduce((sum,t)=>sum+A[t.k],0)/top.length;

  const dev=[];
  dev.push(S(s,"peerInfluence")>65 ? A.peerAmbition : 100-Math.abs(want.peerAmbition-A.peerAmbition));
  dev.push(S(s,"visibility")>65 ? A.visibility : 100-Math.abs(want.visibility-A.visibility));
  dev.push(S(s,"focus")>65 ? A.focus : 100-Math.abs(want.focus-A.focus));
  const wantIntensity=S(s,"resilience")<45?68:S(s,"resilience")<70?78:90;
  dev.push(100-Math.abs(wantIntensity-A.peerIntensity));
  dev.push(S(s,"teacher")>65 ? A.teacher : 100-Math.abs(want.teacher-A.teacher));
  dev.push(S(s,"breadth")>65 ? A.breadth : 100-Math.abs(want.breadth-A.breadth));
  const opportunity=capacity*0.55+(dev.reduce((a,b)=>a+b,0)/dev.length)*0.45;

  /* --- risk: only from dimensions we measured well enough --- */
  let risk=4; const risks=[];
  RISK_RULES.forEach(rule=>{
    const c=Math.min(...rule.dims.map(d=>CF(s,d)));
    if(c<RISK_GATE) return;                      // not measured well enough to claim
    if(!rule.test(s,A)) return;
    risk+=rule.pts*(0.6+0.4*c);
    risks.push(rule.msg);
  });
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
    if(fam.travel==="local" && school.travel!=="local") softs.push("Further from home than you preferred.");
    if(fam.travel==="moderate" && school.travel==="metro") softs.push("Likely a longer daily trip than you preferred.");
  }

  /* --- composite, with an honesty band --- */
  const base=natural*0.58+opportunity*0.42;
  const score=clamp(Math.round(base-risk*0.18),1,99);
  const band=Math.round((1-evConf)*14+(1-avgMeas)*9);

  const notes=alignmentNotes(want,conf,A);

  return {
    score, band,
    natural:clamp(Math.round(natural),1,99),
    opportunity:clamp(Math.round(opportunity),1,99),
    risk, riskLabel:riskLabel(risk), risks,
    eligible:blocks.length===0, blocks, softs,
    evConf, avgMeas,
    suits:notes.suits, watch:notes.watch, surplus:notes.surplus,
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
