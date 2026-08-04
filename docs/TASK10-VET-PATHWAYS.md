# Task 10 — VET, certificates and apprenticeship pathways, 22 Perth schools

Same conventions as tasks 1–9: `confirmed` · `partial` · `not_publicly_verified` · `not_stated` · `portal_only`, never collapsed into yes/no. Return JSON keyed on the exact school names.

---

## Why this matters

The tool now scores a vocational pathway dimension, but it is a **single number** built from an ATAR/VET balance statement. That treats a child who wants to cook and a child who wants to build as the same person, when the schools that serve them are completely different.

Roughly half of Australian school leavers do not go straight to university. A tool that measures only academic ambition serves them badly, and this is the task that fixes it.

**Do not treat vocational pathways as a lesser option.** A school with strong hospitality and construction certificates is not a worse school than one that is ATAR-only — it is a different school, and for a large number of children it is the better one. Nothing in this return should rank or imply otherwise.

---

## THE 22 SCHOOLS

Melville Senior High School — Academic Extension · All Saints' College · Perth Modern School · John Curtin College of the Arts · Corpus Christi College · Aquinas College · Rossmoyne Senior High School · Willetton Senior High School · Applecross Senior High School — Academic Extension · Shenton College — HPL / GATE · Fremantle College · Kennedy Baptist College · Carey Baptist College — Harrisdale · Scotch College · Christ Church Grammar School · Hale School · Wesley College · CBC Fremantle · Iona Presentation College · Santa Maria College · Seton Catholic College · John XXIII College

Perth, Western Australia. Watch the namesakes: **Wesley** (Melbourne), **Christ Church Grammar**, **Santa Maria**, **Aquinas** (a US institution dominates search), **Seton** (US), **Corpus Christi** (Canada), **John XXIII** (the ANU residential college), **Carey** (Victorian grammar; ours is **Harrisdale**).

**Five schools have portal-locked handbooks** — Aquinas, CBC Fremantle, Iona, Santa Maria and John XXIII. Two previous passes failed to reach their subject lists. Try the VET, careers or pathways pages instead, which are often public even when the handbook is not. If it is still locked, record `portal_only` and move on.

---

## FIELD 1 — Certificates by field

Which areas does the school actually deliver or arrange? This is the part that decides whether a school suits a particular child.

```js
vetFields:{
  hospitality:null,      // Cert I/II Hospitality, Kitchen Operations, Food
  construction:null,     // Building and Construction, Carpentry, trades taster
  automotive:null,       // Automotive, Engineering trades
  business:null,         // Cert II/III Business, Workplace Skills
  it:null,               // Cert II/III Information Technology
  health:null,           // Health Support, Allied Health, Aged Care
  earlyChildhood:null,   // Early Childhood Education and Care
  sportRec:null,         // Sport and Recreation, Fitness
  animalStudies:null,    // Animal Care, Agriculture
  creative:null,         // Screen and Media, Music Industry, Visual Arts, Design
  hairBeauty:null,
  maritime:null,         // Maritime Operations, Aquaculture
  note:"", source:""
}
```

**2** = delivered on campus, named in current material · **1** = arranged, auspiced or delivered off-site through a partner or TAFE · **0** = checked the current VET or subject list and this field is not offered · **null** = could not establish.

**Name the actual certificates in `note`** where you can — "Certificate II in Kitchen Operations", "Certificate III in Business" — with their level.

---

## FIELD 2 — How it is actually delivered

A certificate taught in the school's own commercial kitchen is a different experience from one where students are bussed to TAFE on a Wednesday. Both are legitimate; a family should know which.

```js
vetDelivery:{
  onCampus:null,          // true if any certificates are taught at the school
  externalPartner:"",     // TAFE or RTO partner named, if published
  releaseDay:null,        // true if students attend off-site on set days
  facilities:[""],        // named trade facilities: commercial kitchen, workshop,
                          // trade training centre, salon, automotive bay
  source:""
}
```

---

## FIELD 3 — School-based apprenticeships and workplace learning

For a child who wants a trade, this is the actual mechanism, and it is the single most useful thing on this page.

```js
pathways:{
  schoolBasedApprenticeship:null,  // 2 = SBATs actively supported and described
                                   // 1 = mentioned as possible
                                   // 0 = checked, not offered
  workplaceLearning:null,          // Authority-developed Workplace Learning endorsed program
  careersStaffNamed:null,          // a named VET or careers coordinator ROLE (no personal names)
  industryLinks:[""],              // named partner employers or industry bodies
  atarVetSplit:"",                 // any published proportion, e.g. "about 60% ATAR"
  source:""
}
```

---

## RULES

1. **Quote and link.** VET, careers and pathways pages are usually public even where handbooks are not.
2. **`0` means checked-and-absent. `null` means not checked.** A school with no construction certificate is a `0` and that is useful.
3. **Never infer from sector.** Do not assume a private school has no VET or that a public school has plenty. All Saints lists ten certificates; check every school the same way.
4. "Not found" is wanted output. Do not pad.
5. No individual names — role titles only.
6. Do not rank the schools, and do not describe vocational pathways as an alternative for students who cannot manage ATAR.

Return JSON. Say where you stopped.
