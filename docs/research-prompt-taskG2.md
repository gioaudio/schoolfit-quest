# TASK G2 — Newsletter counts, staff signals and independent reviews

## READ THIS FIRST

**Do the research now and return filled data.** No plan, no scope, no hours.

**Target 5–7 schools per response.** A previous version of this task did one school in exhaustive depth. That depth is no longer wanted — the parts that produced usable output are narrow and mechanical, and this version asks only for those.

If you run out of room, stop and name the schools you reached.

---

## WHAT CHANGED, AND WHY

A first pass on Scotch College established three things worth not repeating:

1. **Staff turnover is not published.** ACNC filings give headcount and FTE but no resignations, retention, tenure or length-of-service. Do not hunt for turnover percentages — they do not exist. Record headcount and move on.
2. **Community themes are low-yield.** Hours of searching Reddit, Whirlpool and Facebook produced one theme at low confidence. Time-box this and record the silence.
3. **Newsletter counting is high-yield and countable.** It is now the primary task.

---

## SCHOOLS, IN PRIORITY ORDER

**Tier 1 — the eight public schools.** These are the priority because a **WA Public School Review** exists for them and is the only genuinely independent external assessment available anywhere in this dataset. Independent schools have no equivalent.

1. Melville Senior High School
2. Perth Modern School
3. John Curtin College of the Arts
4. Rossmoyne Senior High School
5. Willetton Senior High School
6. Applecross Senior High School
7. Shenton College
8. Fremantle College

**Tier 2 — no independent evidence exists at all.**
9. Hale School
10. Aquinas College
11. Carey Baptist College — Harrisdale

**Tier 3 — everything else.**
12. Christ Church Grammar School · 13. Wesley College · 14. Iona Presentation College · 15. Santa Maria College · 16. All Saints' College · 17. Corpus Christi College · 18. Kennedy Baptist College · 19. CBC Fremantle · 20. Seton Catholic College · 21. John XXIII College

*(Scotch College is complete — skip it.)*

---

## TASK 1 — Newsletter counting *(the main job)*

Find the school's newsletter archive and read **a full year of editions, 2025 where available**.

Count **issue-level presence**, not article count: a category scores a maximum of **one per edition**. This stops recurring fixture lists and standing navigation links from swamping the result. Exclude permanent menu links.

Count a category when an edition carries a substantive notice, achievement, programme or dated activity in it.

- **sport** — fixtures, results, carnivals, teams
- **music** — ensembles, concerts, tuition, eisteddfods
- **arts** — visual art, drama, film, performance *other than* music
- **academic** — results, competitions, extension, subject achievement
- **service** — fundraising, volunteering, reconciliation, community participation
- **leadership** — student leadership programmes, appointments, handovers *(not ordinary assemblies)*

```js
"Exact School Name": {
  newsletterMix:{
    newslettersSampled:0,
    period:"",                   // e.g. "Feb 2025 - Dec 2025"
    counts:{ sport:0, music:0, arts:0, academic:0, service:0, leadership:0 },
    note:"",                     // any coding decisions you had to make
    source:""
  }
}
```

This is **communications priority, not participation**. It shows what a school chooses to celebrate, which is a real signal about culture. It does not show how many students take part. Say so.

---

## TASK 2 — Staff signals *(fast and factual)*

```js
  staffSignals:{
    seek:{ reviewCount:0, rating:null, recentVisible:0 },      // recent = 2023-2026
    glassdoor:{ reviewCount:0, rating:null, recentVisible:0 },
    indeed:{ reviewCount:0, rating:null, recentVisible:0 },
    staffHeadcount:"",           // from ACNC filings or annual report, with year
    currentVacancies:[""],       // roles advertised on the careers page today
    recurringVacancy:null,       // a role verifiably advertised more than once
                                 // in 24 months, or null. Do not guess.
    notablePoints:[""],          // any specific, dated, attributable observation
    sources:[["",""]]
  }
```

**Do not add review counts across platforms** — cross-posting cannot be excluded. Report each separately.

**Do not report a recurring vacancy unless you can verify the same role advertised twice.** A current vacancy on its own is not a turnover signal.

---

## TASK 3 — Independent review *(Tier 1 schools especially)*

For the eight public schools, find the **WA Public School Review** report and extract what it actually says about teaching quality, student support, leadership and identified areas for improvement.

This is the single most valuable source in the whole project, because it is written by external assessors with nothing to sell.

```js
  independentReview:{
    exists:true|false,
    reviewYear:0,
    teachingQuality:"",          // what the report actually said, quoted or close
    studentSupport:"",
    areasForImprovement:"",
    source:""
  }
```

For independent and Catholic schools, set `exists:false` and note that no equivalent external inspection is published. **That absence is itself a finding** — it means those schools are assessed almost entirely on their own material, and the tool should know that.

---

## TASK 4 — Community check *(time-boxed, do not over-invest)*

Search Reddit, Whirlpool and public Facebook groups. Give it a reasonable effort, then stop.

Report a theme **only** if three independent accounts from 2023–2026 agree. Otherwise record the silence.

```js
  community:{
    themeFound:true|false,
    theme:"",                    // attributed language only: "several parent
                                 // accounts describe..." never "the school is..."
    supportingAccounts:0,
    contrarySearched:true,
    contraryNote:"",
    confidence:"low"|"moderate"|"high",
    searchedAndFoundNothing:[""] // what you looked for and did not find
  }
```

No named individuals. Strip names from any quote.

---

## RULES

1. Cite everything — title plus URL.
2. `null` for unknown, never a guess. Distinguish "searched, not found" from "not searched".
3. Date everything. Anything before 2023 is background, not evidence.
4. Attribute, never assert. This feeds a published tool naming real schools.
5. No named individuals anywhere.
6. Do not rank the schools or recommend. Return evidence only.
7. Silence is a finding. "No reviews exist on any platform" is useful output.

---

## RETURN FORMAT

One school per block, Tier 1 first. **Aim for 5–7 schools.** Do not compress to fit more in — if you are running out of room, stop and say where you got to.

Start with **Melville Senior High School** now.
