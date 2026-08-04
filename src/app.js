/* ============================================================
   SchoolFit Quest v4 — flow and rendering
   ============================================================ */

let ci=0, answers={}, pi=0, pAnswers={}, order={}, pOrder={};
let childScores=null, parentScores=null, famConfig={}, tokens=2, useParent=false;

function showOnly(id){
  ["intro","about","game","results","parentGame"].forEach(x=>el(x).classList.toggle("hidden",x!==id));
  window.scrollTo({top:0,behavior:"smooth"});
}

/* Option order is randomised once per question and remembered, so a
   child moving back and forth doesn't see the options jump around. */
function orderFor(store,key,len){
  if(!store[key]){
    const a=[...Array(len).keys()];
    for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
    store[key]=a;
  }
  return store[key];
}

/* ---------------- child game ---------------- */
function startGame(){ ci=0; answers={}; order={}; tokens=2; showOnly("game"); renderQ(); }

const STAGE_NAME={0:"What you're into",1:"Quick choices",2:"What you'd actually do",3:"What matters most"};

/* Swap {TOP} for the child's own number-one interest, so the academic
   clash reads "and your music has something big on" rather than the
   vaguer "the thing you care most about". */
function fillTokens(text){
  if(!text.includes("{TOP}")) return text;
  const rank=interestRanking(answers), tiles=pickedTiles(answers);
  const id=(rank && rank.order[0]) || tiles[0];
  const tile=TILES.find(t=>t.id===id);
  const name=tile ? tile.t.replace(/^(Making|Being|Looking after|Organising|Writing|Drawing|Acting|Building or fixing|Helping or coaching)\s+/i,"")
                          .replace(/,.*$/,"").toLowerCase()
                  : "the thing you care most about";
  return text.replace("{TOP}", tile ? "your "+name : name);
}

/* How many questions this particular child will actually see. The bank
   is larger than the journey, because sub-domain and clash items only
   appear when they are relevant. */
function liveQuestions(){ return childQuestions.filter(q=>isActive(q,answers)); }

function renderQ(){
  const q=childQuestions[ci], r=answers[ci];
  const live=liveQuestions(), pos=live.indexOf(q)+1;
  el("roundLabel").textContent="Part "+(q.stage+1)+" · "+STAGE_NAME[q.stage];
  /* The sub-domain, talent and clash questions only switch on once the
     child has picked their three interest tiles in Stage 0. So the total
     is 48 on the opening screens and jumps to 51-55 afterwards — the
     counter used to CLIMB while a child was working, which reads as the
     quiz getting longer the more you do. For a ten-year-old that is the
     worst possible signal. Show no total until the picks have settled. */
  if(q.stage===0){
    el("progressText").textContent="Question "+pos;
    el("progressBar").style.width=(pos/live.length*100)+"%";
  } else {
    el("progressText").textContent=pos+" of "+live.length;
    el("progressBar").style.width=(pos/live.length*100)+"%";
  }

  let h=`<div class="q-kicker">${q.type==="bestworst"?"Pick one MOST and one LEAST":q.type==="grid"?"Rate each one":q.type==="multi"?(q.pick?("Pick "+q.pick):"Pick any number"):"Choose what feels most true"}</div>`;
  h+=`<h2 class="q-title">${esc(fillTokens(q.prompt))}</h2>`;
  if(q.hint) h+=`<p class="note">${esc(q.hint)}</p>`;

  if(q.type==="bestworst"){
    h+=`<div class="bw-head"><span>Most</span><span>Least</span><span></span></div><div class="bw-list">`;
    orderFor(order,ci,q.items.length).forEach(idx=>{
      const it=q.items[idx], sel=r||{};
      h+=`<div class="bw-row${sel.most===idx?" is-most":""}${sel.least===idx?" is-least":""}">
        <button class="bw-btn most${sel.most===idx?" on":""}" data-most="${idx}" aria-label="Most: ${esc(it.text)}"></button>
        <button class="bw-btn least${sel.least===idx?" on":""}" data-least="${idx}" aria-label="Least: ${esc(it.text)}"></button>
        <span class="bw-text">${esc(it.text)}</span></div>`;
    });
    h+=`</div>`;
  } else if(q.type==="multi"){
    const sel=r||[];
    h+=`<div class="tile-grid">`;
    orderFor(order,ci,q.options.length).forEach(idx=>{
      h+=`<button class="tile${sel.includes(idx)?" on":""}" data-tile="${idx}">${esc(q.options[idx].text)}</button>`;
    });
    h+=`</div>`;
    if(q.pick) h+=`<p class="note" id="pickCount">${sel.length} of ${q.pick} chosen</p>`;
  } else if(q.type==="grid"){
    const sel=r||{};
    h+=`<div class="grid-q">`;
    q.rows.forEach(row=>{
      h+=`<div class="grid-row"><span class="grid-label">${esc(row.t)}</span><div class="grid-scale">`;
      for(let v=1;v<=5;v++)
        h+=`<button class="dot${sel[row.id]===v?" on":""}" data-grid="${row.id}" data-val="${v}" aria-label="${esc(row.t)}: ${v} of 5"></button>`;
      h+=`</div></div>`;
    });
    h+=`<div class="grid-legend"><span>${esc(q.scale[0])}</span><span>${esc(q.scale[4])}</span></div></div>`;
    const done=q.rows.filter(x=>sel[x.id]!==undefined).length;
    h+=`<p class="note">${done} of ${q.rows.length} rated</p>`;
  } else if(q.type==="clash"){
    const tiles=pickedTiles(answers);
    h+=`<div class="opt-list">`;
    [0,1].forEach(side=>{
      const tile=TILES.find(t=>t.id===tiles[q.pair[side]]);
      if(!tile) return;
      h+=`<button class="opt clash${r===side?" on":""}" data-opt="${side}">${esc(tile.t)}</button>`;
    });
    h+=`</div>`;
  } else {
    h+=`<div class="opt-list">`;
    orderFor(order,ci,q.options.length).forEach(idx=>{
      h+=`<button class="opt${r===idx?" on":""}" data-opt="${idx}">${esc(q.options[idx].text)}</button>`;
    });
    h+=`</div>`;
    if(q.stage===1&&tokens>0&&r!=="skip")
      h+=`<button class="btn btn-ghost btn-sm" id="tokenBtn">Genuinely can't choose (${tokens} left)</button>`;
    if(r==="skip") h+=`<p class="note">Marked as “can't choose”.</p>`;
  }
  el("questionCard").innerHTML=h;

  el("questionCard").querySelectorAll("[data-opt]").forEach(b=>b.onclick=()=>{
    answers[ci]=+b.dataset.opt; renderQ(); setTimeout(next,140);
  });
  el("questionCard").querySelectorAll("[data-tile]").forEach(b=>b.onclick=()=>{
    const i=+b.dataset.tile; const cur=answers[ci]||[];
    const at=cur.indexOf(i);
    if(at>=0) cur.splice(at,1);
    else { if(q.pick && cur.length>=q.pick) cur.shift(); cur.push(i); }
    answers[ci]=cur; renderQ();
  });
  el("questionCard").querySelectorAll("[data-grid]").forEach(b=>b.onclick=()=>{
    const cur=answers[ci]||{};
    cur[b.dataset.grid]=+b.dataset.val;
    answers[ci]=cur; renderQ();
  });
  el("questionCard").querySelectorAll("[data-most]").forEach(b=>b.onclick=()=>{
    const i=+b.dataset.most, cur=answers[ci]||{};
    cur.most = cur.most===i?undefined:i;
    if(cur.least===i) cur.least=undefined;
    answers[ci]=cur; renderQ();
  });
  el("questionCard").querySelectorAll("[data-least]").forEach(b=>b.onclick=()=>{
    const i=+b.dataset.least, cur=answers[ci]||{};
    cur.least = cur.least===i?undefined:i;
    if(cur.most===i) cur.most=undefined;
    answers[ci]=cur; renderQ();
  });
  const tb=el("tokenBtn");
  if(tb) tb.onclick=()=>{ answers[ci]="skip"; tokens--; renderQ(); setTimeout(next,140); };

  el("backBtn").disabled=ci===0;
  /* Was: ci === childQuestions.length-1, i.e. index 54. But the last items
     in the bank are conditional, so a child who picks neither music nor
     sport never reaches index 54 and the button never changed. Ask instead
     whether any ACTIVE question remains after this one. */
  const lastLive = live[live.length-1];
  el("nextBtn").textContent = (q===lastLive) ? "See the profile" : "Next";
  el("nextBtn").disabled=!answered(q,answers[ci])&&answers[ci]!=="skip";
}

function next(){
  const q=childQuestions[ci];
  if(!answered(q,answers[ci])&&answers[ci]!=="skip") return;
  let i=ci+1;
  while(i<childQuestions.length && !isActive(childQuestions[i],answers)) i++;
  if(i<childQuestions.length){ ci=i; renderQ(); } else finishChild();
}
function back(){
  let i=ci-1;
  while(i>=0 && !isActive(childQuestions[i],answers)) i--;
  if(i>=0){ ci=i; renderQ(); }
}

function finishChild(){
  const clean={}; Object.keys(answers).forEach(k=>{ if(answers[k]!=="skip") clean[k]=answers[k]; });
  childScores=applyInterestRank(scoreQuestions(childQuestions,clean), interestRanking(answers));
  try{ childScores.__subs = subDomains(answers); childScores.__music = musicProfile(answers); childScores.__sport = sportIntent(answers); }catch(e){}
  useParent=false; showOnly("results"); renderResults();
}

/* ---------------- parent flow ---------------- */
function startParent(){ pi=0; pAnswers={}; pOrder={}; showOnly("parentGame"); renderP(); }

function renderP(){
  const q=parentQuestions[pi], r=pAnswers[pi];
  el("parentProgressText").textContent=(pi+1)+" of "+parentQuestions.length;
  el("parentProgressBar").style.width=((pi+1)/parentQuestions.length*100)+"%";
  el("parentPartLabel").textContent = q.part==="A"?"Part 1 · What you've observed":"Part 2 · Your family";

  let h=`<div class="q-kicker">${q.part==="A"?"Observation":"Family"}</div><h2 class="q-title">${esc(q.prompt)}</h2>`;
  if(q.note) h+=`<p class="note">${esc(q.note)}</p>`;

  if(q.type==="peers"){
    const sel=Array.isArray(r)?r:[];
    h+=`<div class="tile-grid">`;
    schools.forEach(sc=>h+=`<button class="tile${sel.includes(sc.name)?" on":""}" data-peer="${esc(sc.name)}">${esc(sc.short)}</button>`);
    h+=`</div>
      <div class="actions"><button class="btn btn-ghost btn-sm" data-peer-none="1">None that I know of</button>
      <button class="btn btn-ghost btn-sm" data-peer-none="unknown">Too early to say</button></div>`;
    if(r==="unknown") h+=`<p class="note">Marked as too early to say.</p>`;
    else h+=`<p class="note">${sel.length} selected</p>`;
  } else if(q.type==="suburb"){
    const names=Object.keys(SUBURBS).sort();
    h+=`<div class="tile-grid">`;
    names.forEach(n=>h+=`<button class="tile${r===n?" on":""}" data-sub="${esc(n)}">${esc(n)}</button>`);
    h+=`</div><p class="note">Pick the closest one. It only needs to be roughly right.</p>`;
  } else if(q.type==="multi"){
    const sel=r||[];
    h+=`<div class="tile-grid">`;
    orderFor(pOrder,pi,q.options.length).forEach(i=>h+=`<button class="tile${sel.includes(i)?" on":""}" data-tile="${i}">${esc(q.options[i].text)}</button>`);
    h+=`</div><p class="note">${sel.length} of ${q.pick} chosen</p>`;
  } else if(q.type==="rank2"){
    const sel=r||[];
    h+=`<div class="opt-list">`;
    q.options.forEach((o,i)=>{
      const rank=sel.indexOf(i);
      h+=`<button class="opt${rank>=0?" on":""}" data-rank="${i}">${rank>=0?`<span class="rank">${rank+1}</span>`:""}${esc(o.text)}</button>`;
    });
    h+=`</div><p class="note">${sel.length} of 2 chosen</p>`;
  } else {
    h+=`<div class="opt-list">`;
    const ord = q.part==="A" ? orderFor(pOrder,pi,q.options.length) : [...Array(q.options.length).keys()];
    ord.forEach(i=>h+=`<button class="opt${r===i?" on":""}" data-opt="${i}">${esc(q.options[i].text)}</button>`);
    h+=`</div>`;
  }
  el("parentQuestionCard").innerHTML=h;

  el("parentQuestionCard").querySelectorAll("[data-opt]").forEach(b=>b.onclick=()=>{
    pAnswers[pi]=+b.dataset.opt; renderP(); setTimeout(pNext,140);
  });
  el("parentQuestionCard").querySelectorAll("[data-tile]").forEach(b=>b.onclick=()=>{
    const i=+b.dataset.tile, cur=pAnswers[pi]||[], at=cur.indexOf(i);
    if(at>=0)cur.splice(at,1); else { if(cur.length>=q.pick)cur.shift(); cur.push(i); }
    pAnswers[pi]=cur; renderP();
  });
  el("parentQuestionCard").querySelectorAll("[data-peer]").forEach(b=>b.onclick=()=>{
    const cur=Array.isArray(pAnswers[pi])?pAnswers[pi]:[], n=b.dataset.peer, at=cur.indexOf(n);
    if(at>=0) cur.splice(at,1); else cur.push(n);
    pAnswers[pi]=cur; renderP();
  });
  el("parentQuestionCard").querySelectorAll("[data-peer-none]").forEach(b=>b.onclick=()=>{
    pAnswers[pi]= b.dataset.peerNone==="unknown" ? "unknown" : [];
    renderP(); setTimeout(pNext,140);
  });
  el("parentQuestionCard").querySelectorAll("[data-sub]").forEach(b=>b.onclick=()=>{
    pAnswers[pi]=b.dataset.sub; renderP(); setTimeout(pNext,140);
  });
  el("parentQuestionCard").querySelectorAll("[data-rank]").forEach(b=>b.onclick=()=>{
    const i=+b.dataset.rank, cur=pAnswers[pi]||[], at=cur.indexOf(i);
    if(at>=0)cur.splice(at,1); else { if(cur.length>=2)cur.shift(); cur.push(i); }
    pAnswers[pi]=cur; renderP();
  });

  el("parentBackBtn").disabled=pi===0;
  el("parentNextBtn").textContent=pi===parentQuestions.length-1?"See the comparison":"Next";
  el("parentNextBtn").disabled=!answered(q,pAnswers[pi]);
}
function pNext(){
  const q=parentQuestions[pi];
  if(!answered(q,pAnswers[pi])) return;
  if(pi<parentQuestions.length-1){ pi++; renderP(); } else finishParent();
}
function pBack(){ if(pi>0){pi--;renderP();} }

function finishParent(){
  const partA=parentQuestions.filter(q=>q.part==="A");
  const aAns={}; partA.forEach((q,idx)=>{ const orig=parentQuestions.indexOf(q); if(pAnswers[orig]!==undefined) aAns[idx]=pAnswers[orig]; });
  parentScores=scoreQuestions(partA,aAns);

  famConfig={};
  parentQuestions.forEach((q,idx)=>{
    if(q.part!=="B"||pAnswers[idx]===undefined) return;
    /* The suburb answer is a string, not an option index. Reading
       q.options[answer].id on it crashed finishParent, which meant the
       parent flow never closed. */
    if(q.type==="suburb"||q.type==="peers") famConfig[q.config]=pAnswers[idx];
    else if(q.type==="rank2") famConfig[q.config]=pAnswers[idx].map(i=>q.options[i].id);
    else if(q.options && q.options[pAnswers[idx]]) famConfig[q.config]=q.options[pAnswers[idx]].id;
  });
  useParent=true;
  syncFiltersFromFamily();
  showOnly("results"); renderResults();
}

/* Family answers pre-set the practical filters; the user can still change them. */
function syncFiltersFromFamily(){
  if(famConfig.coed==="coed") el("filterCoed").value="coed";
  else if(famConfig.coed==="single") el("filterCoed").value="single";
  else if(famConfig.coed==="leanCoed") el("filterCoed").value="leanCoed";
  else if(famConfig.coed==="leanSingle") el("filterCoed").value="leanSingle";
  if(famConfig.faith) el("filterFaith").value=famConfig.faith;
}

function familyFilters(){
  return {
    socialUntested: socialUntested(parentScores),
    suburb: famConfig.suburb,
    knownPeers: famConfig.knownPeers,
    eligibility: el("filterEligible").value,
    coed: el("filterCoed").value,
    budget: el("filterBudget").value,
    faith: el("filterFaith").value,
    travel: el("filterTravel").value
  };
}

/* ---------------- results ---------------- */
function activeScores(){
  /* attach the child's sub-domain picks so schoolMatch can steer the
     interest score toward the kind of music or sport they named */
  if(useParent && parentScores) return blend(childScores,parentScores,famConfig.weighting||"even");
  return childScores;
}

/* Profile title is derived, never hardcoded to a fixed set of interests. */
function profileTitle(s){
  const interests=[["academic","Academic"],["academicInterest","Scholarly"],["music","Creative"],
    ["tech","Maker"],["sport","Sporting"],["enterprise","Enterprising"],["outdoor","Outdoors"],["empathy","People-centred"]];
  const topInterest=interests.map(([k,l])=>({l,v:S(s,k),c:CF(s,k)})).filter(x=>x.c>=0.4).sort((a,b)=>b.v-a.v)[0];
  const drivers=[
    {v:S(s,"autonomy"), l:"independent"},
    {v:S(s,"teacher"),  l:"mentored"},
    {v:S(s,"peerDrive"),l:"peer-driven"},
    {v:S(s,"structure"),l:"structured"},
    {v:S(s,"social"),   l:"socially-led"}
  ].sort((a,b)=>b.v-a.v)[0];
  return (topInterest?topInterest.l:"Broad")+" and "+drivers.l;
}

function profileText(s){
  const p=[];
  const say=(d,hi,lo)=>{ if(CF(s,d)<0.4) return; const v=S(s,d); if(v>=60)p.push(hi); else if(v<=40)p.push(lo); };
  say("resilience","Stronger peers appear to pull this child forward rather than push them back.",
                   "When someone is clearly ahead, this child currently tends to step back rather than lean in — which makes the ability spread of the cohort a real consideration.");
  say("peerInfluence","Effort here tracks the friendship group closely, so cohort culture matters more than any single program.",
                      "Effort seems to hold independently of the friendship group, which widens the range of workable schools.");
  say("visibility","This child benefits from being actively noticed rather than having to put their hand up.",
                   "This child goes after opportunities without waiting to be invited.");
  say("structure","Clear standards, checkpoints and follow-up bring out the best work.",
                  "Room to work in their own way matters more than scaffolding.");
  say("helpSeeking","Problems get surfaced early, which is protective in a larger school.",
                    "Difficulty tends to stay private. In a big environment that can mean a long gap before anyone notices.");
  say("spaceNeed","A full week costs this child real energy, so total commitment load is worth watching.",
                  "A busy week seems to be energising rather than draining.");
  say("belonging","Belonging appears to run through one or two close friendships rather than a wide group.","");
  return p.filter(Boolean).slice(0,5).join(" ");
}

function renderResults(){
  const s=activeScores();
  el("profileName").textContent=profileTitle(s);
  el("profileSummary").textContent=profileText(s);
  el("modeLabel").textContent = useParent?"Child and parent, combined":"Child answers only";
  el("comparisonPanel").classList.toggle("hidden",!useParent);
  el("parentStartBtn").textContent = useParent?"Redo parent section":"Add parent perspective";

  renderTraits(s); renderProfileNotes(s); renderSchools(s);
  if(useParent) renderComparison();
}

function confBar(c){
  const pct=Math.round(c*100);
  const lab=c>=0.65?"well measured":c>=0.45?"partly measured":"lightly measured";
  return `<span class="conf" title="${lab}"><span class="conf-fill" style="width:${pct}%"></span></span><span class="conf-lab">${lab}</span>`;
}

/* A dimension is rendered as a lean between two named ends, not as an
   amount. 50 is neutral, not zero — asking "how much structure have you
   got" is meaningless, but "wants freedom <-> wants scaffolding" is
   something a parent can read in a second. */
function pole(d,x){
  const p=DIMS[d].poles||["",""], v=x.score, dev=v-50;
  const strong=Math.abs(dev)>=14;
  const lo=`<span${!strong||dev<0?' class="on"':''}>${esc(p[0])}</span>`;
  const hi=`<span${!strong||dev>0?' class="on"':''}>${esc(p[1])}</span>`;
  const fill = dev>=0 ? `left:50%;width:${dev}%` : `left:${v}%;width:${-dev}%`;
  const lab = !strong ? "no clear lean either way"
            : (x.confidence>=.65?"well measured":x.confidence>=.45?"partly measured":"lightly measured")
              +" · "+x.n+" question"+(x.n===1?"":"s");
  return `<div class="pole">
    <div class="pole-labels">${lo}${hi}</div>
    <div class="pole-track"><div class="pole-fill" style="${fill}"></div><div class="pole-dot" style="left:${v}%"></div></div>
    <div class="pole-conf"><span class="conf-pip"><i style="width:${Math.round(x.confidence*100)}%"></i></span>${esc(lab)}</div>
  </div>`;
}

/* Ordered by distance from neutral, so whatever is actually distinctive
   about this child rises to the top instead of following a fixed list. */
function renderTraits(s){
  const rows=SCORED_DIMS.concat(PROFILE_DIMS)
    .filter(d=>s[d]&&s[d].n>0&&DIMS[d].poles)
    .map(d=>({d,x:s[d],dev:Math.abs(s[d].score-50)}))
    .sort((a,b)=>b.dev-a.dev);
  const head=rows.filter(r=>r.dev>=14).slice(0,6);
  const rest=rows.filter(r=>!head.includes(r));
  el("traitHead").innerHTML = head.length
    ? head.map(r=>pole(r.d,r.x)).join("")
    : `<p class="note">Nothing leaned strongly in either direction. That is a real finding — this child looks adaptable across most of what we measured.</p>`;
  el("traitList").innerHTML = rest.map(r=>pole(r.d,r.x)).join("");
  el("traitRestCount").textContent = rest.length;
}

/* Constructs with no school-side evidence: reported, never scored. */
function renderProfileNotes(s){
  const rows=PROFILE_DIMS.filter(d=>CF(s,d)>=0.4).map(d=>{
    const x=s[d];
    const dir=x.score>=60?"high":x.score<=40?"low":"mid";
    return {d,x,dir};
  }).filter(r=>r.dir!=="mid").sort((a,b)=>Math.abs(b.x.score-50)-Math.abs(a.x.score-50));

  el("profileNotes").innerHTML = rows.length
    ? rows.map(r=>`<div class="insight"><strong>${esc(DIMS[r.d].label)} — ${r.dir==="high"?"high":"low"}</strong>${esc(DIMS[r.d].desc)}<span class="conf-lab" style="display:block;margin-top:6px">${Math.round(r.x.confidence*100)}% measurement confidence · ${r.x.n} question${r.x.n===1?"":"s"}</span></div>`).join("")
    : `<p class="note">Nothing here stood out strongly enough to report.</p>`;

  /* The interest ladder, shown plainly — this is the bit parents find
     most surprising, and it is worth showing the working. */
  const rank=interestRanking(answers), subs=subDomains(answers);
  const bits=[];
  if(rank){
    const names=rank.order.map(id=>(TILES.find(t=>t.id===id)||{}).t).filter(Boolean);
    bits.push(`<div class="insight"><strong>What they chose when forced to pick</strong>
      When made to choose between their own three, the order came out:
      <b>${names.map(esc).join("</b>, then <b>")}</b>.
      ${rank.tied?"Two of them tied, so this ordering is soft — the clash answers weren't fully consistent.":
        "That order now weights the matching, so first place counts for more than third."}</div>`);
  }
  if(socialUntested(parentScores)){
    bits.push(`<div class="insight warn"><strong>Read the social findings carefully</strong>
      Your child has never been without friends at school, which is good news — but it means their
      answers about friendship and belonging show what they have never had to do without,
      not proven resilience. A low score here is <b>untested, not resilient</b>.
      Where a school profile below says a quieter or smaller environment would suit,
      weigh that against how they actually behave in a busy one.</div>`);
  }
  const LBL={academic:"academic work",sport:"sport",music:"music",
             computing:"coding and making",art:"art and design",drama:"drama"};
  const tal=talents(activeScores());
  if(tal.length){
    const named=tal.map(d=>LBL[d]).join(", ").replace(/, ([^,]*)$/," and $1");
    bits.push(`<div class="insight"><strong>Already working beyond school level</strong>
      This child is going further than the classroom in ${esc(named)}. Where a school runs a
      selective or extension pathway in one of those, it is flagged on the card along with how
      entry actually works — because a pathway only counts if you can get into it.</div>`);
  }
  if(tal.length && (subs.sport||subs.music)){
    bits.push(`<div class="insight"><strong>The specific program matters here</strong>
      Because they compete or study outside school, whether a school runs their particular
      sport or instrument carries real weight, rather than being a tour question only.</div>`);
  }
  const unconfirmed=unconfirmedInterests(answers);
  if(unconfirmed.length){
    const names=unconfirmed.map(id=>(TILES.find(t=>t.id===id)||{}).t).filter(Boolean);
    bits.push(`<div class="insight warn"><strong>Named, but not done recently</strong>
      They put <b>${names.map(esc).join("</b> and <b>")}</b> in their top three, but didn't tick
      ${names.length>1?"them":"it"} as something they'd done in the last month without being asked.
      That may mean nothing — access, season, a busy month. But it is worth knowing before you
      weight a school choice around ${names.length>1?"them":"it"}.</div>`);
  }
  if(subs.sport||subs.music){
    const parts=[];
    if(subs.sport) parts.push("sport: <b>"+esc(SPORT_LABELS[subs.sport]||subs.sport)+"</b>");
    if(subs.music) parts.push("music: <b>"+esc(MUSIC_LABELS[subs.music]||subs.music)+"</b>");
    bits.push(`<div class="insight"><strong>The specifics they picked</strong>${parts.join(" · ")}.
      These flag what to check at each school. They deliberately do not move any school's ranking —
      what a child loves at eleven often isn't what they'll want at fifteen.</div>`);
  }
  el("profileNotes").innerHTML = bits.join("") + el("profileNotes").innerHTML;

  const um=unmappedInterests(answers);
  el("unmappedNote").innerHTML = um.length
    ? `<div class="insight warn"><strong>Interests this tool cannot match on</strong>The school dataset has no attribute for ${esc(um.join(", "))}. These interests are shown in the profile and turned into tour questions, but they do not affect any school's score. Ask each school about them directly.</div>`
    : "";
}

function renderSchools(s){
  const fam=familyFilters();
  const subs=subDomains(answers);
  const ranked=schools.map(sc=>({sc,m:schoolMatch(s,sc,fam)})).sort((a,b)=>b.m.score-a.m.score);
  const ok=ranked.filter(r=>r.m.eligible), no=ranked.filter(r=>!r.m.eligible);
  const tours=profileTours(s);

  const card=(r,dim)=>{
    const {sc,m}=r;
    const cautions=[...sc.cautions.slice(0,2),...m.risks].slice(0,5);
    const allTours=[...sc.tourQuestions,...tours].slice(0,6);
    const cap=t=>t.charAt(0).toUpperCase()+t.slice(1);
    return `<article class="school${dim?" dim":""}">
      <header class="school-head">
        <div>
          <h3>${esc(sc.name)}</h3>
          <p class="school-type">${esc(sc.type)} · about ${sc.fee.toLocaleString()} a year${(()=>{
            const km=famConfig.suburb?distanceFrom(famConfig.suburb,sc.name):null;
            return km===null?"":` · <b>${km} km</b> from ${esc(famConfig.suburb)}`;})()}</p>
        </div>
        <div class="school-score">
          <div class="ss-num">${m.score}<span class="ss-band">±${m.band}</span></div>
          <div class="ss-lab">fit indication</div>
        </div>
      </header>
      ${m.blocks.length?`<div class="blocked">Outside your stated constraints: ${esc(m.blocks.join(" "))}</div>`:""}
      ${m.softs.length?`<div class="soft">${esc(m.softs.join(" "))}</div>`:""}
      ${m.peers?`<div class="subdomain"><span class="sd ${m.peers.has?"strong":"unknown"}">${esc(m.peers.text)}</span></div>`:""}
      ${(()=>{const c=subDomainCheck(sc.name,subs,activeScores());return c.length?
        `<div class="subdomain">${c.map(x=>`<span class="sd ${x.level}">${esc(x.text)}</span>`).join("")}
         ${programNote(sc.name)?`<p class="sd-note">${esc(programNote(sc.name))}</p>`:""}</div>`:"";})()}
      <div class="align">
        <div class="align-col ok">
          <h4>How this could suit</h4>
          ${m.suits.length?`<ul>${m.suits.map(x=>`<li>${esc(cap(x))}.</li>`).join("")}</ul>`
            :`<p class="none">Nothing in this child's profile points strongly toward this environment.</p>`}
        </div>
        <div class="align-col no">
          <h4>Where it might not</h4>
          ${m.watch.length?`<ul>${m.watch.map(x=>`<li>${esc(cap(x))}.</li>`).join("")}</ul>`
            :`<p class="none">No gap surfaced between what this child needs and what this environment provides. That is not the same as a good sign — read the unknowns below.</p>`}
          ${m.surplus.length?`<p class="surplus"><b>More than needed:</b> ${esc(m.surplus.join("; "))}. Not a problem, but you would be paying for it.</p>`:""}
        </div>
      </div>
      <div class="metrics">
        <div><span>Natural fit</span><div class="bar"><div style="width:${m.natural}%"></div></div><b>${m.natural}</b></div>
        <div><span>Growth opportunity</span><div class="bar"><div class="alt" style="width:${m.opportunity}%"></div></div><b>${m.opportunity}</b></div>
        <div><span>Watch-outs</span><div class="bar"><div class="warn" style="width:${m.risk}%"></div></div><b>${m.riskLabel}</b></div>
      </div>
      <p class="evidence">Evidence: <b>${esc(sc.evidenceLevel)}</b> — ${esc(sc.evidenceNote)} The ± band widens where evidence is thinner or where this child's answers gave us less to go on.</p>
      <details><summary>Strengths for this child</summary><ul>${sc.strengths.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></details>
      <details><summary>Things to weigh up</summary><ul>${cautions.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></details>
      <details><summary>Contradictions in the evidence</summary><ul>${sc.contradictions.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></details>
      <details><summary>What we don't know</summary><ul>${sc.unknowns.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></details>
      <details open><summary>Questions to ask on the tour</summary><ul>${allTours.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></details>
      <details><summary>Sources (${sc.sources.length})</summary><ul>${sc.sources.map(([t,u])=>`<li><a href="${esc(u)}" target="_blank" rel="noopener">${esc(t)}</a></li>`).join("")}</ul></details>
    </article>`;
  };

  /* Plain-language summary of the leading options, built from the same
     alignment data as the cards so the two can never contradict. */
  const lead=ok.slice(0,3);
  el("topSummary").innerHTML = lead.length ? `
    <div class="summary">
      <h3>In short</h3>
      <p class="note">These are the closest matches to the profile, not the best schools. Where the ± bands overlap, this tool cannot tell them apart — treat those as equally worth visiting.</p>
      ${lead.map((r,i)=>`
        <div class="sum-row">
          <div class="sum-rank">${i+1}</div>
          <div>
            <strong>${esc(r.sc.name)}</strong>
            <span class="sum-score">${r.m.score} ± ${r.m.band} · ${esc(r.m.riskLabel.toLowerCase())} watch-outs · ${esc(r.sc.evidenceLevel.toLowerCase())} evidence</span>
            <p>${esc(schoolBlurb(r.sc,r.m))}</p>
          </div>
        </div>`).join("")}
      ${overlapNote(lead)}
    </div>` : "";

  el("schoolList").innerHTML=ok.map(r=>card(r,false)).join("");
  el("excludedList").innerHTML = no.length
    ? `<h3>Outside your stated constraints (${no.length})</h3>
       <p class="note">These are not ranked against the others. They are here so you can see what a constraint is costing you, not to suggest you should reconsider it.</p>`
      + no.map(r=>card(r,true)).join("")
    : "";
}

/* If the leading scores overlap inside their uncertainty bands, say so
   rather than letting the ranking order imply a distinction. */
function overlapNote(lead){
  if(lead.length<2) return "";
  const tied=lead.filter(r=>r.m.score+r.m.band >= lead[0].m.score-lead[0].m.band);
  if(tied.length<2) return "";
  return `<p class="tie">${tied.length===lead.length?"All three":"The top "+tied.length}
    overlap inside their uncertainty bands. On this evidence they are not meaningfully separable —
    the order between them is noise, and the tour questions will tell you far more than the numbers will.</p>`;
}

function renderComparison(){
  const dims=Object.keys(DIMS).filter(d=>DIMS[d].kind!=="display");
  const rows=dims.map(d=>{
    const c=childScores[d], p=parentScores[d];
    if(!c||!p||c.n===0||p.n===0) return null;
    return {d, diff:p.observed-c.observed, abs:Math.abs(p.observed-c.observed), c, p};
  }).filter(Boolean).sort((a,b)=>b.abs-a.abs).slice(0,5);

  el("comparisonList").innerHTML=rows.map(r=>`
    <div class="cmp">
      <strong>${esc(DIMS[r.d].label)}</strong>
      <div class="cmp-bars">
        <span>Child ${r.c.observed}</span><div class="bar"><div style="width:${r.c.observed}%"></div></div>
        <span>Parent ${r.p.observed}</span><div class="bar"><div class="alt" style="width:${r.p.observed}%"></div></div>
      </div>
      <p>${r.abs<12?"Broad agreement.":r.diff>0?"You see more of this than your child reports.":"Your child reports more of this than you observe."}</p>
    </div>`).join("");

  const notes=["You answered after seeing your child's profile, so read these differences as considered reflection rather than an independent second opinion. Where you disagree strongly, that is usually the most useful thing on this page."];
  if(famConfig.prestige==="high") notes.push("You told us reputation matters a lot. That is a legitimate part of a school decision, and naming it means it is visible here rather than buried inside a number. Worth checking separately whether your child's answers suggest they would be comfortable in a status-conscious cohort.");
  if(famConfig.setback==="sit" && CF(childScores,"helpSeeking")>=0.45 && S(childScores,"helpSeeking")<=42)
    notes.push("Your family tends to let a setback sit, and your child's answers suggest they keep difficulty private. Those two together mean a problem could run for a while before anyone acts. Worth asking every school how quickly they would tell you.");
  if(famConfig.involvement==="minimal") notes.push("You want a school that runs without heavy parent involvement. Several schools here expect the opposite, so it is worth asking directly what is actually expected of families.");
  if(famConfig.parentFit==="high") notes.push("Feeling at home among the other parents matters to you. Prospectuses do not cover this — ask to meet current families rather than staff.");
  if(famConfig.coed && famConfig.coed!=="none") notes.push("Your co-ed preference is applied as a filter only. Nothing in your child's answers was used to decide it, and neither model is treated as better.");
  const coedAns=findCoedAnswer();
  if(coedAns) notes.push("For reference, your child said this about mixed-gender group work: “"+coedAns+"” This is recorded, not scored.");
  if(famConfig.success) notes.push("You are optimising for "+famConfig.success.map(x=>({results:"results and post-school options",character:"character",wellbeing:"happiness and wellbeing",opportunity:"opportunities",belonging:"belonging and lasting friendships"}[x])).join(" and ")+". Read the shortlist through that lens rather than through the ranking order.");

  el("differenceInsights").innerHTML=notes.map(n=>`<div class="insight">${esc(n)}</div>`).join("");
}

function findCoedAnswer(){
  const qi=childQuestions.findIndex(q=>q.options&&q.options.some(o=>o.w&&"coed" in o.w));
  if(qi<0||answers[qi]===undefined||answers[qi]==="skip") return null;
  return childQuestions[qi].options[answers[qi]].text;
}

/* ---------------- wiring ---------------- */
window.addEventListener("DOMContentLoaded",()=>{
  el("startBtn").onclick=startGame;
  el("aboutBtn").onclick=()=>showOnly("about");
  el("aboutStart").onclick=startGame;
  el("aboutBack").onclick=()=>showOnly("intro");
  el("nextBtn").onclick=next;
  el("backBtn").onclick=back;
  el("parentNextBtn").onclick=pNext;
  el("parentBackBtn").onclick=pBack;
  el("parentStartBtn").onclick=startParent;
  el("restartBtn").onclick=()=>{childScores=parentScores=null;useParent=false;famConfig={};showOnly("intro");};
  el("printBtn").onclick=()=>window.print();
  ["filterEligible","filterCoed","filterBudget","filterFaith","filterTravel"]
    .forEach(id=>el(id).onchange=()=>{ if(childScores) renderSchools(activeScores()); });
});

/* ============================================================
   TEST HARNESS  —  add ?dev=1 to the URL
   ============================================================
   Answering sixty-odd questions to check one wording change is
   how a project stops being tested. This does two things:

   SAVE — after a real run, download that child's exact answers.
   That file is worth more than any profile I could invent, because
   it is a real ten-year-old's actual responses. Every future change
   to the engine can then be re-checked against it in one click.

   LOAD — drop a saved file back in and jump straight to results.

   Deliberately hidden behind a URL parameter. A family arriving at
   the site should never see it, and nothing here touches scoring. */

function devExport(){
  const blob={
    saved:new Date().toISOString(),
    version:(typeof APP_VERSION!=="undefined"?APP_VERSION:"?"),
    label:prompt("Whose answers are these? (e.g. Hugo, Y6, first run)")||"unlabelled",
    childAnswers:answers,
    parentAnswers:pAnswers,
    famConfig:famConfig,
    /* stored so a later run can be compared even if the bank changes */
    childQuestionCount:childQuestions.length,
    prompts:childQuestions.map(q=>(q.prompt||"").slice(0,60))
  };
  const a=document.createElement("a");
  a.href=URL.createObjectURL(new Blob([JSON.stringify(blob,null,1)],{type:"application/json"}));
  a.download="schoolfit-answers-"+blob.label.replace(/[^a-z0-9]+/gi,"-").toLowerCase()+".json";
  a.click();
}

function devImport(file){
  const r=new FileReader();
  r.onload=()=>{
    let d; try{ d=JSON.parse(r.result); }catch(e){ alert("Not a valid answer file."); return; }
    if(d.childQuestionCount && d.childQuestionCount!==childQuestions.length){
      const ok=confirm("This file was saved against "+d.childQuestionCount+" questions and the bank now has "+
        childQuestions.length+".\n\nAnswers are stored by position, so any question added or removed since then "+
        "will shift them out of alignment. Load anyway?");
      if(!ok) return;
    }
    answers=d.childAnswers||{}; pAnswers=d.parentAnswers||{}; famConfig=d.famConfig||{};
    finishChild();
    if(Object.keys(pAnswers).length){ try{ finishParent(); }catch(e){} }
  };
  r.readAsText(file);
}

/* Quick synthetic profiles for checking a change without a real file.
   Only the interest tiles are set; everything else falls to neutral,
   so these show DIRECTION, not a real child. */
const DEV_PROFILES={
  "musician (music, coding, reading)":["music","code","reading"],
  "athlete (sport, outdoor, helping)":["sport","outdoor","helping"],
  "maker (coding, building, science)":["code","build","science"],
  "artist (art, drama, writing)":["art","drama","writing"],
  "academic (reading, puzzles, science)":["reading","puzzles","science"]
};
function devProfile(name){
  const ids=DEV_PROFILES[name]; if(!ids) return;
  answers={}; pAnswers={}; famConfig={};
  answers[0]=ids.map(id=>childQuestions[0].options.findIndex(o=>o.id===id)).filter(i=>i>=0);
  /* answer everything else with the middle option so the profile is
     legible rather than random */
  childQuestions.forEach((q,i)=>{
    if(i===0||!isActive(q,answers)) return;
    if(q.type==="grid"){ const o={}; q.rows.forEach(r=>o[r.id]=3); answers[i]=o; }
    else if(q.type==="bestworst"){ answers[i]={most:0,least:q.items.length-1}; }
    else if(q.type==="multi"){ answers[i]=[0,1,2].slice(0,q.pick||3); }
    else if(q.options&&q.options.length){ answers[i]=Math.floor(q.options.length/2); }
  });
  finishChild();
}

function devPanel(){
  const d=document.createElement("div");
  d.style.cssText="position:fixed;bottom:12px;right:12px;z-index:9999;background:#111;color:#eee;"+
    "font:12px/1.5 system-ui;padding:12px 14px;border-radius:10px;max-width:260px;box-shadow:0 6px 24px rgba(0,0,0,.4)";
  d.innerHTML='<div style="font-weight:600;margin-bottom:8px">Test harness</div>'+
    '<button id="devSave" style="width:100%;margin-bottom:6px">Save these answers</button>'+
    '<label style="display:block;margin-bottom:8px"><span style="display:block;margin-bottom:4px">Load an answer file</span>'+
    '<input id="devLoad" type="file" accept="application/json" style="width:100%;font-size:11px"></label>'+
    '<select id="devProf" style="width:100%"><option value="">— synthetic profile —</option>'+
    Object.keys(DEV_PROFILES).map(k=>'<option>'+k+'</option>').join("")+'</select>'+
    '<div style="opacity:.6;margin-top:8px;font-size:11px">Synthetic profiles set interests only and answer '+
    'everything else neutrally. They show direction, not a real child.</div>';
  document.body.appendChild(d);
  el("devSave").onclick=devExport;
  el("devLoad").onchange=e=>{ if(e.target.files[0]) devImport(e.target.files[0]); };
  el("devProf").onchange=e=>{ if(e.target.value) devProfile(e.target.value); };
}
if(/[?&]dev=1/.test(location.search)) window.addEventListener("DOMContentLoaded",devPanel);
