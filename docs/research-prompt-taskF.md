# TASK F — Fees, total cost and entry deadlines

## READ THIS FIRST

**Do the research now and return filled data.** No plan, no scope, no hours.

**Target 8–10 schools per response.** This task is mechanical — dated fee schedules and enrolment pages — so it should move much faster than the culture research.

If you run out of room, stop and name the schools you reached.

---

## WHY THIS ONE MATTERS MOST FOR CORRECTNESS

The tool uses fees as a **hard filter**. A family sets a budget and schools above it are removed from their list entirely.

So a wrong fee doesn't nudge a score — it **silently deletes a school a family might have chosen**. Every other error in this project makes a ranking slightly worse. This one makes options invisible.

The figures currently in the tool are undated and drifting. Assume all of them are wrong until confirmed.

Second: **deadlines pass**. Rossmoyne's Year 7 2027 applications closed on 20 March 2026. A family running this tool in mid-2026 needs to know that before they get attached to a school they can no longer apply to.

---

## WHAT THE TOOL CURRENTLY HOLDS

Flag anything that has moved by more than about 5%.

| School | Current figure in the tool |
|---|---|
| Melville Senior High School — Academic Extension | $500 |
| Perth Modern School | $500 |
| Rossmoyne Senior High School | $650 |
| Willetton Senior High School | $650 |
| Applecross Senior High School — Academic Extension | $650 |
| John Curtin College of the Arts | $700 |
| Shenton College — HPL / GATE | $700 |
| Fremantle College | $750 |
| Seton Catholic College | $6,029 |
| Corpus Christi College | $9,390 |
| CBC Fremantle | $11,900 |
| Carey Baptist College — Harrisdale | $11,928 |
| Kennedy Baptist College | $11,990 |
| Iona Presentation College | $12,000 |
| Santa Maria College | $17,349 |
| Aquinas College | $18,000 |
| All Saints’ College | $26,716 |
| Wesley College | $33,000 |
| Hale School | $34,000 |
| Christ Church Grammar School | $35,000 |
| Scotch College | $35,932 |

The eight public schools carry small contribution amounts rather than tuition. Confirm the actual voluntary contribution and any compulsory charges — and note that **specialist program students often pay more**.

---

## ORDER

Public schools first — their figures are the oldest and least verified, and their specialist-program entry deadlines are the ones that close earliest.

1. Melville Senior High School
2. Perth Modern School
3. John Curtin College of the Arts
4. Rossmoyne Senior High School
5. Willetton Senior High School
6. Applecross Senior High School
7. Shenton College
8. Fremantle College

Then: Seton · Corpus Christi · CBC Fremantle · Carey Harrisdale · Kennedy · Iona · Santa Maria · Aquinas · All Saints' · Wesley · Hale · Christ Church · Scotch · **John XXIII College**

*(John XXIII is partly known already: 2026 Years 7–9 tuition $15,914, secondary resource fee $1,401 per student, capital levy $3,320 per family, first-child acceptance fee $4,500. Verify and complete.)*

---

## OUTPUT FORMAT

```js
"Exact School Name": {
  cost:{
    tuitionYear7:0,              // headline tuition only
    compulsoryPerStudent:0,      // resource, curriculum, technology, subject levies
    compulsoryPerFamily:0,       // building fund, capital works, P&F levies
    oneOffAcceptance:0,          // enrolment or acceptance fee, first child
    otherExpected:"",            // uniform, devices, camps, instrument hire —
                                 // describe rather than guess a number
    totalRecurringOneChild:0,    // tuition + per-student + per-family
    feeYear:2026,
    changedFromTool:true|false,  // does this differ >5% from the table above?
    source:""
  },

  entry:{
    route:"local intake"|"selective test"|"audition"|"open application"|"waitlist",
    catchmentApplies:true|false,      // public schools: is there a local-intake area?
    applicationDeadline:"",           // exact date if published, else null
    forEntryYear:2027,
    deadlinePassed:true|false,        // as at the date you are researching
    testOrAuditionDates:"",
    scholarshipDeadline:"",
    waitlistNote:"",                  // any published statement about waiting lists
    source:""
  }
}
```

---

## RULES

1. **Tuition is not total cost.** John XXIII publishes $15,914 tuition; the actual recurring figure is $20,635. Always separate the components and never merge them without showing the arithmetic.
2. **Date every figure.** A 2025 schedule is not a 2026 fee. Record `feeYear` honestly.
3. **`null` for unknown, never a guess.** Distinguish "not published" from "not found".
4. **Flag every deadline that has already passed.** That is the single most actionable output in this task.
5. **Note where a discount applies** — sibling, full-year payment, Catholic-family rates at Catholic schools — but record the standard figure as the headline.
6. **Public schools:** confirm whether a local-intake catchment applies, and whether specialist-program entry bypasses it. Do not attempt to map catchment boundaries; just record that one exists and link the Department's finder.
7. Cite everything, title plus URL.

---

## PRIORITY SOURCES

- The school's own dated fee schedule — the primary source, always
- Enrolment and admissions pages for routes and deadlines
- WA Department of Education selective and specialist program pages, which carry the earliest deadlines
- Booklists, uniform shop price lists and device requirements for `otherExpected`
- Scholarship pages for separate deadlines

---

## RETURN FORMAT

One school per block, public schools first. **Aim for 8–10.** Do not compress to fit more in — stop and say where you got to.

Start with **Melville Senior High School** now.
