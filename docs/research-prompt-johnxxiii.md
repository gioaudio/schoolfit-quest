# John XXIII College, Mount Claremont — full cold start

Do the research now and return filled data. No plan, no scope, no methodology section.

**One school.** John XXIII College, Mount Claremont, Western Australia. A Catholic co-educational school run in the Jesuit and Mercy traditions. It is the only school in this project with no existing research at all, so this request covers everything at once.

Return **facts**. Do not rate the school, rank it, or describe its culture in adjectives. Interpretive scoring happens elsewhere and is not your job here.

---

## TASK 1 — Identity and access

```js
{
  fullName:"", suburb:"", coed:null,            // true / false
  religion:"",                                  // "strong" | "moderate" | "secular"
  yearRange:"",                                 // e.g. "K-12" or "7-12"
  enrolmentY7to12:null,                         // ACARA / My School, most recent year
  enrolmentYear:null,
  tuitionY7:null,                               // published Year 7 tuition, current year
  compulsoryExtras:{ levy:null, it:null, building:null, other:"" },
  entryRequirement:"",                          // open / waitlist / interview / test
  lat:null, lng:null,                           // decimal degrees
  sources:[["",""]]
}
```

Tuition must be the **published figure with its year**. List compulsory non-tuition charges separately rather than folding them in.

---

## TASK 2 — Sport

Three-state scale: **2** = specialist program, competition strength or documented record · **1** = offered · **0** = searched, not found.

```js
sport:{ afl:null, cricket:null, netball:null, basketball:null, soccer:null,
        hockey:null, rugby:null, tennis:null, volleyball:null, swimming:null,
        athletics:null, crosscountry:null, rowing:null, waterpolo:null,
        golf:null, sailing:null, surfing:null },
sportBody:"",     // the competition it plays in — ACC, PSA, IGSSA, JTC, other
sportSource:""
```

Name the competition body. It matters more than any individual sport.

---

## TASK 3 — Music

```js
music:{ orchestral:null, band:null, choral:null, jazz:null, contemporary:null,
        guitar:null, tuition:null, production:null, selective:null },
musicNote:"",     // ensemble count, any audition or selective entry
musicSource:""
```

`selective` = 2 only if there is a genuine audition-entry music program.

---

## TASK 4 — Visual art, drama and design

```js
arts:{ visualArt:null, design:null, drama:null, film:null, dance:null,
       artSelective:null, artFacility:null },
artsNote:"", artsSource:""
```

Use the **subject list and co-curricular pages**. A subject list is a fact. Do not infer drama, dance or film from a general mention of "the performing arts".

---

## TASK 5 — Pastoral structure, countable only

Record numbers and frequencies. Discard adjectives — *"we care deeply about every student"* tells us nothing, every school says it.

```js
pastoral:{
  unitName:"",              // "House", "Tutor Group", "Homeroom", "Mentor Group"
  unitSize:null,            // students per unit, as published
  contactFrequency:"",      // "daily", "weekly", as stated
  sameAdultAcrossYears:null,// true / false / null — null if not stated.
                            // Warm language is not a yes.
  handoverPoint:"",         // the year pastoral contact changes, if it does
  escalationChain:"",       // published sequence, quoted or close
  counsellorsNamed:null, chaplain:null, learningSupportNamed:null,
  source:""
}
```

---

## TASK 6 — Independent evidence

There is no external inspection of WA private schools, so this is the only corroboration available.

```js
independent:{
  seek:{ reviewCount:null, rating:null, mostRecentYear:null },
  glassdoor:{ reviewCount:null, rating:null, mostRecentYear:null },
  indeed:{ reviewCount:null, rating:null, mostRecentYear:null },
  teachingQuotes:[""],      // 2023-2026 teaching-role reviews, quoted, with year
  communityTheme:null,      // only if 3+ independent accounts 2023-2026 agree
  searchedFoundNothing:[""] // say what you looked for and did not find
}
```

**Finding nothing is a wanted result.** Nine other schools in this project were searched and had no usable staff evidence, and recording that plainly is exactly as valuable as finding something. Do not pad.

Watch for interstate and overseas namesakes — there are other John XXIII institutions. Confirm Mount Claremont, Western Australia.

---

## Rules

- `null` for unknown. Distinguish "searched, not found" from "not searched".
- Cite a URL for every task.
- Date everything. Pre-2023 material is background, not evidence.
- No named individuals.
- Do not compare John XXIII to other schools or assess whether it is good.
