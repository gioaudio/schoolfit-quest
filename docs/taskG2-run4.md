# Perth secondary schools — independent evidence gathering
## Run 4 of 5 · Independent schools with thin evidence

---

# 1. WHAT THIS IS FOR

There is a web tool called **SchoolFit Quest**. A child aged roughly 10 to 12 answers about fifty forced-choice questions, a parent answers a shorter set, and the tool compares the resulting profile against 21 Perth secondary schools. It suggests which school *environments* might suit that particular child.

It is explicitly **not a school ranking**. It never says one school is better than another. It treats expensive, selective, private, public, co-ed and single-sex as neither good nor bad. Its whole purpose is fit between a specific child and a specific environment.

To do that it holds, for each school, a set of scored attributes on a 0–100 scale. Eleven of them are **culture judgements**:

| Attribute | What it is meant to capture |
|---|---|
| `teacher` | How much of the school's effect runs through teacher relationships and mentoring |
| `visibility` | How likely staff are to notice a student and direct opportunity to them, rather than waiting to be asked |
| `grounded` | Social breadth of the intake, and how low-status-conscious the culture is |
| `peerAmbition` | How ambitious and engaged the student cohort is on average |
| `peerIntensity` | How hard the cohort runs — pace, competitiveness, assessment pressure |
| `focus` | How consistently classrooms are focused and on-task |
| `structure` | How much scaffolding, follow-up and clear expectation the school provides |
| `autonomy` | How much latitude students get over how they work |
| `social` | Size and activity of the social and co-curricular ecosystem |
| `pressure` | How much pressure the environment applies as standard |
| `breadth` | How many genuine pathways a student can pursue at once |

---

# 2. THE PROBLEM YOU ARE SOLVING

An audit of the tool's evidence base found this:

- **124 sources across 21 schools**
- **97 of them — 78% — are the schools' own websites**
- 20 community sources, 4 government, 1 news article, 2 staff reviews
- **Six schools have zero independent sources of any kind**
- Ten of the twenty-one schools have an internal note admitting the community evidence was too thin to use

So roughly **180 of the 231 culture values rest wholly or mainly on what each school says about itself.**

When the tool tells a family *"teacher relationships are a visible strength here"*, for most schools that traces back to a page written by the school's marketing team.

### The specific hypothesis to test

In the current data, **every one of the five lowest-scoring schools on `teacher` and `visibility` is a public school.** Independent schools average four to six pages of polished self-description; public schools have thinner sites and a Department template.

So there is a real possibility the tool is not measuring which schools notice children — **it may be measuring which schools have better marketing budgets.**

Do not assume that is true. Find evidence that supports or breaks it.

**Everything in this task is aimed at evidence the school does not control.**

---

# 3. THE FULL COMPARISON SET

For context, the tool covers these 22 schools. Other runs are covering the ones not in your list.

1. Melville Senior High School
2. Perth Modern School
3. John Curtin College of the Arts
4. Rossmoyne Senior High School
5. Willetton Senior High School
6. Applecross Senior High School
7. Shenton College
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
22. John XXIII College

---

# 4. YOUR SCHOOLS FOR THIS RUN

Do **only** these 4. Do not stray outside the list — other runs are handling the rest, and duplicated work is wasted.

### 1. Wesley College

### 2. Iona Presentation College

### 3. Santa Maria College

### 4. All Saints' College

Independent schools — no WA Public School Review exists, so record `exists:false`. Iona is currently the **only school in the whole dataset with any staff-review source at all**, so check carefully whether more have appeared since, and whether the others have any.

---

# 5. HOW TO WORK

**Do the research now and return filled data.** Do not propose a research plan, scope a programme, estimate hours, or write a methodology essay. A previous attempt at this task returned 4,500 words of research proposal and zero data. That is not what is wanted.

Complete all 4 schools. If you genuinely cannot, complete as many as you can **fully** and name the ones you did not reach. **Truncated data is worse than partial data, because the gaps stop being visible.**

### One thing already established — do not repeat it

**Staff turnover figures are not published anywhere.** Australian Charities and Not-for-profits Commission filings give headcount and full-time-equivalent numbers only — no resignations, no retention rate, no median tenure, no length-of-service distribution. A previous run confirmed this. Record headcount and move on rather than hunting for turnover percentages.

---

# 6. TASK ONE — Newsletter counting *(the main job)*

Find each school's newsletter or e-news archive and read **a full year of editions, 2025 where available**.

**Why this matters:** a school's values statement is written once by a marketing team. Its newsletter is written forty times a year by people simply reporting what happened. Nobody curates a year of newsletters to project an image. So what appears week after week is what the school actually spends its time on — which is real evidence for `breadth` and status-consciousness.

### Counting method

Count **issue-level presence**, not article count. A category scores a **maximum of one per edition**. This stops recurring fixture lists and standing navigation links from swamping the result. Exclude permanent menu links.

Count a category when an edition carries a substantive notice, achievement, programme or dated activity in it.

- **sport** — fixtures, results, carnivals, teams
- **music** — ensembles, concerts, tuition, eisteddfods
- **arts** — visual art, drama, film, performance *other than* music
- **academic** — results, competitions, extension, subject achievement
- **service** — fundraising, volunteering, reconciliation, community participation
- **leadership** — student leadership programmes, appointments, handovers. Not ordinary assemblies.

```js
"Wesley College": {
  newsletterMix:{
    newslettersSampled: 0,
    period: "",                  // e.g. "Feb 2025 - Dec 2025"
    counts: { sport:0, music:0, arts:0, academic:0, service:0, leadership:0 },
    note: "",                    // any coding decisions you had to make
    source: ""
  }
}
```

**This is communications priority, not participation.** It shows what a school chooses to celebrate. It does not show how many students take part. State that in the note.

*A completed example, from Scotch College: 18 editions sampled across Feb–Dec 2025, giving academic 18, sport 17, service 15, music 13, arts 9, leadership 7. Academic appeared in every issue and sport in all but one — which quietly contradicts the assumption that a PSA school is sport-dominated.*

---

# 7. TASK TWO — Staff signals

Teachers reviewing a school as a workplace have no reason to flatter it. **Staff continuity is also the `teacher` attribute measured from the inside** — a child needs the same adults across six years for mentoring to mean anything.

```js
  staffSignals:{
    seek:      { reviewCount:0, rating:null, recentVisible:0 },   // recent = 2023-2026
    glassdoor: { reviewCount:0, rating:null, recentVisible:0 },
    indeed:    { reviewCount:0, rating:null, recentVisible:0 },
    staffHeadcount: "",          // from ACNC filing or annual report, WITH the year
    currentVacancies: [""],      // roles on the careers page today
    recurringVacancy: null,      // a role you VERIFIED advertised twice in 24 months,
                                 // otherwise null
    notablePoints: [""],         // specific, dated, attributable observations
    sources: [["",""]]
  }
```

- **Never add review counts across platforms.** Cross-posting between SEEK, Indeed and Glassdoor cannot be excluded. Report each separately.
- **Never report a recurring vacancy unless you verified the same role advertised twice.** A current vacancy on its own is not a turnover signal.
- Distinguish teaching roles from administrative, coaching and tutor roles — a review by a swim instructor says less about classroom culture than one by a classroom teacher.

---

# 8. TASK THREE — Independent review

```js
  independentReview:{
    exists: true,
    reviewYear: 0,
    teachingQuality: "",         // what the report actually said, quoted or close to it
    studentSupport: "",
    areasForImprovement: "",
    source: ""
  }
```

**For public schools:** find the **WA Public School Review** report published by the Western Australian Department of Education. These are written by external assessors and comment directly on teaching quality, student support, leadership and identified areas for improvement. Quote or closely paraphrase what the report actually says — do not summarise it into blandness.

**For independent and Catholic schools:** set `exists:false`. No equivalent external inspection is published in Western Australia. **Record this explicitly, because the absence is itself a finding** — it means those schools are assessed almost entirely on their own material, and the tool needs to know that about its own evidence base.

---

# 9. TASK FOUR — Community check *(time-boxed)*

Search Reddit (particularly r/perth), Whirlpool forums, and public Facebook parent or suburb groups. Give it a reasonable effort, then stop. A previous run spent hours here and surfaced one low-confidence theme, so this is deliberately the smallest part of the task.

```js
  community:{
    themeFound: false,
    theme: "",                   // attributed language ONLY:
                                 // "several parent accounts describe..."
                                 // never "the school is..."
    supportingAccounts: 0,       // minimum 3 independent accounts to report anything
    contrarySearched: true,      // must genuinely be true
    contraryNote: "",
    confidence: "low",
    searchedAndFoundNothing: [""]
  }
```

- **Three independent accounts minimum** from 2023–2026 before you report a theme. One angry post tells you about that family, not the school.
- **Actively search for the opposite.** For every theme, run a search designed to disconfirm it. A theme that survives a real attempt to break it is worth far more than one never tested.
- **Expect a skewed sample.** People post when angry or when boasting. The satisfied middle is silent everywhere. Reflect that in `confidence`.
- **Separate the parent body from the education.** Much community commentary about "culture" is really about the other parents. Useful, but it is not a statement about teaching — say which it is.

---

# 10. RULES

1. **Cite everything** — title plus URL for every claim.
2. **`null` for unknown, never a guess.** Distinguish "searched and found nothing" from "did not search".
3. **Date everything.** Anything before 2023 is background, not evidence.
4. **Attribute, never assert.** This feeds a published tool that names real schools. Write "several accounts describe X", not "the school is X".
5. **No named individuals anywhere.** No teachers, principals, students or families. Strip names from quotes.
6. **Do not rank the schools and do not recommend.** Return evidence. Scoring happens elsewhere.
7. **Do not reproduce marketing language.** If a sentence could appear in the prospectus, it is not evidence.
8. **Silence is a finding.** "No reviews exist on any platform for this school" is genuinely useful output — it tells us the silence is real rather than unexamined.

---

# 11. WHAT TO RETURN

One school per block, in the order listed in section 4, using the exact JavaScript structures above.

Finish with a short list of anything you searched for and could not find.

**Start with Wesley College now.**
