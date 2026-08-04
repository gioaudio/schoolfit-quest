# SchoolFit Quest — research brief

Hand this to a research assistant or another model. It specifies exactly what is needed and in what format, so the output can be pasted straight into `src/`.

**Read the calibration section first.** Getting the 0–100 scale wrong is the single most common way this data goes bad.

---

## THE SCHOOLS

All 21 currently in the tool, plus John XXIII to be added. Every research task below applies to **all of them** unless it says otherwise.

| # | School | Sector | Fee | Evidence | Sport data | Music data |
|---|---|---|---|---|---|---|
| 1 | Melville Senior High School — Academic Extension | Public | $500 | High | yes | **MISSING** |
| 2 | Perth Modern School | Public | $500 | High | yes | yes |
| 3 | John Curtin College of the Arts | Public | $700 | High | yes | yes |
| 4 | Rossmoyne Senior High School | Public | $650 | High | yes | yes |
| 5 | Willetton Senior High School | Public | $650 | High | yes | **MISSING** |
| 6 | Applecross Senior High School — Academic Extension | Public | $650 | Medium | yes | yes |
| 7 | Shenton College — HPL / GATE | Public | $700 | High | yes | yes |
| 8 | Fremantle College | Public | $750 | High | yes | yes |
| 9 | Aquinas College | PSA (boys) | $18,000 | Medium | yes | yes |
| 10 | Scotch College | PSA (boys) | $35,932 | High | yes | yes |
| 11 | Christ Church Grammar School | PSA (boys) | $35,000 | High | yes | yes |
| 12 | Hale School | PSA (boys) | $34,000 | Medium | yes | yes |
| 13 | Wesley College | PSA (boys) | $33,000 | Medium | yes | yes |
| 14 | Iona Presentation College | IGSSA (girls) | $12,000 | High | yes | yes |
| 15 | Santa Maria College | IGSSA (girls) | $17,349 | High | yes | yes |
| 16 | All Saints’ College | Independent / Catholic | $26,716 | High | yes | yes |
| 17 | Corpus Christi College | Independent / Catholic | $9,390 | Medium | yes | yes |
| 18 | Kennedy Baptist College | Independent / Catholic | $11,990 | Medium | yes | yes |
| 19 | Carey Baptist College — Harrisdale | Independent / Catholic | $11,928 | Medium | yes | yes |
| 20 | CBC Fremantle | Independent / Catholic | $11,900 | High | yes | yes |
| 21 | Seton Catholic College | Independent / Catholic | $6,029 | Medium | yes | yes |
| 22 | **John XXIII College** (to be added) | Independent / Catholic | ? | — | **MISSING** | **MISSING** |

**Reading the table:**
- **"assoc only"** in the sport column means the data came from association membership (PSA/IGSSA) rather than the school's own pages — worth verifying per school.
- **Evidence: Medium** flags a school whose overall profile rests on thinner sourcing. Those seven are the best candidates for the Tier B and Tier C digging described below.
- Fees are the figures currently in the dataset and will have drifted. Re-check all of them.

---

## Rules that apply to everything

1. **Cite a source for every claim.** Title plus URL. School's own pages, government reporting, association fixture lists. No claim without a link.
2. **Never guess a number to fill a gap.** If you can't find it, write `null` and say so. "Not researched" and "researched, found nothing" are different states and both are more useful than an invented value.
3. **Separate fact from judgement.** Whether a school fields hockey is a fact. Whether its culture is "grounded" is an interpretation — label it as such and give the evidence you based it on.
4. **Prefer primary sources.** A school's own co-curricular page beats a directory listing. An association fixture list beats both, because a school appearing in the hockey draw definitely fields hockey.
5. **Date everything.** Programs, fees and staff change every year.

---

## CALIBRATION — read before scoring anything

The 21 existing schools are scored **relative to each other**, not on an absolute scale. They are all reasonable Perth schools, so the numbers sit high and narrow. If you score a new school on an intuitive 0–100 scale you will give it 70s, and it will rank last for reasons that have nothing to do with the school.

Place any new school **within these observed ranges**:

| Attribute | Range across the 21 | Median |
|---|---|---|
| `academic` | 73–100 | 84 |
| `teacher` | 66–91 | 85 |
| `peerAmbition` | 69–100 | 83 |
| `peerIntensity` | 60–99 | 72 |
| `structure` | 73–94 | 87 |
| `autonomy` | 62–89 | 74 |
| `social` | 73–95 | 87 |
| `music` | 69–100 | 91 |
| `tech` | 72–96 | 82 |
| `sport` | 55–99 | 90 |
| `enterprise` | 60–94 | 75 |
| `breadth` | 69–98 | 92 |
| `grounded` | 58–91 | 76 |
| `pressure` | 59–91 | 73 |
| `visibility` | 66–92 | 85 |
| `focus` | 67–99 | 79 |
| `mixedGender` | 0 or 100 | — |

**Method:** for each attribute, ask "where does this school sit against the other 21?" Use the median as your anchor. A school genuinely at the top of the field gets near the max; a school at the bottom gets near the min. Do not use the full 0–100 range.

---

## PRIORITY 1 — data that unlocks a dimension currently locked out of scoring

These are worth more than anything else. The tool already measures these traits in the child, but has no school-side data to compare against, so they cannot influence a single ranking. Each one below converts a measured-but-unused trait into a working one.

### 1a. School size — unlocks `schoolSize`

For each school: **total enrolment**, **Year 7 cohort size**, and **year range** (7–12 or K–12).

Mostly public via My School, annual reports and the schools themselves. Easy, factual, and school size is one of the biggest genuine differences in this set. Currently the tool asks children about it and can do nothing with the answer.

### 1b. Pastoral structure — unlocks `helpSeeking` and `belonging`

For each school:
- House or vertical tutor system? Horizontal year-group structure? Both?
- **Tutor or form group size**
- Is there a named adult who follows a student across multiple years?
- Counsellors or psychologists on staff, and roughly how many per student
- How often the school formally reports to parents

This is the highest-value item on the list. "Will this child tell anyone they're struggling" is the strongest predictor the questionnaire produces, and right now it can only generate a tour question.

### 1c. Outdoor education — unlocks `outdoor`

Compulsory camps or expeditions by year level, duration, and whether there is a dedicated outdoor-ed campus or program. Several Perth schools run multi-week programs; that is a major commitment and currently invisible.

### 1d. Formality markers — unlocks `formality`

Uniform expectations and strictness, assembly frequency and formality, honours/colours/prefect systems, chapel or liturgy frequency, house competition prominence.

Keep this descriptive, not evaluative. Traditional is neither good nor bad — the tool matches it to the child and family, and needs to know which schools are which.

---

## PRIORITY 2 — holes in data that already exists

### 2a. Sub-domain gaps in `src/programs.js`

Using the three-state scale — `2` notable strength, `1` offered, `0` researched and not found, omit entirely if not researched:

- **Dance** — currently 0 of 21 researched, but it's an option children can pick
- **Hockey** — 18 of 21 unknown
- **Rugby** — 19 of 21 unknown
- **Music for Melville and Willetton** — the only two schools with no music data
- **ACC schools' sport lists** — currently from directory listings rather than the schools' own pages. Verify.

### 2b. Domains never researched at all

Same three-state scale, new keys:

- **Visual art** — dedicated studios, specialist or GATE art programs, exhibitions
- **Drama and theatre** — productions per year, theatre facilities, specialist programs
- **Robotics and engineering** — competition teams (FIRST, RoboCup), makerspaces
- **Film and media** — media production facilities, specialist courses
- **Languages** — which languages, to what year level, exchange programs
- **Service and community** — service programs, immersion trips, peer support and mentoring roles
- **Debating and public speaking** — competition participation

Several of these already appear as interest tiles children can pick, and every one of them currently returns "not checked yet".

---

## PRIORITY 3 — improving the softest data

`grounded`, `peerAmbition` and `peerIntensity` are the most interpretive attributes in the dataset and among the most influential. They currently rest on thin evidence.

For each, gather what actually supports a judgement rather than restating the judgement:

- **`grounded`** — ICSEA value, socioeconomic distribution, proportion on scholarships or bursaries, cultural and language diversity, catchment breadth
- **`peerAmbition`** — WACE completion rates, median ATAR, proportion above ATAR 90, university destinations
- **`peerIntensity`** — selectivity of entry, streaming practices, assessment frequency, homework expectations, any published position on academic pressure

Report the underlying figures, not a score. The score can then be derived transparently rather than asserted.

---

## PRIORITY 4 — practical accuracy

- **Current fees** for Year 7, 2026 and 2027 where published. These change annually and the existing figures will drift.
- **Entry requirements**: test dates, scholarship deadlines, waitlist realities, catchment rules for public schools.
- **Feeder school mix**: what proportion of Year 7 arrives from one or two primaries. Hard to source, possibly unpublished — but it drives the `changeTolerance` reading, so worth attempting.

---

## ADDING A NEW SCHOOL — John XXIII College

Return this exact structure. Every field is required.

```js
{
name:"John XXIII College",
short:"John XXIII",
type:"Independent Catholic · co-ed",     // sector · gender · one distinguishing feature
coed:true,
gender:"coed",                            // "coed" | "boys" | "girls"
fee:00000,                                // Year 7 annual tuition, numeric, no symbols
religion:"strong",                        // "secular" | "light" | "strong"
travel:"metro",                           // "local" | "moderate" | "metro"

// Calibrate against the ranges table above. Do NOT use a raw 0-100 scale.
attrs:{
  academic:00, teacher:00, peerAmbition:00, peerIntensity:00, structure:00,
  autonomy:00, social:00, music:00, tech:00, sport:00, enterprise:00,
  breadth:00, grounded:00, pressure:00, visibility:00, focus:00, mixedGender:100
},

strengths:[ "", "", "" ],                 // 3 items, specific and sourced
cautions:[ "", "", "" ],                  // 3 items — real trade-offs, not disclaimers
community:"",                             // one paragraph on how much independent community
                                          // evidence exists, and how much to trust it
evidenceLevel:"High",                     // "High" | "Medium" | "Low"
evidenceNote:"",                          // what the assessment rests on, and what it lacks
groundThemes:[ "", "", "" ],              // 3 things the evidence consistently supports
contradictions:[ "", "" ],                // 2 tensions in the evidence — things that
                                          // genuinely pull against each other
unknowns:[ "", "", "" ],                  // 3 things you could NOT establish
tourQuestions:[ "", "", "" ],             // 3 questions a family should ask on the day
sources:[
  ["", "https://"],                       // 6-8 sources, title + URL
]
}
```

Plus a `programs` entry in the same three-state format:

```js
"John XXIII College": {
  basis:"site",                           // "site" | "association" | "both"
  sport:{ /* afl, soccer, basketball, netball, hockey, cricket, rugby, swimming,
             athletics, rowing, tennis, volleyball, waterpolo, dance, golf, surfing */ },
  music:{ /* orchestral, band, choral, jazz, contemporary, production, tuition,
             guitar, selective */ },
  note:""                                 // one paragraph of plain-language findings
}
```

### Notes specific to John XXIII

- Confirm which sporting association it competes in (ACC is likely, but verify) — that determines the baseline sport list.
- It has both Jesuit and Loreto heritage. That shapes the culture claims and belongs in `groundThemes`.
- Its Mount Claremont location matters for `travel` relative to the existing set, which is weighted towards the southern suburbs.
- `contradictions` should be real. Every school has tensions between what it says and what it is. Two genuine ones are worth more than three flattering observations.

---

## WHERE TO LOOK — beyond the school's own website

A prospectus tells you what a school wants to be. These tell you what it is.

### Tier A — official, independent, and often unflattering

The best sources, because they're written by people with no incentive to sell.

- **Public School Review reports** (WA Department of Education) — independent external reviews of public schools. Genuinely frank about weaknesses. Available for every public school in this set.
- **ACARA My School** — ICSEA, total enrolment, year-level breakdown, attendance rates, teaching and non-teaching staff numbers, income sources. This is where the Priority 1 school-size and socioeconomic data lives.
- **School annual reports** — skip the principal's letter. Read the **board report**, the **financials**, and the **staff numbers**. Enrolment trends and staff turnover are in there.
- **AISWA and CEWA** school listings for the independent and Catholic schools.

### Tier B — the goldmine almost nobody checks

- **SEEK and Indeed employer reviews.** Teachers reviewing the school as a workplace. Extraordinarily revealing about leadership, workload, discipline culture and morale — and **staff turnover is a direct proxy for whether a child gets consistent mentoring across six years.** Also check Glassdoor.
- **The school's own job ads.** What a school is recruiting for tells you what it's building. Repeatedly advertising the same role tells you what it can't keep.
- **Newsletter archives.** What a school celebrates every week, over a year, is a far better measure of its actual values than any values statement. Count how often sport appears versus music versus academic versus service.
- **Building and capital projects.** Where the money goes reveals priorities better than any prospectus claim.
- **Scholarship listings.** What a school pays to attract is what it values.
- **Uniform shop price lists and booklists.** Real total cost, which families consistently underestimate.

### Tier C — community and lived experience

Candid, valuable, and the most easily misread. Handle per the rules below.

- **r/perth on Reddit** — school choice threads appear constantly and are unusually frank. Search `site:reddit.com/r/perth [school name]`.
- **Whirlpool forums**, Education section — long-running Australian threads, often with detailed parent accounts.
- **Facebook** — suburb parent groups, and school-specific parent groups. Often closed, but the public posts are still indicative.
- **Bub Hub** and other Australian parenting forums.
- **Alumni on Reddit** — "what was your school actually like" threads give a ten-year-later view that no current source can.
- **LinkedIn alumni data** — where graduates actually end up. A real signal about pathways, and immune to marketing.
- **Local news** — WAtoday, PerthNow, The West Australian. Incidents, complaints, disputes and staff departures.
- **Student-run social accounts**, where they exist. Tone tells you a lot.

### How to use Tier C without poisoning the dataset

Community evidence is where this dataset is most likely to go wrong, so it needs discipline:

1. **One anecdote never sets an attribute.** Look for the same theme raised independently by three or more unconnected people. A single furious post tells you about that family, not the school.
2. **Date-weight it heavily.** A 2016 thread describes a school with a different principal, different staff and different families. Anything older than about four years is background, not evidence.
3. **Expect the sample to be skewed.** People post when they're angry or when they're boasting. The satisfied middle is silent everywhere.
4. **Actively look for disconfirming evidence.** Once a theme emerges, search specifically for people saying the opposite. If you can't find any, that strengthens the finding. If you find plenty, it belongs in `contradictions`, not `groundThemes`.
5. **Write it as attributed, not asserted.** "Several parent accounts describe X" — never "the school is X". The `community` field exists specifically to hold this, and to state how much weight it deserves.
6. **Separate the school from the families.** Much community commentary about "culture" is really about the parent body. That's legitimately useful — it maps to the family social-fit question — but it isn't a statement about the education.

### Watch for these specific things — they're what families actually want to know

- Does a capable but quiet child get noticed, or do they coast?
- What happens when a student is struggling — how quickly does anyone act?
- How is the school with a child who doesn't fit the mould?
- Staff turnover, and whether a child gets the same key adults across years
- Whether the stated pastoral care matches lived experience
- How competitive the parent body is, and what that costs a family that isn't
- What the total annual cost actually comes to, beyond tuition
- Whether the strong programs are strong for everyone or only for the selected few

---

## CHALLENGE WHAT WE ALREADY BELIEVE

Read `docs/current-data-snapshot.md` alongside this brief. It lists every attribute score the tool currently holds for all 21 schools.

**Disagreeing with it is the most valuable thing you can do.** Two scores have already been found badly wrong, both the same way — the original research was done through the lens of one particular child, so it asked "can this school do music production?" of every school and barely asked "what music does this school actually run?"

The clearest example: **Perth Modern is currently scored 69 for music — the lowest of all 21 schools.** It runs a selective-entry, classically based program of more than 500 students with an international reputation. That single number would steer a violinist's family away from arguably the strongest classical music program in the Perth public system.

Assume more errors of that kind are in there. For every school, ask what the evidence actually supports, and flag explicitly where it contradicts the recorded score. A contradiction you find is worth more than a confirmation.

---

## HOW TO RETURN IT

### Work in chunks, not one giant answer

Do **one priority at a time**, or **one school at a time**. Do not compress or summarise to fit everything into a single response — truncated data is worse than partial data, because the gaps become invisible.

### Priority 1 data — return in this shape

```js
"School Name Exactly As In The Table": {
  size:{ enrolment:0, year7:0, range:"7-12" },
  pastoral:{
    system:"vertical house" | "horizontal year" | "both" | "unclear",
    tutorGroupSize:0,
    sameAdultAcrossYears:true|false|null,
    counsellorsOnStaff:0,
    reportingPerYear:0
  },
  outdoor:{ compulsoryWeeksByYear:{ "7":0,"8":0,"9":0,"10":0 }, dedicatedCampus:true|false },
  formality:{
    uniform:"strict"|"standard"|"relaxed",
    assemblyFrequency:"weekly"|"fortnightly"|"termly"|"rare",
    honoursSystem:true|false,
    chapelFrequency:"daily"|"weekly"|"occasional"|"none",
    houseCompetition:"prominent"|"present"|"minimal"
  },
  sources:[["",""]]
}
```

Use `null` for anything not found. Never fill a gap with a plausible guess.

### What NOT to do

- **Don't rank the schools.** That is the tool's job, and it does it per child. A general ranking is exactly what this project is trying not to be.
- **Don't recommend.** No "best for", no "ideal if". Describe, and let the matching decide.
- **Don't sanitise.** Unflattering findings are the point. A school profile with no real cautions is a useless profile.
- **Don't reproduce marketing copy.** If a sentence could appear in the prospectus, it isn't evidence.
- **Don't smooth over disagreement between sources.** That disagreement belongs in `contradictions` — it's some of the most useful content in the whole dataset.

### A note on what this feeds

This goes into a published tool that names 21 real schools and makes cultural claims about them. Interpretive claims need to read as interpretations and carry their evidence — "several parent accounts describe X", not "the school is X". Getting that register right is part of the job, not a disclaimer bolted on afterwards.

---

## What good output looks like

- Every factual claim has a link
- Every gap says "not found" rather than being filled with a plausible number
- Interpretive scores state what evidence they rest on
- `contradictions` and `unknowns` are substantive, not token
- Nothing reads like marketing copy from the school's website
