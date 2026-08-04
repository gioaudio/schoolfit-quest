# Task 9 — Formality and tradition, 22 Perth schools

Same conventions as tasks 1–8: `confirmed` · `partial` · `not_publicly_verified` · `not_stated` · `portal_only`, never collapsed into yes/no. Return JSON keyed on the exact school names.

**One task.** It should be quick — nearly all of this is on a uniform page, an enrolment page, or a "life at the school" page.

---

## What this is, and what it is deliberately NOT

We are **not** measuring how strict a school is. That cannot be done from published sources: every behaviour policy says "high expectations", every Catholic and independent school describes a "formation tradition", and coding strictness from that language would sort schools by how they write rather than how they run.

We **are** measuring **formality** — how much ceremony, uniform, ritual and hierarchy a student actually encounters. That is concrete. A school either requires a blazer or it doesn't. It either has chapel in the school week or it doesn't.

This matters because children differ sharply on it. Some are energised by tradition, house colours, honour boards and formal assemblies. Others find the same things a weekly tax on their attention. Neither is better, and the tool measures the child on exactly this axis already — it just has nothing to match them against.

**Do not rate any of this as good or bad.** A school with full formal uniform and daily chapel is not stricter, better or worse than one in polo shirts. It is different, and different children want different things.

---

## THE 22 SCHOOLS

Melville Senior High School — Academic Extension · All Saints' College · Perth Modern School · John Curtin College of the Arts · Corpus Christi College · Aquinas College · Rossmoyne Senior High School · Willetton Senior High School · Applecross Senior High School — Academic Extension · Shenton College — HPL / GATE · Fremantle College · Kennedy Baptist College · Carey Baptist College — Harrisdale · Scotch College · Christ Church Grammar School · Hale School · Wesley College · CBC Fremantle · Iona Presentation College · Santa Maria College · Seton Catholic College · John XXIII College

Perth, Western Australia. Watch the namesakes: **Wesley** (Melbourne), **Christ Church Grammar**, **Santa Maria**, **Aquinas** (a US institution dominates search), **Seton** (US), **Corpus Christi** (Canada), **John XXIII** (the ANU residential college), **Carey** (Victorian grammar; ours is **Harrisdale**).

---

## THE FIELDS

```js
formality:{
  uniformFormal:null,      // 2 = blazer and tie required, formal and everyday sets
                           // 1 = conventional uniform, no blazer requirement
                           // 0 = polo-shirt or relaxed uniform only
  blazerRequired:null,     // true / false
  separateFormalUniform:null, // true = a distinct formal or ceremonial set exists
  groomingRules:"",        // published hair, jewellery or presentation rules, quoted briefly
  assemblyFrequency:"",    // "weekly whole-school", "fortnightly", "year-group only", as published
  chapelOrService:null,    // 2 = weekly or more in school time
                           // 1 = occasional or major feast days
                           // 0 = none - secular school
  houseSystem:null,        // 2 = houses with competition, points, house captains
                           // 1 = houses exist, largely administrative
                           // 0 = no house system found
  prefectStructure:null,   // 2 = formal prefect body with titles and investiture
                           // 1 = student leaders without formal hierarchy
                           // 0 = none found
  honourBoards:null,       // named boards, dux lists, honour rolls displayed or published
  boarding:null,
  singleSex:null,          // true / false - factual, already known, confirm only
  formalEvents:[""],       // named annual formal occasions: Speech Night, Founder's Day,
                           // Investiture, Valedictory, Head of the River, Anzac service
  note:"", source:""
}
```

---

## HOW TO READ THE SCALE

**`uniformFormal`** is the single most informative field. A school requiring a blazer and tie with a separate formal set has made a decision about how a student presents every day for six years. A polo shirt is a different decision. Both are published on the uniform page with prices.

**`chapelOrService`** — count only what happens **in school time as a normal part of the week**. An optional lunchtime group is not the same as a timetabled chapel period, and a Catholic school that holds four Masses a year is not the same as one that holds weekly liturgy.

**`houseSystem`** — nearly every school has houses. What separates them is whether the house does anything: points, competition, captains, a swimming carnival that people care about. If houses are only used for splitting the roll, that is a `1`.

**`formalEvents`** — name them. "Speech Night", "Founder's Day", "Investiture", "Valedictory Dinner", "Head of the River". A school with five named annual ceremonies runs differently from one with a final assembly.

---

## RULES

1. **Quote and link.** Uniform pages, enrolment pages and "life at" pages are all public — there is little excuse for `null` here.
2. **`0` means checked-and-absent. `null` means not checked.** A secular public school with no chapel is a `0`, not a blank.
3. **Do not rate strictness, discipline or behaviour.** If you find yourself writing "the school has high expectations", stop — that sentence appears on all 22 websites and carries no information.
4. Never infer formality from the school's sector, religion or whether it is single-sex. A Catholic boys' school is not automatically formal, and a public co-ed school is not automatically relaxed. Check the uniform page.
5. No individual names.
6. Do not say which schools are better.

Return JSON. Say where you stopped.
