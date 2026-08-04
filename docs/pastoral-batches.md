# Pastoral structure — six small batches for a normal chat

Paste **one batch at a time**. Each is self-contained. Don't paste two at once — the whole point of the batching is to keep the job small enough to be done properly rather than approximated.

Six batches, three to four schools each, five fields per school.

---

## THE INSTRUCTION — identical every time, paste it above each batch

> For each school below, find the page that describes its pastoral care, house or homeroom system, and answer these five questions. Perth, Western Australia.
>
> 1. **What is the pastoral unit called?** House, Tutor Group, Homeroom, Mentor Group, or something else.
> 2. **How many students are in one?** A published number only.
> 3. **How often does it meet?** Daily, weekly, twice weekly, as stated.
> 4. **Does the same adult stay with a student across multiple years?** Answer only `yes`, `no`, or `not stated`. Answer `no` if pastoral contact hands over at a year boundary — for example, separate student services teams for Years 7–9 and 10–12. Warm language about care and relationships is **not** a yes.
> 5. **What is the published escalation chain when a student struggles?** For example "Tutor → Head of House → school psychologist". Quote or closely paraphrase.
>
> **For every answer that is not "not stated", paste the sentence from the page that it came from, and the URL.** No sentence means the answer is "not stated".
>
> Do not estimate a class size. Do not infer a structure from a school's tone or from what similar schools do. This data is going into a tool that Perth families will use to compare real schools, so a plausible guess is worse than a blank — a blank is honest and a guess is not, and I have no way to tell them apart afterwards.
>
> If you cannot find the page, say so and move to the next school.
>
> Format: one short block per school, five numbered answers, then the quotes and URLs.

---

## BATCH 1 — highest priority
Christ Church Grammar School, Claremont
Santa Maria College, Attadale
Wesley College, South Perth *(not the Melbourne school)*

## BATCH 2
Iona Presentation College, Mosman Park
Seton Catholic College, Samson
Scotch College, Swanbourne

## BATCH 3
CBC Fremantle
Kennedy Baptist College, Murdoch
Carey Baptist College, Harrisdale *(the Harrisdale campus, not Forrestdale)*
Aquinas College, Salter Point *(not the US Thomas Aquinas College)*

## BATCH 4
Hale School, Wembley Downs
All Saints' College, Bull Creek
Corpus Christi College, Bateman

## BATCH 5 — public schools
Melville Senior High School
Perth Modern School
John Curtin College of the Arts
Rossmoyne Senior High School

## BATCH 6 — public schools
Willetton Senior High School
Applecross Senior High School
Shenton College
Fremantle College

> For batches 5 and 6, the **WA Public School Review** report for each school often describes the student services structure directly, and is a better source than the school's own page. Check it first.

---

## Note for me, not for the chat

Every non-null value must arrive with a quoted sentence and a URL. Anything without one gets entered as `null` regardless of how reasonable it looks. Tells to watch for: identical escalation chains across unrelated schools, unit sizes that are all round numbers, and `sameAdultAcrossYears: yes` unsupported by a quote — that last one is the field a model is most likely to answer from vibe, because every school's website implies it.
