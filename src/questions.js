/* ============================================================
   SchoolFit Quest v4 — dimensions and question bank
   Two classes of dimension:
     SCORED  — a matching attribute exists in the school dataset
     PROFILE — measured on the child, but no school-side evidence
               exists, so it never touches the match score. It
               shapes the narrative and generates tour questions.
   ============================================================ */

const DIMS = {
  /* ---------- SCORED ---------- */
  academic:{label:"Academic challenge",kind:"scored",poles:["Comfortable pace","Wants to be pushed"],desc:"Enjoys demanding ideas, advanced work and intellectual stretch."},
  teacher:{label:"Teacher mentorship",kind:"profile",poles:["Self-propelled","Runs on teacher relationships"],desc:"Performs best when a respected adult notices potential and raises the bar."},
  peerDrive:{label:"Ambitious peers",kind:"scored",poles:["Sets own pace","Lifted by ambitious peers"],desc:"Gains energy from capable, engaged students nearby."},
  peerInfluence:{label:"Peer-culture sensitivity",kind:"scored",poles:["Holds own line","Follows the group"],desc:"Tends to absorb the habits and priorities of close friends."},
  resilience:{label:"Outperformance resilience",kind:"scored",poles:["Steps back when outperformed","Leans in when outperformed"],desc:"Stays engaged when others are currently stronger."},
  structure:{label:"Structure and accountability",kind:"profile",poles:["Wants freedom","Wants scaffolding"],desc:"Benefits from clear standards, checkpoints and follow-through."},
  autonomy:{label:"Independence",kind:"scored",poles:["Happy to be directed","Wants to do it their way"],desc:"Wants room to choose methods, topics and direction."},
  focus:{label:"Focused learning culture",kind:"scored",poles:["Tunes out distraction","Needs a focused room"],desc:"Needs classrooms where effort and attention are consistently normal."},
  social:{label:"Social energy",kind:"profile",poles:["Works best quietly","Runs on people and events"],desc:"Draws motivation and identity from groups, events and belonging."},
  pressure:{label:"Pressure tolerance",kind:"scored",poles:["Prefers low pressure","Sustains pressure well"],desc:"Can sustain effort under selection, deadlines and visible comparison."},
  visibility:{label:"Need to be actively noticed",kind:"profile",poles:["Goes and asks","Needs to be noticed"],desc:"Benefits when teachers identify potential and personally direct opportunities."},
  breadth:{label:"Breadth of identity",kind:"scored",poles:["Wants to go deep on one","Wants several pathways"],desc:"Wants several strong pathways rather than one defining specialty."},
  grounded:{label:"Grounded social culture",kind:"scored",poles:["Doesn't mind a narrow intake","Wants a broad social mix"],desc:"Values social breadth, community connection and low status-consciousness."},
  schoolSize:{label:"Environment size",kind:"scored",poles:["Wants to be known","Comfortable in a big school"],desc:"Comfort in a large school versus a smaller one where everyone is known."},
  academicInterest:{label:"Academic interest",kind:"scored",poles:["Study is a means to an end","Enjoys the work itself"],attr:"academic",desc:"Draws towards study, reading, puzzles and ideas for their own sake."},
  music:{label:"Music and performing arts",kind:"scored",poles:["Not a priority","Music matters"],desc:"Prioritises performance, composition, production and sound."},
  tech:{label:"Technology and making",kind:"scored",poles:["Not a priority","Making and tech matter"],desc:"Prioritises computing, media, design and building things."},
  sport:{label:"Sport and movement",kind:"scored",poles:["Not a priority","Sport matters"],desc:"Values teams, competition, physical challenge and active school life."},
  enterprise:{label:"Business and enterprise",kind:"scored",poles:["Prefers to contribute","Likes to lead and organise"],desc:"Enjoys leading, pitching, organising and turning ideas into action."},

  /* ---------- PROFILE ONLY ---------- */
  helpSeeking:{label:"Surfacing a problem",kind:"profile",poles:["Keeps it to themselves","Tells someone early"],desc:"Whether they tell someone when they are stuck, behind or struggling.",lowIsRisk:true},
  belonging:{label:"Close-friendship reliance",kind:"profile",poles:["Wide network","Relies on one or two close friends"],desc:"Whether they rely on one or two close friendships rather than a wide network."},

  changeTolerance:{label:"New starts",kind:"profile",poles:["Needs a familiar face","Handles a cold start"],desc:"How readily they settle into a group where they know nobody.",lowIsRisk:true},
  statusTolerance:{label:"Status-hierarchy comfort",kind:"profile",poles:["Uncomfortable with pecking order","Comfortable with visible status"],desc:"Comfort in a school where standing and reputation are visible and ranked."},
  conflictRepair:{label:"Repairing a falling-out",kind:"profile",poles:["Waits it out","Sorts it out directly"],desc:"How they handle a rupture with a close friend."},
  empathy:{label:"Looking out for others",kind:"profile",poles:["Focuses on their own part","Acts for others at a cost"],desc:"Willingness to act for someone else at some cost to themselves."},
  spaceNeed:{label:"Need for downtime",kind:"profile",poles:["Thrives on a full week","Needs real downtime"],desc:"How much recovery time they need after a full or crowded day.",highIsRisk:true},
  formality:{label:"Traditional culture fit",kind:"scored",poles:["Prefers relaxed","Energised by tradition"],desc:"Whether uniform, ceremony and school tradition energise or cost them."},
  cohortStability:{label:"Stable grouping",kind:"profile",poles:["Happy moving groups","Wants a stable group"],desc:"Preference for one consistent class group over moving between groups."},
  outdoor:{label:"Outdoor and expedition",kind:"profile",poles:["Rather be elsewhere","Loves camps and expeditions"],desc:"Appetite for camps, hiking and time away from home."},
  effortSelfdir:{label:"Follow-through",kind:"profile",poles:["Needs prompting","Finishes without being asked"],desc:"Whether work gets finished without an adult prompting.",lowIsRisk:true},
  mentorStyle:{label:"Preferred teacher style",kind:"profile",poles:["Wants an expert who pushes","Wants someone who knows them"],desc:"Relational and attentive at one end, expert and demanding at the other."},
  visualArt:{label:"Visual art and design",kind:"scored",poles:["Not a priority","Art and design matter"],desc:"Draws towards drawing, design, making images and objects."},
  vet:{label:"Hands-on and vocational pathways",kind:"scored",poles:["Wants an academic route","Wants a practical route"],desc:"Drawn to trades, certificates and learning by doing rather than an ATAR-only path."},
  languages:{label:"Languages",kind:"scored",poles:["Not a priority","Languages matter"],desc:"Draws towards other languages, travel and other countries."},
  drama:{label:"Drama and performing",kind:"scored",poles:["Not a priority","Drama and performing matter"],desc:"Draws towards acting, theatre and performance."},
  /* TALENT — one dimension per domain, not one shared level.
     The old single `talentLevel` was written to by both the sport and the
     music question, so a child who competes at state level in one and plays
     the other for fun produced a single blended number and the tool could
     not tell WHICH thing they were good at. That matters because 17 of the
     22 schools have a selective or extension pathway, and every one of them
     is selective in a specific domain.

     Every ladder asks about history and behaviour, never self-assessment.
     "Are you gifted at maths" is a bad question for a ten-year-old: it gets
     bragging from one child and modesty from another. "I've sat a test for
     a selective program" is a fact, and facts are what we can use. */
  talentAcademic:{label:"Academic level",kind:"profile",poles:["School work is about right","Working well beyond the class"],desc:"How far ahead of the standard classroom they are already working."},
  talentSport:{label:"Sport level",kind:"profile",poles:["Plays for fun","Competing above school level"],desc:"How far they have taken their sport outside school."},
  talentMusic:{label:"Music level",kind:"profile",poles:["Plays for fun","Committed beyond school"],desc:"How far they have taken music outside school."},
  talentComputing:{label:"Computing level",kind:"profile",poles:["Uses it for fun","Building real things"],desc:"How far they have taken coding, robotics or making outside school."},
  talentArt:{label:"Art level",kind:"profile",poles:["Draws for fun","Working to a serious standard"],desc:"How far they have taken art or design outside school."},
  talentDrama:{label:"Drama level",kind:"profile",poles:["Enjoys performing","Performing outside school"],desc:"How far they have taken drama or performance outside school."},
  socialTested:{label:"Has social resilience been tested",kind:"profile",poles:["Never been tested","Has come through it"],desc:"Whether the child has ever been without a close friend or lost a friendship group.",lowIsRisk:true},
  coed:{label:"Mixed-group working",kind:"display",poles:["Same-gender groups","Mixed groups"],desc:"How they described working in mixed versus same-gender groups. Recorded, never scored."}
};

const SCORED_DIMS  = Object.keys(DIMS).filter(d=>DIMS[d].kind==="scored");
const PROFILE_DIMS = Object.keys(DIMS).filter(d=>DIMS[d].kind==="profile");

/* Child dimension -> school attribute. Where two child dimensions
   feed one school attribute they are blended in desiredSchoolVector. */
const ATTR_OF = {
  academic:"academic", academicInterest:"academic",
  autonomy:"autonomy", focus:"focus",
  pressure:"pressure", music:"music", tech:"tech", sport:"sport",
  breadth:"breadth", grounded:"grounded", enterprise:"enterprise",
  visualArt:"visualArt", drama:"drama", languages:"languages", vet:"vet", formality:"formality", schoolSize:"size"
};

/* Interest tiles for the Stage 0 inventory. `d` = dimension weights.
   `unmapped` marks a domain with no attribute in the school dataset:
   it is reported and turned into a tour question, never scored. */
const TILES = [
  {id:"music",   t:"Making music or playing an instrument", d:{music:3}},
  {id:"art",     t:"Drawing, design or animation",          d:{visualArt:3, tech:1}},
  {id:"drama",   t:"Acting, film or performing",            d:{drama:3, social:1}},
  {id:"writing", t:"Writing stories, or making videos",     d:{drama:2, tech:1, academicInterest:1}},
  {id:"sport",   t:"Sport and training",                    d:{sport:3}},
  {id:"outdoor", t:"Being outdoors — camping, hiking, exploring", d:{outdoor:3, sport:1}},
  {id:"build",   t:"Building or fixing things",             d:{tech:3}},
  {id:"code",    t:"Coding, games or robotics",             d:{tech:3}},
  {id:"science", t:"Science experiments or nature",         d:{academicInterest:2, tech:1}},
  {id:"puzzles", t:"Puzzles, chess or quiz stuff",          d:{academicInterest:3}},
  {id:"reading", t:"Reading or going deep on a topic",      d:{academicInterest:3}},
  {id:"animals", t:"Looking after animals",                 d:{outdoor:2}, unmapped:"animal and environmental programs"},
  {id:"helping", t:"Helping or coaching younger kids",      d:{empathy:3, social:1}, unmapped:"service and peer-support programs"},
  {id:"organise",t:"Organising an event or running a club", d:{enterprise:3, social:1}},
  {id:"selling", t:"Making or selling something to earn money", d:{enterprise:3}},
  {id:"lang",    t:"Languages, travel or other countries",  d:{languages:3, academicInterest:1}}
];

function tileOpts(scale, extra){
  return TILES.map(t=>{
    const w={};
    Object.keys(t.d).forEach(k=>w[k]=t.d[k]*scale);
    if(extra) Object.keys(extra).forEach(k=>w[k]=(w[k]||0)+extra[k]);
    return {id:t.id, text:t.t, w, unmapped:t.unmapped};
  });
}

/* ============================================================
   CHILD BANK — 50 items
   ============================================================ */
const childQuestions = [
{stage:0,type:"multi",pick:3,round:"What you're into",
 prompt:"Pick the three things you'd most want to spend a whole Saturday doing.",
 options:tileOpts(1)},

{stage:0,type:"multi",pick:3,round:"What you're into",
 prompt:"Now pick the three you'd least want to spend a Saturday doing.",
 options:tileOpts(-1)},

{stage:0,type:"multi",pick:0,round:"What you're into",
 prompt:"Which of these have you actually done in the last month, without an adult asking you to? Pick as many as are true.",
 hint:"Pick any number, including none.",
 options:tileOpts(0.6,{effortSelfdir:1})},

{stage:0,type:"subdomain",domain:"sport",trigger:["sport"],round:"What you're into",
 prompt:"Your school is starting one new team next year and you get to pick. Which one would you actually turn up to every week?",
 options:[
  {id:"afl",text:"AFL", w:{social:2}},{id:"soccer",text:"Soccer", w:{social:2}},{id:"basketball",text:"Basketball", w:{social:2}},
  {id:"netball",text:"Netball", w:{social:2}},{id:"hockey",text:"Hockey", w:{social:2}},{id:"cricket",text:"Cricket", w:{social:1, focus:1}},
  {id:"rugby",text:"Rugby", w:{social:2, pressure:1}},{id:"swimming",text:"Swimming", w:{autonomy:2, structure:1}},{id:"athletics",text:"Athletics or cross country", w:{autonomy:2}},
  {id:"rowing",text:"Rowing", w:{structure:2, pressure:2}},{id:"tennis",text:"Tennis", w:{autonomy:2}},{id:"volleyball",text:"Volleyball", w:{social:2}},
  {id:"waterpolo",text:"Water polo", w:{social:2, pressure:1}},{id:"dance",text:"Dance", w:{drama:2, visualArt:1}}]},

{stage:0,type:"subdomain",domain:"music",trigger:["music","drama"],round:"What you're into",
 prompt:"The music department has money for one big thing this year. What should they buy?",
 hint:"There's no right answer — pick what you'd actually use.",
 options:[
  {id:"orchestral",text:"Orchestra instruments — strings, brass, woodwind", w:{structure:2, focus:1}},
  {id:"band",text:"Concert band gear", w:{structure:2, social:1}},
  {id:"choral",text:"A proper setup for choir and singing", w:{social:2, structure:1}},
  {id:"jazz",text:"Jazz band gear", w:{autonomy:2, social:1}},
  {id:"contemporary",text:"Rock band gear and amps", w:{social:2, autonomy:1}},
  {id:"production",text:"Recording and music production equipment", w:{tech:3, autonomy:3, social:-1}},
  {id:"tuition",text:"More one-to-one lesson time with a teacher", w:{teacher:2, autonomy:1}}]},

{stage:0,type:"clash",pair:[0,1],round:"What you're into",
 prompt:"Both of these are on at the same time this Saturday, and you can only get to one. Which do you go to?"},

{stage:0,type:"clash",pair:[0,2],round:"What you're into",
 prompt:"Next year is busy and one of these has to go, just for a term. Which one would you keep?"},

{stage:0,type:"clash",pair:[1,2],round:"What you're into",
 prompt:"You can only carry one of these on past Year 10. Which one comes with you?"},

{stage:0,type:"scenario",round:"What you're into",
 prompt:"There's a big test coming up, and {TOP} has something big on in the very same week. What actually happens?",options:[
 {text:"I'd find a way to do both properly, even if it's a rough week.",w:{pressure:3,breadth:3,effortSelfdir:2,spaceNeed:-2}},
 {text:"Schoolwork comes first. I'd pull back on the other thing.",w:{academic:3,structure:2,breadth:-1}},
 {text:"The thing I love comes first. I'd do enough on the test to get by.",w:{autonomy:3,academic:-2,breadth:-2}},
 {text:"I'd ask a teacher or my parents to help me work out the week.",w:{structure:3,teacher:2,helpSeeking:3,effortSelfdir:-2}},
 {text:"I'd probably end up doing neither as well as I wanted.",w:{pressure:-3,spaceNeed:3,effortSelfdir:-2}}]},

{stage:0,type:"grid",round:"What you're into",
 prompt:"How much do you enjoy each of these at school?",
 hint:"1 means you'd rather not, 5 means you love it. Be honest — there's no right answer.",
 scale:["Not for me","","OK","","Love it"],
 rows:[
  {id:"maths",   t:"Maths",                      d:{academicInterest:3}},
  {id:"english", t:"English",                    d:{academicInterest:2}},
  {id:"science", t:"Science",                    d:{academicInterest:2, tech:1}},
  {id:"hass",    t:"History and society",        d:{academicInterest:2}},
  {id:"lang",    t:"Languages",                  d:{languages:3, academicInterest:1}},
  {id:"art",     t:"Art",                        d:{visualArt:3}},
  {id:"music",   t:"Music",                      d:{music:3}},
  {id:"drama",   t:"Drama",                      d:{drama:3, social:1}},
  {id:"dt",      t:"Design and technology",      d:{tech:3}},
  {id:"computing",t:"Computing",                 d:{tech:3}},
  {id:"pe",      t:"PE and sport",               d:{sport:3}}]},

{stage:0,type:"talent",domain:"academic",trigger:null,round:"What you're into",
 prompt:"Think about your school work at the moment. Which is closest?",
 options:[
  {id:"right",  text:"It's usually about the right level for me",              w:{talentAcademic:1}},
  {id:"early",  text:"I often finish early and end up waiting",                w:{talentAcademic:2}},
  {id:"extra",  text:"I read ahead or do my own projects at home because I want to", w:{talentAcademic:3, academicInterest:2}},
  {id:"comp",   text:"I've done competitions or extension work outside school", w:{talentAcademic:4, academicInterest:2}},
  {id:"test",   text:"I've sat, or am sitting, a test for a selective program", w:{talentAcademic:4, academicInterest:1}},
  {id:"hard",   text:"I find most of it pretty hard going",                     w:{talentAcademic:0}}]},

{stage:0,type:"talent",domain:"sport",trigger:["sport"],round:"What you're into",
 prompt:"How serious is your sport for you at the moment?",
 options:[
  {id:"fun",   text:"Just for fun",                       w:{talentSport:0}},
  {id:"school",text:"I play for school teams",            w:{talentSport:1}},
  {id:"club",  text:"I play for a club outside school",   w:{talentSport:3}},
  {id:"rep",   text:"I compete at representative or state level", w:{talentSport:4}}]},

{stage:0,type:"talent",domain:"music",trigger:["music"],round:"What you're into",
 prompt:"How serious is your music for you at the moment?",
 options:[
  {id:"fun",   text:"Just for fun",                            w:{talentMusic:0}},
  {id:"school",text:"I play in school groups",                 w:{talentMusic:1}},
  {id:"grades",text:"I do lessons and exams or grades",        w:{talentMusic:3}},
  {id:"outside",text:"I play in ensembles or compete outside school", w:{talentMusic:4}}]},

{stage:0,type:"choice",domain:"music",trigger:["music"],round:"What you're into",
 prompt:"When you play, what's usually in front of you?",
 options:[
  {id:"notation", text:"Sheet music — I read the notes",              w:{}},
  {id:"chords",   text:"Chords, tabs or lyrics",                      w:{}},
  {id:"ear",      text:"Nothing — I work it out by ear",              w:{autonomy:2}},
  {id:"screen",   text:"A screen — I'm making it on a computer",      w:{tech:2, autonomy:2}},
  {id:"both",     text:"Depends — I read some things and work out others", w:{}}]},

{stage:0,type:"choice",domain:"music",trigger:["music"],round:"What you're into",
 prompt:"If nobody reminded you to practise, what would actually happen?",
 options:[
  {id:"same",   text:"About the same — I play because I want to",   w:{effortSelfdir:3, autonomy:2}},
  {id:"less",   text:"Less, but I'd still play",                    w:{effortSelfdir:1}},
  {id:"pause",  text:"I'd probably stop for a while",               w:{effortSelfdir:-1}},
  {id:"stop",   text:"I'd stop",                                    w:{effortSelfdir:-3}}]},

{stage:0,type:"choice",domain:"music",trigger:["music"],round:"What you're into",
 prompt:"Thinking about high school — where do you want your music to happen?",
 options:[
  {id:"schoolBig", text:"At school — I want to be in the bands, ensembles or productions", w:{social:2}},
  {id:"schoolSub", text:"At school, but as a subject more than a performance thing",       w:{academicInterest:1}},
  {id:"outside",   text:"Mostly outside school, with my own teacher or my own projects",   w:{autonomy:3}},
  {id:"more",      text:"I'd like to do more than I get to now",                           w:{}},
  {id:"unsure",    text:"Not sure yet",                                                    w:{}}]},

{stage:0,type:"choice",domain:"sport",trigger:["sport"],round:"What you're into",
 prompt:"Thinking about high school — where do you want your sport to happen?",
 options:[
  {id:"schoolBig", text:"At school — I want to make the teams",           w:{social:2}},
  {id:"outside",   text:"Mostly at my club outside school",               w:{autonomy:2}},
  {id:"both",      text:"Both — school teams and my club",                w:{social:1}},
  {id:"casual",    text:"Just for fun, nothing serious",                  w:{}},
  {id:"unsure",    text:"Not sure yet",                                   w:{}}]},

{stage:0,type:"choice",domain:"art",trigger:["art"],round:"What you're into",
 prompt:"When you make art, what are you usually working with?",
 options:[
  {id:"traditional",text:"Paper, paint, clay — real materials",           w:{}},
  {id:"digital",    text:"A screen — drawing or designing on a computer", w:{tech:2}},
  {id:"both",       text:"Both about the same",                           w:{tech:1}},
  {id:"building",   text:"Making actual objects — models, props, things", w:{tech:2}}]},

{stage:0,type:"choice",domain:"art",trigger:["art"],round:"What you're into",
 prompt:"Thinking about high school — where do you want your art to happen?",
 options:[
  {id:"schoolBig", text:"At school — proper art classes and a studio",    w:{}},
  {id:"outside",   text:"Mostly my own stuff at home",                    w:{autonomy:3}},
  {id:"both",      text:"Both",                                           w:{autonomy:1}},
  {id:"unsure",    text:"Not sure yet",                                   w:{}}]},

{stage:0,type:"choice",domain:"drama",trigger:["drama"],round:"What you're into",
 prompt:"In a school production, where would you rather be?",
 options:[
  {id:"onstage", text:"On stage, in the show",                            w:{social:2}},
  {id:"backstage",text:"Backstage — lighting, sound, sets",               w:{tech:3, social:-1}},
  {id:"making",  text:"Making it — writing it, filming it, directing",    w:{tech:2, autonomy:2}},
  {id:"either",  text:"Happy either way, I just want to be in it",        w:{social:1}}]},

{stage:0,type:"choice",domain:"computing",trigger:["code","build"],round:"What you're into",
 prompt:"Thinking about high school — how do you want to do this stuff?",
 options:[
  {id:"subject",  text:"As real subjects — computing, engineering, design", w:{academicInterest:2}},
  {id:"club",     text:"In a club or a team, like robotics",                w:{social:2}},
  {id:"outside",  text:"On my own projects, in my own time",                w:{autonomy:3}},
  {id:"unsure",   text:"Not sure yet",                                      w:{}}]},

{stage:0,type:"choice",domain:"drama",trigger:["drama"],round:"What you're into",
 prompt:"Thinking about high school — how far do you want to take drama?",
 options:[
  {id:"major",   text:"Properly — I'd want it as a subject and be in the productions", w:{social:2}},
  {id:"shows",   text:"The productions, but not as a subject",                w:{social:2}},
  {id:"try",     text:"I'd like to try more than I've had the chance to",     w:{}},
  {id:"outside", text:"I do it outside school and that's enough",             w:{autonomy:2}},
  {id:"unsure",  text:"Not sure yet",                                          w:{}}]},

{stage:0,type:"talent",domain:"drama",trigger:["drama"],round:"What you're into",
 prompt:"How serious is drama or performing for you at the moment?",
 options:[
  {id:"fun",   text:"Just for fun",                                  w:{talentDrama:0}},
  {id:"school",text:"I do school plays or productions",              w:{talentDrama:1}},
  {id:"classes",text:"I take classes or do exams outside school",    w:{talentDrama:3}},
  {id:"outside",text:"I perform with a company or group outside school", w:{talentDrama:4}}]},

{stage:0,type:"talent",domain:"computing",trigger:["code","build"],round:"What you're into",
 prompt:"How far have you taken coding, robotics or building things?",
 options:[
  {id:"fun",   text:"I mess about with it sometimes",                w:{talentComputing:0}},
  {id:"school",text:"Mostly what we do at school or in a club",      w:{talentComputing:1}},
  {id:"own",   text:"I build my own projects at home",               w:{talentComputing:3}},
  {id:"comp",  text:"I've entered competitions, or people use what I've made", w:{talentComputing:4}}]},

{stage:0,type:"talent",domain:"art",trigger:["art"],round:"What you're into",
 prompt:"How serious is your art or design for you at the moment?",
 options:[
  {id:"fun",   text:"I draw or make things for fun",                 w:{talentArt:0}},
  {id:"school",text:"Mostly in art class at school",                 w:{talentArt:1}},
  {id:"own",   text:"I work on my own pieces at home a lot",         w:{talentArt:3}},
  {id:"shown", text:"I've entered things, sold work, or had it shown", w:{talentArt:4}}]},

{stage:1,type:"choice",round:"Motivation",prompt:"Your friends have started taking a group project less seriously. What would help you most?",options:[
 {text:"A teacher checks in on you, expects more, and gives you a clear target.",w:{teacher:3,structure:3,peerInfluence:2}},
 {text:"You're allowed to leave the group and do a bigger version on your own.",w:{autonomy:3,resilience:1,peerInfluence:-1}}]},

{stage:1,type:"choice",round:"Environment",prompt:"Which would you rather?",options:[
 {text:"Stay with the same class group for most subjects all year.",w:{cohortStability:3,belonging:1}},
 {text:"Be in different groups for different subjects, depending on the subject.",w:{cohortStability:-3,changeTolerance:2}}]},

{stage:2,type:"scenario",round:"Starting out",
 prompt:"Some high schools near you have close to 3,000 students. That's about ten times a primary school. How does that land?",
 options:[
  {text:"Sounds great — more people, more going on.",              w:{schoolSize:3, social:2, breadth:2}},
  {text:"Fine. I'd find my people soon enough.",                   w:{schoolSize:2, changeTolerance:2}},
  {text:"A bit much. I'd rather somewhere I'm not a number.",      w:{schoolSize:-2, visibility:2, belonging:2}},
  {text:"I'd hate it. I want somewhere people know me.",           w:{schoolSize:-3, belonging:3, visibility:3, spaceNeed:2}}]},

{stage:2,type:"scenario",round:"Starting out",
 prompt:"It's your first week at the new school. What are you actually thinking about most?",
 options:[
  {text:"Whether I'll find my way around — the place is huge.",           w:{schoolSize:-3, belonging:1}},
  {text:"Whether anyone I know is in my classes.",                        w:{belonging:3, changeTolerance:-2, schoolSize:-1}},
  {text:"Whether the teachers will work out what I'm good at.",           w:{visibility:3, teacher:2}},
  {text:"Getting into whatever's running — teams, music, clubs.",         w:{breadth:3, social:2, schoolSize:2}},
  {text:"Nothing much. I'd just get on with it.",                         w:{changeTolerance:3, autonomy:2, visibility:-2}}]},

{stage:2,type:"scenario",round:"Starting out",
 prompt:"You get put in a class for the year. Which one actually gets your best work out of you?",
 options:[
  {text:"Everyone's switched on and it's a bit competitive.",             w:{focus:3, peerDrive:3, pressure:2}},
  {text:"A real mix of people, pretty relaxed, but the work gets done.",  w:{grounded:3, focus:-1, pressure:-1}},
  {text:"Quiet and orderly — everyone just works.",                       w:{focus:3, structure:2, social:-2}},
  {text:"One where the teacher knows me properly.",                       w:{teacher:3, visibility:3, mentorStyle:2}},
  {text:"Doesn't really matter — I'd work about the same.",               w:{autonomy:3, effortSelfdir:2, peerInfluence:-3}}]},

{stage:2,type:"scenario",round:"Starting out",
 prompt:"There's a whole-school assembly every week. What do you hope they're making a fuss about?",
 options:[
  {text:"The teams that won on the weekend.",                             w:{sport:2, statusTolerance:3}},
  {text:"Sport, music, art and marks — all about the same.",              w:{breadth:3, grounded:2, statusTolerance:-2}},
  {text:"Someone who looked out for another kid.",                        w:{empathy:3, grounded:3, statusTolerance:-3}},
  {text:"Top marks, awards, who came first.",                             w:{academic:2, statusTolerance:3, pressure:1}},
  {text:"Honestly, I'd rather there wasn't a big assembly.",              w:{formality:-3, statusTolerance:-3}}]},

{stage:2,type:"scenario",round:"Starting out",
 prompt:"Picture your actual week at high school. Which one sounds like the version of you that's doing well?",
 options:[
  {text:"Something on most afternoons — sport, music, clubs.",            w:{breadth:3, social:2, spaceNeed:-3, schoolSize:2}},
  {text:"One or two things I take really seriously.",                     w:{breadth:-2, spaceNeed:1, autonomy:2, schoolSize:-1}},
  {text:"Busy at school, but afternoons are mine.",                       w:{spaceNeed:3, breadth:-1}},
  {text:"Whatever my friends are doing.",                                 w:{peerInfluence:3, social:3, autonomy:-2}},
  {text:"Full uniform, assemblies, house competitions — the whole thing.", w:{formality:3, structure:2, breadth:1}}]},

{stage:2,type:"scenario",round:"Learning",
 prompt:"Think about the class where the teacher has the most rules. How's your work in there?",
 options:[
  {text:"Some of my best, honestly.",                       w:{structure:3, focus:3, pressure:2, effortSelfdir:-1}},
  {text:"About the same as anywhere else.",                 w:{structure:0, autonomy:1}},
  {text:"Worse — I spend the time annoyed.",                w:{structure:-3, autonomy:3, focus:-1}},
  {text:"I don't really have a class like that.",           w:{}}]},

{stage:1,type:"choice",round:"Learning",
 prompt:"When you're learning something new, which actually works better for you?",options:[
 {text:"Reading about it, then writing or talking it through.",   w:{academicInterest:3, vet:-3}},
 {text:"Being shown, then doing it with my hands until I get it.", w:{vet:3, tech:2}},
 {text:"Watching someone do it properly, then copying them.",      w:{vet:2, teacher:1}},
 {text:"Both work — depends what it is.",                          w:{}}]},

{stage:1,type:"choice",round:"Learning",
 prompt:"Think about your best subject and your worst one. What actually makes the difference?",options:[
 {text:"The subject itself — I like what I like.",              w:{teacher:-3,autonomy:2,academicInterest:2}},
 {text:"Honestly, mostly the teacher.",                          w:{teacher:3,mentorStyle:3,visibility:2}},
 {text:"A bit of both.",                                         w:{teacher:1,mentorStyle:1}},
 {text:"I go alright in most things either way.",                w:{teacher:-2,effortSelfdir:2,resilience:1}}]},

{stage:1,type:"choice",round:"Learning",
 prompt:"A teacher tells you your work isn't good enough and to do it again. What's that like?",options:[
 {text:"Fine — I'd just do it again.",                                w:{mentorStyle:-3,academic:2,pressure:2,resilience:2}},
 {text:"Fine, as long as I know they're on my side.",                 w:{mentorStyle:1,teacher:2,visibility:1,resilience:1}},
 {text:"I'd want to know why before I did anything.",                 w:{mentorStyle:-1,autonomy:2,academic:1}},
 {text:"It'd bother me for a while, even if they were right.",        w:{mentorStyle:3,teacher:2,visibility:2,pressure:-2,resilience:-1}}]},

{stage:1,type:"choice",round:"Motivation",prompt:"Which would put you off more?",options:[
 {text:"A rule you think is unfair.",w:{formality:-3,structure:-2},risk:"fairness"},
 {text:"Work that feels pointless.",w:{academic:2,structure:-1},risk:"meaning"}]},

{stage:2,type:"scenario",round:"What you'd actually do",prompt:"Your friendship group decides that doing the bare minimum is good enough. What happens to how much effort you put in?",options:[
 {text:"Stays the same — what I want out of it matters more.",w:{peerInfluence:-3,effortSelfdir:2}},
 {text:"I try to talk the group into doing more.",w:{enterprise:2,peerInfluence:-1}},
 {text:"It probably drops a bit without me really noticing.",w:{peerInfluence:3,focus:2}},
 {text:"It drops unless a teacher is checking on me.",w:{peerInfluence:2,structure:3,teacher:2}},
 {text:"I'd do the things I care about with different people.",w:{peerInfluence:1,social:2,schoolSize:2}}]},

{stage:2,type:"scenario",round:"What you'd actually do",prompt:"A teacher gives you straight criticism of work you were proud of. What happens next?",options:[
 {text:"I want to know exactly how to fix it.",w:{teacher:3,resilience:2,helpSeeking:2}},
 {text:"I'm annoyed at first, then I go back and improve it.",w:{resilience:2,pressure:1}},
 {text:"I explain why I did it that way and keep most of it.",w:{autonomy:3,resilience:1}},
 {text:"I worry that I've let them down.",w:{teacher:3,pressure:-3,visibility:1}},
 {text:"I check what other people got told before I decide what to think.",w:{peerInfluence:3,statusTolerance:1}}]},

{stage:2,type:"scenario",round:"What you'd actually do",prompt:"You try out for a team, a group or a special program and you don't get in. What's most likely?",options:[
 {text:"Ask what I need to get better at and try again next time.",w:{resilience:3,teacher:2,helpSeeking:2}},
 {text:"Train on my own and try again without talking about it much.",w:{resilience:2,autonomy:3,helpSeeking:-2}},
 {text:"Put my energy into something where I've got a better shot.",w:{breadth:2,resilience:-1}},
 {text:"Give that one a rest for a while.",w:{resilience:-3,pressure:-2}},
 {text:"Join the version that's open to everyone so I can keep doing it.",w:{grounded:3,pressure:-2}}]},

{stage:2,type:"scenario",round:"What you'd actually do",prompt:"Your schoolwork feels too easy and the teacher hasn't noticed. What do you actually do?",options:[
 {text:"Ask the teacher straight out for harder work.",w:{academic:3,helpSeeking:3,visibility:-1}},
 {text:"Make the task harder or more interesting for myself.",w:{autonomy:3,academic:2,effortSelfdir:2}},
 {text:"Finish it fast and move on to my own stuff.",w:{visibility:1,effortSelfdir:1}},
 {text:"Wait until the teacher gives me something harder.",w:{visibility:3,teacher:2,helpSeeking:-2}},
 {text:"Drift a bit and put in less than I could.",w:{visibility:3,focus:2,effortSelfdir:-3}}]},

{stage:2,type:"scenario",round:"What you'd actually do",prompt:"You've been lost in a subject for about two weeks and nobody has noticed. What actually happens?",options:[
 {text:"I tell the teacher.",w:{helpSeeking:3,teacher:2}},
 {text:"I tell someone at home and they sort it out.",w:{helpSeeking:1,structure:1}},
 {text:"I ask a friend who gets it.",w:{helpSeeking:1,peerInfluence:2}},
 {text:"I try to catch up on my own without saying anything.",w:{helpSeeking:-3,visibility:3}},
 {text:"I hope the next topic makes more sense.",w:{helpSeeking:-3,visibility:3,effortSelfdir:-2}}]},

{stage:2,type:"scenario",round:"What you'd actually do",prompt:"You and a good friend have a falling out. A week later it still isn't sorted. What usually happens?",options:[
 {text:"I go and talk to them about it.",w:{conflictRepair:3}},
 {text:"I wait for them to come to me.",w:{conflictRepair:-2,belonging:1}},
 {text:"We just start talking again and never mention it.",w:{conflictRepair:1}},
 {text:"I spend more time with other friends instead.",w:{conflictRepair:-1,social:2,belonging:-2}},
 {text:"I get someone else to help sort it out.",w:{conflictRepair:1,helpSeeking:2,belonging:2}}]},

{stage:2,type:"scenario",round:"What you'd actually do",prompt:"Your team is going well, but one person keeps getting left out of things. What do you actually do?",options:[
 {text:"Make sure they get a real job on the team.",w:{empathy:3,enterprise:2}},
 {text:"Talk to them or sit with them, but leave the team stuff as it is.",w:{empathy:3,enterprise:1}},
 {text:"Say something to whoever's leaving them out.",w:{empathy:3,statusTolerance:-2}},
 {text:"Concentrate on my own part — it's not really mine to sort out.",w:{empathy:-2,focus:1}},
 {text:"Mention it to a teacher.",w:{empathy:2,helpSeeking:2,teacher:1}}]},

{stage:2,type:"scenario",round:"What you'd actually do",prompt:"Think about doing class work in a group with a mix of boys and girls, compared with a group of just your own gender. What's usually true for you?",options:[
 {text:"I work and speak up about the same either way.",w:{coed:0}},
 {text:"I get more done in a mixed group.",w:{coed:2}},
 {text:"I get more done in a group of just my own gender.",w:{coed:-2}},
 {text:"It depends way more on who the actual people are than on that.",w:{coed:0}},
 {text:"I've never really noticed.",w:{coed:0}}]},

{stage:2,type:"scenario",round:"What you'd actually do",prompt:"A confident person in your group starts taking over the whole project. What do you do?",options:[
 {text:"Push back and share the leading.",w:{enterprise:3,statusTolerance:2,resilience:2}},
 {text:"Sort out one part that's clearly mine to run.",w:{autonomy:3,enterprise:1}},
 {text:"Let them lead if the end result will be good.",w:{visibility:1,statusTolerance:1}},
 {text:"Step back and do less.",w:{resilience:-3,visibility:3}},
 {text:"Ask the teacher to sort out who's doing what.",w:{structure:3,teacher:2,helpSeeking:2}}]},

{stage:3,type:"bestworst",round:"What matters most",prompt:"At a school, which of these would matter MOST to you, and which LEAST?",items:[
 {text:"Teachers who know what I'm good at.",w:{teacher:3,visibility:3}},
 {text:"Other kids who take their work seriously.",w:{peerDrive:3,focus:3}},
 {text:"Great gear and spaces for the things I'm into.",w:{tech:2,music:2}},
 {text:"A good social life.",w:{social:3,grounded:2}},
 {text:"Adults who'd notice if I was having a bad week.",w:{teacher:2,visibility:2,belonging:3}}]},

{stage:3,type:"bestworst",round:"What matters most",prompt:"Which of these school things matters MOST to you, and which LEAST?",items:[
 {text:"Clear rules, and adults who follow up.",w:{structure:3,formality:2}},
 {text:"Freedom to do things my own way.",w:{autonomy:3,formality:-2}},
 {text:"Competitions, tryouts and awards.",w:{pressure:3,statusTolerance:2}},
 {text:"A kind school where people look out for each other.",w:{grounded:3,empathy:2,belonging:1}}]},

{stage:3,type:"bestworst",round:"What matters most",prompt:"Which of these sounds MOST appealing, and which LEAST?",items:[
 {text:"Staying near my friends and my own area.",w:{grounded:3,belonging:2}},
 {text:"Being around people who are into the same thing as me.",w:{peerDrive:2,breadth:-2}},
 {text:"Meeting people who are into completely different things.",w:{grounded:2,breadth:3}},
 {text:"Going to a school that people have heard of.",w:{statusTolerance:3},flag:"prestige"}]},

{stage:3,type:"bestworst",round:"What matters most",prompt:"After you've finished something hard, which of these matters MOST, and which LEAST?",items:[
 {text:"A teacher I respect gives me proper feedback on it.",w:{teacher:3,mentorStyle:1}},
 {text:"Other people get to see it.",w:{visibility:2,statusTolerance:2,social:1}},
 {text:"I got to do it my own way.",w:{autonomy:3}},
 {text:"The whole team did well.",w:{social:3,empathy:2}}]},

{stage:3,type:"bestworst",round:"What matters most",prompt:"Which of these would you MOST like to be known for, and which LEAST?",items:[
 {text:"The one who quietly does really good work.",w:{visibility:3,effortSelfdir:1}},
 {text:"The one who gets everyone going.",w:{social:3,enterprise:2}},
 {text:"The one who turns ideas into action.",w:{enterprise:3}},
 {text:"The one who makes something new.",w:{tech:2,music:1,autonomy:2}},
 {text:"The one people go to when something's wrong.",w:{empathy:3,belonging:2}}]},

{stage:3,type:"bestworst",round:"What matters most",prompt:"Which of these would matter MOST to you at school, and which LEAST?",items:[
 {text:"Not much stress, and plenty of free time.",w:{pressure:-3,spaceNeed:3}},
 {text:"High expectations and being pushed.",w:{academic:3,pressure:3,peerDrive:1}},
 {text:"Lots of different things to try.",w:{breadth:3}},
 {text:"One thing I'm really known for.",w:{breadth:-3,visibility:2}}]},

{stage:3,type:"bestworst",round:"What matters most",prompt:"Which of these would MOST make you want to leave a school, and which LEAST?",items:[
 {text:"Feeling like nobody there really knows me.",w:{visibility:3,belonging:2},risk:"anonymity"},
 {text:"Being bored in class.",w:{academic:3,focus:1},risk:"underchallenge"},
 {text:"Feeling behind everyone else.",w:{resilience:-3,pressure:-1},risk:"outclassed"},
 {text:"Not having friends I click with.",w:{social:2,belonging:3},risk:"social"},
 {text:"Feeling under pressure all the time.",w:{pressure:-3,spaceNeed:2},risk:"pressure"}]}
];;;

/* ============================================================
   PARENT BANK — 32 items (22 observation + 10 family)
   Family items carry no dimension weights; they configure the
   engine and act as constraints.
   ============================================================ */
const parentQuestions = [
/* ---------- vocational pathways: who to ask, and how ----------
   THE CHILD is asked how they learn - already in the bank, and framed
   around process rather than destination because a Year 6 student should
   not be made to choose a career.

   THE PARENT is asked what they have OBSERVED, never what they want. Ask
   a parent of a ten-year-old whether they picture ATAR or a trade and
   nearly all of them say ATAR, because that is the default aspiration in
   the room. The answer would tell us about the parent, not the child, and
   it would quietly push every family toward academically-weighted schools.
   What a parent can actually report is how the child goes with a long
   written task versus something they build.

   THE FAMILY is asked whether the option matters to them. That one IS a
   preference and it belongs to them - it sits with faith, co-ed and
   formality as something a family decides rather than something we
   measure. Perth Modern has a confirmed zero across all twelve VET
   fields; a family who wants that door left open should know before they
   fall in love with the place. */
{stage:1,type:"scenario",round:"How they work",
 prompt:"Compare two pieces of your child's schoolwork: a long written assignment, and something practical they had to build, make or perform. Which came out better?",
 options:[
  {text:"The written one, clearly.",                          w:{academicInterest:3, vet:-3}},
  {text:"The practical one, clearly.",                        w:{vet:3, tech:2, academicInterest:-1}},
  {text:"Both good, but they enjoyed the practical one more.", w:{vet:2, tech:1}},
  {text:"Both about the same.",                               w:{}},
  {text:"Hard to say — not much practical work comes home.",  w:{}}]},

{stage:1,type:"choice",round:"Pathways",
 prompt:"How important is it that a vocational or trade pathway stays genuinely available — certificates, school-based apprenticeships, hands-on courses?",
 options:[
  {text:"Important — we want that door properly open.",       w:{vet:3}},
  {text:"Worth having, though we expect an ATAR route.",      w:{vet:1}},
  {text:"Not a factor for us.",                               w:{}},
  {text:"We'd rather a school focused on university pathways.",w:{vet:-3, academicInterest:1}}]},

/* The parent is the better witness for this one. They have watched the
   child across strict teachers, structured holiday programs and demanding
   coaches, and can see the pattern the child is inside of. Asked as an
   observation of what HAPPENED, never as a view about what the child
   needs - parents have theories, and the theory is not the evidence. */
{stage:1,type:"scenario",round:"How they work",
 prompt:"When your child has been in a firmly structured setting — a strict teacher, a demanding coach, a run-tight holiday program — what actually happened?",
 options:[
  {text:"They grumbled about it and did some of their best work.",  w:{structure:3, focus:2, resilience:2}},
  {text:"They were noticeably calmer and happier.",                 w:{structure:3, spaceNeed:1}},
  {text:"They resented it and switched off.",                       w:{structure:-3, autonomy:3}},
  {text:"No real difference either way.",                           w:{structure:0}},
  {text:"We haven't really seen them in one.",                      w:{}}]},

{part:"A",type:"scenario",prompt:"Without a deadline or adult follow-up, what usually happens to a self-directed project?",options:[
 {text:"It is completed independently.",w:{effortSelfdir:3,autonomy:3}},
 {text:"They work intensely but may not finish.",w:{effortSelfdir:-1,autonomy:2}},
 {text:"They need occasional checkpoints.",w:{effortSelfdir:-2,structure:2,teacher:1}},
 {text:"They lose momentum quickly.",w:{effortSelfdir:-3,structure:3}},
 {text:"They recruit others to keep it moving.",w:{social:2,enterprise:2}}]},

{part:"A",type:"scenario",prompt:"How strongly does their friendship group affect their effort and interests?",options:[
 {text:"Very little — they hold their own direction.",w:{peerInfluence:-3,autonomy:2}},
 {text:"Somewhat, but adults and their own goals still matter.",w:{peerInfluence:1,teacher:1}},
 {text:"A lot — they absorb the group's habits.",w:{peerInfluence:3,social:2,focus:2}},
 {text:"It depends on how confident they feel in that activity.",w:{peerInfluence:2,resilience:-1}}]},

{part:"A",type:"scenario",prompt:"When a teacher says the work isn't good enough yet, what usually follows?",options:[
 {text:"They rapidly improve it.",w:{resilience:3,teacher:2}},
 {text:"They're hurt but come back to it.",w:{resilience:1,pressure:-2,teacher:2}},
 {text:"They defend the work.",w:{autonomy:3,resilience:1}},
 {text:"They disengage from that subject.",w:{resilience:-3,pressure:-2}}]},

{part:"A",type:"scenario",prompt:"How do they handle a crowded week of commitments?",options:[
 {text:"Energised by it.",w:{pressure:3,breadth:3,spaceNeed:-3}},
 {text:"Manage well with a plan.",w:{pressure:2,structure:2,effortSelfdir:2}},
 {text:"Manage if an adult organises it.",w:{structure:3,effortSelfdir:-2}},
 {text:"Become overwhelmed.",w:{pressure:-3,spaceNeed:3}}]},

{part:"A",type:"scenario",prompt:"In group activities, which role appears most often?",options:[
 {text:"Leader or organiser.",w:{enterprise:3,social:2}},
 {text:"Social connector who keeps everyone involved.",w:{social:3,empathy:2}},
 {text:"Specialist who makes a key contribution.",w:{autonomy:2,tech:1,breadth:-1}},
 {text:"Joins in with the group's direction.",w:{peerInfluence:3}},
 {text:"Observer who may step back.",w:{social:-3,visibility:2}}]},

{part:"A",type:"scenario",prompt:"What most reliably turns their ability into sustained effort?",options:[
 {text:"A teacher relationship and high expectations.",w:{teacher:3,structure:2}},
 {text:"A competition, ranking or public goal.",w:{pressure:3,statusTolerance:2}},
 {text:"Deep personal interest.",w:{autonomy:3,effortSelfdir:2}},
 {text:"Friends who are equally committed.",w:{peerDrive:3,peerInfluence:3}},
 {text:"A busy routine with fixed commitments.",w:{structure:3,breadth:2}}]},

{part:"A",type:"scenario",prompt:"Which concern feels most realistic in a highly selective cohort?",options:[
 {text:"They'd thrive and learn from stronger peers.",w:{resilience:3}},
 {text:"They'd work hard but get stressed.",w:{pressure:-2,resilience:1}},
 {text:"They may become less visible or less confident.",w:{resilience:-3,visibility:3}},
 {text:"They wouldn't care much about comparisons.",w:{statusTolerance:-2,autonomy:2}}]},

{part:"A",type:"scenario",prompt:"When schoolwork is easy, what tends to happen?",options:[
 {text:"They ask for more, or extend it themselves.",w:{academic:3,effortSelfdir:3,helpSeeking:2}},
 {text:"They do it well but don't seek more.",w:{visibility:2}},
 {text:"They coast unless an adult raises the bar.",w:{visibility:3,teacher:2,structure:2}},
 {text:"They get distracted by friends or other interests.",w:{peerInfluence:3,focus:2,effortSelfdir:-2}}]},

{part:"A",type:"multi",pick:3,prompt:"Which interests survive without any adult prompting? Pick up to three.",options:tileOpts(0.8)},

{part:"A",type:"scenario",prompt:"Which setting most often brings out their social confidence?",options:[
 {text:"A broad mixed group.",w:{social:3,schoolSize:2}},
 {text:"A group built around a shared interest.",w:{peerDrive:2,breadth:-1}},
 {text:"A team with clear roles.",w:{structure:2,social:1}},
 {text:"One-to-one or small groups.",w:{social:-3,belonging:3,schoolSize:-2}}]},

{part:"A",type:"scenario",prompt:"How important is being among the strongest to their confidence?",options:[
 {text:"Not very — strong peers energise them.",w:{peerDrive:3}},
 {text:"Somewhat — they need regular evidence of success.",w:{resilience:-1,visibility:2}},
 {text:"Very — they can withdraw when clearly outperformed.",w:{resilience:-3,visibility:2}},
 {text:"It varies a lot by activity.",w:{breadth:2}}]},

{part:"A",type:"scenario",prompt:"Which school culture would most likely shape them positively?",options:[
 {text:"Ambitious, academically focused peers.",w:{academic:3,peerDrive:3,focus:2}},
 {text:"Active, social students doing lots of things.",w:{social:3,breadth:3}},
 {text:"Creative and technically adventurous students.",w:{music:2,tech:2,autonomy:2}},
 {text:"Grounded students from varied backgrounds.",w:{grounded:3,statusTolerance:-2}},
 {text:"A traditional, highly structured community.",w:{structure:3,formality:3}}]},

{part:"A",type:"scenario",prompt:"Which risk should the school choice guard against most?",options:[
 {text:"Coasting because peers don't value effort.",w:{focus:3,peerDrive:2},risk:"underchallenge"},
 {text:"Losing confidence among exceptional peers.",w:{resilience:-3},risk:"outclassed"},
 {text:"Losing interest because everything is over-structured.",w:{autonomy:3,formality:-2},risk:"overstructured"},
 {text:"Becoming overwhelmed by too many commitments.",w:{spaceNeed:3,pressure:-2},risk:"pressure"},
 {text:"Narrowing into one identity too early.",w:{breadth:3},risk:"narrowing"}]},

{part:"A",type:"scenario",prompt:"When opportunities aren't personally offered, what usually happens?",options:[
 {text:"They seek them out and ask directly.",w:{visibility:-3,autonomy:2,helpSeeking:3}},
 {text:"They notice them but need a small prompt.",w:{visibility:1,teacher:1}},
 {text:"They usually wait for an adult to identify them.",w:{visibility:3,teacher:3}},
 {text:"They may miss them even when highly capable.",w:{visibility:3,helpSeeking:-3}}]},

{part:"A",type:"scenario",prompt:"How strongly does unfocused classroom behaviour affect their effort?",options:[
 {text:"Very little.",w:{focus:-3,autonomy:2}},
 {text:"They work well when the teacher keeps firm control.",w:{focus:1,structure:3,teacher:2}},
 {text:"Their effort gradually follows the group.",w:{focus:3,peerInfluence:3}},
 {text:"They become frustrated or disengaged.",w:{focus:3,academic:2}}]},

{part:"A",type:"scenario",prompt:"When your child is struggling with something at school, how do you usually find out?",options:[
 {text:"They tell us straight away.",w:{helpSeeking:3}},
 {text:"We notice before they say anything.",w:{helpSeeking:-1,visibility:2}},
 {text:"A teacher tells us.",w:{helpSeeking:-1,teacher:2,visibility:2}},
 {text:"It usually comes out late, once it's built up.",w:{helpSeeking:-3,visibility:3}}]},

{part:"A",type:"scenario",prompt:"How does your child usually handle a falling out with a friend?",options:[
 {text:"Sorts it out directly.",w:{conflictRepair:3}},
 {text:"Waits for the other person.",w:{conflictRepair:-2}},
 {text:"Moves on to other friends.",w:{conflictRepair:-1,social:2,belonging:-2}},
 {text:"Takes it hard, and it affects other things.",w:{conflictRepair:-3,belonging:3,pressure:-2}},
 {text:"Brings it to an adult.",w:{conflictRepair:1,helpSeeking:3}}]},

{part:"A",type:"scenario",prompt:"How does your child handle new starts — a new team, class or group?",options:[
 {text:"Straight in.",w:{changeTolerance:3,social:2}},
 {text:"Takes a few weeks, then they're fine.",w:{changeTolerance:1}},
 {text:"Takes a term or more.",w:{changeTolerance:-3,belonging:2}},
 {text:"Needs at least one familiar person to settle.",w:{changeTolerance:-3,belonging:3}}]},

{part:"A",type:"scenario",prompt:"After a full day, what does your child need?",options:[
 {text:"To go straight into the next thing.",w:{spaceNeed:-3,breadth:2,social:2}},
 {text:"A short break, then they're fine.",w:{spaceNeed:-1}},
 {text:"Real downtime before they're any use.",w:{spaceNeed:3}},
 {text:"They run out of steam, and it shows at home.",w:{spaceNeed:3,pressure:-3}}]},

{part:"A",type:"scenario",prompt:"Thinking about your child's school results — how do they come?",options:[
 {text:"A lot of effort for solid results.",w:{effortSelfdir:2,structure:2,pressure:-1}},
 {text:"Steady effort, steady results.",w:{structure:1}},
 {text:"Good results without much effort.",w:{academic:3,visibility:3,effortSelfdir:-2}},
 {text:"It varies a lot depending on the subject.",w:{breadth:2,focus:1}}]},

{part:"A",type:"scenario",prompt:"Does your child want to be pushed harder academically, or would they rather it stayed comfortable?",options:[
 {text:"They actively want to be pushed.",w:{academic:3,peerDrive:2,pressure:2}},
 {text:"They'd take it if offered, but wouldn't ask.",w:{academic:1,visibility:3}},
 {text:"They'd rather it stayed comfortable.",w:{academic:-2,pressure:-2}},
 {text:"They want to be pushed in some subjects and not others.",w:{breadth:2,academic:1}}]},

{part:"A",type:"scenario",prompt:"Has your child ever gone through a stretch without a close friend at school, or had a friendship group break down?",
 note:"This isn't about whether anything is wrong. It tells us whether their answers about friendship reflect resilience or simply good luck so far.",options:[
 {text:"No — they've always had friends and it's never been an issue.",w:{socialTested:0}},
 {text:"Once or twice briefly, and they came through it.",w:{socialTested:3,conflictRepair:2}},
 {text:"Yes, and it was hard for a while.",w:{socialTested:4,belonging:3,pressure:-2}},
 {text:"Yes, and it still affects them.",w:{socialTested:4,belonging:3,conflictRepair:-2,pressure:-3}}]},

{part:"A",type:"scenario",prompt:"Is your household busy and social, or quieter and more home-based?",options:[
 {text:"Busy and social — people around, lots on.",w:{social:3,spaceNeed:-2,breadth:2}},
 {text:"A mix, depending on the week.",w:{}},
 {text:"Quieter and more home-based.",w:{social:-2,spaceNeed:2}},
 {text:"Quiet at home, but the kids are out a lot.",w:{social:2,breadth:2}}]},

{part:"A",type:"scenario",prompt:"How much do results and achievement get talked about at home?",options:[
 {text:"A lot — it's a regular topic.",w:{academic:2,pressure:2,statusTolerance:2}},
 {text:"When reports come out, not much otherwise.",w:{}},
 {text:"Rarely — we focus on effort rather than results.",w:{pressure:-2,statusTolerance:-2,grounded:2}},
 {text:"We deliberately keep it low-key.",w:{pressure:-3,statusTolerance:-3,grounded:2}}]},

{part:"A",type:"scenario",prompt:"What does a typical weeknight look like in your house?",options:[
 {text:"Structured — set homework and bedtime routines.",w:{structure:3,effortSelfdir:-1}},
 {text:"Fairly relaxed, but it gets done.",w:{autonomy:2,effortSelfdir:2}},
 {text:"Busy — activities most nights.",w:{breadth:3,social:2,spaceNeed:-2}},
 {text:"It varies a lot week to week.",w:{structure:-2}}]},

{part:"B",type:"suburb",config:"suburb",
 prompt:"Which suburb do you live in?",
 note:"This replaces a guess. Travel was previously a fixed label — 'local' or 'metro' — set from one point of view. With your suburb the tool measures from your front door instead.",
 options:[]},

{part:"B",type:"peers",config:"knownPeers",
 prompt:"Do you know of children from your child's class heading to any of these?",
 note:"Tick any you know of. This is never used to rank a school — friendship groups shift in Year 8 regardless. It is shown so you can weigh it yourself.",
 options:[]},

{part:"B",type:"rank2",prompt:"At the end of Year 12, what would make you feel this school was the right choice? Pick your top two.",
 config:"success",options:[
 {id:"results",text:"Strong results and options after school."},
 {id:"character",text:"The kind of person they've become."},
 {id:"wellbeing",text:"That they were happy and well."},
 {id:"opportunity",text:"Opportunities and doors that opened."},
 {id:"belonging",text:"Friendships and belonging that lasted."}]},

{part:"B",type:"config",prompt:"Being honest with yourself: how much does a school's reputation matter to you?",
 note:"There is no right answer here. Naming it lets the tool show it to you rather than hide it inside a score.",
 config:"prestige",options:[
 {id:"high",text:"A lot, and I'm comfortable with that."},
 {id:"some",text:"Somewhat — it's one factor."},
 {id:"low",text:"Not much."},
 {id:"avoid",text:"I'd actively avoid a status-driven school."}]},

{part:"B",type:"config",prompt:"What role do you want in school life?",config:"involvement",options:[
 {id:"heavy",text:"Heavily involved — committees, sidelines, volunteering."},
 {id:"some",text:"At the things that matter."},
 {id:"minimal",text:"Minimal — I want it to run well without me."},
 {id:"depends",text:"Depends what the child needs."}]},

{part:"B",type:"config",prompt:"Which approach to behaviour and discipline fits your family?",config:"discipline",options:[
 {id:"firm",text:"Firm rules and clear consequences."},
 {id:"restorative",text:"Restorative conversations and repair."},
 {id:"warm",text:"High expectations delivered with warmth."},
 {id:"flexible",text:"Flexible, judged case by case."}]},

{part:"B",type:"config",prompt:"When your child hits a setback, what does your family usually do?",config:"setback",options:[
 {id:"early",text:"Step in early and help fix it."},
 {id:"coach",text:"Coach them through it."},
 {id:"sit",text:"Let them sit with it and work it out."},
 {id:"varies",text:"It varies a lot."}]},

{part:"B",type:"config",prompt:"How important is faith, chapel or religious tradition in the school?",config:"faith",options:[
 {id:"want",text:"Important — we want it."},
 {id:"fine",text:"Comfortable with it either way."},
 {id:"light",text:"We'd prefer it minimal."},
 {id:"none",text:"We'd prefer none."}]},

{part:"B",type:"config",prompt:"Do you have a view on co-ed versus single-sex?",
 note:"Treated as a family preference and a tour question. It is never derived from the child's answers, and neither model is scored as better.",
 config:"coed",options:[
 {id:"coed",text:"We'd prefer co-ed."},
 {id:"leanCoed",text:"Leaning co-ed."},
 {id:"none",text:"No strong view."},
 {id:"leanSingle",text:"Leaning single-sex."},
 {id:"single",text:"We'd prefer single-sex."}]},

{part:"B",type:"config",prompt:"How much does it matter that you feel at home among the other parents?",config:"parentFit",options:[
 {id:"high",text:"A lot."},
 {id:"some",text:"Somewhat."},
 {id:"low",text:"Not much."}]},

{part:"B",type:"config",prompt:"How formal a school culture suits your family — uniform, ceremony, honours and tradition?",config:"formality",options:[
 {id:"positive",text:"A real positive for us."},
 {id:"neutral",text:"Neutral — we don't mind."},
 {id:"mild",text:"A mild negative."},
 {id:"off",text:"It would put us off."}]},

{part:"B",type:"config",prompt:"If your child's answers and your own point to different environments, whose reading should carry more weight?",config:"weighting",options:[
 {id:"parent",text:"Mine — they're still young."},
 {id:"child",text:"Theirs — they know how they feel."},
 {id:"even",text:"Weight them evenly, and show me where we disagree."}]}
];;
