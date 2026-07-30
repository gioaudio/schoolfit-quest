# SchoolFit Quest

An exploratory tool that helps a child and their family think about which Perth secondary-school *environment* might suit them.

**It is not a school ranking.** It does not treat selective, expensive, private, public, co-ed or single-sex as better. It has never been validated against how children actually went at these schools. Everything it produces is a conversation starter and a list of questions to ask on a tour.

---

## Running it

Open `index.html` in any browser. No server, no build step, no dependencies — it's one self-contained file.

## Editing it

The single file is generated. Don't edit `index.html` directly; edit the sources in `src/` and rebuild.

```
src/
  styles.css     all styling
  body.html      page structure
  questions.js   dimensions + the child (50) and parent (32) question banks
  schools.js     the 21 school profiles, attributes and sources
  engine.js      scoring, confidence, matching, alignment narrative
  app.js         game flow and rendering
```

```bash
node build.mjs
```

The build refuses to write `index.html` if the JavaScript has a syntax error. **Commit both your `src/` change and the regenerated `index.html`** — GitHub Pages serves `index.html`, not the sources.

---

## How the scoring works

### Measurement confidence

Every dimension records how many questions actually informed it. A dimension measured by one question is shrunk toward neutral rather than being allowed to swing to 0 or 100, and it is blocked from triggering any risk warning.

```js
confidence = n / (n + 2.5)
reported   = 50 + (observed - 50) * confidence
```

So a single answer implying 100 reports as 64. This is deliberate: the earlier version let one answer to one question apply a 22-point risk penalty to eight schools.

### Two classes of dimension

- **Scored** — a matching attribute exists in `schools.js`, so it can influence a school's score.
- **Profile only** — measured on the child (help-seeking, belonging, change tolerance, and others) but with no school-side evidence to compare against. These shape the written profile and generate targeted tour questions. **They never touch a school's score.** Inventing school attributes to match them would be fabrication.

### Relative, not absolute, matching

Raw school attributes sit in a narrow band — most schools score 60–90 on most things. Comparing them directly flattens every ranking toward the middle. Attributes are converted to their position *within this set of 21* instead, because that is the comparison a family is actually making.

### Evidence propagation

Each school carries an `evidenceLevel`. Weaker evidence pulls that school's attributes back toward the middle of the field and widens the reported ± band. The tool does not pretend to know a school it has read little about.

### Constraints are filters

Fees, faith, travel and co-ed preference **exclude** schools into a separate section. They never quietly reduce a school's score. Excluded schools are still shown, so you can see what a constraint is costing you.

### Co-ed is never inferred from the child

A 9–12 year old has no basis for judging co-ed versus single-sex schooling, so the tool doesn't ask them to. The child's answer about mixed-gender group work is recorded and displayed, and contributes **zero** to every school's score. The preference is a family setting and a tour question.

---

## Known limitations

Worth reading before you show this to anyone.

1. **No criterion validation.** Nothing here has been checked against student outcomes. It has face validity at best.
2. **No random-response detection.** A child clicking randomly produces a confident-looking profile. Adding two or three reverse-scored item pairs would fix this and would let the displayed evidence confidence be earned rather than assumed.
3. **School attributes are interpretive.** The 294 attribute values are judgements drawn from public information, not measurements. Sources are attached per school, not per attribute, so an individual number cannot be traced to a specific source.
4. **Culture claims are the weakest data.** `grounded`, `peerAmbition` and `peerIntensity` are inherently interpretive. They are also among the most influential inputs.
5. **Community evidence is thin and uneven.** Several schools rest largely on the school's own published material.
6. **Reading level.** Written for roughly Years 4–7. A few of the longer items may still be hard for a Year 4. Worth testing with real children before wider use.
7. **No save or resume.** Refreshing the page loses progress.

---

## About the school profiles

The 21 school profiles are interpretive summaries built from public information and limited community commentary. They are **not** assessments of any school, and no school has reviewed, endorsed or contributed to them. Each profile deliberately carries its own *contradictions* and *what we don't know* sections, and links to its sources — read those alongside the numbers, not after them.

Programs, fees, entry rules and staff change constantly. Verify everything directly with each school.

If you represent one of these schools and something here is wrong or unfair, please open an issue.

---

## Licence

See `LICENSE`. The code is MIT. The school profile text and attribute judgements are opinion, offered without warranty, and should not be relied on for any decision without independent verification.
