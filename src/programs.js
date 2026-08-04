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
    arts:{ visualArt:2, design:1, drama:2, film:2, dance:1, artSelective:0, artFacility:2 },
    computing:{ csSubject:2, robotics:2, engineering:2, digitalDesign:2, makerspace:null },
   sport:{ afl:1, cricket:2, basketball:2, soccer:2, hockey:1, rugby:2, tennis:1, volleyball:1, swimming:2, athletics:1, crosscountry:1, rowing:1, waterpolo:1, golf:1, surfing:2, sailing:0},
    music:{ orchestral:2, band:2, choral:2, jazz:2, guitar:2, tuition:2, contemporary:2, production:1},
    note:"More than 700 students take part in bands, ensembles and choirs. Chamber orchestras and strings, concert bands, jazz, percussion, guitar, contemporary and rock ensembles, plus combined string orchestra, concert band and mixed choir with St Mary's."
  },
  "Scotch College": {
    basis:"both",
    arts:{ visualArt:2, design:2, drama:2, film:2, dance:0, artSelective:0, artFacility:2 },
    computing:{ csSubject:null, robotics:1, engineering:1, digitalDesign:1, makerspace:null },
   sport:{ afl:1, cricket:1, basketball:1, soccer:1, hockey:1, rugby:1, tennis:1, volleyball:1, swimming:1, athletics:2, crosscountry:1, rowing:1, waterpolo:1, golf:1, surfing:1, sailing:1},
    music:{ orchestral:1, band:2, choral:1, tuition:1, contemporary:2, production:0},
    note:"Choirs, orchestras and a wide range of ensembles. The Pipe Band is the standout — it plays at weekly assembly parades, competes locally and internationally, and has toured Scotland and northern France."
  },
  "Christ Church Grammar School": {
    basis:"both",
    arts:{ visualArt:2, design:2, drama:2, film:2, dance:0, artSelective:0, artFacility:1 },
    computing:{ csSubject:2, robotics:2, engineering:2, digitalDesign:2, makerspace:null },
   sport:{ afl:1, cricket:1, basketball:1, soccer:2, hockey:2, rugby:1, tennis:1, volleyball:1, swimming:1, athletics:1, crosscountry:1, rowing:1, waterpolo:2, golf:1, surfing:2, sailing:2},
    music:{ orchestral:2, band:2, choral:2, guitar:1, tuition:1, contemporary:2, production:1},
    note:"String orchestra covering violin, viola, cello, double bass and harp; concert band for woodwind and brass; classical guitar ensemble; and the auditioned Yahoos Choir alongside non-auditioned choirs."
  },
  "Wesley College": {
    basis:"both",
    arts:{ visualArt:2, design:1, drama:2, film:2, dance:1, artSelective:null, artFacility:2 },
    computing:{ csSubject:2, robotics:2, engineering:2, digitalDesign:2, makerspace:2 },
   sport:{ afl:1, cricket:1, basketball:1, soccer:1, hockey:1, rugby:1, tennis:2, volleyball:1, swimming:1, athletics:1, crosscountry:1, rowing:1, waterpolo:1, golf:2, surfing:1, sailing:1},
    music:{ orchestral:2, band:2, choral:2, tuition:2, contemporary:2, production:0},
    note:"21 chamber ensembles, 23 bands, 10 orchestras and 16 choirs across the college, with many staff performing professionally."
  },
  "Aquinas College": {
    basis:"both",
    arts:{ visualArt:2, design:2, drama:2, film:1, dance:1, artSelective:null, artFacility:1 },
    computing:{ csSubject:2, robotics:1, engineering:2, digitalDesign:2, makerspace:null },
   sport:{ afl:1, cricket:1, basketball:1, soccer:1, hockey:2, rugby:1, tennis:1, volleyball:2, swimming:1, athletics:1, crosscountry:1, rowing:2, waterpolo:1, golf:1, surfing:1, sailing:1},
    music:{ orchestral:1, band:1, jazz:1, choral:1, tuition:1, contemporary:2, production:1},
    note:"Senior strings and concert band run jointly with Perth College, along with a senior jazz band."
  },

  /* ================= IGSSA girls' schools ================= */

  "Iona Presentation College": {
    basis:"both",
    arts:{ visualArt:2, design:2, drama:2, film:2, dance:2, artSelective:null, artFacility:2 },
    computing:{ csSubject:null, robotics:null, engineering:1, digitalDesign:1, makerspace:null },
   sport:{ afl:1, netball:1, basketball:1, soccer:1, hockey:1, tennis:1, volleyball:1, swimming:1, athletics:1, crosscountry:1, rowing:1, waterpolo:1 },
    music:{ orchestral:1, band:1, choral:1, tuition:2, contemporary:2, production:1},
    note:"Choirs, bands, orchestras and ensembles rehearsing weekly across more than 40 performances a year. Taking Music as a subject requires instrumental or vocal lessons, either privately or through the college program."
  },
  "Santa Maria College": {
    basis:"both",
    arts:{ visualArt:2, design:2, drama:2, film:2, dance:2, artSelective:null, artFacility:2 },
    computing:{ csSubject:2, robotics:2, engineering:null, digitalDesign:2, makerspace:1 },
   sport:{ afl:1, netball:1, basketball:1, soccer:1, hockey:1, tennis:1, volleyball:2, swimming:1, athletics:1, crosscountry:1, waterpolo:1, rugby:0, golf:1, sailing:0, surfing:0},
    music:{ orchestral:1, choral:1, tuition:2, band:1, contemporary:2, production:1},
    note:"The Cultural Centre provides a 650-seat auditorium, black box theatre, dedicated orchestra and ensemble rooms, music tuition rooms and a dance studio."
  },

  /* ================= public schools ================= */

  "Perth Modern School": {
    basis:"site",
    arts:{ visualArt:2, design:2, drama:2, film:1, dance:1, artSelective:0, artFacility:2 },
    computing:{ csSubject:2, robotics:2, engineering:2, digitalDesign:2, makerspace:null },
   sport:{ netball:1, basketball:1, tennis:1, swimming:1 },
    music:{ orchestral:2, choral:2, band:2, tuition:2, selective:2, contemporary:2, production:1},
    note:"Selective-entry music program of more than 500 students, described by the school as classically based, with choirs, orchestras and ensembles performing at major cultural events. No named specialist sport program was found — sport here appears to be participation rather than a pathway, which is worth confirming if it matters to you."
  },
  "John Curtin College of the Arts": {
    basis:"site",
    arts:{ visualArt:2, design:2, drama:2, film:2, dance:2, artSelective:2, artFacility:2 },
    computing:{ csSubject:2, robotics:2, engineering:1, digitalDesign:2, makerspace:null },
   sport:{ soccer:2, volleyball:1, sailing:1, surfing:1},
    music:{ jazz:2, band:2, orchestral:2, choral:1, guitar:2, selective:2, contemporary:2, production:1},
    note:"Gifted and Talented selective-entry music, Years 8-12, focused on jazz and composition, with concert band, orchestra, vocal and classical guitar ensembles. Mia Moorna music and media building opened 2025. Also a Perth Glory Academy school running a specialist football (soccer) program with statewide intake, including Certificate II in Sport and Recreation, FFA coaching and referee accreditation."
  },
  "Rossmoyne Senior High School": {
    basis:"site",
    arts:{ visualArt:2, design:1, drama:2, film:1, dance:1, artSelective:0, artFacility:2 },
    computing:{ csSubject:2, robotics:2, engineering:2, digitalDesign:2, makerspace:1 },
   sport:{ volleyball:2, swimming:1, athletics:1 },
    music:{ orchestral:2, band:2, choral:2, tuition:2, selective:2, contemporary:1, production:0},
    note:"Three specialist programs: selective-entry Classical Music, Volleyball and Mathematics. The music program covers orchestras, bands and choirs with individual lessons, and recruits less common orchestral instruments including bassoon, oboe, french horn, trombone, tuba, euphonium, viola and double bass."
  },
  "Fremantle College": {
    basis:"site",
    arts:{ visualArt:1, design:2, drama:2, film:2, dance:0, artSelective:0, artFacility:2 },
    computing:{ csSubject:2, robotics:2, engineering:2, digitalDesign:2, makerspace:2 },
   sport:{ afl:2, netball:1, basketball:1, soccer:1, volleyball:1, swimming:1, athletics:1, crosscountry:1, sailing:1},
    music:{selective:2, tuition:1, band:1, contemporary:2, production:2},
    note:"Approved Specialist Contemporary Music running eight years — songwriting, arranging, recording and performing original work, with weekly instrumental lessons and digital recording technology. AFL Academy with South Fremantle Football Club and the Stephen Michael Foundation. Beach volleyball competing at state and national level. Also specialist IT and marine studies."
  },
  "Willetton Senior High School": {
    basis:"site",
    arts:{ visualArt:2, design:2, drama:2, film:2, dance:1, artSelective:2, artFacility:2 },
    computing:{ csSubject:2, robotics:1, engineering:2, digitalDesign:2, makerspace:1 },
    music:{ orchestral:2, band:2, choral:2, jazz:2, contemporary:1, production:1, tuition:2 },
   sport:{ afl:1, cricket:1, netball:1, basketball:2, soccer:1, hockey:1, rugby:1, tennis:1, volleyball:1, swimming:1, athletics:1, crosscountry:1, rowing:0, waterpolo:0, golf:1, sailing:0, surfing:0 },
    note:"Specialist basketball, Years 8-11, with a Certificate II pathway. Multiple national championships for both boys' and girls' teams."
  },
  "Applecross Senior High School — Academic Extension": {
    basis:"site",
    arts:{ visualArt:2, design:2, drama:2, film:2, dance:1, artSelective:2, artFacility:2 },
    computing:{ csSubject:2, robotics:1, engineering:2, digitalDesign:2, makerspace:2 },
   sport:{ afl:1, cricket:1, netball:1, basketball:1, soccer:1, tennis:2, volleyball:1, swimming:1, athletics:1, crosscountry:1, waterpolo:1, golf:1, sailing:1, surfing:1, hockey:0, rugby:0},
    music:{ tuition:1, contemporary:2, production:0},
    note:"Specialist tennis from Year 7 — the first approved tennis program in Western Australia. Instrumental tuition runs through IMSS."
  },
  "Melville Senior High School — Academic Extension": {
    basis:"site",
    arts:{ visualArt:2, design:2, drama:2, film:2, dance:2, artSelective:2, artFacility:1 },
    computing:{ csSubject:2, robotics:2, engineering:2, digitalDesign:2, makerspace:1 },
    music:{ orchestral:0, band:2, choral:2, jazz:2, contemporary:2, production:0, tuition:2 },
   sport:{ afl:1, netball:2, basketball:1, soccer:1, volleyball:1, swimming:1, athletics:1, crosscountry:1, waterpolo:1, hockey:0, rugby:1, golf:0, sailing:0, surfing:0},
    note:"Approved specialist netball program, open to students outside the local catchment. Also runs specialist aviation and GATE."
  },
  "Shenton College — HPL / GATE": {
    basis:"site",
    arts:{ visualArt:2, design:2, drama:2, film:2, dance:2, artSelective:2, artFacility:2 },
    computing:{ csSubject:2, robotics:2, engineering:2, digitalDesign:2, makerspace:null },
   sport:{ afl:1, netball:1, basketball:1, soccer:1, hockey:1, tennis:1, volleyball:1, swimming:1, athletics:1, crosscountry:1, rowing:2, waterpolo:1, golf:1, sailing:1, surfing:1, rugby:0},
    music:{ tuition:2, contemporary:1, production:1},
    note:"Continues IMSS instrumental tuition from primary, with a Year 7-8 arts rotation designed to protect practice time. Students perform at the Opus state showcase. Sport is broad and competitive — interschool and state-level — but no single named specialist program was found."
  },

  /* ================= ACC independent and Catholic ================= */

  "Corpus Christi College": {
    basis:"both",
    arts:{ visualArt:2, design:2, drama:2, film:2, dance:2, artSelective:2, artFacility:2 },
    computing:{ csSubject:2, robotics:null, engineering:2, digitalDesign:2, makerspace:null },
   sport:{ afl:1, cricket:1, netball:1, basketball:1, soccer:1, hockey:1, tennis:1, volleyball:1, swimming:1, athletics:1, crosscountry:1, waterpolo:1, golf:1 },
    music:{ orchestral:1, band:2, choral:2, jazz:1, guitar:1, tuition:1, contemporary:2, production:0},
    note:"Orchestra, concert band, swing band, college and liturgical choirs, plus clarinet, flute, saxophone, percussion and guitar ensembles, showcased at an annual Music Ensemble Night. Sport is broad through the ACC — basketball, cricket, hockey, netball, swimming, tennis, volleyball, water polo, triathlon and cross country — with no single specialist pathway found."
  },
  "Carey Baptist College — Harrisdale": {
    basis:"both",
    arts:{ visualArt:2, design:2, drama:1, film:1, dance:1, artSelective:null, artFacility:2 },
    computing:{ csSubject:2, robotics:2, engineering:1, digitalDesign:2, makerspace:1 },
   sport:{ afl:1, cricket:1, netball:1, basketball:2, soccer:2, volleyball:1, swimming:1, athletics:1, crosscountry:1 },
    music:{ selective:2, band:2, choral:1, guitar:1, jazz:1, tuition:2, contemporary:2, production:1},
    note:"GATE Music program with scholarships. Concert band, percussion, classical guitar and choirs, close to 20 visiting tutors weekly, and active links to WAAPA, the UWA Conservatorium and the James Morrison Academy. Specialist Physical Education in basketball and soccer, coached by Shawn Redhage (Australian Boomers, Perth Wildcats) and Mark Lee (Perth Glory)."
  },
  "Kennedy Baptist College": {
    basis:"site",
    arts:{ visualArt:2, design:2, drama:2, film:1, dance:2, artSelective:null, artFacility:2 },
    computing:{ csSubject:2, robotics:1, engineering:2, digitalDesign:2, makerspace:2 },
   sport:{ afl:1, cricket:2, netball:1, basketball:2, soccer:1, rugby:1, tennis:1, volleyball:1, swimming:1, athletics:1, crosscountry:1, surfing:1, golf:1},
    music:{ tuition:1, band:1, contemporary:2, production:1},
    note:"Specialist Sports Programs in basketball and cricket — basketball is led by the current head coach of the Perth Lynx. Instrumental music program with ensemble placement once students reach the required level."
  },
  "CBC Fremantle": {
    basis:"both",
    arts:{ visualArt:1, design:1, drama:2, film:1, dance:0, artSelective:0, artFacility:2 },
    computing:{ csSubject:null, robotics:null, engineering:1, digitalDesign:null, makerspace:null },
   sport:{ afl:1, cricket:1, soccer:2, swimming:1, athletics:1, crosscountry:1, hockey:1, rugby:1, surfing:1},
    music:{ jazz:2, band:2, guitar:1, tuition:1, contemporary:1, production:0},
    note:"Jazz orchestra, stage and concert bands across year groups, guitar ensembles and rock bands, with a year-long commitment expected from students taking instrumental lessons. An unusually wide sport offering for its size — basketball, swimming, water polo, surfing, tennis, touch rugby, football, soccer, hockey, athletics and cross country — and the school has won the ACC co-curricular award three years running, mostly on sport."
  },
  "John XXIII College": {
    basis:"both",
    arts:{ visualArt:2, design:1, drama:2, film:null, dance:1, artSelective:null, artFacility:1 },
    computing:{ csSubject:null, robotics:1, engineering:1, digitalDesign:1, makerspace:1 },
   sport:{ afl:1, cricket:1, netball:1, basketball:1, soccer:1, hockey:1, rugby:1, tennis:1, volleyball:1, swimming:1, athletics:1, crosscountry:1, rowing:1, waterpolo:1, golf:1, sailing:1, surfing:1 },
    music:{ orchestral:2, band:2, choral:2, jazz:2, guitar:2, tuition:2, selective:0, contemporary:2, production:1},
    note:"ACC A Division through the Northern Associated Schools sub-association (code JTC), plus School Sport WA and Perth Netball Association; more than 20 sports advertised. Rowing is the standout, competing in IGSSA and Rowing WA All Schools regattas. Music is the deepest program: 400+ instrumental students, compulsory to Year 7 then elective, ATAR in 11-12, with symphony and chamber orchestras, concert and wind bands, swing band and jazz combo, chamber, treble and chapel choirs, guitar, saxophone, clarinet and flute ensembles and junior and senior string quartets. Entry is broad - Chapel Choir is non-auditioned, instrument hire lets beginners start - while advanced ensembles require audition or invitation. No contemporary or production pathway was found. Visual Arts runs Years 7-12 to ATAR across Art, Pottery, Craft Design and Applied Art; Drama runs 7-12 to ATAR with year-level drama nights, house theatre sports, Year 9 musical theatre and senior musicals. Film and dance not found. Current subject handbooks sit behind a SEQTA parent login, so the 2026 list could not be fully verified."
  },

  "Seton Catholic College": {
    basis:"both",
    arts:{ visualArt:2, design:2, drama:2, film:2, dance:2, artSelective:null, artFacility:2 },
    computing:{ csSubject:2, robotics:0, engineering:2, digitalDesign:2, makerspace:null },
   sport:{ afl:1, cricket:1, netball:1, basketball:1, soccer:1, volleyball:1, swimming:1, athletics:1, crosscountry:1 },
    music:{ tuition:2, band:1, contemporary:2, production:2},
    note:"One-to-one tuition across flute, clarinet, saxophone, trumpet, french horn, trombone, euphonium, classical and electric guitar, bass, vocals, piano and drums, with graded examinations through to Certificate III in Music Performance. The Sports Excellence Program is sport-agnostic by design — it supports students already competing at elite level outside school, with negotiable training commitments and priority timetabling, rather than running a specific sport."
  },
  "All Saints’ College": {
    basis:"both",
    arts:{ visualArt:2, design:2, drama:2, film:2, dance:2, artSelective:2, artFacility:2 },
    computing:{ csSubject:2, robotics:1, engineering:0, digitalDesign:2, makerspace:1 },
   sport:{ afl:1, netball:1, basketball:1, soccer:1, tennis:1, volleyball:1, swimming:1, athletics:1, crosscountry:1, rowing:1, sailing:1, surfing:1 },
    music:{ choral:1, tuition:1, contemporary:2, production:1},
    note:"Music scholarships require membership of the College Choir plus at least one other ensemble, Music electives to Year 9 or 10, and participation in recitals and camps. A Centre for Performing Arts opened in 2013. One of the widest sport offerings in this set — including rowing, sailing, rugby, golf, softball and gymnastics alongside the usual codes — with an on-site swimming pool, though nothing is run as a named specialist pathway."
  }
};


/* ============================================================
   SCHOOL SIZE — ACARA School Profile 2025 / Enrolments by Grade 2025
   https://www.acara.edu.au/contact-us/acara-data-access

   `y712` is the Years 7-12 total, NOT whole-school. Eleven of these
   schools run PP-12 or 5-12; a child entering Year 7 experiences the
   secondary population, not the primary one. Using whole-school would
   make Christ Church look 42% larger than a Year 7 actually finds it.

   Data year 2025 — the latest complete ACARA release as at July 2026.
   ============================================================ */
const SIZE = {
  "Melville Senior High School — Academic Extension": {
    "y712": 1398,
    "y7": 254,
    "range": "7-12",
    "whole": 1398
  },
  "Perth Modern School": {
    "y712": 1472,
    "y7": 242,
    "range": "7-12",
    "whole": 1472
  },
  "John Curtin College of the Arts": {
    "y712": 1768,
    "y7": 302,
    "range": "7-12",
    "whole": 1768
  },
  "Rossmoyne Senior High School": {
    "y712": 2824,
    "y7": 478,
    "range": "7-12",
    "whole": 2824
  },
  "Willetton Senior High School": {
    "y712": 2767,
    "y7": 454,
    "range": "7-12",
    "whole": 2767
  },
  "Applecross Senior High School — Academic Extension": {
    "y712": 1962,
    "y7": 365,
    "range": "7-12",
    "whole": 1962
  },
  "Shenton College — HPL / GATE": {
    "y712": 2757,
    "y7": 435,
    "range": "7-12",
    "whole": 2757
  },
  "Fremantle College": {
    "y712": 1312,
    "y7": 257,
    "range": "7-12",
    "whole": 1312
  },
  "Aquinas College": {
    "y712": 1048,
    "y7": 173,
    "range": "PP-12",
    "whole": 1332
  },
  "Scotch College": {
    "y712": 1169,
    "y7": 194,
    "range": "PP-12",
    "whole": 1552
  },
  "Christ Church Grammar School": {
    "y712": 1196,
    "y7": 202,
    "range": "PP-12",
    "whole": 1697
  },
  "Hale School": {
    "y712": 1233,
    "y7": 189,
    "range": "PP-12",
    "whole": 1623
  },
  "Wesley College": {
    "y712": 887,
    "y7": 134,
    "range": "PP-12",
    "whole": 1312
  },
  "Iona Presentation College": {
    "y712": 965,
    "y7": 180,
    "range": "PP-12",
    "whole": 1265
  },
  "Santa Maria College": {
    "y712": 1139,
    "y7": 189,
    "range": "5-12",
    "whole": 1334
  },
  "All Saints’ College": {
    "y712": 952,
    "y7": 142,
    "range": "PP-12",
    "whole": 1374
  },
  "Corpus Christi College": {
    "y712": 1360,
    "y7": 255,
    "range": "PP-12",
    "whole": 1789
  },
  "Kennedy Baptist College": {
    "y712": 1244,
    "y7": 215,
    "range": "7-12",
    "whole": 1244
  },
  "Carey Baptist College — Harrisdale": {
    "y712": 917,
    "y7": 160,
    "range": "PP-12",
    "whole": 1484
  },
  "CBC Fremantle": {
    "y712": 954,
    "y7": 186,
    "range": "7-12",
    "whole": 954
  },
  "Seton Catholic College": {
    "y712": 1091,
    "y7": 207,
    "range": "7-12",
    "whole": 1091
  },
  "John XXIII College": {
    "y712": 1076,
    "y7": 186,
    "range": "PP-12",
    "whole": 1492
  }
};

/* John XXIII: ACARA's Years 7-12 grade counts sum to 1076. Project
   records elsewhere show 1077 and 1087 from ACC sources. All three are
   preserved rather than silently reconciled; 1076 is used because it is
   the dated, traceable one. */

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

/* Merge secondary enrolment into each school's attributes so the engine
   can position it relatively, like every other attribute. */
if(typeof schools!=="undefined") schools.forEach(sc=>{
  const s=SIZE[sc.name];
  if(s) sc.attrs.size=s.y712;
});
function schoolSizeInfo(name){ return SIZE[name]; }

/* ============================================================
   GEOGRAPHY

   Campus coordinates and a Perth suburb list, so travel can be
   computed from where the FAMILY lives rather than asserted with a
   three-state label. The old label split 21 schools exactly 7/7/7 into
   local / moderate / metro, with Bull Creek and Bateman as "local" and
   Claremont and Swanbourne as "metro" — which encodes one particular
   family's address, not any general fact.

   IMPORTANT: this is straight-line distance, not drive time. In Perth
   that gap is large, because the river is in the way. Applecross to
   Claremont is about 6km on a map and a completely different journey in
   a car. Always presented as a starting point, never as a commute.
   ============================================================ */
const SCHOOL_GEO = {
 "John XXIII College": [
  -31.96057,
  115.78469,
  "Mount Claremont"
 ],
 "Melville Senior High School — Academic Extension": [
  -32.0421,
  115.8241,
  "Melville"
 ],
 "Perth Modern School": [
  -31.9466,
  115.8228,
  "Subiaco"
 ],
 "John Curtin College of the Arts": [
  -32.0524,
  115.753,
  "Fremantle"
 ],
 "Rossmoyne Senior High School": [
  -32.0349,
  115.8615,
  "Rossmoyne"
 ],
 "Willetton Senior High School": [
  -32.053,
  115.8853,
  "Willetton"
 ],
 "Applecross Senior High School — Academic Extension": [
  -32.0234,
  115.8355,
  "Ardross"
 ],
 "Shenton College — HPL / GATE": [
  -31.96,
  115.7975,
  "Shenton Park"
 ],
 "Fremantle College": [
  -32.0723,
  115.7622,
  "Beaconsfield"
 ],
 "Aquinas College": [
  -32.0125,
  115.8695,
  "Salter Point"
 ],
 "Scotch College": [
  -31.9727,
  115.7659,
  "Swanbourne"
 ],
 "Christ Church Grammar School": [
  -31.9852,
  115.7772,
  "Claremont"
 ],
 "Hale School": [
  -31.9204,
  115.7727,
  "Wembley Downs"
 ],
 "Wesley College": [
  -31.9944,
  115.8632,
  "South Perth"
 ],
 "Iona Presentation College": [
  -32.0116,
  115.7635,
  "Mosman Park"
 ],
 "Santa Maria College": [
  -32.0285,
  115.8135,
  "Attadale"
 ],
 "All Saints’ College": [
  -32.0537,
  115.8552,
  "Bull Creek"
 ],
 "Corpus Christi College": [
  -32.057,
  115.838,
  "Bateman"
 ],
 "Kennedy Baptist College": [
  -32.0692,
  115.8375,
  "Murdoch"
 ],
 "Carey Baptist College — Harrisdale": [
  -32.1049,
  115.9385,
  "Harrisdale"
 ],
 "CBC Fremantle": [
  -32.053,
  115.7495,
  "Fremantle"
 ],
 "Seton Catholic College": [
  -32.0663,
  115.7856,
  "Samson"
 ]
};
const SUBURBS = {
 "Applecross": [
  -32.014,
  115.838
 ],
 "Ardross": [
  -32.0234,
  115.8355
 ],
 "Attadale": [
  -32.0285,
  115.8135
 ],
 "Bateman": [
  -32.057,
  115.838
 ],
 "Beaconsfield": [
  -32.0723,
  115.7622
 ],
 "Bicton": [
  -32.027,
  115.788
 ],
 "Booragoon": [
  -32.033,
  115.833
 ],
 "Bull Creek": [
  -32.0537,
  115.8552
 ],
 "Canning Vale": [
  -32.07,
  115.91
 ],
 "Claremont": [
  -31.9852,
  115.7772
 ],
 "Cottesloe": [
  -31.995,
  115.757
 ],
 "Como": [
  -31.99,
  115.86
 ],
 "Coogee": [
  -32.115,
  115.765
 ],
 "Dalkeith": [
  -31.993,
  115.799
 ],
 "East Fremantle": [
  -32.04,
  115.766
 ],
 "Ellenbrook": [
  -31.77,
  115.97
 ],
 "Floreat": [
  -31.94,
  115.792
 ],
 "Fremantle": [
  -32.053,
  115.7495
 ],
 "Harrisdale": [
  -32.1049,
  115.9385
 ],
 "Hilton": [
  -32.07,
  115.78
 ],
 "Innaloo": [
  -31.893,
  115.795
 ],
 "Joondalup": [
  -31.745,
  115.766
 ],
 "Kardinya": [
  -32.064,
  115.809
 ],
 "Leeming": [
  -32.077,
  115.86
 ],
 "Manning": [
  -32.008,
  115.866
 ],
 "Melville": [
  -32.0421,
  115.8241
 ],
 "Mosman Park": [
  -32.0116,
  115.7635
 ],
 "Mount Claremont": [
  -31.964,
  115.777
 ],
 "Mount Lawley": [
  -31.933,
  115.872
 ],
 "Mount Pleasant": [
  -32.029,
  115.848
 ],
 "Murdoch": [
  -32.0692,
  115.8375
 ],
 "Nedlands": [
  -31.982,
  115.808
 ],
 "North Perth": [
  -31.928,
  115.852
 ],
 "Palmyra": [
  -32.043,
  115.781
 ],
 "Perth CBD": [
  -31.952,
  115.861
 ],
 "Riverton": [
  -32.04,
  115.89
 ],
 "Rossmoyne": [
  -32.0349,
  115.8615
 ],
 "Salter Point": [
  -32.0125,
  115.8695
 ],
 "Samson": [
  -32.0663,
  115.7856
 ],
 "Scarborough": [
  -31.894,
  115.759
 ],
 "Shelley": [
  -32.029,
  115.876
 ],
 "Shenton Park": [
  -31.96,
  115.7975
 ],
 "South Perth": [
  -31.9944,
  115.8632
 ],
 "Spearwood": [
  -32.108,
  115.783
 ],
 "Subiaco": [
  -31.9466,
  115.8228
 ],
 "Success": [
  -32.142,
  115.848
 ],
 "Swanbourne": [
  -31.9727,
  115.7659
 ],
 "Victoria Park": [
  -31.975,
  115.899
 ],
 "Wembley Downs": [
  -31.9204,
  115.7727
 ],
 "Willetton": [
  -32.053,
  115.8853
 ],
 "Winthrop": [
  -32.05,
  115.825
 ],
 "Woodvale": [
  -31.79,
  115.797
 ],
 "Yokine": [
  -31.906,
  115.848
 ]
};

function haversineKm(a,b){
  const R=6371, rad=x=>x*Math.PI/180;
  const dLat=rad(b[0]-a[0]), dLon=rad(b[1]-a[1]);
  const h=Math.sin(dLat/2)**2 + Math.cos(rad(a[0]))*Math.cos(rad(b[0]))*Math.sin(dLon/2)**2;
  return R*2*Math.asin(Math.sqrt(h));
}
function distanceFrom(suburb, schoolName){
  const home=SUBURBS[suburb], g=SCHOOL_GEO[schoolName];
  if(!home||!g) return null;
  return Math.round(haversineKm(home,[g[0],g[1]])*10)/10;
}
function schoolSuburb(name){ return (SCHOOL_GEO[name]||[])[2]; }
