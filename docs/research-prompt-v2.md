# DATA COLLECTION TASK — Perth secondary schools

## READ THIS FIRST

**Do the research now and return filled data.**

Do **not** propose a research programme. Do not scope, cost, estimate hours, compare methodologies, or produce an agenda. A previous attempt returned a 4,500-word research plan quoting 400–800 researcher-hours. That is not what is wanted.

Return **populated data objects**, one school at a time, in the exact formats given below.

If you cannot complete all 22 schools, complete as many as you can **fully** and list by name the ones you did not reach. Partial real data beats complete coverage of guesses.

---

## WHAT THIS IS FOR

A tool that matches a child's profile to Perth secondary-school *environments*. It is not a ranking and never recommends a school independently of a child. Every school is scored **relative to the other 21**, not on an absolute scale.

---

## THE 22 SCHOOLS

1. Melville Senior High School — Academic Extension
2. Perth Modern School
3. John Curtin College of the Arts
4. Rossmoyne Senior High School
5. Willetton Senior High School
6. Applecross Senior High School — Academic Extension
7. Shenton College — HPL / GATE
8. Fremantle College
9. Aquinas College
10. Scotch College
11. Christ Church Grammar School
12. Hale School
13. Wesley College
14. Iona Presentation College
15. Santa Maria College
16. All Saints' College
17. Corpus Christi College
18. Kennedy Baptist College
19. Carey Baptist College — Harrisdale
20. CBC Fremantle
21. Seton Catholic College
22. **John XXIII College** — to be added

---

## WHAT WE ALREADY HAVE — DO NOT RE-RESEARCH THIS

Sport and music program data is largely complete. **Skip it.** Only correct it if you find something that directly contradicts what is listed here, in which case say so explicitly and cite the source.

Already established:

- **Competition bodies.** PSA (boys): Aquinas, Christ Church, Hale, Scotch, Wesley — rowing, cricket, basketball, tennis, volleyball, water polo, swimming, athletics, golf, surfing. IGSSA (girls): Iona, Santa Maria. ACC: the Catholic and independent group. Public schools compete via School Sport WA.
- **Named specialist sport programs.** Willetton basketball · Applecross tennis · Melville netball · Rossmoyne volleyball · Fremantle College AFL and beach volleyball · Kennedy basketball and cricket · John Curtin soccer (Perth Glory Academy) · Carey Harrisdale basketball and soccer · rowing at all five PSA schools.
- **Music.** Established for 19 of 21. Orchestral strength at Perth Modern, John Curtin, Rossmoyne, Christ Church, Hale, Wesley. Production strength at John Curtin and Fremantle College only. Selective-entry music at Perth Modern, John Curtin, Rossmoyne, Fremantle College, Carey Harrisdale.
- **John XXIII already confirmed:** Catholic independent co-ed Pre-K–12, Mount Claremont, 24.6 ha. Loreto Claremont + St Louis merger, Loreto and Jesuit traditions. ACC member, sub-association NAS, code JTC. Years 7–12 enrolment 1,077 (one source says 1,087). 2026 fees: $15,914 tuition Years 7–9, $1,401 resource fee per student, $3,320 capital levy per family, $4,500 first-child acceptance fee. Music: 400+ students, symphony and chamber orchestras, concert and wind bands, swing bands, choirs, contemporary bands; ensembles open to all instrumental students, smaller groups auditioned. Pastoral: year groups plus houses, home rooms within houses, home-room teacher as first contact, House Coordinator and Assistant Deputy. First in ACC A Division swimming 2025. Year 10 Outdoor Education elective.

---

# THE SIX TASKS

Work through these **in order**. Return each task's output before starting the next.

---

## TASK A — School size (all 22)

The easiest and among the most valuable. ACARA's downloadable School Profile dataset carries most of it. The latest complete release is **2025 data**; label it as such.

```js
"Exact School Name": {
  size:{ totalEnrolment:0, year7Cohort:0, yearRange:"7-12", dataYear:2025, source:"" }
}
```

Use `null` for anything you cannot establish. Distinguish whole-school enrolment from Years 7–12 where a school runs K–12.

---

## TASK B — Pastoral structure (all 22)

**This is the highest-value task in the list.** The tool measures whether a child will tell anyone they're struggling, and currently has nothing to compare it against.

```js
"Exact School Name": {
  pastoral:{
    system:"vertical house" | "horizontal year" | "both" | null,
    homeRoomOrTutorGroupSize:0,
    sameAdultAcrossYears:true | false | null,
    counsellorsOrPsychologists:0,
    formalReportsPerYear:0,
    structureNote:"",          // describe what actually exists, in plain words
    source:""
  }
}
```

**Code structure, not effectiveness.** That a house system exists is a fact. Whether it makes children feel known is not — leave that to `unknowns`. If counsellor numbers aren't published, use `null` rather than inferring from school size.

---

## TASK C — Access and selectivity (all 22, every strong program)

**New field, and the most important schema change.** A strength score cannot tell a family whether a program is open to their child.

Perth Modern is academically selective with 225 Year 7 places. Rossmoyne's classical music needs an audition, aptitude test and interview. John XXIII's ensembles are open to every instrumental student. Those are completely different propositions and currently look identical.

For **every program already recorded as a strength** (see the list above), plus academic entry at every school:

```js
"Exact School Name": {
  access:{
    academic:"open" | "elective" | "auditioned" | "selectiveEntry",
    music:"open" | "elective" | "auditioned" | "selectiveEntry",
    sport:"open" | "trial" | "specialistEntry",
    notes:"",       // what the gate actually is, and when it applies
    source:""
  }
}
```

- `open` — available to any enrolled student
- `elective` — choose it like a subject, no gate
- `auditioned` / `trial` — gated after enrolment
- `selectiveEntry` / `specialistEntry` — gated **before** enrolment, decided at Year 7 entry

---

## TASK D — The public-school scoring check (8 schools)

The dataset may carry a sector bias. On three attributes, **all five lowest-scoring schools are public**:

| Attribute | Public mean | Fee-paying mean | Bottom 5 |
|---|---|---|---|
| `visibility` — do staff notice a child and direct opportunity to them | 75.1 | 88.0 | 5/5 public |
| `teacher` — does the school's effect run through teacher relationships | 76.0 | 86.7 | 5/5 public |
| `enterprise` — leadership and student-initiated activity | 69.5 | 78.2 | 5/5 public |

These are two of the three most powerful variables in the matching engine, so a systematic bias here distorts everything.

For the **eight public schools** — Melville, Perth Modern, John Curtin, Rossmoyne, Willetton, Applecross, Shenton, Fremantle College — find evidence that speaks to these three. Do **not** tell us whether the score is right or wrong. Return the evidence.

```js
"Exact School Name": {
  evidence:{
    visibility:[ {claim:"", source:"", year:0} ],   // how students are identified for
                                                    // extension, leadership, opportunity
    teacherContinuity:[ {claim:"", source:"", year:0} ],  // staff turnover, mentoring
                                                          // structures, staff stability
    enterprise:[ {claim:"", source:"", year:0} ]    // student leadership, entrepreneurship,
                                                    // student-run activity
  }
}
```

**Public School Review reports** from the WA Department are the priority source — they comment directly on teaching quality and student support and are written by people with no incentive to sell. Annual reports carry staffing data.

---

## TASK E — Program gaps (all 22)

Three-state scale: `2` notable strength · `1` offered · `0` researched and not found · omit the key entirely if not researched.

```js
"Exact School Name": {
  sport:{ hockey:0, rugby:0, dance:0 },
  arts:{ visualArt:0, drama:0, filmMedia:0 },
  other:{ robotics:0, languages:0, service:0, debating:0 }
}
```

Also needed: **music data for Melville and Willetton**, the only two schools with none.

For `languages`, name which languages and to what year level. For `drama` and `visualArt`, note facilities — theatre, kiln, studios — since those distinguish real programs from timetabled subjects.

---

## TASK F — Fees, total cost and deadlines (all 22)

Tuition alone understates what a family pays. John XXIII's published tuition is $15,914; the actual recurring cost is $20,635.

```js
"Exact School Name": {
  cost:{
    tuitionYear7:0,
    compulsoryPerStudent:0,      // resource, technology, curriculum fees
    compulsoryPerFamily:0,       // building or capital levies
    oneOffAcceptance:0,
    totalRecurringOneChild:0,
    feeYear:2026,
    source:""
  },
  entry:{
    route:"local intake" | "selective test" | "audition" | "open application" | "waitlist",
    applicationDeadline:"",      // exact date if published
    forEntryYear:2027,
    source:""
  }
}
```

Deadlines matter enormously and families miss them. Rossmoyne's Year 7 2027 applications **closed 20 March 2026**. Flag every school where the next deadline has already passed.

---

# RULES

1. **Cite every claim** — title plus URL. No claim without a source.
2. **Never guess a number.** Use `null` and say which of these applies: not researched · searched but not found · found but out of date · sources conflict.
3. **Preserve contradictions.** John XXIII's enrolment appears as both 1,077 and 1,087. Record both. Do not silently pick one.
4. **Date everything.** ACARA's latest complete profile is 2025 data even when accessed in 2026.
5. **Facts before judgements.** Extract what is documented before forming any view about what it means.
6. **Do not rank the schools.** Do not recommend. Do not write anything that could appear in a prospectus.
7. **Structure is not effectiveness.** That a school has a house system is a fact. That it makes children feel known is a claim requiring separate evidence.

---

# PRIORITY SOURCES

- **ACARA My School / School Profile downloads** — enrolment, ICSEA, socioeconomic and language background. Task A lives here.
- **WA Public School Review reports** — independent external reviews, genuinely frank. Task D lives here.
- **School annual reports** — read the board section, financials and staffing, not the principal's letter.
- **Parent and wellbeing handbooks** — Task B lives here. Prospectuses will not have it.
- **Dated fee schedules and enrolment policies** — Task F.
- **PSA, IGSSA and ACC fixtures and results** — the strongest sport evidence, since a school in the hockey draw definitely fields hockey.
- **WA Department selective-schools and specialist-program pages** — Task C.

---

# HOW TO RETURN IT

One task at a time, in order A → F. Within each task, one school per block.

Do not summarise or compress to fit everything into one response. If you run out of room, stop and say where you got to. **Truncated data is worse than partial data, because the gaps stop being visible.**

Start with **Task A** now.
