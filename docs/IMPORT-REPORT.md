# Import report — external evidence layer, 22 schools

Source: `SchoolFit_Quest_COMPLETE_DATA_EXPORT_22_SCHOOLS.json` (v4.1-complete-export, 2026-07-31)
Target: SchoolFit Quest v4.9.0
Date: 31 July 2026

The six-point report requested in the handover brief.

---

## 1 · Data fields retained

All 22 school name keys matched ours exactly — no fuzzy matching was needed and nothing was renamed.

**Imported in full** into a new `src/research.js`:

| Field | Coverage |
|---|---|
| `fullResearchRecord` — entry, pedagogy, subjects, opportunities, music, pastoral, external | 22/22 |
| `activeEvidenceSummary` — entryReality, programAccess, seniorSubjects, musicReality, academicStanding | 22/22 |
| `production` score (18th attribute, not present in our dataset) | 22/22 |

**770 status-flagged fields** imported with their flags intact: 519 `confirmed`, 133 `partial`, 80 `not_stated`, 28 `not_publicly_verified`, 10 `portal_only`.

**251 explicit unknowns are preserved as unknowns.** `RESEARCH_UNKNOWN` in the code lists the four non-confirmed states, and no code path collapses them to yes/no. 232 of them are surfaced as open questions — a mean of 10.5 per school — and feed tour questions rather than scores.

Entry to the **school** and entry to a **program** are held in separate fields and read by separate accessors (`accessNotes()` returns `{school, program}`). They are never merged.

---

## 2 · Data fields changed

**`PROGRAMS.music.contemporary` and `.production` repointed for all 22 schools**, derived from the explicit status flags in `fullResearchRecord.music` — `confirmed → 2`, `partial → 1`, `not_publicly_verified → 0`.

Coverage change for the seven options a child chooses between in Q4:

| Child picks | Before | After |
|---|---|---|
| Orchestra | 12/22 | 14/22 |
| Concert band | 17/22 | 19/22 |
| Choir | 14/22 | 16/22 |
| Jazz | 7/22 | 9/22 |
| **Rock band and amps** | **7/22** | **22/22** |
| **Recording and production** | **4/22** | **22/22** |
| One-to-one lessons | 19/22 | 21/22 |

**Melville and Willetton had no music block at all** and now have full ones. Both are public schools, and their absence was reading to the engine as "offers no music."

---

## 3 · Scoring values changed

**None.** No `matchingScore` was altered by this import.

The imported `matchingScores` were **not** taken. They are the same v3 prototype calibration values ours derive from — confirmed by correlating both sets against log fee: `visibility` +0.85 vs our +0.84, `teacher` +0.84 vs +0.84, `grounded` −0.71 vs −0.71.

That similarity is itself a finding. The external pass rebuilt the evidence layer without revising the calibration numbers, and correctly labelled them "prototype calibration values." The known problem — that `visibility`, `teacher` and `grounded` track school fee at 0.71–0.85, while attributes with a public source (`academic` −0.05, `focus` +0.03, `tech` +0.02) do not — is unchanged and still open as task #23.

The new `production` score correlates with fee at **+0.09**, effectively independent. It is stored but not yet wired into matching.

---

## 4 · Questions or weights changed

**No weight was changed. No question was changed.**

**Declared divergence:** the imported questionnaire (50 child / 21 parent) was **not** used. This build keeps its own 57-child / 40-parent bank. Stated openly rather than silently, per the brief.

The imported set is the v3 bank. Since it was written, this build has:

- fixed a bug where the eleven-subject grid **scored nothing** (`scoreQuestions` skipped `q.rows`) — a silent failure that produced a normal-looking profile
- removed `mixedGender` from scoring, where a single question applied a 22-point penalty to all 8 single-sex schools
- added `academicInterest` as a distinct dimension from `academic`
- separated art and design from music
- added adaptive sub-domain and clash questions generated from the child's own tile picks
- added round-robin interest ranking, family suburb and distance, and known-peers

Adopting the imported bank would reverse all of the above.

---

## 5 · New assumptions introduced

1. **Status → 0/1/2 mapping.** `confirmed → 2`, `partial → 1`, `not_publicly_verified → 0`, `not_stated`/`portal_only` → left null. The judgement here is treating `partial` as a real but unremarkable offering, and `not_publicly_verified` as a searched-and-absent `0` rather than a null. That second one is debatable: a school may run something it doesn't publish.
2. **`not_stated` and `portal_only` are left as gaps, not zeros.** Carey's newsletters and several curriculum handbooks sit behind parent logins. Absence of access is not absence of provision.
3. **The evidence layer never reaches `schoolMatch`.** Confirmed by test — 132 school/profile combinations score identically before and after import.

**A correction to our own earlier work:** John XXIII was hand-coded `contemporary: 0` from my reading of its program description. The imported record has it `confirmed`, and its style string reads "Classical, Jazz, Contemporary, Music Theatre and pop." Our coding was wrong and has been replaced.

---

## 6 · Unresolved evidence gaps

- **`visibility`, `teacher` and `grounded` still track fee** at 0.85, 0.84 and −0.71. No published source exists for any of them at any school. More research will not fix this; the fix is to stop scoring them and convert them to tour questions. *(Task #23.)*
- **`seniorSubjects` is imported but not wired.** Q9 asks children to rate eleven subjects individually and school-side matching still uses a single `academic` number. The data to fix this is now present.
- **The `production` score is stored but not scored.** Wiring it needs a decision about whether it becomes a scored dimension or stays a sub-domain check.
- **Pastoral continuity** is now answerable for several schools — Fremantle College is a `confirmed` **no**, handing over between Years 7–9 and 10–12 — but remains `not_stated` for many.
- **Fees are still understated.** Hale's real first year is $44,900 against $34,000 held. Parked at the owner's direction.
- **No child has tested the questionnaire.** Still the largest untouched item, and the original dossier recommended it.

---

## Notable finding

**Fremantle College is the only school in the set with `confirmed` music production** — *"explicitly contemporary: writing, arranging, recording and performing"*, described in the source as the clearest verified school-level recording and production pathway in the dataset. Seton is the other at `confirmed`.

Six schools returned `not_publicly_verified` on production despite large, long-established music programs: **Scotch, Wesley, Rossmoyne, Applecross, Corpus Christi, CBC Fremantle.**

This is the case for keeping contemporary and production separate from music generally. A big successful music department is not evidence of a studio, and for a producer-first child — the original brief for this whole tool — that distinction decides the answer.
