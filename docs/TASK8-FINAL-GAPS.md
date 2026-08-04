# Task 8 — the last three gaps, 22 Perth schools

Same conventions as tasks 1–7: `confirmed` · `partial` · `not_publicly_verified` · `not_stated` · `portal_only`, never collapsed into yes/no. Return JSON keyed on the exact school names.

Three tasks, in priority order. Task 1 is worth more than the other two combined.

---

## TASK 1 — Five senior subject handbooks *(highest value)*

These five schools have handbooks behind a parent login, so they currently carry **no languages score and no enterprise score at all** — they simply don't compete on either, which isn't the same as scoring badly.

**Aquinas College · CBC Fremantle · Iona Presentation College · Santa Maria College · John XXIII College**

Try in this order: a publicly linked PDF course guide or handbook; the "senior school" or "Years 11–12" pages; the school's subject-selection or curriculum page; any prospectus. If it is genuinely portal-only, say so and stop — that is a real finding and it has already been recorded once.

```js
seniorSubjects:{
  maths:[], english:[], sciences:[], hass:[], languages:[], arts:[], technologies:[], pe:[],
  atarVetBalance:"", source:"", access:""
}
```

**Name the languages individually** — "Japanese", "Italian", "French" — not "languages offered". And **list HASS in full**, because Business Management and Enterprise, Economics, Accounting and Career and Enterprise are what the enterprise score is built from.

---

## TASK 2 — Sport: what a school does NOT offer

126 of 374 cells were never checked, and only **5** confirmed absences exist across all 22 schools. That means a child who plays a less common sport gets "not checked" rather than an answer.

**Only these six matter.** Everyone offers basketball and swimming; those tell us nothing.

| sport | unchecked |
|---|---|
| sailing | 17/22 |
| rugby | 14/22 |
| golf | 12/22 |
| hockey | 11/22 |
| surfing | 11/22 |
| soccer | 2/22 |

```js
sport:{ hockey:null, rugby:null, golf:null, sailing:null, surfing:null, soccer:null, source:"" }
```

**2** = specialist program or documented competition record · **1** = fielded or offered · **0** = checked the school's sport pages and fixture lists, and it is not offered · **null** = could not check.

**A `0` is the point of this task.** Going through a school's own sport page and finding no hockey anywhere is a result worth having — it lets the tool warn a hockey player instead of shrugging. Do not record `0` on the basis that a sport is missing from an interschool fixture list alone; schools run programs that never appear in fixtures.

---

## TASK 3 — Facilities *(93 of 132 cells never established)*

Capital spend is the most honest signal a school gives, because a building takes years and millions and cannot be written by a marketing team.

```js
facilities:{
  roboticsLab:null, makerspace:null, designTech:null,
  recordingStudio:null, theatre:null, theatreSeats:null, gallery:null,
  source:""
}
```

**2** = purpose-built and named · **1** = exists · **0** = checked, not present · **null** = not established.

A named, dedicated space counts as 2. A general computer lab is not a robotics lab; a hall with a stage is not a theatre. If a school describes "state-of-the-art facilities" without naming one, that is `null`, not `1`.

---

## RULES

1. Quote and link anything not on a front page.
2. **`0` means checked-and-absent. `null` means not checked.** Never blur them — the whole tool depends on that line.
3. "Not found" is wanted output. Do not pad.
4. Never estimate. No inferring a program from a school's tone or from what similar schools do.
5. No individual names.
6. Do not rank the schools or say which is better.

Perth, Western Australia. Watch the namesakes: **Wesley** (Melbourne), **Christ Church Grammar**, **Santa Maria**, **Aquinas** (a US institution dominates search), **Seton** (US), **Corpus Christi** (Canada), **John XXIII** (the ANU residential college), **Carey** (Victorian grammar; ours is **Harrisdale**).

Return JSON. Say where you stopped.
