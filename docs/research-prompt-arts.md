# Visual art, drama and design programs — 21 Perth schools

Do the research now and return filled data. No plan, no scope, no methodology section.

There is **one task**: find out what each school actually offers in **visual art, drama, film, dance and design**, using the same three-state scale below.

Our dataset currently has sport and music broken into sub-domains, but **nothing at all for the arts**. That gap means a child who draws, acts or designs is being matched on music and sport data alone. This request fills it.

## The scale

For each domain, return one of:

- **2 — strength.** The school has a specialist program, a selective or audition entry, a dedicated facility, a named academy, a regular public season or exhibition, or a documented competition record.
- **1 — offered.** It exists as a subject or a co-curricular club, but nothing marks it out.
- **0 — searched, not found.** You looked at the subject list and co-curricular pages and it is not there.
- **null — not researched.** Only if you genuinely could not reach the information.

**0 and null are different and the difference matters.** A school that demonstrably does not offer dance is a real finding. A school you couldn't check is not.

## The domains

- `visualArt` — art as a subject beyond compulsory years; studios; exhibitions
- `design` — graphic design, digital design, product or industrial design, textiles
- `drama` — drama as a subject; productions; theatre spaces
- `film` — media production, film, screen studies, animation
- `dance` — dance as a subject or a company
- `artSelective` — is there an **audition or portfolio entry** arts program? (2 = yes, selective; 0 = no)
- `artFacility` — a named, purpose-built arts facility (theatre, gallery, studio block)

## Schema

```js
"Exact School Name": {
  arts:{ visualArt:null, design:null, drama:null, film:null, dance:null,
         artSelective:null, artFacility:null },
  artsNote:"",     // anything that doesn't fit the scale — a named academy,
                   // a notable production season, an entry requirement
  artsSource:""    // URL of the subject list or co-curricular page used
}
```

## The 21 schools

Melville Senior High School · Perth Modern School · John Curtin College of the Arts · Rossmoyne Senior High School · Willetton Senior High School · Applecross Senior High School · Shenton College · Fremantle College · Hale School · Scotch College · Christ Church Grammar School · Wesley College South Perth · Aquinas College Salter Point · All Saints' College Bull Creek · Corpus Christi College Bateman · Kennedy Baptist College Murdoch · Carey Baptist College Harrisdale · CBC Fremantle · Iona Presentation College Mosman Park · Santa Maria College Attadale · Seton Catholic College Samson

All are in Perth, Western Australia. Several have interstate namesakes — **Wesley College** (Melbourne), **Christ Church Grammar**, **Santa Maria**, **Aquinas** (a US institution dominates search results). Confirm the Perth school before recording anything.

## Rules

- Use the school's **subject list and co-curricular pages** as the primary source. This is the one place a school's own website is the right source — a subject list is a fact, not a claim.
- Do not infer. If the arts page mentions "the performing arts" with no detail, that is not evidence of drama, dance or film individually.
- Do not rate quality. We are recording what exists, not how good it is.
- Cite a URL per school.
- John Curtin College of the Arts is a selective arts school and will score high. That is expected — do not moderate it for balance.

Work through all 21. If you run out of room, stop and name where you got to.
