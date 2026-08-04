# Pastoral structure — countable facts only

Do the research now and return filled data. No plan, no scope, no methodology section.

## Why this is different from previous requests

Ten schools in our dataset have **no independent evidence of any kind** — no external review, no current staff reviews, no community theme. Everything we hold about their pastoral culture comes from their own marketing.

The answer is not to trust the marketing harder, and not to discard it. It is to extract only the parts that are **countable or checkable**, and ignore the adjectives.

- *"We care deeply about every child"* — **discard**. Every school says this.
- *"Tutor groups of approximately 23 students meet a House Tutor every morning"* — **keep**. That is a number and a frequency. It can be wrong, and a parent could check it on a tour.

Record the second kind. Ignore the first.

## The schools — all 21

These facts will be used to re-derive a rating that every school is compared
on. **A partial return is close to useless**: if ten schools get a rating
built from published tutor-group sizes and eleven keep a rating built from
something else, the two are not comparable and the comparison is the entire
point of the tool. Get all 21, even if the entry is mostly `null`.

**Tier 1 — no independent evidence exists for these at all. Start here.**
Christ Church Grammar School · Santa Maria College · Wesley College South Perth · Iona Presentation College · Seton Catholic College · Scotch College · CBC Fremantle · Kennedy Baptist College · Carey Baptist College Harrisdale · Aquinas College

**Tier 2 — some staff evidence exists, no external review.**
Hale School · All Saints' College Bull Creek · Corpus Christi College Bateman

**Tier 3 — externally reviewed, but the same facts are needed for comparability.**
Melville Senior High School · Perth Modern School · John Curtin College of the Arts · Rossmoyne Senior High School · Willetton Senior High School · Applecross Senior High School · Shenton College · Fremantle College

For Tier 3, the WA Public School Review often describes the student services
structure directly — that is a good source for these fields and usually
better than the school's own page.

Perth, Western Australia. Watch for interstate namesakes — Wesley (Melbourne),
Christ Church Grammar, Santa Maria, and Aquinas (a US institution dominates
search results).

## What to extract

```js
"Exact School Name": {
  pastoral:{
    unitName:"",           // "House", "Tutor Group", "Homeroom", "Mentor Group"
    unitSize:null,         // students per unit, as published. null if not stated.
    contactFrequency:"",   // "daily", "twice weekly", "weekly", or as stated
    sameAdultAcrossYears:null,
      // true  = explicitly states the same tutor/mentor stays with a student
      //         across multiple years
      // false = explicitly resets each year, or hands over at a year boundary
      //         (e.g. separate Student Services teams for Years 7-9 and 10-12)
      // null  = not stated. Do not infer from warm language.
    handoverPoint:"",      // if pastoral contact changes, at which year
    escalationChain:"",    // the published sequence, e.g. "Tutor -> Head of
                           // House -> psychologist / Learning Support"
    counsellorsNamed:null, // count of psychologists or counsellors named or
                           // described as on staff. null if not published.
    chaplain:null,         // true / false / null
    learningSupportNamed:null, // true if a distinct learning-support or
                           // curriculum-support team is described
    source:""
  }
}
```

## Why `sameAdultAcrossYears` matters most

It is the single most useful field here. A school where one adult follows a child from Year 7 to Year 12 behaves very differently from one where pastoral contact resets annually, or hands over at Year 10 — and unlike almost everything else on a school's website, **it is a structural fact rather than a sentiment.**

Fremantle College, for instance, runs separate Student Services teams for Years 7–9 and 10–12. That is a `false` with a `handoverPoint` of Year 10. Aquinas states students keep the same Tutor within a sub-school but not across the whole secondary journey — that is also a qualified `false`, and the qualification belongs in `handoverPoint`.

If a school does not say, record **null**. Warm language is not a yes.

## Rules

- Quote or closely paraphrase the published wording for `escalationChain`.
- `null` for anything not stated. Never estimate a unit size.
- No named individuals — count roles, don't name people.
- Do not rate or compare the schools. Return the facts.
- One URL per school minimum.

Start with Scotch College.
