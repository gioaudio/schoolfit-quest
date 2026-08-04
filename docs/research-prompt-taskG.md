# TASK G — Lived experience, staff signals and community evidence

## READ THIS FIRST

**Do the research now and return filled data.** Do not propose a research plan, scope a programme, or estimate hours. Return populated data objects in the exact format below, one school at a time.

If you cannot complete all 21, complete as many as you can **fully**, in the priority order given, and name the ones you did not reach.

---

## WHY THIS TASK EXISTS

A Perth school-matching tool holds 124 sources across 21 schools. **Roughly 80% of them are the schools' own websites.** Only 23 are community or lived-experience sources, and exactly **one** is a staff review.

Six schools have no independent evidence at all: **Aquinas, Applecross, Shenton, Carey Harrisdale, Scotch, Hale.**

This matters because several of the tool's most influential attributes are culture judgements — how likely staff are to notice a quiet child, whether teacher relationships are real or advertised, how status-conscious the culture is. Those currently rest almost entirely on marketing material.

### The specific hypothesis to test

In the current data, **every one of the five lowest-scoring schools on "teacher" and "visibility" is a public school.** Independent schools have communications teams; public schools have a Department template.

So there is a real possibility the tool is not measuring which schools notice children — **it is measuring which schools have better marketing budgets.**

Your job is to find evidence that either supports or breaks that. Do not assume it is true.

---

## THE SCHOOLS, IN PRIORITY ORDER

**Tier 1 — no independent evidence exists at all. Start here.**
1. Scotch College
2. Hale School
3. Aquinas College
4. Applecross Senior High School
5. Shenton College
6. Carey Baptist College — Harrisdale

**Tier 2 — the public schools, where the bias question sits.**
7. Melville Senior High School
8. Perth Modern School
9. John Curtin College of the Arts
10. Rossmoyne Senior High School
11. Willetton Senior High School
12. Fremantle College

**Tier 3 — thin but not empty.**
13. Christ Church Grammar School
14. Wesley College
15. Iona Presentation College
16. Santa Maria College
17. All Saints' College
18. Corpus Christi College
19. Kennedy Baptist College
20. CBC Fremantle
21. Seton Catholic College
22. John XXIII College *(being added to the tool)*

---

## WHERE TO LOOK

### Staff evidence — the most underused source

- **SEEK company reviews, Indeed and Glassdoor.** Teachers reviewing the school as a workplace. Revealing about leadership, workload, behaviour management and morale.
- **The school's own job advertisements.** What a school recruits for is what it is building. What it advertises *repeatedly* is what it cannot keep. **Recurring vacancies in the same role are a turnover signal.**
- **Annual report staffing sections** — headcount, turnover, length of service where published.

Staff continuity is a direct proxy for whether a child gets the same trusted adults across six years. That is the `teacher` attribute, measured from the inside.

### Newsletter analysis — countable, not impressionistic

Read a year of newsletters and **count** how often each category is celebrated: sport, music, visual and performing arts, academic achievement, service and community, student leadership.

What a school features every week across a year is a far better measure of its values than any values statement. This is countable evidence for how broad or how sport-dominated a culture actually is.

### Community and lived experience

- **Reddit** — `site:reddit.com/r/perth [school name]`, plus r/australia. School-choice threads are frequent and candid.
- **Whirlpool forums**, Education section.
- **Facebook** suburb and parent groups — public posts only.
- **Alumni accounts** — "what was your school actually like" threads give a ten-year-later view.
- **LinkedIn alumni destinations** — where graduates actually end up.
- **Local news** — WAtoday, PerthNow, The West Australian. Incidents, disputes, departures, complaints.

### Official but frank

- **WA Public School Review reports** — external Department reviews. These comment directly on teaching quality, student support and leadership, and are written by people with nothing to sell. For the Tier 2 schools these are the single best source.

---

## WHAT FAMILIES ACTUALLY WANT TO KNOW

Search against these questions specifically. They are what no prospectus answers:

1. Does a capable but quiet child get noticed, or do they coast unseen?
2. What happens when a student is struggling — how fast does anyone act?
3. How is the school with a child who does not fit the mould?
4. Does the same adult follow a child across years, or does it reset annually?
5. Does the stated pastoral care match lived experience?
6. How competitive is the parent body, and what does that cost a family that is not?
7. What does a year actually cost beyond tuition?
8. Are the strong programs strong for everyone, or only for the selected few?

---

## OUTPUT FORMAT

```js
"Exact School Name": {
  lived:{
    themes:[
      {
        theme:"",                      // one sentence, attributed language only
        supportingAccounts:0,          // independent accounts found — minimum 3 to report
        stakeholder:"parent"|"student"|"alumni"|"staff"|"mixed",
        yearsSpanned:"2023-2026",
        contrarySearched:true,         // MUST be true — did you look for the opposite?
        contraryFound:true|false,
        contraryNote:"",
        quotes:[ {text:"", source:"", year:0} ],
        confidence:"high"|"moderate"|"low",
        relatesTo:"teacher"|"visibility"|"grounded"|"peerAmbition"|"peerIntensity"|"pastoral"|"parentBody"
      }
    ],

    staffSignals:{
      reviewPlatform:"",               // SEEK / Indeed / Glassdoor, or "none found"
      reviewCount:0,
      averageRating:null,
      recurringVacancies:[""],         // roles advertised more than once in 24 months
      turnoverNote:"",
      annualReportStaffData:"",
      sources:[["",""]]
    },

    newsletterMix:{
      newslettersSampled:0,
      period:"",                       // e.g. "Feb 2025 - Nov 2025"
      counts:{ sport:0, music:0, arts:0, academic:0, service:0, leadership:0 },
      note:"",
      source:""
    },

    marketingBudgetTest:{              // Tier 2 public schools especially
      evidenceOfNoticing:"",           // documented processes for identifying and
                                       // extending students — extension, leadership,
                                       // opportunity. NOT what the school claims.
      publicSchoolReviewFindings:"",   // what the Department review actually said
      sources:[["",""]]
    },

    notFound:[""]                      // what you searched for and could NOT find.
                                       // This field is as valuable as the others.
  }
}
```

---

## RULES — these are not optional

1. **Three independent accounts minimum** before you report a theme. One furious post tells you about that family, not the school. If you only find one or two, put it in `notFound` and say so.

2. **Actively search for the opposite.** For every theme, run a search designed to disconfirm it. Set `contrarySearched:true` only if you genuinely did. If contrary evidence exists, record it — a theme that survives a real attempt to break it is worth far more than one that was never tested.

3. **Date-weight hard.** A 2016 thread describes a school with a different principal, different staff and different families. Anything older than roughly four years is background, not evidence. Record the years.

4. **Attribute, never assert.** Write *"several parent accounts describe X"*. Never *"the school is X"*. This feeds a published tool about named real schools.

5. **No identifiable individuals.** Do not include the names of teachers, principals, students or families, and do not quote anything that would identify them. Strip names from quotes.

6. **Separate the parent body from the education.** Much community commentary about "culture" is actually about the other parents. That is legitimately useful and belongs under `relatesTo:"parentBody"` — but it is not a statement about teaching.

7. **Expect a skewed sample.** People post when angry or when boasting. The satisfied middle is silent everywhere. Say so in `confidence` rather than pretending the sample is representative.

8. **Do not convert anything to a score.** Return evidence. Scoring happens elsewhere, transparently.

9. **`notFound` is real output.** "Searched SEEK, no reviews exist for this school" is a finding. It tells us the silence is genuine rather than unexamined.

---

## HOW TO RETURN IT

One school per block, in the priority order above. Tier 1 first — those six have nothing at all, so anything you find is pure gain.

Do not compress or summarise to fit more in. If you run out of room, stop and say which school you reached. **Truncated data is worse than partial data, because the gaps stop being visible.**

Start with **Scotch College** now.
