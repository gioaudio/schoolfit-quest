# SchoolFit Quest — Question Bank v2

**Child questionnaire: 50 items. Parent questionnaire: 32 items.**

Design decisions applied in this revision:

- Interests are **separated out** into a domain-neutral inventory (Q1–Q3). No behavioural question names a specific interest area. Where a question needs to refer to the child's passion, it says *"something you really care about"* and the engine substitutes their own top interest.
- Co-ed vs single-sex is **inferred indirectly** from the child (Q40, low weight) and asked explicitly only of the parent (F7).
- Teacher-as-motivator, big-fish/little-pond and recognition were heavily over-weighted in v1 and have been trimmed.
- New constructs added: help-seeking, conflict repair, empathy at a cost, status tolerance, school size, cohort stability, change tolerance, outdoor appetite, disengagement triggers.
- Every Stage 2 option is now socially defensible. No option reads as "the bad kid answer."

---

## CONSTRUCT DICTIONARY

Use these codes as the scoring keys. Each maps to school attributes on the comparison side.

| Code | Construct | Maps to school attributes |
|---|---|---|
| `STRETCH` | Response to being outperformed | Cohort ability spread, streaming, selective entry |
| `MOTIV_TEACHER` | Driven by respected adult expectation | Staff stability, mentoring, pastoral structure |
| `MOTIV_RECOG` | Driven by external recognition | Awards culture, honours, public performance |
| `MOTIV_INTRINSIC` | Driven by own standard | Autonomy, project-based programs |
| `PEER_INFLUENCE` | Susceptibility to friendship-group norms | Cohort work ethic, peer culture |
| `PEER_INDEPENDENCE` | Acts without friends present | Opportunity breadth, tolerance of going solo |
| `ACCOUNTABILITY` | Need for checkpoints and follow-up | Reporting frequency, homework structure |
| `STRUCTURE_INDEP` | Structure vs autonomy | Timetable rigidity, project freedom |
| `PRESSURE` | Response to load, competition, deadlines | Academic intensity, assessment culture |
| `CRITICISM` | Response to critical feedback | Feedback culture, coaching style |
| `FAILURE_RECOVERY` | Response to not being selected | Selective programs, trials, auditions |
| `SOCIAL_CONF` | Confidence with new people | Intake size, transition programs |
| `BELONGING` | Network shape and need to feel known | School size, house/vertical systems |
| `HELP_SEEKING` | Will they surface a problem | Pastoral density, tutor groups |
| `CONFLICT_REPAIR` | Handling a falling-out | Wellbeing model, restorative practice |
| `EMPATHY` | Perspective-taking at a cost | Service programs, community culture |
| `STATUS_TOLERANCE` | Comfort in visible-hierarchy culture | Prestige signalling, sport dominance |
| `SELF_REG` | Regulation when frustrated or treated unfairly | Behaviour policy, teacher style |
| `SENSORY_LOAD` | Tolerance of busyness and noise | Campus size, timetable density |
| `BREADTH_DEPTH` | Generalist vs specialist | Co-curricular model, elective breadth |
| `VISIBILITY` | Need to be actively noticed | Class size, teacher-initiated opportunity |
| `SCHOOL_SIZE` | Big vs small environment | Enrolment, campus footprint |
| `COMMUNITY_SPECIALIST` | Local connection vs travel for opportunity | Catchment, specialist programs |
| `CLASSROOM_FOCUS` | Response to unfocused classrooms | Streaming, behaviour standards |
| `FORMALITY` | Traditional vs relaxed culture | Uniform, ceremony, house traditions |
| `COHORT_STABILITY` | One group vs moving groups | Class structure, vertical vs horizontal |
| `CHANGE_TOLERANCE` | New starts and transitions | Feeder-school dominance, intake pattern |
| `LEADERSHIP` | Role preference in groups | Leadership pathways, student voice |
| `OUTDOOR` | Appetite for camps and expeditions | Outdoor ed programs |
| `EFFORT_SELFDIR` | Follow-through without prompting | Independent study expectations |
| `COED` | Mixed vs same-gender working comfort | Co-ed / single-sex |
| `RISK_TRIGGER` | What would most likely cause disengagement | Drives the risk-level output |
| `INTEREST_*` | Domain interests | Program strength by domain |

**Per-item metadata to store:** `item_type` (aspiration / behaviour / value / constraint), `weight`, `presented_option_order`, `age_band_variant`.

Aspiration items say what a child *wants*. Behaviour items say what they *do*. Keep them in separate scoring lanes — a child who wants the hardest class but behaviourally withdraws when outperformed needs a stretch environment **with visible support**, not a stretch environment alone.

---

# STAGE 0: INTEREST INVENTORY

Three quick questions. Replaces the domain content that was previously scattered through v1 Q2, Q3, Q4, Q16, Q26, Q40, Q44 and Q48.

---

**Question number:** 1
**Stage:** 0 — Interest inventory
**Revised question:** Pick the three things you'd most want to spend a whole Saturday doing.
**Answer options:** (select 3)
1. Making music or playing an instrument
2. Drawing, design or animation
3. Acting, film or performing
4. Writing stories, or making videos
5. Sport and training
6. Being outdoors — camping, hiking, exploring
7. Building or fixing things
8. Coding, games or robotics
9. Science experiments or nature
10. Puzzles, chess or quiz stuff
11. Reading or going deep on a topic
12. Looking after animals
13. Helping or coaching younger kids
14. Organising an event or running a club
15. Making or selling something to earn money
16. Languages, travel or other countries

**Primary construct:** `INTEREST_*` (positive weight)
**Secondary construct:** —
**What each option indicates:** Direct interest weighting. Each tile maps to one or more school program attributes.
**Reason for change:** v1 embedded interests inside behavioural scenarios, which meant a child's choice could reflect either their interests or their psychology — you couldn't tell which. It also over-represented music, sport and enterprise because the bank was built around one child. A neutral inventory covers 16 domains in one item and cleans up every downstream question.

---

**Question number:** 2
**Stage:** 0 — Interest inventory
**Revised question:** Now pick the three you'd least want to spend a Saturday doing.
**Answer options:** Same 16 tiles (select 3)
**Primary construct:** `INTEREST_*` (negative weight)
**Secondary construct:** —
**What each option indicates:** Negative interest weighting. Prevents the "everything sounds good" problem that flattens interest profiles.
**Reason for change:** New. Without negative space, most children rate most things positively and the interest profile carries no discriminating information.

---

**Question number:** 3
**Stage:** 0 — Interest inventory
**Revised question:** Which of these have you actually done in the last month, without an adult asking you to? Pick as many as are true.
**Answer options:** Same 16 tiles (select any number)
**Primary construct:** `INTEREST_*` (behavioural confirmation)
**Secondary construct:** `EFFORT_SELFDIR`
**What each option indicates:** Interests that survive without prompting. Where Q1 and Q3 agree, confidence is high. Where a child *says* they love something but hasn't done it unprompted, the engine should treat it as an aspiration and lower evidence confidence for that domain.
**Reason for change:** New. This is the direct fix for "what sounds exciting" vs "what I actually do." It also gives you a general self-direction reading for free.

---

# STAGE 1: TWO-OPTION TRADE-OFFS

24 items. Randomise A/B order on presentation and store the presented order.

---

**Question number:** 4
**Stage:** 1
**Revised question:** You get to pick one class for next term. Which sounds better?
**Answer options:**
A. A hard class where you'd probably be one of the best in the room.
B. The hardest class in the school, where lots of people would start ahead of you.

**Primary construct:** `STRETCH` (aspiration)
**Secondary construct:** `PRESSURE`
**What each option indicates:**
A — Prefers a position of relative strength; motivated by being near the top. Suggests a school where they can be visibly strong rather than one where they'd sit mid-pack.
B — Appetite for a stretch cohort. Must be cross-checked against Q28 (behavioural) before scoring as genuine.
**Reason for change:** Lightly edited only. "Demanding" → "hard", "strongest students" → "best in the room". Scoring intention unchanged. **Status: lightly edited.**

---

**Question number:** 5
**Stage:** 1
**Revised question:** Your friends have started taking a group project less seriously. What would help you most?
**Answer options:**
A. A teacher checks in on you, expects more, and gives you a clear target.
B. You're allowed to leave the group and do a bigger version on your own.

**Primary construct:** `ACCOUNTABILITY`
**Secondary construct:** `PEER_INFLUENCE`
**What each option indicates:**
A — Needs external accountability and adult expectation to hold their standard. Points to schools with visible teacher follow-up and smaller class sizes.
B — Protects their own standard by separating from the group. Points to schools with independent extension pathways.
**Reason for change:** Retained unchanged from v1 Q5. Strong question, balanced options, real trade-off. Pairs with Q29 (behavioural version) — deliberate aspiration/behaviour pairing. **Status: retained unchanged.**

---

**Question number:** 6
**Stage:** 1
**Revised question:** In a big team project, which job feels better?
**Answer options:**
A. Run the group, present the idea and keep everyone going.
B. Be the person who makes the hardest part really well.

**Primary construct:** `LEADERSHIP`
**Secondary construct:** `BREADTH_DEPTH`
**What each option indicates:**
A — Organiser/front-person. Values leadership pathways, student voice, public roles.
B — Specialist contributor. Values depth, technical facilities, being trusted with the difficult part.
**Reason for change:** Lightly edited from v1 Q6 — "coordinate" → "run", "technically impressive" → "really well". Both options remain genuinely appealing; neither is the obvious good answer. **Status: lightly edited.**

---

**Question number:** 7
**Stage:** 1
**Revised question:** You've just done work you're really proud of. Which would mean more?
**Answer options:**
A. A teacher you respect says that's the level they expect from you.
B. You know yourself it's the best thing you've ever made.

**Primary construct:** `MOTIV_TEACHER` vs `MOTIV_INTRINSIC`
**Secondary construct:** `VISIBILITY`
**What each option indicates:**
A — Motivation runs through adult relationships. Teacher quality and continuity matter more than facilities for this child.
B — Internal standard. Less dependent on staff quality; more dependent on being given room and resources.
**Reason for change:** Lightly edited from v1 Q7 for plainer wording. Scoring unchanged. This is now one of only three teacher-motivation items in the child bank, down from six. **Status: lightly edited.**

---

**Question number:** 8
**Stage:** 1
**Revised question:** A teacher gives you a big project. Which setup gets your best work?
**Answer options:**
A. A clear standard, weekly check-ins and straight feedback.
B. A rough goal and the freedom to work out your own way.

**Primary construct:** `STRUCTURE_INDEP`
**Secondary construct:** `ACCOUNTABILITY`
**What each option indicates:**
A — Performs under scaffolding. Over-structured schools are a low risk for this child; loose schools are a real risk.
B — Performs under autonomy. Highly structured schools risk disengagement.
**Reason for change:** Retained unchanged from v1 Q9. **Status: retained unchanged.**

---

**Question number:** 9
**Stage:** 1
**Revised question:** By Year 10, which would you rather be?
**Answer options:**
A. Really good at one main thing.
B. Good across school, activities and a few different interests.

**Primary construct:** `BREADTH_DEPTH`
**Secondary construct:** —
**What each option indicates:**
A — Specialist identity. Suits schools with deep single-domain pathways; risk of narrowing too early should be flagged in the report.
B — Generalist. Suits broad co-curricular schools; risk of never going deep should be flagged.
**Reason for change:** Retained unchanged from v1 Q10. **Status: retained unchanged.**

---

**Question number:** 10
**Stage:** 1
**Revised question:** A new club looks interesting but none of your friends are joining. What's more like you?
**Answer options:**
A. Join anyway and see who's there.
B. Pick something else your friends are doing.

**Primary construct:** `PEER_INDEPENDENCE`
**Secondary construct:** `SOCIAL_CONF`
**What each option indicates:**
A — Will find opportunities alone. A large school with many options will work; they'll self-serve.
B — Opportunity uptake depends on friends. A large school risks them following the group rather than their strengths; teacher-initiated opportunity matters much more.
**Reason for change:** Retained unchanged from v1 Q11. Neither option is obviously desirable, which is why it works. **Status: retained unchanged.**

---

**Question number:** 11
**Stage:** 1
**Revised question:** Your closest friends get really into a new hobby. What's more likely?
**Answer options:**
A. I'd probably get into it too.
B. I'd keep spending most of my time on what I'm already into.

**Primary construct:** `PEER_INFLUENCE`
**Secondary construct:** `INTEREST_*` stability
**What each option indicates:**
A — Interests and effort track the friendship group. Cohort culture is the single biggest variable in the school choice for this child.
B — Interests hold independently. Cohort culture matters less; program strength matters more.
**Reason for change:** Retained unchanged from v1 Q13. **Status: retained unchanged.**

---

**Question number:** 12
**Stage:** 1
**Revised question:** Which spot in a class would make you work harder?
**Answer options:**
A. Near the top, with a real chance to lead and get noticed.
B. Somewhere in the middle, with people around you doing amazing work.

**Primary construct:** `STRETCH` (motivation, not aspiration)
**Secondary construct:** `VISIBILITY`
**What each option indicates:**
A — Effort is fuelled by relative standing. In a highly selective cohort this child may lose their motivational engine — a genuine risk, not a deficiency.
B — Effort is fuelled by proximity to excellence. Selective cohorts are an opportunity rather than a risk.
**Reason for change:** Lightly edited from v1 Q14. Note the overlap with Q4 is intentional and useful: Q4 asks what they'd *choose*, Q12 asks what actually *drives* them. A child answering B then A is aspirational about stretch but not motivated by it. **Status: lightly edited. Overlaps Q4 by design.**

---

**Question number:** 13
**Stage:** 1
**Revised question:** You're stuck on something in class and you don't really get it. What's more like you?
**Answer options:**
A. Put your hand up and ask, even though everyone can hear.
B. Keep going on your own and try to work it out.

**Primary construct:** `HELP_SEEKING`
**Secondary construct:** `VISIBILITY`
**What each option indicates:**
A — Will surface problems early. Can survive a large school where staff rely on students speaking up.
B — Works it out privately. In a large school this child can be quietly behind for a long time before anyone notices. Strongly raises the value of small classes, tutor groups and dense pastoral structure.
**Reason for change:** **New.** This was the biggest gap in v1. Both options are defensible — B reads as independent, not as failure — so there's no obviously correct answer. Pairs with the behavioural version at Q37. **Status: newly added.**

---

**Question number:** 14
**Stage:** 1
**Revised question:** Which school would suit you better?
**Answer options:**
A. A big school where there's something for everyone, but plenty of faces you'll never know.
B. A smaller school where you'd know almost everyone, but there's less on offer.

**Primary construct:** `SCHOOL_SIZE`
**Secondary construct:** `BELONGING`
**What each option indicates:**
A — Comfortable with anonymity; values breadth of offering. Large schools are viable.
B — Needs to be known; accepts a narrower program for it. Large schools carry a real fit risk.
**Reason for change:** **New.** School size is one of the largest actual differences between Perth secondary schools and v1 never tested it directly. **Status: newly added.**

---

**Question number:** 15
**Stage:** 1
**Revised question:** Which sounds better for your first year of high school?
**Answer options:**
A. A big group of friends you hang around with.
B. One or two really close friends you'd do everything with.

**Primary construct:** `BELONGING`
**Secondary construct:** `SOCIAL_CONF`
**What each option indicates:**
A — Wide-network child. Larger intakes and mixed groupings are comfortable; less exposed if one friendship fails.
B — Close-pair child. Highly exposed if the one friendship doesn't form or the friend goes elsewhere. Raises the value of vertical/house systems, small tutor groups, and choosing a school where at least one known peer is going.
**Reason for change:** **New.** This is one of the strongest single predictors of a difficult Year 7 and v1 had nothing on it. **Status: newly added.**

---

**Question number:** 16
**Stage:** 1
**Revised question:** Which would you rather do?
**Answer options:**
A. Try out for something where not everyone gets in.
B. Join something open to anyone who wants to get better.

**Primary construct:** `PRESSURE` (selection)
**Secondary construct:** `FAILURE_RECOVERY`
**What each option indicates:**
A — Comfortable with selection and the possibility of missing out. Audition/trial-based programs are attractive.
B — Prefers open participation. Schools where the best opportunities are gated by trial may quietly exclude them.
**Reason for change:** Retained unchanged from v1 Q17. **Status: retained unchanged.**

---

**Question number:** 17
**Stage:** 1
**Revised question:** Which would you pick for high school?
**Answer options:**
A. A school close to home, where your friends, sport and neighbourhood all stay connected.
B. A school further away, with a longer trip each day, that's really strong at something you love.

**Primary construct:** `COMMUNITY_SPECIALIST`
**Secondary construct:** `BELONGING`
**What each option indicates:**
A — Community continuity matters more than specialist access. Local school with adequate programs likely beats a distant specialist school.
B — Will trade daily convenience and local ties for program strength. Specialist and distant schools are viable.
**Reason for change:** Lightly edited from v1 Q18 — "commute" replaced with "longer trip each day", and the daily cost made concrete so a child can actually weigh it. Note that the real commute constraint belongs to the parent (F9); this item measures the child's willingness, not the family's capacity. **Status: lightly edited.**

---

**Question number:** 18
**Stage:** 1
**Revised question:** Two schools have equally good subjects. Which sounds better?
**Answer options:**
A. A big school with heaps of programs, where you have to go looking for the best ones yourself.
B. A school where teachers are more likely to spot what you're good at and suggest things.

**Primary construct:** `VISIBILITY`
**Secondary construct:** `SCHOOL_SIZE`
**What each option indicates:**
A — Self-starter on opportunity. Won't be lost in a large school.
B — Needs to be noticed and invited. In a large school, capable-but-quiet children in this category routinely miss out. This is a risk flag, not a weakness.
**Reason for change:** Retained unchanged from v1 Q19. Overlaps Q14 on size but measures something different — Q14 is about belonging, Q18 is about who initiates opportunity. Both worth keeping. **Status: retained unchanged. Overlaps Q14 partially.**

---

**Question number:** 19
**Stage:** 1
**Revised question:** Which classroom would you rather be in?
**Answer options:**
A. Fairly relaxed, and some people muck around, but there's a big mix of people and you can still take harder classes.
B. Almost everyone works hard the whole lesson, but it feels more competitive.

**Primary construct:** `CLASSROOM_FOCUS`
**Secondary construct:** `PRESSURE`
**What each option indicates:**
A — Tolerates a mixed classroom; values social breadth. Comprehensive and larger public schools remain viable.
B — Wants a focused room and accepts the pressure that comes with it. Selective and academically intense schools are attractive.
**Reason for change:** **Substantially changed.** v1 Q20 was long, abstract and used adult framing ("access to advanced classes and a broad social mix") that a Year 4 child cannot evaluate. Shortened to two concrete classroom pictures. Scoring intention unchanged. **Status: substantially changed.**

---

**Question number:** 20
**Stage:** 1
**Revised question:** Which school feels better?
**Answer options:**
A. Sport is a big deal, and the best athletes are the most well-known kids.
B. Sport, music, art, marks and leadership all get noticed about the same.

**Primary construct:** `STATUS_TOLERANCE`
**Secondary construct:** `BREADTH_DEPTH`
**What each option indicates:**
A — Comfortable with a dominant-domain hierarchy, and likely to want to be in it. Schools with a strong sporting identity fit.
B — Prefers distributed recognition. In a single-domain-dominant school, a child outside that domain can feel peripheral for six years.
**Reason for change:** Lightly edited from v1 Q21. Note this is deliberately framed around sport because sport-dominant culture is a real and identifiable feature of several Perth schools — but the construct is status structure, not sport interest, which is captured separately at Q1. **Status: lightly edited.**

---

**Question number:** 21
**Stage:** 1
**Revised question:** Which school day sounds better?
**Answer options:**
A. Full uniform, assemblies, house competitions and lots of school traditions.
B. Relaxed uniform, fewer formal events, and more say in how you do things.

**Primary construct:** `FORMALITY`
**Secondary construct:** —
**What each option indicates:**
A — Traditional culture is a positive. Ceremony, house systems and formal identity are motivating rather than constraining.
B — Traditional culture is a cost. Progressive or relaxed schools fit better.
**Reason for change:** **Substantially changed.** v1 Q22 bundled formality *with* awards on one side, and creativity *with* relaxedness on the other. That made it unanswerable for a creative child who likes ceremony — and there are many. Formality is now isolated; creativity lives in the interest inventory. This materially changes the scoring by removing a false correlation between "traditional" and "not creative." **Status: substantially changed. Scoring intention changed — formality and creativity are now scored independently.**

---

**Question number:** 22
**Stage:** 1
**Revised question:** Which high school week sounds better?
**Answer options:**
A. Something on most afternoons — sport, music, clubs, activities.
B. One or two things you take seriously, with time left over to get really good at them.

**Primary construct:** `BREADTH_DEPTH`
**Secondary construct:** `SENSORY_LOAD`
**What each option indicates:**
A — Thrives on a full week. Compulsory co-curricular schools are a fit, not a burden.
B — Needs space and depth. Schools with heavy compulsory co-curricular loads are a genuine risk.
**Reason for change:** Lightly edited from v1 Q24. Second test of `BREADTH_DEPTH` (with Q9), from a time-and-load angle rather than an identity angle. **Status: lightly edited.**

---

**Question number:** 23
**Stage:** 1
**Revised question:** Which would you rather?
**Answer options:**
A. Stay with the same class group for most subjects all year.
B. Be in different groups for different subjects, depending on the subject.

**Primary construct:** `COHORT_STABILITY`
**Secondary construct:** `CHANGE_TOLERANCE`
**What each option indicates:**
A — Stability supports them. Horizontal class structures and consistent groupings fit.
B — Comfortable with movement; likely to make friends across a year group. Streamed and modular timetables fit.
**Reason for change:** **Substantially changed.** v1 Q28 used "cohort" and "shared expectations" — neither is accessible to a Year 4 child. Rewritten in plain classroom language. Scoring intention unchanged. **Status: substantially changed.**

---

**Question number:** 24
**Stage:** 1
**Revised question:** You're starting at a school where most kids already know each other from primary. What's more like you?
**Answer options:**
A. Fine — I'd find my people within a few weeks.
B. I'd rather go somewhere with a group I already know.

**Primary construct:** `CHANGE_TOLERANCE`
**Secondary construct:** `SOCIAL_CONF`, `BELONGING`
**What each option indicates:**
A — Handles a cold start. Schools with dominant feeder-school intakes are manageable.
B — Needs a known anchor. Feeder-dominated intakes are a significant risk; schools with a broad or diverse Year 7 intake fit better.
**Reason for change:** **New.** Feeder-school dominance varies enormously across Perth schools and is one of the most common causes of a hard first year. v1 had no item on it. **Status: newly added.**

---

**Question number:** 25
**Stage:** 1
**Revised question:** Your school runs a week-long camp — hiking, tents, no phones. How do you feel about that?
**Answer options:**
A. Sounds great.
B. I'd rather spend that week on the things I'm actually into.

**Primary construct:** `OUTDOOR`
**Secondary construct:** `CHANGE_TOLERANCE`
**What each option indicates:**
A — Outdoor education is a drawcard. Several Perth schools run major expedition programs, and this is a genuine differentiator.
B — Outdoor programs are a cost to be weighed, not a benefit. Worth flagging where a school has a compulsory multi-week outdoor component.
**Reason for change:** **New.** Compulsory outdoor education is a significant and often overlooked feature of several Perth schools. Option B is framed as a legitimate preference, not reluctance. **Status: newly added.**

---

**Question number:** 26
**Stage:** 1
**Revised question:** Which teacher would you rather have for a whole year?
**Answer options:**
A. One who really knows their subject and pushes you hard.
B. One who knows you well and notices how you're going.

**Primary construct:** `MENTORSHIP_TYPE` (`MOTIV_TEACHER` sub-axis)
**Secondary construct:** `HELP_SEEKING`
**What each option indicates:**
A — Wants expertise and challenge from staff. Subject specialists and academic depth matter most.
B — Wants relationship and attention from staff. Pastoral density, tutor systems and staff continuity matter most.
**Reason for change:** **New.** v1 had six items on *whether* teachers motivate the child, and none on *what kind* of teacher. The second is far more useful for distinguishing between schools, since almost every school claims good teachers but they differ sharply in style. **Status: newly added.**

---

**Question number:** 27
**Stage:** 1
**Revised question:** Which would put you off more?
**Answer options:**
A. A rule you think is unfair.
B. Work that feels pointless.

**Primary construct:** `RISK_TRIGGER`
**Secondary construct:** `SELF_REG`
**What each option indicates:**
A — Disengages on fairness and authority. A rigid, rule-dense school carries real friction risk; restorative and explanatory behaviour cultures fit better.
B — Disengages on meaning. A traditional-content, low-relevance curriculum carries the risk; project-based and applied programs fit better.
**Reason for change:** **New.** Both are common disengagement paths and they point to opposite school types. Neither answer is socially preferable, which makes this unusually honest. Feeds the risk-level output directly. **Status: newly added.**

---

# STAGE 2: BEHAVIOURAL SCENARIOS

15 items. **Randomise option order on every item.** In v1, options D and E were consistently the disengagement answers; children pattern-match this within about six questions and stop choosing them, which destroys the diagnostic value of exactly the responses you most need. Every option below is now framed as a defensible thing a reasonable child would do.

Where a question refers to "something you really care about," the engine substitutes the child's top-ranked interest from Q1/Q3.

---

**Question number:** 28
**Stage:** 2
**Revised question:** Someone in your year turns out to be way better than you at something you really care about. What do you actually do?
**Answer options:**
A. Ask how they got that good and try doing it their way.
B. Practise on my own until I can keep up with them.
C. Put my effort into the part of it I'm already strong at.
D. Let them take the lead on that one and step back a bit.
E. Spend more of my time on something else I enjoy.

**Primary construct:** `STRETCH` (behaviour)
**Secondary construct:** `HELP_SEEKING`, `FAILURE_RECOVERY`
**What each option indicates:**
A — Uses stronger peers as a resource. Selective cohorts are a clear growth opportunity. Also a strong help-seeking signal.
B — Motivated by stronger peers but works privately. Selective cohorts work, but the child needs a way to show progress or they'll grind alone.
C — Redirects into existing strength. Suits schools with multiple visible domains; risks narrowing in a school with one dominant domain.
D — Withdraws from contested ground. **Key risk signal.** A highly selective cohort may reduce this child's participation rather than lift it. Report as a fit risk, not a character issue.
E — Reallocates interest away from contested areas. Similar risk to D, expressed as drift rather than retreat.
**Reason for change:** Options D and E rewritten. v1 had "Become quieter and let them take over" and "Lose interest and move towards something else" — both read as admissions of failure and were under-selected. The revised wording describes the same behaviour without the moral loading, which should materially increase honest selection. Scoring intention unchanged. **Status: lightly edited (options only).**

---

**Question number:** 29
**Stage:** 2
**Revised question:** Your friendship group decides that doing the bare minimum is good enough. What happens to how much effort you put in?
**Answer options:**
A. Stays the same — what I want out of it matters more.
B. I try to talk the group into doing more.
C. It probably drops a bit without me really noticing.
D. It drops unless a teacher is checking on me.
E. I'd do the things I care about with different people.

**Primary construct:** `PEER_INFLUENCE` (behaviour)
**Secondary construct:** `ACCOUNTABILITY`
**What each option indicates:**
A — Effort is independent of group norms. Cohort work ethic is a lower-priority variable.
B — Attempts to shift the group. Leadership signal; also means a low-effort cohort will cost them energy.
C — Absorbs group norms without awareness. **Highest-weight signal in this item.** Cohort work ethic becomes the single most important school variable.
D — Group-influenced but rescuable by adult accountability. A school with strong teacher follow-up can offset a mixed cohort.
E — Manages influence by changing context. Needs a school with enough different groups to move between — often means a larger school.
**Reason for change:** Option E reworded from "I find another group for the things I care about" for plainer reading. Otherwise retained. Pairs with Q5 as the behavioural counterpart. **Status: lightly edited.**

---

**Question number:** 30
**Stage:** 2
**Revised question:** You start an exciting project that nobody set and there's no due date. Three weeks later, what's most likely true?
**Answer options:**
A. It's finished and I've started making it better.
B. I've done heaps of it, but it's not finished.
C. I'd have kept going if someone had checked in on me.
D. I've moved on to a newer idea.
E. I got other people involved so it kept moving.

**Primary construct:** `EFFORT_SELFDIR`
**Secondary construct:** `ACCOUNTABILITY`
**What each option indicates:**
A — Completes independently. Autonomy-heavy schools are safe.
B — High energy, low completion. Needs deadline scaffolding to convert ability into finished work.
C — Explicitly needs checkpoints. Loose, self-directed schools are a genuine risk.
D — Idea-driven rather than completion-driven. Needs a school that structures follow-through, or one that rewards prototyping.
E — Uses social momentum. Works best in collaborative, team-based programs.
**Reason for change:** Option C reframed from "I need a reminder or checkpoint to keep moving" to a less deficit-sounding phrasing. Otherwise retained from v1 Q31 — a strong item. **Status: lightly edited.**

---

**Question number:** 31
**Stage:** 2
**Revised question:** A teacher gives you straight criticism of work you were proud of. What happens next?
**Answer options:**
A. I want to know exactly how to fix it.
B. I'm annoyed at first, then I go back and improve it.
C. I explain why I did it that way and keep most of it.
D. I worry that I've let them down.
E. I check what other people got told before I decide what to think.

**Primary construct:** `CRITICISM`
**Secondary construct:** `SELF_REG`, `MOTIV_TEACHER`
**What each option indicates:**
A — Uses feedback directly. Demanding feedback cultures are a growth opportunity.
B — Recovers after a delay. Fine in most environments; needs feedback delivered with some warmth.
C — Holds their position. Suits schools that value student voice; may clash with rigid marking cultures.
D — Feedback lands as relational disappointment. **Risk signal for high-expectation, high-pressure schools** — this child can work hard for the wrong reason and burn out.
E — Calibrates via peers. Comparison-heavy cultures (public rankings, class placings) will amplify this.
**Reason for change:** Retained from v1 Q32 with plainer wording only. **Status: lightly edited.**

---

**Question number:** 32
**Stage:** 2
**Revised question:** You turn up to a camp or holiday program where you don't know a single person. What do you actually do?
**Answer options:**
A. Start talking to people and find a group pretty quickly.
B. Get to know people through the activity rather than by chatting.
C. Wait for someone outgoing to bring me in.
D. Get on with the activity — friends can happen later.
E. Stay pretty quiet and join in less than I normally would.

**Primary construct:** `SOCIAL_CONF`
**Secondary construct:** `CHANGE_TOLERANCE`, `BELONGING`
**What each option indicates:**
A — High social initiative. Any intake size works.
B — Task-mediated social entry. Needs a school where activities start early in Year 7 — co-curricular from week one matters.
C — Depends on being included by others. Larger, less structured intakes are a risk; strong transition programs matter a lot.
D — Task-focused, socially patient. Fine, but may be slow to build a group; house/tutor systems help.
E — Reduced participation under social uncertainty. **Risk signal for a large or feeder-dominated intake.**
**Reason for change:** Option E softened from "Feel uncomfortable enough that I participate less." Retained otherwise from v1 Q33. **Status: lightly edited.**

---

**Question number:** 33
**Stage:** 2
**Revised question:** You've got a test, a performance and a big game all in the same week. What actually happens?
**Answer options:**
A. I love having lots on.
B. I make a plan and work through them one at a time.
C. I put most of my energy into the one that matters most to me.
D. I get through it if an adult helps me organise the week.
E. Weeks like that take a lot out of me.

**Primary construct:** `PRESSURE`
**Secondary construct:** `SENSORY_LOAD`, `STRUCTURE_INDEP`
**What each option indicates:**
A — Thrives on density. Schools with heavy compulsory commitments are a fit.
B — Manages load through planning. Broadly resilient.
C — Prioritises rather than spreads. Suits schools that allow specialisation; struggles where everything is compulsory.
D — Load is manageable only with adult scaffolding. Schools that expect Year 7s to self-organise are a risk.
E — Load is genuinely costly. **Strong signal against high-commitment schools**, regardless of ability.
**Reason for change:** Option E substantially reworded — v1's "I become overwhelmed and enjoy none of them" was near-unselectable. The revision describes the same state as a cost rather than a failure. This should significantly improve selection rates and is the main reason this item now works. **Status: lightly edited (options only), but expect a real change in response distribution.**

---

**Question number:** 34
**Stage:** 2
**Revised question:** You try out for a team, a group or a special program and you don't get in. What's most likely?
**Answer options:**
A. Ask what I need to get better at and try again next time.
B. Train on my own and try again without talking about it much.
C. Put my energy into something where I've got a better shot.
D. Give that one a rest for a while.
E. Join the version that's open to everyone so I can keep doing it.

**Primary construct:** `FAILURE_RECOVERY`
**Secondary construct:** `PRESSURE`
**What each option indicates:**
A — Setbacks convert to action, with adult input. Selective schools are low-risk.
B — Setbacks convert to action, privately. Fine, but progress may be invisible to staff — pair with Q13/Q37 help-seeking.
C — Redirects. Needs a school with several genuine pathways, or they'll keep narrowing.
D — Withdraws temporarily. In a school where everything is trial-based, repeated withdrawal compounds.
E — Values participation over selection. **Strongly favours schools with open, non-selective co-curricular pathways** — a major and under-discussed difference between Perth schools.
**Reason for change:** Retained from v1 Q36, plainer wording. **Status: lightly edited.**

---

**Question number:** 35
**Stage:** 2
**Revised question:** Your class gets given a list showing where everyone placed on a big task. What effect does that have on you?
**Answer options:**
A. Makes me want to get further up the list.
B. Helps me see what the standard is, but I don't think about it much after.
C. I like it on the weeks I do well.
D. It pulls my attention away from actually learning.
E. I'd rather just be told privately how I went.

**Primary construct:** `PRESSURE` (comparison)
**Secondary construct:** `STATUS_TOLERANCE`, `MOTIV_RECOG`
**What each option indicates:**
A — Comparison is fuel. Competitive academic cultures are motivating.
B — Comparison is information. Robust in either culture.
C — Comparison is conditional fuel. In a strong cohort where they're mid-pack, motivation may fall away — cross-check with Q12.
D — Comparison is noise. Schools that publish placings or rank openly are a risk.
E — Prefers private feedback. Same implication as D, expressed as a preference rather than a cost.
**Reason for change:** Retained from v1 Q37 with "rankings" replaced by a concrete description, since "rankings" is not reliably understood at Year 4. **Status: lightly edited.**

---

**Question number:** 36
**Stage:** 2
**Revised question:** Your schoolwork feels too easy and the teacher hasn't noticed. What do you actually do?
**Answer options:**
A. Ask the teacher straight out for harder work.
B. Make the task harder or more interesting for myself.
C. Finish it fast and move on to my own stuff.
D. Wait until the teacher gives me something harder.
E. Drift a bit and put in less than I could.

**Primary construct:** `VISIBILITY`
**Secondary construct:** `HELP_SEEKING`, `EFFORT_SELFDIR`
**What each option indicates:**
A — Self-advocates for extension. Will find extension in most schools.
B — Self-extends without asking. Doesn't need a school to notice, but may never be formally identified for advanced pathways.
C — Compliant coasting. Extension must be structural (streaming, acceleration) rather than teacher-initiated.
D — Extension depends entirely on the teacher. **Strongest argument for smaller classes and schools with formal identification processes.**
E — Under-challenge becomes disengagement. High-priority risk flag for a school where the child would be well above the median.
**Reason for change:** Option E reworded from "Become distracted or put in less effort." Retained otherwise from v1 Q41 — one of the strongest items in the original bank. **Status: lightly edited.**

---

**Question number:** 37
**Stage:** 2
**Revised question:** You've been lost in a subject for about two weeks and nobody has noticed. What actually happens?
**Answer options:**
A. I tell the teacher.
B. I tell someone at home and they sort it out.
C. I ask a friend who gets it.
D. I try to catch up on my own without saying anything.
E. I hope the next topic makes more sense.

**Primary construct:** `HELP_SEEKING` (behaviour)
**Secondary construct:** `VISIBILITY`, `BELONGING`
**What each option indicates:**
A — Direct to staff. Safe in a large school.
B — Routes through home. Works only if the school communicates well with parents — worth checking on tours.
C — Routes through peers. Depends entirely on the cohort; in a low-effort group this fails silently.
D — Self-rescues in private. **High-value risk signal.** Capable children in this category are routinely missed in large schools for a full term or more.
E — Waits it out. Same risk as D, with less compensating effort. Strongly raises the value of dense pastoral structure, small tutor groups and frequent reporting.
**Reason for change:** **New**, and probably the most important addition to the bank. v1 measured whether a child responds to teachers, but never whether they'd tell anyone something was wrong. That single behaviour determines whether a large school is workable. Pairs with Q13 (aspiration form). **Status: newly added.**

---

**Question number:** 38
**Stage:** 2
**Revised question:** You and a good friend have a falling out. A week later it still isn't sorted. What usually happens?
**Answer options:**
A. I go and talk to them about it.
B. I wait for them to come to me.
C. We just start talking again and never mention it.
D. I spend more time with other friends instead.
E. I get someone else to help sort it out.

**Primary construct:** `CONFLICT_REPAIR`
**Secondary construct:** `BELONGING`, `SELF_REG`
**What each option indicates:**
A — Repairs directly. Resilient in most social environments.
B — Waits. In a small cohort with few alternative groups, a stalled friendship can persist for a long time.
C — Moves on without resolution. Common and functional; low information but worth recording.
D — Replaces rather than repairs. Needs a school with enough social options — a small cohort is a real risk here.
E — Uses a third party. Values schools with visible wellbeing structures and approachable staff.
**Reason for change:** **New.** Friendship rupture is the most common cause of a bad school year and v1 had nothing on it. Combined with Q15 (network shape) this gives you a usable read on social risk. **Status: newly added.**

---

**Question number:** 39
**Stage:** 2
**Revised question:** Your team is going well, but one person keeps getting left out of things. What do you actually do?
**Answer options:**
A. Make sure they get a real job on the team.
B. Talk to them or sit with them, but leave the team stuff as it is.
C. Say something to whoever's leaving them out.
D. Concentrate on my own part — it's not really mine to sort out.
E. Mention it to a teacher.

**Primary construct:** `EMPATHY`
**Secondary construct:** `LEADERSHIP`, `SOCIAL_CONF`
**What each option indicates:**
A — Acts structurally. Strong signal for leadership and service pathways.
B — Acts privately and kindly. High empathy, low social risk-taking. Suits schools with strong small-group pastoral culture.
C — Acts confrontationally. Willing to spend social capital; suits schools that explicitly back students who speak up.
D — Task-focused. Not a deficiency — indicates the child's contribution runs through work rather than group dynamics.
E — Escalates to adults. Suits schools with visible and trusted staff.
**Reason for change:** **New.** Empathy items usually fail because they're free to answer — everyone says they'd help. This one costs something in every option, so it discriminates. It also feeds directly into whether service-oriented and community-focused school cultures will land with this child. **Status: newly added.**

---

**Question number:** 40
**Stage:** 2
**Revised question:** Think about doing class work in a group with a mix of boys and girls, compared with a group of just your own gender. What's usually true for you?
**Answer options:**
A. I work and speak up about the same either way.
B. I get more done in a mixed group.
C. I get more done in a group of just my own gender.
D. It depends way more on who the actual people are than on that.
E. I've never really noticed.

**Primary construct:** `COED` — **low weight, indicative only**
**Secondary construct:** `SOCIAL_CONF`
**What each option indicates:**
A / D / E — No meaningful signal. Do not let these influence the co-ed vs single-sex output at all; defer entirely to the parent (F7) and family fit.
B — Weak positive indicator for co-ed. Treat as one input among several, never as a determinant.
C — Weak positive indicator for single-sex. Same caveat.
**Reason for change:** **Replaces v1 Q27 entirely.** Asking a 9–12 year old to state a preference for co-ed or single-sex schooling produces answers driven by embarrassment, sibling arrangements or whatever their friends have said — not by how they actually work. This item asks about observed working behaviour instead, offers three genuine no-signal options so the child isn't forced into a stance, and carries deliberately low weight.

**Handle-with-care note for the engine:** never surface co-ed vs single-sex as a recommendation derived from the child. Surface it as *"Here is how your child described working in mixed and same-gender groups"* alongside the family's stated preference, and list it as a question to ask on tours. Neither model should ever be scored as inherently better. **Status: substantially changed. Scoring intention changed — weight reduced substantially and the direct preference question removed.**

---

**Question number:** 41
**Stage:** 2
**Revised question:** You're in a class where a few people are mucking around and putting others off. What's most likely?
**Answer options:**
A. I keep working and mostly tune it out.
B. I work well as long as the teacher keeps things under control.
C. My effort slowly drops along with everyone else's.
D. It frustrates me and I'd rather be in a more focused class.
E. I enjoy the energy and still get my work done.

**Primary construct:** `CLASSROOM_FOCUS`
**Secondary construct:** `PEER_INFLUENCE`
**What each option indicates:**
A — Self-insulating. Behaviour standards are a lower-priority variable.
B — Depends on teacher control. Consistency of classroom management matters more than cohort ability. Worth a specific tour question.
C — Absorbs the room. **Cohort behaviour becomes the primary school-choice variable.**
D — Actively costly. Streamed or academically focused settings are a strong fit.
E — Uses social energy productively. Comfortable in mixed classrooms; may find very quiet rooms flat.
**Reason for change:** Retained from v1 Q42, plainer wording. **Status: lightly edited.**

---

**Question number:** 42
**Stage:** 2
**Revised question:** A confident person in your group starts taking over the whole project. What do you do?
**Answer options:**
A. Push back and share the leading.
B. Sort out one part that's clearly mine to run.
C. Let them lead if the end result will be good.
D. Step back and do less.
E. Ask the teacher to sort out who's doing what.

**Primary construct:** `SELF_REG`
**Secondary construct:** `LEADERSHIP`, `STATUS_TOLERANCE`
**What each option indicates:**
A — Contests directly. Comfortable in assertive, high-status cohorts.
B — Negotiates territory. Effective without confrontation; suits most environments.
C — Outcome-focused over status. May be under-recognised in schools where leadership is heavily rewarded.
D — Yields under social pressure. **Risk signal in a confident, high-status cohort** — pairs closely with Q28 option D.
E — Escalates to adults. Needs staff who actively structure group work.
**Reason for change:** Retained from v1 Q39, plainer wording. **Status: lightly edited.**

---

# STAGE 3: MOST-AND-LEAST PRIORITIES

8 items. Child selects one MOST and one LEAST. This format is deliberately ipsative — it forces genuine trade-offs and defeats the "everything matters" flattening that Likert scales produce.

---

**Question number:** 43
**Stage:** 3
**Revised question:** At a school, which of these would matter MOST to you, and which LEAST?
**Answer options:**
1. Teachers who know what I'm good at.
2. Other kids who take their work seriously.
3. Great gear and spaces for the things I'm into.
4. A good social life.
5. Adults who'd notice if I was having a bad week.

**Primary construct:** `VISIBILITY` / `CLASSROOM_FOCUS` / facilities / `BELONGING` / pastoral
**Secondary construct:** —
**What each item indicates:**
1 — Teacher recognition is the core need. Class size and staff continuity dominate the recommendation.
2 — Cohort work ethic is the core need. Weights heavily towards academically serious environments.
3 — Facilities and resources are the core need. Weights towards well-resourced specialist programs, which cuts across both sectors.
4 — Social life is the core need. Weights towards larger, socially active schools and away from intense academic cultures.
5 — Pastoral care is the core need. Weights heavily towards dense wellbeing structures and smaller year groups.
**Reason for change:** Item 5 added; item 3 reworded from "Excellent creative and technical equipment" to remove the creative-arts tilt. Adding a pastoral option matters because v1 offered no way for a child to say *being looked after* was their priority — so that need was invisible to the engine. **Status: substantially changed (new option added).**

---

**Question number:** 44
**Stage:** 3
**Revised question:** Which of these would you MOST want a school to be great at, and which LEAST?
**Answer options:**
1. Sports teams and coaching.
2. Harder classes in the subjects I'm good at.
3. Arts — music, drama, art, film.
4. Making and building — tech, design, robotics.
5. Outdoor programs, camps and expeditions.

**Primary construct:** `INTEREST_*` (confirmation)
**Secondary construct:** —
**What each item indicates:** Confirms and ranks the Q1–Q3 inventory under a forced trade-off. Where the MOST here contradicts the Q1 selection, lower evidence confidence for that domain and flag it in the report rather than picking one.
**Reason for change:** **Substantially changed.** v1 gave four options of which two were music/production and enterprise — a direct artefact of the original child. The revised set is five balanced domains with music folded into a general arts option and outdoor education added. Enterprise moves to the interest inventory, where it belongs. **Status: substantially changed.**

---

**Question number:** 45
**Stage:** 3
**Revised question:** Which of these school things matters MOST to you, and which LEAST?
**Answer options:**
1. Clear rules, and adults who follow up.
2. Freedom to do things my own way.
3. Competitions, tryouts and awards.
4. A kind school where people look out for each other.

**Primary construct:** `STRUCTURE_INDEP` / `PRESSURE` / pastoral
**Secondary construct:** `MOTIV_RECOG`
**What each item indicates:**
1 — Structure is a want, not just a need. Traditional, firm schools fit.
2 — Autonomy is the priority. Progressive and project-based schools fit.
3 — Competitive recognition drives them. Awards-heavy cultures fit.
4 — Community warmth is the priority. Weights against high-pressure environments regardless of academic strength.
**Reason for change:** Lightly edited from v1 Q45 — "firm follow-up" → "adults who follow up", "grounded" removed (not reliably understood). Scoring unchanged. **Status: lightly edited.**

---

**Question number:** 46
**Stage:** 3
**Revised question:** Which of these sounds MOST appealing, and which LEAST?
**Answer options:**
1. Staying near my friends and my own area.
2. Being around people who are into the same thing as me.
3. Meeting people who are into completely different things.
4. Going to a school that people have heard of.

**Primary construct:** `COMMUNITY_SPECIALIST`
**Secondary construct:** `STATUS_TOLERANCE`
**What each item indicates:**
1 — Local continuity. Weights towards catchment schools.
2 — Specialist cohort. Weights towards selective and specialist programs.
3 — Diversity of exposure. Weights towards comprehensive and socially mixed schools.
4 — Reputation matters to the child. Record it, but weight it lightly and cross-check against F2 — where a child rates this MOST and the parent has rated reputation as highly important, the child is very likely reflecting the family's language rather than their own preference. Flag rather than score.
**Reason for change:** "Prestigious reputation" → "a school that people have heard of", which is the actual concept a child can evaluate. The prestige cross-check with the parent item is new and important. **Status: lightly edited, with new cross-check logic.**

---

**Question number:** 47
**Stage:** 3
**Revised question:** After you've finished something hard, which of these matters MOST, and which LEAST?
**Answer options:**
1. A teacher I respect gives me proper feedback on it.
2. Other people get to see it.
3. I got to do it my own way.
4. The whole team did well.

**Primary construct:** `MOTIV_TEACHER` / `MOTIV_RECOG` / `MOTIV_INTRINSIC` / collective
**Secondary construct:** —
**What each item indicates:**
1 — Adult validation is the primary reward. Staff quality dominates.
2 — Public recognition is the primary reward. Performance, exhibition and awards culture matter.
3 — Ownership is the primary reward. Autonomy matters more than resources or recognition.
4 — Collective success is the primary reward. Team-based and house-based cultures fit well.
**Reason for change:** Retained unchanged from v1 Q47. Genuinely balanced, no obviously good answer, four distinct motivational sources. One of the strongest items in the original bank. **Status: retained unchanged.**

---

**Question number:** 48
**Stage:** 3
**Revised question:** Which of these would you MOST like to be known for, and which LEAST?
**Answer options:**
1. The one who quietly does really good work.
2. The one who gets everyone going.
3. The one who turns ideas into action.
4. The one who makes something new.
5. The one people go to when something's wrong.

**Primary construct:** identity / role
**Secondary construct:** `EMPATHY`, `LEADERSHIP`, `VISIBILITY`
**What each item indicates:**
1 — Quiet achiever. **Needs a school that finds quiet achievers** — this is a specific and checkable school property.
2 — Energiser. Thrives where personality is rewarded; may be under-served in strictly academic cultures.
3 — Doer/organiser. Wants leadership pathways with real scope.
4 — Inventor. Wants making facilities and permission to build unusual things.
5 — The one people trust. High EQ identity. Weights towards schools with peer support, mentoring and service programs — and these children are often overlooked entirely by fit tools.
**Reason for change:** Item 5 added; "performer who energises the room" simplified. The added option gives socially-oriented children an identity to claim, which v1's four options did not — every original option was about output. **Status: substantially changed (new option added).**

---

**Question number:** 49
**Stage:** 3
**Revised question:** Which of these would matter MOST to you at school, and which LEAST?
**Answer options:**
1. Not much stress, and plenty of free time.
2. High expectations and being pushed.
3. Lots of different things to try.
4. One thing I'm really known for.

**Primary construct:** `PRESSURE` / `BREADTH_DEPTH`
**Secondary construct:** `SENSORY_LOAD`
**What each item indicates:**
1 — Low-load preference. Weights strongly against intense schools regardless of ability level.
2 — High-expectation preference. Weights towards demanding environments.
3 — Breadth preference. Weights towards large co-curricular offerings.
4 — Depth and identity preference. Weights towards specialist pathways.
**Reason for change:** Lightly edited from v1 Q50 for plainer wording. **Status: lightly edited.**

---

**Question number:** 50
**Stage:** 3
**Revised question:** Which of these would MOST make you want to leave a school, and which LEAST?
**Answer options:**
1. Feeling like nobody there really knows me.
2. Being bored in class.
3. Feeling behind everyone else.
4. Not having friends I click with.
5. Feeling under pressure all the time.

**Primary construct:** `RISK_TRIGGER`
**Secondary construct:** —
**What each item indicates:** This item feeds the **risk-level output directly** — it tells you which failure mode to weight most heavily for this specific child.
1 — Anonymity risk. Heavily penalise very large schools and thin pastoral structures.
2 — Under-challenge risk. Penalise schools where the child would sit well above the median with no acceleration pathway.
3 — Outclassed risk. Penalise highly selective cohorts, especially where Q12=A and Q28=D/E.
4 — Social risk. Penalise feeder-dominated intakes and very small cohorts with few group options.
5 — Pressure risk. Penalise academically intense and high-commitment schools.
**Reason for change:** **New**, and it replaces v1 Q48 (weekly activity most/least), which duplicated the interest inventory. Asking what would make a school *fail* for this child is far more diagnostic than asking what would make one succeed, because children answer the negative version much more honestly. This should be the single highest-weighted input into your risk-level output. **Status: newly added (replaces a removed item).**

---
---

# PARENT QUESTIONNAIRE

**32 items in two parts: P1–P22 (what the parent observes about the child) and F1–F10 (family values, culture and constraints).**

The family module is the significant addition. Parents shouldn't only corroborate the child — they should answer things the child structurally cannot know: what the family is actually optimising for, how the family handles setbacks, how much reputation matters, and what the household can realistically sustain for six years.

**Build note — divergence detection.** Where parent and child answers on the same construct disagree, do not silently resolve it. Surface it as a family discussion prompt in the report. The disagreements are often the most useful output the tool produces.

## Part A — Observing the child (P1–P22)

---

**P1** · *Retained* · When your child realises another child is significantly more capable, what usually happens?
A. Becomes more determined and seeks ideas from them. B. Practises privately but stays involved. C. Finds another way to contribute. D. Becomes quieter or steps back. E. Loses interest in the activity.
**Primary:** `STRETCH` · **Secondary:** `FAILURE_RECOVERY` · **Cross-check:** child Q28. Divergence here is high-value — children routinely over-report resilience.

**P2** · *Retained* · Without a deadline or adult follow-up, what usually happens to a self-directed project?
A. Completed independently. B. Works intensely but may not finish. C. Needs occasional checkpoints. D. Loses momentum quickly. E. Recruits others to keep it going.
**Primary:** `EFFORT_SELFDIR` · **Cross-check:** child Q30.

**P3** · *Retained* · How strongly does their friendship group affect their effort and interests?
A. Very little. B. Somewhat, but adults and their own goals still matter. C. A lot — they absorb the group's habits. D. Depends on how confident they feel in that activity.
**Primary:** `PEER_INFLUENCE` · **Cross-check:** child Q11, Q29. Where the child says A and the parent says C, weight the parent.

**P4** · *Retained* · Which adults have got their strongest work out of them?
A. Warm teachers who build confidence. B. Demanding teachers who clearly expect more. C. Teachers who give them freedom and resources. D. Adults matter less than the peer group.
**Primary:** `MENTORSHIP_TYPE` · **Cross-check:** child Q26.

**P5** · *Retained* · When a teacher says the work isn't good enough yet, what usually follows?
A. They rapidly improve it. B. They're hurt but come back to it. C. They defend the work. D. They disengage from that subject.
**Primary:** `CRITICISM` · **Cross-check:** child Q31.

**P6** · *Retained* · How do they handle a crowded week of commitments?
A. Energised by it. B. Manage well with a plan. C. Manage if an adult organises it. D. Become overwhelmed.
**Primary:** `PRESSURE` · **Cross-check:** child Q33.

**P7** · *Retained* · In group activities, which role appears most often?
A. Leader or organiser. B. Social connector. C. Specialist who makes a key contribution. D. Joins the group's direction. E. Observer who may step back.
**Primary:** `LEADERSHIP` · **Secondary:** `SOCIAL_CONF`

**P8** · *Retained* · How often do they choose an activity when friends aren't joining?
A. Often. B. Sometimes, if very interested. C. Rarely. D. They join, but less confidently.
**Primary:** `PEER_INDEPENDENCE` · **Cross-check:** child Q10.

**P9** · *Retained* · What most reliably turns their ability into sustained effort?
A. A teacher relationship and high expectations. B. A competition, ranking or public goal. C. Deep personal interest. D. Friends who are equally committed. E. A busy routine with fixed commitments.
**Primary:** motivation source composite · **Cross-check:** child Q7, Q47.

**P10** · *Retained* · Which concern feels most realistic in a highly selective cohort?
A. They'd thrive and learn from stronger peers. B. They'd work hard but get stressed. C. They may become less visible or less confident. D. They wouldn't care much about comparisons.
**Primary:** `STRETCH` risk · Feeds risk level directly.

**P11** · *Retained* · When schoolwork is easy, what tends to happen?
A. They ask for more or extend it themselves. B. They do it well but don't seek more. C. They coast unless an adult raises the bar. D. They get distracted by friends or other interests.
**Primary:** `VISIBILITY` · **Cross-check:** child Q36.

**P12** · *Revised option list* · Which interests survive without any adult prompting? (select up to three, same 16 domains as child Q1)
**Primary:** `INTEREST_*` · **Reason for change:** v1 offered five options built around the original child. Now uses the identical 16-domain tile set as the child inventory so the two can be compared directly.

**P13** · *Retained* · Which setting most often brings out their social confidence?
A. A broad mixed group. B. A group built around a shared interest. C. A team with clear roles. D. One-to-one or small groups.
**Primary:** `SOCIAL_CONF` · **Secondary:** `BELONGING`

**P14** · *Retained* · How important is being among the strongest to their confidence?
A. Not very — strong peers energise them. B. Somewhat — they need regular evidence of success. C. Very — they can withdraw when clearly outperformed. D. It varies a lot by activity.
**Primary:** `STRETCH` · **Cross-check:** child Q12.

**P15** · *Retained* · Which school culture would most likely shape them positively?
A. Ambitious, academically focused peers. B. Active, social students doing lots of things. C. Creative and technically adventurous students. D. Grounded students from varied backgrounds. E. A traditional, highly structured community.
**Primary:** culture fit composite

**P16** · *Retained* · Which risk should the school choice guard against most?
A. Coasting because peers don't value effort. B. Losing confidence among exceptional peers. C. Losing interest because everything is over-structured. D. Becoming overwhelmed by too many commitments. E. Narrowing into one identity too early.
**Primary:** `RISK_TRIGGER` · **Cross-check:** child Q50. This pairing is the backbone of your risk output.

**P17** · *Retained* · When opportunities aren't personally offered, what usually happens?
A. They seek them out and ask directly. B. They notice them but need a small prompt. C. They wait for an adult to identify them. D. They may miss them even when highly capable.
**Primary:** `VISIBILITY` · **Cross-check:** child Q18, Q36.

**P18** · *Retained* · How strongly does unfocused classroom behaviour affect their effort?
A. Very little. B. They work well when the teacher keeps firm control. C. Their effort gradually follows the group. D. They become frustrated or disengaged.
**Primary:** `CLASSROOM_FOCUS` · **Cross-check:** child Q41.

**P19** · **New** · When your child is struggling with something at school, how do you usually find out?
A. They tell us straight away. B. We notice before they say anything. C. A teacher tells us. D. It usually comes out late, once it's built up.
**Primary:** `HELP_SEEKING` · **Secondary:** `VISIBILITY`
**What each indicates:** A — safe in a large school. B — the family is the detection system; the school needs to communicate well with parents, not just with the child. C — the school's pastoral structure is doing the work; check whether a prospective school can replicate that. D — **highest-priority risk flag in the parent bank.** Weights heavily towards small classes, tutor groups, frequent reporting and accessible staff.
**Reason for addition:** v1 had no item on whether problems surface. This is the strongest single predictor of whether a large school will work for a capable child.

**P20** · **New** · How does your child usually handle a falling out with a friend?
A. Sorts it out directly. B. Waits for the other person. C. Moves on to other friends. D. Takes it hard and it affects other things. E. Brings it to an adult.
**Primary:** `CONFLICT_REPAIR` · **Cross-check:** child Q38.
**What each indicates:** A/B/C — social resilience gradient. D — social difficulty spills into academic performance; wellbeing structures and cohort stability matter much more for this child. E — needs approachable staff and a school where that's normalised.

**P21** · **New** · How does your child handle new starts — new team, new class, new group?
A. Straight in. B. Takes a few weeks, then fine. C. Takes a term or more. D. Needs at least one familiar person to settle.
**Primary:** `CHANGE_TOLERANCE` · **Cross-check:** child Q24, Q32.
**What each indicates:** C and D materially change the recommendation — a feeder-school-dominated intake, or a school where no known peer is going, becomes a genuine risk regardless of academic fit.

**P22** · **New** · After a full day, what does your child need?
A. To go straight into the next thing. B. A short break, then they're fine. C. Real downtime before they're any use. D. They run out of steam and it shows at home.
**Primary:** `SENSORY_LOAD` · **Cross-check:** child Q22, Q49.
**What each indicates:** C and D weight strongly against schools with heavy compulsory co-curricular loads, long commutes, or both together — a combination that's easy to underestimate at enrolment.

## Part B — Family values, culture and constraints (F1–F10)

These shape which environments the *family* can sustain and enjoy for six years. The child cannot answer them.

---

**F1** · **New** · At the end of Year 12, what would make you feel this school was the right choice? (rank top two)
1. Strong results and options after school. 2. The kind of person they've become. 3. That they were happy and well. 4. Opportunities and doors that opened. 5. Friendships and a sense of belonging that lasted.
**Primary:** `FAMILY_SUCCESS_DEFINITION`
**What each indicates:** This sets the weighting for the entire school comparison. A family optimising for (3) and a family optimising for (1) should get materially different rankings from identical child profiles. Without this item the tool has to guess, and guessing defaults to academic ranking — which is exactly what you've said you don't want.

**F2** · **New** · Being honest with yourself: how much does a school's reputation matter to you?
A. A lot, and I'm comfortable with that. B. Somewhat — it's one factor. C. Not much. D. I'd actively avoid a status-driven school.
**Primary:** `FAMILY_STATUS_ORIENTATION`
**What each indicates:** A — say so plainly in the report rather than letting it distort the fit scoring invisibly; also flag where the child's answers suggest they'd struggle in a status-heavy cohort. D — flag schools where the parent body is strongly status-oriented even if the child fit is good.
**Reason for addition:** Unstated prestige preference is the single biggest source of distorted outcomes in tools like this. Asking it directly and without judgement lets you handle it openly instead of pretending it isn't there.

**F3** · **New** · What role do you want in school life?
A. Heavily involved — committees, sidelines, volunteering. B. At the things that matter. C. Minimal — I want it to run well without me. D. Depends on what the child needs.
**Primary:** `FAMILY_INVOLVEMENT`
**What each indicates:** Several Perth schools genuinely expect (A) and the mismatch is felt quickly by families answering (C). This is a real fit dimension and is almost never asked.

**F4** · **New** · Which approach to behaviour and discipline fits your family?
A. Firm rules and clear consequences. B. Restorative conversations and repair. C. High expectations delivered with warmth. D. Flexible, judged case by case.
**Primary:** `FAMILY_DISCIPLINE`
**What each indicates:** Predicts friction with the school's behaviour model. A family answering B at a school running a strict demerit system will spend six years in low-grade conflict with the school, regardless of how well the child fits academically.

**F5** · **New** · When your child hits a setback, what does your family usually do?
A. Step in early and help fix it. B. Coach them through it. C. Let them sit with it and work it out. D. It varies a lot.
**Primary:** `FAMILY_SETBACK`
**What each indicates:** Cross-check with P19 and child Q37. A family answering (C) with a child who answers Q37 D/E has a compounding blind spot — problems will surface late from both directions. That's a specific, actionable finding worth surfacing prominently.

**F6** · **New** · How important is faith, chapel or religious tradition in the school?
A. Important — we want it. B. Comfortable with it either way. C. We'd prefer minimal. D. We'd prefer none.
**Primary:** `FAMILY_FAITH`
**What each indicates:** A straightforward filter. Given how many Perth schools have an Anglican, Catholic or Uniting Church foundation, this needs to be asked directly and treated as a preference — never as a quality signal in either direction.

**F7** · **New** · Do you have a view on co-ed versus single-sex?
A. Strong preference for co-ed. B. Leaning co-ed. C. No preference. D. Leaning single-sex. E. Strong preference for single-sex.
**Follow-up:** What's behind that? (own experience / sibling experience / something we've read / a view about this particular child / not sure)
**Primary:** `COED` — **this is the primary co-ed input; the child's Q40 is indicative only.**
**Handle-with-care note:** Report both models neutrally. Where the family has a strong preference, respect it as a filter rather than arguing with it. Where they answer C, present both and list co-ed vs single-sex as a tour question rather than resolving it. The evidence genuinely does not support treating either as better in general, and the tool should say so plainly if asked.
**Reason for addition:** Replaces the child-facing preference question from v1 Q27, which asked a 9–12 year old to make a judgement they have no basis for.

**F8** · **New** · How much does it matter that you feel at home among the other parents?
A. A lot. B. Somewhat. C. Not much.
**Primary:** `FAMILY_SOCIAL_FIT`
**What each indicates:** Parent-body culture varies far more than prospectuses suggest, and families answering (A) should have it weighted. It also generates a good tour question: *who are the families here, and would we recognise ourselves among them?*

**F9** · **New** · Practical constraints (multi-part):
- Maximum daily travel you'd accept, each way: under 15 min / 15–30 / 30–45 / 45+
- Fees: what would you be trading to afford them, and is that sustainable for six years? (no fee constraint / manageable / a real stretch / would require significant trade-offs)
- Siblings: do you need them at the same school? (yes / preferably / no / n/a)
- Any family history with a particular school? (free text)
- Anything already known about this child we should factor in — learning support, anxiety, health, a friendship you'd want preserved? (free text)
**Primary:** `CONSTRAINTS` — hard filters, applied before fit scoring, not blended into it.
**Reason for addition:** These are hard boundaries. Applying them as filters rather than as weighted factors prevents the tool from recommending a school the family was never going to choose, which is the fastest way to lose their trust in the rest of the output.

**F10** · **New** · If your child's answers and your own point to different environments, whose reading should carry more weight?
A. Mine — they're 11. B. Theirs — they know how they feel. C. Weight them evenly and show me where we disagree.
**Primary:** `ENGINE_WEIGHTING`
**What each indicates:** Directly configures the child-vs-parent weighting in the fit engine, and makes that weighting a transparent, family-chosen setting rather than a hidden assumption. C should be the default. It also sets up divergence reporting as a feature the family has opted into rather than something that reads as the tool catching them out.

---
---

# CHANGE LOG

**36 of the 50 v1 child items survive. 14 were removed, 14 are new.**

### Retained unchanged (8)

| v1 | v2 | Construct |
|---|---|---|
| Q5 | Q5 | `ACCOUNTABILITY` |
| Q9 | Q8 | `STRUCTURE_INDEP` |
| Q10 | Q9 | `BREADTH_DEPTH` |
| Q11 | Q10 | `PEER_INDEPENDENCE` |
| Q13 | Q11 | `PEER_INFLUENCE` |
| Q17 | Q16 | `PRESSURE` (selection) |
| Q19 | Q18 | `VISIBILITY` |
| Q47 | Q47 | Motivation source |

### Lightly edited — reading level and plain language only, scoring unchanged (21)

v1 Q1→Q4 · Q6→Q6 · Q7→Q7 · Q14→Q12 · Q18→Q17 · Q21→Q20 · Q24→Q22 · Q29→Q28 · Q30→Q29 · Q31→Q30 · Q32→Q31 · Q33→Q32 · Q34→Q33 · Q36→Q34 · Q37→Q35 · Q39→Q42 · Q41→Q36 · Q42→Q41 · Q45→Q45 · Q46→Q46 · Q50→Q49

Within these, the Stage 2 items also had their D/E options rewritten to remove moral loading. The wording change is small; the effect on response distribution should not be.

### Substantially changed (7)

| v1 | v2 | What changed |
|---|---|---|
| Q20 | Q19 | Shortened from an adult-framed abstraction to two concrete classroom pictures |
| Q22 | Q21 | Formality decoupled from creativity — the two were confounded and are now scored separately. **Scoring intention changed.** |
| Q27 | Q40 | Direct co-ed preference replaced with an indirect behavioural item at much lower weight. **Scoring intention changed.** |
| Q28 | Q23 | "Cohort" and "shared expectations" replaced with plain classroom language |
| Q43 | Q43 | Pastoral option added; equipment option de-tilted away from creative arts |
| Q44 | Q44 | Domain set rebalanced — music merged into a general arts option, outdoor education added, enterprise moved to the inventory |
| Q49 | Q48 | "The one people go to when something's wrong" added as a claimable identity |

### Removed (14)

| v1 | Why |
|---|---|
| Q2 | Interest-loaded; structure/autonomy better tested at Q8 |
| Q3 | Forced a sport-vs-music choice — measured interest, not values |
| Q4 | Build vs investigate is an interest distinction; now in the inventory |
| Q8 | `STRETCH` over-tested; the help-seeking element now sits at Q13 |
| Q12 | Overlapped Q16 (selection) and Q30 (persistence) |
| Q15 | `MOTIV_TEACHER` over-tested |
| Q16 | Music vs tech — pure interest, now Q1 |
| Q23 | `STRETCH` over-tested; specialist-cohort question now at Q46 item 2 |
| Q25 | `STRETCH` over-tested — this was the sixth item on the same construct |
| Q26 | Music and technology only; the framing also assumed those were the child's domains |
| Q35 | `MOTIV_TEACHER` over-tested |
| Q38 | `MOTIV_TEACHER` over-tested |
| Q40 | "Design a school activity" — an interest item wearing a scenario costume; four of five options were the original child's domains |
| Q48 | Duplicated Q44 and the inventory |

Parent bank: v1 P5 (public praise) removed as redundant with P4/P10; v1 P14 and P16 removed as overlapping P8 and P2/P12.

### Newly added (14 child, 14 parent)

**Child:** Q1, Q2, Q3 (interest inventory) · Q13, Q37 (`HELP_SEEKING`) · Q14 (`SCHOOL_SIZE`) · Q15 (`BELONGING`) · Q24 (`CHANGE_TOLERANCE`) · Q25 (`OUTDOOR`) · Q26 (`MENTORSHIP_TYPE`) · Q27, Q50 (`RISK_TRIGGER`) · Q38 (`CONFLICT_REPAIR`) · Q39 (`EMPATHY`)

**Parent:** P19–P22 (help-seeking, conflict, change tolerance, load recovery) · F1–F10 (family values, culture, constraints, engine weighting)

---

# COVERAGE AUDIT

### Was over-tested in v1, now corrected

| Construct | v1 items | v2 items |
|---|---|---|
| `MOTIV_TEACHER` | 6 child + 2 parent | 3 child + 1 parent |
| `STRETCH` | 6 child + 2 parent | 3 child + 3 parent |
| `MOTIV_RECOG` | 5 child + 1 parent | 3 child + 1 parent |
| Music / production as a domain | 8 items | 2 (both as one option among five) |

### Was under-tested or absent in v1, now covered

`HELP_SEEKING` 0→3+1 · `BELONGING` 0→3+1 · `SCHOOL_SIZE` 0→2+0 · `CHANGE_TOLERANCE` 0→2+1 · `CONFLICT_REPAIR` 0→1+1 · `EMPATHY` 0→2+0 · `STATUS_TOLERANCE` 1→3+0 · `RISK_TRIGGER` 0→2+1 · `OUTDOOR` 0→2+0 · Family values 0→10

### Still thin — accept knowingly or expand later

- **`FORMALITY`** — one child item (Q21), no parent item. Partly covered by F7 (faith) and P15 (culture). If you want a second read, the cheapest addition is a parent item on uniform, ceremony and honours.
- **`COHORT_STABILITY`** — one item (Q23). Low consequence; probably fine.
- **`CRITICISM`** — one child item (Q31), backed by P5. Adequate given the parent cross-check.
- **`CONFLICT_REPAIR`** — one each side. Adequate.
- **`SENSORY_LOAD`** — no primary child item; carried as a secondary on Q22, Q33 and Q49 plus P22. If wellbeing risk becomes a headline output, this deserves a primary item.

---

# ANSWERS TO YOUR SPECIFIC DIAGNOSTIC QUESTIONS

### Options that made one answer too obviously desirable

The consistent problem in v1 was that Stage 2 options D and E were always the disengagement answers, in the same position, in nine consecutive questions. Children pattern-match this within about six items and stop selecting them — which means you lose exactly the responses that generate your risk output. Two fixes are applied: every option is now a defensible thing a reasonable child would do, and **option order must be randomised at presentation** (store the presented order alongside the choice).

The other offender was v1 Q30 option B ("I try to lift the group") and v1 Q32 option A ("I want to know exactly how to fix it") — both retained, because a forced ranking against four other plausible options limits the damage, but worth watching in your first round of real data.

### Questions a child may not understand

Removed or rewritten: "cohort" and "shared expectations" (v1 Q28), "prestigious reputation" (v1 Q46), "rankings" (v1 Q37), "innovation, enterprise and product programs" (v1 Q44), "highly specialised cohort" (v1 Q46), "entrants" (v1 Q12), "demanding" (v1 Q1), "grounded" (v1 Q45), "atmosphere" and the whole clause structure of v1 Q20.

Still worth watching in testing: Q19 and Q26 are the longest remaining items. If Year 4s stumble, split each into a two-clause version.

### Where a third option is necessary

- **Q40 (co-ed)** — three no-signal options are essential here, and they're included. Forcing a stance would generate noise, not data.
- **Interest inventory (Q1–Q3)** — multi-select rather than forced choice, as intended.
- **Everywhere else in Stage 1, resist adding "both" or "not sure."** The whole value of a forced trade-off is that it makes the child spend something. A better mechanism for the genuinely torn child is a **limited-use "can't choose" token** — two per game, no more. That preserves the trade-off while giving an honest escape, and the tokens themselves are informative: a child who spends both on social questions is telling you something.

### Where "sounds exciting" gets confused with "actually helps me perform"

Three mechanisms are now in place. First, Q3 asks what they've actually done unprompted in the last month, which separates real interests from attractive ones. Second, Q4 (what they'd choose) and Q12 (what actually drives them) are the same construct asked as aspiration and as motivation — divergence between them is meaningful. Third, Stage 2 asks "what do you *actually* do," not "what would you do." Recall framing pulls truer answers from children than hypotheticals.

Store `item_type` on every item so aspiration and behaviour stay in separate lanes and never get averaged together.

### Co-ed vs single-sex — handling

- The child's item (Q40) asks about observed working behaviour, not preference, and carries low weight.
- The family's item (F7) is the primary input, with a follow-up on where the view comes from.
- The report should present the two models neutrally, treat a strong family preference as a filter rather than something to argue with, and list it as a tour question where there's no preference.
- Never generate a co-ed or single-sex recommendation from the child's answers alone. There is no basis for it, and the child has no basis for the underlying judgement either.

---

# BUILD NOTES

1. **Randomise option order** on all Stage 1 and Stage 2 items. Store what was shown.
2. **Two "can't choose" tokens** per child, no more. Log where they're spent.
3. **Age-band wording variants** — Year 4–5 and Year 6–7 versions of the longer items, sharing one scoring key. Roughly a dozen items need this.
4. **Split the sitting.** Fifty forced-choice items is a long stretch for a nine-year-old. Save progress at the end of each stage; the three stages are natural break points.
5. **Hard filters before fit scoring.** Apply F9 constraints as filters, not weights.
6. **Divergence report.** Where parent and child disagree on a shared construct, surface it as a family conversation prompt. Configured by F10.
7. **Language of the output.** Frame every risk as a property of the *environment*, never of the child — "this environment may not make his effort visible," not "he struggles to be noticed." The same finding, and only one of those is something a family can act on without it costing the child something.
