# SchoolFit Quest — six data gaps, 22 Perth schools

You produced the `SchoolFit_Quest_COMPLETE_DATA_EXPORT_22_SCHOOLS.json` evidence layer. This fills the gaps that export left. **Same conventions:** every field carries a status of `confirmed` · `partial` · `not_publicly_verified` · `not_stated` · `portal_only`, and those five are never collapsed into yes/no.

Return **JSON in the same shape as before**, keyed by the exact school names used in that export. Work through the tasks in order — they are ranked by how much harm the gap is currently doing. If you run out of room, stop and say where you got to. **A partial return in task order is much more useful than a thin pass over everything.**

---

## THE 22 SCHOOLS

Melville Senior High School — Academic Extension · All Saints' College · Perth Modern School · John Curtin College of the Arts · Corpus Christi College · Aquinas College · Rossmoyne Senior High School · Willetton Senior High School · Applecross Senior High School — Academic Extension · Shenton College — HPL / GATE · Fremantle College · Kennedy Baptist College · Carey Baptist College — Harrisdale · Scotch College · Christ Church Grammar School · **Hale School** · Wesley College · CBC Fremantle · Iona Presentation College · Santa Maria College · Seton Catholic College · John XXIII College

*(That is 22. An earlier version of this prompt listed only 21 — Hale School was dropped by mistake and correctly restored in the Task 1 return.)*

All Perth, Western Australia. Watch the interstate and overseas namesakes: **Wesley** (Melbourne), **Christ Church Grammar**, **Santa Maria**, **Aquinas** (a US institution dominates search), **Seton** (US), **Corpus Christi** (Canada), **John XXIII** (the ANU residential college), **Carey** (the Victorian grammar school — ours is the **Harrisdale** campus, not Forrestdale).

---

## TASK 1 — Computing, robotics and engineering *(worst gap: currently zero of 22)*

The tool scores a "technology and making" dimension for every child who picks coding, games, robotics or building things — **against no program data whatsoever.** This is the single most broken thing in the dataset.

```js
computing:{
  csSubject:null,        // 2 = Computer Science / Applied IT through to Year 12
                         // 1 = offered in middle school only
                         // 0 = searched the subject list, not found
  robotics:null,         // 2 = competition team (FIRST, RoboCup, VEX) or named program
                         // 1 = club or elective
                         // 0 = searched, not found
  engineering:null,      // Engineering Studies, Design & Technology to Year 12
  digitalDesign:null,    // media, animation, game design, digital product design
  makerspace:null,       // named workshop, fab lab, design studio
  note:"", source:""
}
```

**`0` and blank are different and the difference matters.** A school that demonstrably does not offer Computer Science is a finding. A school nobody checked is not.

---

## TASK 2 — Visual art, drama, film, dance *(1 of 22)*

Children rate art and drama in the questionnaire and the tool has almost nothing to match them against.

```js
arts:{
  visualArt:null,        // 2 = through to Year 12 ATAR, multiple courses, studios
  design:null,           // graphic, digital, product, textiles
  drama:null,            // 2 = subject to Year 12 plus a regular production season
  film:null,             // media production, screen studies, animation
  dance:null,
  artSelective:null,     // 2 = audition or portfolio entry exists, 0 = no
  artFacility:null,      // named theatre, gallery or studio block
  note:"", source:""
}
```

---

## TASK 3 — Sport, and specifically what a school does NOT offer *(0 of 22 have a single confirmed absence)*

Every sport in our data is coded "offered" or "strength" or left blank. Nothing is coded **searched-and-absent**, so the tool cannot tell a school with no hockey from a school nobody checked. A child competing at state level in a sport the school doesn't run should be warned, and currently never is.

**Start from the competition body, not the school website.** School sites bury this; the associations publish it. PSA, IGSSA, ACC (and its sub-associations) and School Sport WA list which schools field teams in which sports. One association page settles many schools at once.

```js
sport:{
  body:"",               // PSA / IGSSA / ACC (+ sub-association) / School Sport WA / other
  division:"",           // if published
  afl:null, cricket:null, netball:null, basketball:null, soccer:null,
  hockey:null, rugby:null, tennis:null, volleyball:null, swimming:null,
  athletics:null, crosscountry:null, rowing:null, waterpolo:null,
  golf:null, sailing:null, surfing:null,
  specialistProgram:"",  // named sport excellence or specialist entry program
  note:"", source:""
}
```

2 = specialist program or documented competition strength · 1 = fielded/offered · **0 = checked the fixture list or sport page and this school does not offer it** · null = could not check.

**The rare sports matter most** — hockey, rugby, sailing, surfing, soccer, AFL. Nearly every school offers basketball and swimming, so those tell us little.

---

## TASK 4 — Senior subject lists *(we hold a link to the PDF, never the subjects)*

The questionnaire asks children to rate **eleven subjects individually** — maths, English, science, HASS, languages, art, music, drama, design & technology, computing, PE. School-side there is one "academic" number, so a child who loves languages and one who loves computing are currently treated identically.

Open the senior course handbook and list what is actually offered to Year 12.

```js
seniorSubjects:{
  maths:[],              // e.g. ["Methods","Specialist","Applications","Essential"]
  english:[],            // English, Literature, Essential English
  sciences:[],           // Physics, Chemistry, Biology, Psychology, Human Bio...
  hass:[],               // Modern History, Geography, Economics, Politics...
  languages:[],          // NAME THEM - "Japanese","French","Italian"...
  arts:[],               // Visual Arts, Drama, Music, Media, Dance
  technologies:[],       // Computer Science, Applied IT, Engineering, D&T, Food
  pe:[],                 // PE Studies, Outdoor Ed
  atarVetBalance:"",     // mostly ATAR / genuine mix / strong VET presence
  source:"", access:""   // "public handbook" or "portal_only"
}
```

If the handbook is behind a parent login, record `portal_only` and move on — that is a real finding, not a failure.

---

## TASK 5 — My School figures *(0 of 22)*

Three numbers per school from **myschool.edu.au**, all published in the same format, which is what makes them the only genuinely comparable figures available.

```js
myschool:{ icsea:null, topQuarterPct:null, teachingStaffFTE:null,
           nonTeachingFTE:null, enrolmentY7to12:null, dataYear:null, source:"" }
```

Students per teaching FTE is currently our best available substitute for two attributes that have no published source at all. These numbers matter more than they look.

---

## TASK 6 — Pastoral continuity *(2 of 22 answered)*

One question, and it is the most useful thing a school can tell us:

```js
pastoral:{
  unitName:"", unitSize:null, contactFrequency:"",
  sameAdultAcrossYears:null,   // "yes" / "no" / "not_stated"
  handoverPoint:"", escalationChain:"", source:""
}
```

Answer **no** if pastoral contact hands over at a year boundary — Fremantle College runs separate Student Services teams for Years 7–9 and 10–12, which is a confirmed `no`. **Warm language about care is not a yes.** If the school does not state it, `not_stated`.

---

## RULES

1. **Quote and link.** Anything not on a front page needs the sentence and the URL.
2. **`0` means checked-and-absent. `null` means not checked.** Never blur them.
3. **"Not found" is wanted output.** Do not pad, do not infer a program from a school's tone or from what similar schools do.
4. **Never estimate a number** — not a class size, not an ICSEA, not a subject list.
5. Do not rate, rank or recommend any school.
6. No named individuals.

Return JSON. Task order. Say where you stopped.
