# Task 7 — What each school actually backs, 22 Perth schools

Same conventions as the previous six patches: every field carries `confirmed` · `partial` · `not_publicly_verified` · `not_stated` · `portal_only`, and those five are never collapsed into yes/no. Return JSON keyed on the exact school names.

---

## The idea, because it changes what counts as a good answer

Every school's website says it values everything. That material is worthless for telling schools apart, and an earlier pass at this project produced numbers that turned out to track school **fees** rather than anything real, precisely because there was nothing else to go on.

So this task collects **revealed preference** — not what a school says it values, but what it demonstrably spends money on. Four things, all published, all expensive or difficult to fake:

1. **What it pays to attract** — scholarships, by domain
2. **What it built** — facilities, which cost millions and take years
3. **Who it employs** — a full-time Director of Rowing means rowing
4. **What it has actually won** — documented competition and performance record

A school can claim a commitment to music for free. Building a recording studio, employing a Director of Music, offering instrumental scholarships and winning eisteddfods is a commitment it has actually made.

**Do not fill gaps with reputation.** If a school has no sport scholarships, record none. "Everyone knows they're a football school" is exactly the reasoning that corrupted this dataset once already.

---

## THE 22 SCHOOLS

Melville Senior High School — Academic Extension · All Saints' College · Perth Modern School · John Curtin College of the Arts · Corpus Christi College · Aquinas College · Rossmoyne Senior High School · Willetton Senior High School · Applecross Senior High School — Academic Extension · Shenton College — HPL / GATE · Fremantle College · Kennedy Baptist College · Carey Baptist College — Harrisdale · Scotch College · Christ Church Grammar School · Hale School · Wesley College · CBC Fremantle · Iona Presentation College · Santa Maria College · Seton Catholic College · John XXIII College

Perth, Western Australia. Watch the namesakes: **Wesley** (Melbourne), **Christ Church Grammar**, **Santa Maria**, **Aquinas** (a US institution dominates search), **Seton** (US), **Corpus Christi** (Canada), **John XXIII** (the ANU residential college), **Carey** (Victorian grammar; ours is the **Harrisdale** campus).

**The priority six are DONE** — Aquinas, Scotch, Christ Church, Hale, Wesley and Santa Maria have been returned and imported. **Skip them.**

**These 16 remain:**

Melville Senior High School — Academic Extension · All Saints' College · Perth Modern School · John Curtin College of the Arts · Corpus Christi College · Rossmoyne Senior High School · Willetton Senior High School · Applecross Senior High School — Academic Extension · Shenton College — HPL / GATE · Fremantle College · Kennedy Baptist College · Carey Baptist College — Harrisdale · CBC Fremantle · Iona Presentation College · Seton Catholic College · John XXIII College

**One thing the first pass established, so you don't repeat the dead end:** none of the six large independents offers a sport scholarship — all six checked, all six confirmed absent. Sporting commitment showed up instead through rowing sheds, named roles like Director of Football, and dated competition results. Expect the same pattern. **A `0` on sport scholarships is a useful finding, not a failed search.**

Public schools will differ again: they are more likely to carry Department specialist programs and less likely to carry scholarships of any kind. Record what is there.

---

## FIELD 1 — Scholarships, by domain

```js
scholarships:{
  academic:null,      // 2 = open merit scholarship, testing, substantial remission
                      // 1 = exists but limited, needs-based, or small
                      // 0 = checked the scholarships page, none in this domain
  music:null, sport:null, art:null, drama:null, allRounder:null, indigenous:null, bursary:null,
  maxRemission:"",    // e.g. "up to 50% tuition" - as published
  musicDetail:"",     // which instruments or voices; does it cover tuition and hire?
  sportDetail:"",     // which sports, if named
  applicationBasis:"",// audition / test / portfolio / interview / references
  source:""
}
```

A school offering **sport** scholarships and no music scholarships is telling you something plain. Record the absence as `0`.

---

## FIELD 2 — Facilities, what capital was spent on

```js
facilities:{
  rowingShed:null, pool:null, poolLength:"",     // 25m or 50m
  theatre:null, theatreSeats:null,
  recordingStudio:null, musicSchool:null,
  gallery:null, artStudios:null,
  gym:null, ovals:null, tennisCourts:null,
  designTech:null, roboticsLab:null, makerspace:null,
  agriculture:null, boarding:null,
  recentBuild:"",     // any major facility opened or announced since 2020, with year
  source:""
}
```

2 = purpose-built and named · 1 = exists · 0 = checked, not present · null = not established.

**A rowing shed is the single most informative building on this list.** Almost nothing else costs that much to serve one activity.

---

## FIELD 3 — Named leadership roles

```js
staffRoles:{
  namedDirectors:[""],   // job TITLES only, no personal names.
                         // e.g. "Director of Rowing", "Head of Strings",
                         //      "Director of Contemporary Music",
                         //      "Head of Robotics", "Dean of Academic Extension"
  source:""
}
```

Titles only, never names. A school with a full-time **Director of Rowing** has made a decision about rowing that a paragraph on a webpage does not evidence.

---

## FIELD 4 — Documented record

```js
record:{
  sport:"",       // premierships, championships, dated. Name the competition.
  music:"",       // eisteddfod results, festival placings, tours, dated
  arts:"",        // exhibitions, awards, dated
  academic:"",    // published results, competition placings, dated
  alumniDomains:[""],  // domains where the school demonstrably produces people:
                       // e.g. "AFL - 14 drafted since 2010", "Olympic rowing".
                       // A COUNT and a DOMAIN. No individual names.
  source:""
}
```

Dated and attributed, or leave it blank. "A proud sporting tradition" is not a record.

---

## RULES

1. **Quote and link.** Anything not on a front page needs the sentence and the URL.
2. **`0` means checked-and-absent. `null` means not checked.** Never blur them.
3. **Never infer from reputation.** If a school is widely believed to be a football school but offers no sport scholarship, employs no named sport director and publishes no record, the honest return is three zeros and a null. That result is wanted.
4. No individual names anywhere — job titles and counts only.
5. Do not rank the schools or say which is better.

Return JSON. Say where you stopped.
