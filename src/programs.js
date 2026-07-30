/* ============================================================
   Sub-domain program data — sport and music, per school.

   SCALE (deliberately three factual states, not invented 0-100
   scores). Whether a school fields hockey is a checkable fact.
   "How good is their hockey out of 100" is not, and inventing it
   would repeat the mistake already sitting in `grounded`.

     2  notable strength — specialist or selective program, state
        or national level, or a named facility
     1  offered
     0  researched, no evidence found
     undefined  NOT YET RESEARCHED — never treat as absence

   `basis` records where the values came from, so a reader can tell
   an association-level inference from a verified school page.
     "association"  derived from PSA / IGSSA membership
     "site"         from the school's own published material
     "both"         association membership plus verified school pages

   Researched July 2026. Programs change — every one of these is a
   question to confirm on a tour, not a finding to rely on.
   ============================================================ */

/* PSA summer and carnival sports, confirmed at association level.
   Rowing and the Head of the River are the defining PSA marker and
   no non-PSA school in this set has an equivalent. */
const PSA_SPORT = {
  rowing:2, cricket:1, basketball:1, tennis:1, volleyball:1,
  waterpolo:1, swimming:1, athletics:1, golf:1, surfing:1
};

/* IGSSA carnival and representative sports, confirmed at association
   level. Per-school team detail still to verify. */
const IGSSA_SPORT = {
  rowing:1, golf:1, swimming:1, athletics:1, crosscountry:1,
  afl:1, netball:1, basketball:1
};

const PROGRAMS = {

  /* ================= PSA boys' schools ================= */

  "Hale School": {
    basis:"both",
    sport:{...PSA_SPORT},
    music:{ orchestral:2, band:2, choral:2, jazz:2, contemporary:2, guitar:2, tuition:2 },
    note:"More than 700 students take part in bands, ensembles and choirs. Chamber orchestras and strings, concert bands, jazz, percussion, guitar, contemporary and rock ensembles, plus combined string orchestra, concert band and mixed choir with St Mary's."
  },
  "Scotch College": {
    basis:"both",
    sport:{...PSA_SPORT},
    music:{ orchestral:1, band:2, choral:1, tuition:1 },
    note:"Choirs, orchestras and a wide range of ensembles. The Pipe Band is the standout — it plays at weekly assembly parades, competes locally and internationally, and has toured Scotland and northern France."
  },
  "Christ Church Grammar School": {
    basis:"both",
    sport:{...PSA_SPORT},
    music:{ orchestral:2, band:2, choral:2, guitar:1, tuition:1 },
    note:"String orchestra covering violin, viola, cello, double bass and harp; concert band for woodwind and brass; classical guitar ensemble; and the auditioned Yahoos Choir alongside non-auditioned choirs."
  },
  "Wesley College": {
    basis:"both",
    sport:{...PSA_SPORT},
    music:{ orchestral:2, band:2, choral:2, tuition:2 },
    note:"21 chamber ensembles, 23 bands, 10 orchestras and 16 choirs across the college, with many staff performing professionally."
  },
  "Aquinas College": {
    basis:"both",
    sport:{...PSA_SPORT},
    music:{ orchestral:1, band:1, jazz:1, choral:1, tuition:1 },
    note:"Senior strings and concert band run jointly with Perth College, along with a senior jazz band."
  },

  /* ================= IGSSA girls' schools ================= */

  "Iona Presentation College": {
    basis:"both",
    sport:{...IGSSA_SPORT},
    music:{ orchestral:1, band:1, choral:1, tuition:2, contemporary:1 },
    note:"Choirs, bands, orchestras and ensembles rehearsing weekly across more than 40 performances a year. Taking Music as a subject requires instrumental or vocal lessons, either privately or through the college program."
  },
  "Santa Maria College": {
    basis:"both",
    sport:{...IGSSA_SPORT},
    music:{ orchestral:1, choral:1, tuition:2, band:1 },
    note:"The Cultural Centre provides a 650-seat auditorium, black box theatre, dedicated orchestra and ensemble rooms, music tuition rooms and a dance studio."
  },

  /* ================= public schools ================= */

  "Perth Modern School": {
    basis:"site",
    sport:{ athletics:1, swimming:1, crosscountry:1 },
    music:{ orchestral:2, choral:2, band:2, tuition:2, selective:2 },
    note:"Selective-entry music program of more than 500 students, described by the school as classically based, with choirs, orchestras and ensembles performing at major cultural events. No named specialist sport program was found — sport here appears to be participation rather than a pathway, which is worth confirming if it matters to you."
  },
  "John Curtin College of the Arts": {
    basis:"site",
    sport:{ soccer:2, athletics:1, swimming:1 },
    music:{ jazz:2, band:2, orchestral:2, choral:1, guitar:2, production:2, selective:2 },
    note:"Gifted and Talented selective-entry music, Years 8-12, focused on jazz and composition, with concert band, orchestra, vocal and classical guitar ensembles. Mia Moorna music and media building opened 2025. Also a Perth Glory Academy school running a specialist football (soccer) program with statewide intake, including Certificate II in Sport and Recreation, FFA coaching and referee accreditation."
  },
  "Rossmoyne Senior High School": {
    basis:"site",
    sport:{ volleyball:2 },
    music:{ orchestral:2, band:2, choral:2, tuition:2, selective:2 },
    note:"Three specialist programs: selective-entry Classical Music, Volleyball and Mathematics. The music program covers orchestras, bands and choirs with individual lessons, and recruits less common orchestral instruments including bassoon, oboe, french horn, trombone, tuba, euphonium, viola and double bass."
  },
  "Fremantle College": {
    basis:"site",
    sport:{ afl:2, volleyball:2 },
    music:{ contemporary:2, production:2, selective:2, tuition:1, band:1 },
    note:"Approved Specialist Contemporary Music running eight years — songwriting, arranging, recording and performing original work, with weekly instrumental lessons and digital recording technology. AFL Academy with South Fremantle Football Club and the Stephen Michael Foundation. Beach volleyball competing at state and national level. Also specialist IT and marine studies."
  },
  "Willetton Senior High School": {
    basis:"site",
    sport:{ basketball:2 },
    note:"Specialist basketball, Years 8-11, with a Certificate II pathway. Multiple national championships for both boys' and girls' teams."
  },
  "Applecross Senior High School — Academic Extension": {
    basis:"site",
    sport:{ tennis:2 },
    music:{ tuition:1 },
    note:"Specialist tennis from Year 7 — the first approved tennis program in Western Australia. Instrumental tuition runs through IMSS."
  },
  "Melville Senior High School — Academic Extension": {
    basis:"site",
    sport:{ netball:2 },
    note:"Approved specialist netball program, open to students outside the local catchment. Also runs specialist aviation and GATE."
  },
  "Shenton College — HPL / GATE": {
    basis:"site",
    sport:{ athletics:1, swimming:1, crosscountry:1, basketball:1, netball:1, soccer:1, afl:1, volleyball:1 },
    music:{ tuition:2 },
    note:"Continues IMSS instrumental tuition from primary, with a Year 7-8 arts rotation designed to protect practice time. Students perform at the Opus state showcase. Sport is broad and competitive — interschool and state-level — but no single named specialist program was found."
  },

  /* ================= ACC independent and Catholic ================= */

  "Corpus Christi College": {
    basis:"both",
    sport:{ basketball:1, cricket:1, hockey:1, netball:1, swimming:1, tennis:1, volleyball:1, waterpolo:1, crosscountry:1, athletics:1 },
    music:{ orchestral:1, band:2, choral:2, jazz:1, guitar:1, tuition:1 },
    note:"Orchestra, concert band, swing band, college and liturgical choirs, plus clarinet, flute, saxophone, percussion and guitar ensembles, showcased at an annual Music Ensemble Night. Sport is broad through the ACC — basketball, cricket, hockey, netball, swimming, tennis, volleyball, water polo, triathlon and cross country — with no single specialist pathway found."
  },
  "Carey Baptist College — Harrisdale": {
    basis:"both",
    sport:{ basketball:2, soccer:2 },
    music:{ selective:2, band:2, choral:1, guitar:1, jazz:1, tuition:2 },
    note:"GATE Music program with scholarships. Concert band, percussion, classical guitar and choirs, close to 20 visiting tutors weekly, and active links to WAAPA, the UWA Conservatorium and the James Morrison Academy. Specialist Physical Education in basketball and soccer, coached by Shawn Redhage (Australian Boomers, Perth Wildcats) and Mark Lee (Perth Glory)."
  },
  "Kennedy Baptist College": {
    basis:"site",
    sport:{ basketball:2, cricket:2 },
    music:{ tuition:1, band:1 },
    note:"Specialist Sports Programs in basketball and cricket — basketball is led by the current head coach of the Perth Lynx. Instrumental music program with ensemble placement once students reach the required level."
  },
  "CBC Fremantle": {
    basis:"both",
    sport:{ basketball:1, swimming:1, waterpolo:1, surfing:1, tennis:1, rugby:1, afl:1, soccer:1, hockey:1, athletics:1, crosscountry:1 },
    music:{ jazz:2, band:2, contemporary:1, guitar:1, tuition:1 },
    note:"Jazz orchestra, stage and concert bands across year groups, guitar ensembles and rock bands, with a year-long commitment expected from students taking instrumental lessons. An unusually wide sport offering for its size — basketball, swimming, water polo, surfing, tennis, touch rugby, football, soccer, hockey, athletics and cross country — and the school has won the ACC co-curricular award three years running, mostly on sport."
  },
  "Seton Catholic College": {
    basis:"both",
    sport:{ athletics:1, swimming:1, crosscountry:1, basketball:1, netball:1, soccer:1, afl:1 },
    music:{ tuition:2, band:1, contemporary:1 },
    note:"One-to-one tuition across flute, clarinet, saxophone, trumpet, french horn, trombone, euphonium, classical and electric guitar, bass, vocals, piano and drums, with graded examinations through to Certificate III in Music Performance. The Sports Excellence Program is sport-agnostic by design — it supports students already competing at elite level outside school, with negotiable training commitments and priority timetabling, rather than running a specific sport."
  },
  "All Saints’ College": {
    basis:"both",
    sport:{ netball:1, soccer:1, basketball:1, hockey:1, swimming:1, athletics:1, tennis:1, volleyball:1, golf:1, cricket:1, crosscountry:1, rowing:1, rugby:1, sailing:1 },
    music:{ choral:1, tuition:1, contemporary:1, production:1 },
    note:"Music scholarships require membership of the College Choir plus at least one other ensemble, Music electives to Year 9 or 10, and participation in recitals and camps. A Centre for Performing Arts opened in 2013. One of the widest sport offerings in this set — including rowing, sailing, rugby, golf, softball and gymnastics alongside the usual codes — with an on-site swimming pool, though nothing is run as a named specialist pathway."
  }
};

/* Labels for anything we can ask a child about. */
const SPORT_LABELS = {
  afl:"AFL", soccer:"Soccer", basketball:"Basketball", netball:"Netball",
  hockey:"Hockey", cricket:"Cricket", rugby:"Rugby", swimming:"Swimming",
  athletics:"Athletics or cross country", crosscountry:"Cross country",
  rowing:"Rowing", tennis:"Tennis", volleyball:"Volleyball",
  waterpolo:"Water polo", dance:"Dance", golf:"Golf", surfing:"Surfing"
};

const MUSIC_LABELS = {
  orchestral:"Orchestra and strings", band:"Concert or wind band",
  choral:"Choir and singing", jazz:"Jazz", contemporary:"Rock and contemporary band",
  production:"Recording and music production", tuition:"One-to-one instrumental lessons",
  guitar:"Guitar", selective:"Selective-entry music program"
};

/* Look up a school's sub-domain state. Returns undefined where the
   school has not been researched for that domain, which the UI
   reports differently from a researched zero. */
function programState(schoolName, domain, key){
  const p = PROGRAMS[schoolName];
  if(!p || !p[domain]) return undefined;
  return p[domain][key];
}
function programNote(schoolName){ return (PROGRAMS[schoolName] || {}).note; }
function programBasis(schoolName){ return (PROGRAMS[schoolName] || {}).basis; }
