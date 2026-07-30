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
  academic:{label:"Academic challenge",kind:"scored",desc:"Enjoys demanding ideas, advanced work and intellectual stretch."},
  teacher:{label:"Teacher mentorship",kind:"scored",desc:"Performs best when a respected adult notices potential and raises the bar."},
  peerDrive:{label:"Ambitious peers",kind:"scored",desc:"Gains energy from capable, engaged students nearby."},
  peerInfluence:{label:"Peer-culture sensitivity",kind:"scored",desc:"Tends to absorb the habits and priorities of close friends."},
  resilience:{label:"Outperformance resilience",kind:"scored",desc:"Stays engaged when others are currently stronger."},
  structure:{label:"Structure and accountability",kind:"scored",desc:"Benefits from clear standards, checkpoints and follow-through."},
  autonomy:{label:"Independence",kind:"scored",desc:"Wants room to choose methods, topics and direction."},
  focus:{label:"Focused learning culture",kind:"scored",desc:"Needs classrooms where effort and attention are consistently normal."},
  social:{label:"Social energy",kind:"scored",desc:"Draws motivation and identity from groups, events and belonging."},
  pressure:{label:"Pressure tolerance",kind:"scored",desc:"Can sustain effort under selection, deadlines and visible comparison."},
  visibility:{label:"Need to be actively noticed",kind:"scored",desc:"Benefits when teachers identify potential and personally direct opportunities."},
  breadth:{label:"Breadth of identity",kind:"scored",desc:"Wants several strong pathways rather than one defining specialty."},
  grounded:{label:"Grounded social culture",kind:"scored",desc:"Values social breadth, community connection and low status-consciousness."},
  academicInterest:{label:"Academic interest",kind:"scored",attr:"academic",desc:"Draws towards study, reading, puzzles and ideas for their own sake."},
  music:{label:"Music and performing arts",kind:"scored",desc:"Prioritises performance, composition, production and sound."},
  tech:{label:"Technology and making",kind:"scored",desc:"Prioritises computing, media, design and building things."},
  sport:{label:"Sport and movement",kind:"scored",desc:"Values teams, competition, physical challenge and active school life."},
  enterprise:{label:"Leadership and enterprise",kind:"scored",desc:"Enjoys leading, pitching, organising and turning ideas into action."},

  /* ---------- PROFILE ONLY ---------- */
  helpSeeking:{label:"Surfacing a problem",kind:"profile",desc:"Whether they tell someone when they are stuck, behind or struggling.",lowIsRisk:true},
  belonging:{label:"Close-friendship reliance",kind:"profile",desc:"Whether they rely on one or two close friendships rather than a wide network."},
  schoolSize:{label:"Environment size",kind:"profile",desc:"Comfort in a large, anonymous school versus a small one where everyone is known."},
  changeTolerance:{label:"New starts",kind:"profile",desc:"How readily they settle into a group where they know nobody.",lowIsRisk:true},
  statusTolerance:{label:"Status-hierarchy comfort",kind:"profile",desc:"Comfort in a school where standing and reputation are visible and ranked."},
  conflictRepair:{label:"Repairing a falling-out",kind:"profile",desc:"How they handle a rupture with a close friend."},
  empathy:{label:"Looking out for others",kind:"profile",desc:"Willingness to act for someone else at some cost to themselves."},
  spaceNeed:{label:"Need for downtime",kind:"profile",desc:"How much recovery time they need after a full or crowded day.",highIsRisk:true},
  formality:{label:"Traditional culture fit",kind:"profile",desc:"Whether uniform, ceremony and school tradition energise or cost them."},
  cohortStability:{label:"Stable grouping",kind:"profile",desc:"Preference for one consistent class group over moving between groups."},
  outdoor:{label:"Outdoor and expedition",kind:"profile",desc:"Appetite for camps, hiking and time away from home."},
  effortSelfdir:{label:"Follow-through",kind:"profile",desc:"Whether work gets finished without an adult prompting.",lowIsRisk:true},
  mentorStyle:{label:"Preferred teacher style",kind:"profile",desc:"Relational and attentive at one end, expert and demanding at the other."},
  coed:{label:"Mixed-group working",kind:"display",desc:"How they described working in mixed versus same-gender groups. Recorded, never scored."}
};

const SCORED_DIMS  = Object.keys(DIMS).filter(d=>DIMS[d].kind==="scored");
const PROFILE_DIMS = Object.keys(DIMS).filter(d=>DIMS[d].kind==="profile");

/* Child dimension -> school attribute. Where two child dimensions
   feed one school attribute they are blended in desiredSchoolVector. */
const ATTR_OF = {
  academic:"academic", academicInterest:"academic", teacher:"teacher", visibility:"visibility",
  structure:"structure", autonomy:"autonomy", focus:"focus", social:"social",
  pressure:"pressure", music:"music", tech:"tech", sport:"sport",
  enterprise:"enterprise", breadth:"breadth", grounded:"grounded"
};

/* Interest tiles for the Stage 0 inventory. `d` = dimension weights.
   `unmapped` marks a domain with no attribute in the school dataset:
   it is reported and turned into a tour question, never scored. */
const TILES = [
  {id:"music",   t:"Making music or playing an instrument", d:{music:3}},
  {id:"art",     t:"Drawing, design or animation",          d:{tech:1}, unmapped:"visual art and design"},
  {id:"drama",   t:"Acting, film or performing",            d:{music:2, social:1}},
  {id:"writing", t:"Writing stories, or making videos",     d:{tech:1, academicInterest:1}, unmapped:"writing and media"},
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
  {id:"lang",    t:"Languages, travel or other countries",  d:{academicInterest:2}, unmapped:"languages and exchange"}
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

/* ---------- STAGE 0 · interest inventory (3) ---------- */
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

<<<<<<< HEAD
/* ---------- STAGE 0b · sub-domain, conditional ----------
   Only shown to a child who picked the parent interest. Framed as a
   decision rather than a form. Not scored into any dimension — the
   answer flags specific programs to check on a tour, it does not rank
   schools, because a ten-year-old's current favourite sport should not
   drive a six-year decision. */
{stage:0,type:"subdomain",domain:"sport",trigger:["sport"],round:"What you're into",
 prompt:"Your school is starting one new team next year and you get to pick. Which one would you actually turn up to every week?",
 options:[
  {id:"afl",text:"AFL"},{id:"soccer",text:"Soccer"},{id:"basketball",text:"Basketball"},
  {id:"netball",text:"Netball"},{id:"hockey",text:"Hockey"},{id:"cricket",text:"Cricket"},
  {id:"rugby",text:"Rugby"},{id:"swimming",text:"Swimming"},{id:"athletics",text:"Athletics or cross country"},
  {id:"rowing",text:"Rowing"},{id:"tennis",text:"Tennis"},{id:"volleyball",text:"Volleyball"},
  {id:"waterpolo",text:"Water polo"},{id:"dance",text:"Dance"}]},

{stage:0,type:"subdomain",domain:"music",trigger:["music","drama"],round:"What you're into",
 prompt:"The music department has money for one big thing this year. What should they buy?",
 hint:"There's no right answer — pick what you'd actually use.",
 options:[
  {id:"orchestral",text:"Orchestra instruments — strings, brass, woodwind"},
  {id:"band",text:"Concert band gear"},
  {id:"choral",text:"A proper setup for choir and singing"},
  {id:"jazz",text:"Jazz band gear"},
  {id:"contemporary",text:"Rock band gear and amps"},
  {id:"production",text:"Recording and music production equipment"},
  {id:"tuition",text:"More one-to-one lesson time with a teacher"}]},

/* ---------- STAGE 0c · the interest ladder ----------
   Three clashes between the child's OWN top three picks, each with a
   different narrative frame so it never reads as the same question
   repeated. A full round robin, which also exposes inconsistent
   answering. These do not feed the dimensions directly — they produce
   a ranking that then weights the interest dimensions. */
{stage:0,type:"clash",pair:[0,1],round:"What you're into",
 prompt:"Both of these are on at the same time this Saturday, and you can only get to one. Which do you go to?"},

{stage:0,type:"clash",pair:[0,2],round:"What you're into",
 prompt:"Next year is busy and one of these has to go, just for a term. Which one would you keep?"},

{stage:0,type:"clash",pair:[1,2],round:"What you're into",
 prompt:"You can only carry one of these on past Year 10. Which one comes with you?"},

/* Head-to-head against schoolwork. Static, and scored normally —
   this reveals whether the interest survives a demanding academic
   load, which is the difference between a school that can carry both
   and one that quietly forces a choice. */
{stage:0,type:"scenario",round:"What you're into",
 prompt:"There's a big test coming up, and {TOP} has something big on in the very same week. What actually happens?",options:[
 {text:"I'd find a way to do both properly, even if it's a rough week.",w:{pressure:3,breadth:3,effortSelfdir:2,spaceNeed:-2}},
 {text:"Schoolwork comes first. I'd pull back on the other thing.",w:{academic:3,structure:2,breadth:-1}},
 {text:"The thing I love comes first. I'd do enough on the test to get by.",w:{autonomy:3,academic:-2,breadth:-2}},
 {text:"I'd ask a teacher or my parents to help me work out the week.",w:{structure:3,teacher:2,helpSeeking:3,effortSelfdir:-2}},
 {text:"I'd probably end up doing neither as well as I wanted.",w:{pressure:-3,spaceNeed:3,effortSelfdir:-2}}]},

=======
>>>>>>> 315cfa5ec93e50ce3fd8adfb96f781b75adcf0fc
/* ---------- STAGE 1 · two-option trade-offs (24) ---------- */
{stage:1,type:"choice",round:"Challenge",prompt:"You get to pick one class for next term. Which sounds better?",options:[
 {text:"A hard class where you'd probably be one of the best in the room.",w:{academic:2,visibility:2,resilience:-1}},
 {text:"The hardest class in the school, where lots of people would start ahead of you.",w:{academic:3,peerDrive:2,resilience:3,pressure:1}}]},

{stage:1,type:"choice",round:"Motivation",prompt:"Your friends have started taking a group project less seriously. What would help you most?",options:[
 {text:"A teacher checks in on you, expects more, and gives you a clear target.",w:{teacher:3,structure:3,peerInfluence:2}},
 {text:"You're allowed to leave the group and do a bigger version on your own.",w:{autonomy:3,resilience:1,peerInfluence:-1}}]},

{stage:1,type:"choice",round:"Social",prompt:"In a big team project, which job feels better?",options:[
 {text:"Run the group, present the idea and keep everyone going.",w:{enterprise:3,social:3,structure:1}},
 {text:"Be the person who makes the hardest part really well.",w:{tech:1,autonomy:2,academic:1}}]},

{stage:1,type:"choice",round:"Motivation",prompt:"You've just done work you're really proud of. Which would mean more?",options:[
 {text:"A teacher you respect says that's the level they expect from you.",w:{teacher:3,visibility:2}},
 {text:"You know yourself it's the best thing you've ever made.",w:{autonomy:3,resilience:1}}]},

{stage:1,type:"choice",round:"Structure",prompt:"A teacher gives you a big project. Which setup gets your best work?",options:[
 {text:"A clear standard, weekly check-ins and straight feedback.",w:{structure:3,teacher:1,effortSelfdir:-1}},
 {text:"A rough goal and the freedom to work out your own way.",w:{autonomy:3,effortSelfdir:2}}]},

{stage:1,type:"choice",round:"Identity",prompt:"By Year 10, which would you rather be?",options:[
 {text:"Really good at one main thing.",w:{breadth:0}},
 {text:"Good across school, activities and a few different interests.",w:{breadth:3}}]},

{stage:1,type:"choice",round:"Social",prompt:"A new club looks interesting but none of your friends are joining. What's more like you?",options:[
 {text:"Join anyway and see who's there.",w:{peerInfluence:-3}},
 {text:"Pick something else your friends are doing.",w:{peerInfluence:3,social:2}}]},

{stage:1,type:"choice",round:"Social",prompt:"Your closest friends get really into a new hobby. What's more likely?",options:[
 {text:"I'd probably get into it too.",w:{peerInfluence:3}},
 {text:"I'd keep spending most of my time on what I'm already into.",w:{peerInfluence:-3,autonomy:2}}]},

{stage:1,type:"choice",round:"Challenge",prompt:"Which spot in a class would make you work harder?",options:[
 {text:"Near the top, with a real chance to lead and get noticed.",w:{visibility:3,resilience:-2}},
 {text:"Somewhere in the middle, with people around you doing amazing work.",w:{peerDrive:3,resilience:3}}]},

{stage:1,type:"choice",round:"Learning",prompt:"You're stuck on something in class and you don't really get it. What's more like you?",options:[
 {text:"Put your hand up and ask, even though everyone can hear.",w:{helpSeeking:3}},
 {text:"Keep going on your own and try to work it out.",w:{helpSeeking:-3,autonomy:2}}]},

{stage:1,type:"choice",round:"Environment",prompt:"Which school would suit you better?",options:[
 {text:"A big school where there's something for everyone, but plenty of faces you'll never know.",w:{schoolSize:3,breadth:2}},
 {text:"A smaller school where you'd know almost everyone, but there's less on offer.",w:{schoolSize:-3,belonging:2,visibility:2}}]},

{stage:1,type:"choice",round:"Social",prompt:"Which sounds better for your first year of high school?",options:[
 {text:"A big group of friends you hang around with.",w:{social:3,belonging:-2}},
 {text:"One or two really close friends you'd do everything with.",w:{belonging:3,social:-1}}]},

{stage:1,type:"choice",round:"Pressure",prompt:"Which would you rather do?",options:[
 {text:"Try out for something where not everyone gets in.",w:{pressure:3,peerDrive:1}},
 {text:"Join something open to anyone who wants to get better.",w:{pressure:-2,grounded:2}}]},

{stage:1,type:"choice",round:"Environment",prompt:"Which would you pick for high school?",options:[
 {text:"A school close to home, where your friends, sport and neighbourhood all stay connected.",w:{grounded:3,belonging:2}},
 {text:"A school further away, with a longer trip each day, that's really strong at something you love.",w:{grounded:-2,pressure:1,academic:1}}]},

{stage:1,type:"choice",round:"Environment",prompt:"Two schools have equally good subjects. Which sounds better?",options:[
 {text:"A big school with heaps of programs, where you have to go looking for the best ones yourself.",w:{visibility:-3,schoolSize:2}},
 {text:"A school where teachers are more likely to spot what you're good at and suggest things.",w:{visibility:3,teacher:2}}]},

{stage:1,type:"choice",round:"Environment",prompt:"Which classroom would you rather be in?",options:[
 {text:"Fairly relaxed, and some people muck around, but there's a big mix of people and you can still take harder classes.",w:{grounded:3,focus:-3}},
 {text:"Almost everyone works hard the whole lesson, but it feels more competitive.",w:{focus:3,pressure:2,peerDrive:1}}]},

{stage:1,type:"choice",round:"Culture",prompt:"Which school feels better?",options:[
 {text:"Sport is a big deal, and the best athletes are the most well-known kids.",w:{sport:2,statusTolerance:3}},
 {text:"Sport, music, art, marks and leadership all get noticed about the same.",w:{breadth:3,grounded:2,statusTolerance:-3}}]},

{stage:1,type:"choice",round:"Culture",prompt:"Which school day sounds better?",options:[
 {text:"Full uniform, assemblies, house competitions and lots of school traditions.",w:{formality:3,structure:1}},
 {text:"Relaxed uniform, fewer formal events, and more say in how you do things.",w:{formality:-3,statusTolerance:-1}}]},

{stage:1,type:"choice",round:"Identity",prompt:"Which high school week sounds better?",options:[
 {text:"Something on most afternoons — sport, music, clubs, activities.",w:{breadth:3,social:2,spaceNeed:-3}},
 {text:"One or two things you take seriously, with time left over to get really good at them.",w:{breadth:-1,spaceNeed:3}}]},

{stage:1,type:"choice",round:"Environment",prompt:"Which would you rather?",options:[
 {text:"Stay with the same class group for most subjects all year.",w:{cohortStability:3,belonging:1}},
 {text:"Be in different groups for different subjects, depending on the subject.",w:{cohortStability:-3,changeTolerance:2}}]},

{stage:1,type:"choice",round:"Social",prompt:"You're starting at a school where most kids already know each other from primary. What's more like you?",options:[
 {text:"Fine — I'd find my people within a few weeks.",w:{changeTolerance:3,social:2}},
 {text:"I'd rather go somewhere with a group I already know.",w:{changeTolerance:-3,belonging:2}}]},

{stage:1,type:"choice",round:"What you're into",prompt:"Your school runs a week-long camp — hiking, tents, no phones. How do you feel about that?",options:[
 {text:"Sounds great.",w:{outdoor:3,changeTolerance:1}},
 {text:"I'd rather spend that week on the things I'm actually into.",w:{outdoor:-3}}]},

{stage:1,type:"choice",round:"Learning",prompt:"Which teacher would you rather have for a whole year?",options:[
 {text:"One who really knows their subject and pushes you hard.",w:{academic:2,pressure:1,mentorStyle:-3}},
 {text:"One who knows you well and notices how you're going.",w:{teacher:3,visibility:2,mentorStyle:3}}]},

{stage:1,type:"choice",round:"Motivation",prompt:"Which would put you off more?",options:[
 {text:"A rule you think is unfair.",w:{formality:-3,structure:-2},risk:"fairness"},
 {text:"Work that feels pointless.",w:{academic:2,structure:-1},risk:"meaning"}]},

/* ---------- STAGE 2 · behavioural scenarios (15) ---------- */
{stage:2,type:"scenario",round:"What you'd actually do",prompt:"Someone in your year turns out to be way better than you at something you really care about. What do you actually do?",options:[
 {text:"Ask how they got that good and try doing it their way.",w:{resilience:3,peerDrive:3,helpSeeking:2}},
 {text:"Practise on my own until I can keep up with them.",w:{resilience:2,autonomy:2,pressure:1}},
 {text:"Put my effort into the part of it I'm already strong at.",w:{breadth:2,resilience:1}},
 {text:"Let them take the lead on that one and step back a bit.",w:{resilience:-3,visibility:2}},
 {text:"Spend more of my time on something else I enjoy.",w:{resilience:-3,breadth:1}}]},

{stage:2,type:"scenario",round:"What you'd actually do",prompt:"Your friendship group decides that doing the bare minimum is good enough. What happens to how much effort you put in?",options:[
 {text:"Stays the same — what I want out of it matters more.",w:{peerInfluence:-3,effortSelfdir:2}},
 {text:"I try to talk the group into doing more.",w:{enterprise:2,peerInfluence:-1}},
 {text:"It probably drops a bit without me really noticing.",w:{peerInfluence:3,focus:2}},
 {text:"It drops unless a teacher is checking on me.",w:{peerInfluence:2,structure:3,teacher:2}},
 {text:"I'd do the things I care about with different people.",w:{peerInfluence:1,social:2,schoolSize:2}}]},

{stage:2,type:"scenario",round:"What you'd actually do",prompt:"You start an exciting project that nobody set and there's no due date. Three weeks later, what's most likely true?",options:[
 {text:"It's finished and I've started making it better.",w:{effortSelfdir:3,autonomy:3}},
 {text:"I've done heaps of it, but it's not finished.",w:{effortSelfdir:-1,breadth:1}},
 {text:"I'd have kept going if someone had checked in on me.",w:{effortSelfdir:-3,structure:3,teacher:1}},
 {text:"I've moved on to a newer idea.",w:{effortSelfdir:-2,breadth:2}},
 {text:"I got other people involved so it kept moving.",w:{social:3,enterprise:2}}]},

{stage:2,type:"scenario",round:"What you'd actually do",prompt:"A teacher gives you straight criticism of work you were proud of. What happens next?",options:[
 {text:"I want to know exactly how to fix it.",w:{teacher:3,resilience:2,helpSeeking:2}},
 {text:"I'm annoyed at first, then I go back and improve it.",w:{resilience:2,pressure:1}},
 {text:"I explain why I did it that way and keep most of it.",w:{autonomy:3,resilience:1}},
 {text:"I worry that I've let them down.",w:{teacher:3,pressure:-3,visibility:1}},
 {text:"I check what other people got told before I decide what to think.",w:{peerInfluence:3,statusTolerance:1}}]},

{stage:2,type:"scenario",round:"What you'd actually do",prompt:"You turn up to a camp or holiday program where you don't know a single person. What do you actually do?",options:[
 {text:"Start talking to people and find a group pretty quickly.",w:{social:3,changeTolerance:3}},
 {text:"Get to know people through the activity rather than by chatting.",w:{changeTolerance:1,breadth:1}},
 {text:"Wait for someone outgoing to bring me in.",w:{social:-2,changeTolerance:-2,belonging:2}},
 {text:"Get on with the activity — friends can happen later.",w:{autonomy:2,social:-1}},
 {text:"Stay pretty quiet and join in less than I normally would.",w:{social:-3,changeTolerance:-3,visibility:2}}]},

{stage:2,type:"scenario",round:"What you'd actually do",prompt:"You've got a test, a performance and a big game all in the same week. What actually happens?",options:[
 {text:"I love having lots on.",w:{pressure:3,breadth:3,spaceNeed:-3}},
 {text:"I make a plan and work through them one at a time.",w:{pressure:2,structure:2,effortSelfdir:2}},
 {text:"I put most of my energy into the one that matters most to me.",w:{breadth:-2,autonomy:2}},
 {text:"I get through it if an adult helps me organise the week.",w:{structure:3,teacher:1,effortSelfdir:-2}},
 {text:"Weeks like that take a lot out of me.",w:{pressure:-3,spaceNeed:3}}]},

{stage:2,type:"scenario",round:"What you'd actually do",prompt:"You try out for a team, a group or a special program and you don't get in. What's most likely?",options:[
 {text:"Ask what I need to get better at and try again next time.",w:{resilience:3,teacher:2,helpSeeking:2}},
 {text:"Train on my own and try again without talking about it much.",w:{resilience:2,autonomy:3,helpSeeking:-2}},
 {text:"Put my energy into something where I've got a better shot.",w:{breadth:2,resilience:-1}},
 {text:"Give that one a rest for a while.",w:{resilience:-3,pressure:-2}},
 {text:"Join the version that's open to everyone so I can keep doing it.",w:{grounded:3,pressure:-2}}]},

{stage:2,type:"scenario",round:"What you'd actually do",prompt:"Your class gets given a list showing where everyone placed on a big task. What effect does that have on you?",options:[
 {text:"Makes me want to get further up the list.",w:{pressure:3,statusTolerance:3,peerDrive:2}},
 {text:"Helps me see what the standard is, but I don't think about it much after.",w:{pressure:2,resilience:2}},
 {text:"I like it on the weeks I do well.",w:{statusTolerance:2,visibility:2,resilience:-1}},
 {text:"It pulls my attention away from actually learning.",w:{pressure:-3,statusTolerance:-3}},
 {text:"I'd rather just be told privately how I went.",w:{pressure:-2,statusTolerance:-3,visibility:1}}]},

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

{stage:2,type:"scenario",round:"What you'd actually do",prompt:"You're in a class where a few people are mucking around and putting others off. What's most likely?",options:[
 {text:"I keep working and mostly tune it out.",w:{focus:-3,resilience:1}},
 {text:"I work well as long as the teacher keeps things under control.",w:{focus:1,structure:3,teacher:2}},
 {text:"My effort slowly drops along with everyone else's.",w:{focus:3,peerInfluence:3}},
 {text:"It frustrates me and I'd rather be in a more focused class.",w:{focus:3,academic:2}},
 {text:"I enjoy the energy and still get my work done.",w:{focus:-2,social:3}}]},

{stage:2,type:"scenario",round:"What you'd actually do",prompt:"A confident person in your group starts taking over the whole project. What do you do?",options:[
 {text:"Push back and share the leading.",w:{enterprise:3,statusTolerance:2,resilience:2}},
 {text:"Sort out one part that's clearly mine to run.",w:{autonomy:3,enterprise:1}},
 {text:"Let them lead if the end result will be good.",w:{visibility:1,statusTolerance:1}},
 {text:"Step back and do less.",w:{resilience:-3,visibility:3}},
 {text:"Ask the teacher to sort out who's doing what.",w:{structure:3,teacher:2,helpSeeking:2}}]},

/* ---------- STAGE 3 · most and least (8) ---------- */
{stage:3,type:"bestworst",round:"What matters most",prompt:"At a school, which of these would matter MOST to you, and which LEAST?",items:[
 {text:"Teachers who know what I'm good at.",w:{teacher:3,visibility:3}},
 {text:"Other kids who take their work seriously.",w:{peerDrive:3,focus:3}},
 {text:"Great gear and spaces for the things I'm into.",w:{tech:2,music:2}},
 {text:"A good social life.",w:{social:3,grounded:2}},
 {text:"Adults who'd notice if I was having a bad week.",w:{teacher:2,visibility:2,belonging:3}}]},

{stage:3,type:"bestworst",round:"What matters most",prompt:"Which of these would you MOST want a school to be great at, and which LEAST?",items:[
 {text:"Sports teams and coaching.",w:{sport:3}},
 {text:"Harder classes in the subjects I'm good at.",w:{academic:3,academicInterest:2}},
 {text:"Arts — music, drama, art, film.",w:{music:3}},
 {text:"Making and building — tech, design, robotics.",w:{tech:3}},
 {text:"Outdoor programs, camps and expeditions.",w:{outdoor:3}}]},

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
];

/* ============================================================
   PARENT BANK — 32 items (22 observation + 10 family)
   Family items carry no dimension weights; they configure the
   engine and act as constraints.
   ============================================================ */
const parentQuestions = [
{part:"A",type:"scenario",prompt:"When your child realises another child is significantly more capable, what usually happens?",options:[
 {text:"They become more determined and seek ideas from them.",w:{resilience:3,peerDrive:3}},
 {text:"They practise privately but remain involved.",w:{resilience:2,autonomy:2}},
 {text:"They find another way to contribute.",w:{breadth:2,resilience:1}},
 {text:"They become quieter or step back.",w:{resilience:-3,visibility:2}},
 {text:"They lose interest in the activity.",w:{resilience:-3,breadth:1}}]},

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

{part:"A",type:"scenario",prompt:"Which adults have got their strongest work out of them?",options:[
 {text:"Warm teachers who build confidence.",w:{teacher:2,mentorStyle:3,pressure:-1}},
 {text:"Demanding teachers who clearly expect more.",w:{teacher:3,structure:2,mentorStyle:-2,pressure:1}},
 {text:"Teachers who give them freedom and resources.",w:{autonomy:3,teacher:1}},
 {text:"Adults matter less than the peer group.",w:{peerDrive:2,peerInfluence:2,teacher:-2}}]},

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

{part:"A",type:"scenario",prompt:"How often do they choose an activity when friends aren't joining?",options:[
 {text:"Often.",w:{peerInfluence:-3,autonomy:2}},
 {text:"Sometimes, if they're very interested.",w:{peerInfluence:-1}},
 {text:"Rarely.",w:{peerInfluence:3,social:2}},
 {text:"They'll join, but less confidently.",w:{peerInfluence:2,social:-1,visibility:2}}]},

{part:"A",type:"scenario",prompt:"What most reliably turns their ability into sustained effort?",options:[
 {text:"A teacher relationship and high expectations.",w:{teacher:3,structure:2}},
 {text:"A competition, ranking or public goal.",w:{pressure:3,statusTolerance:2}},
 {text:"Deep personal interest.",w:{autonomy:3,effortSelfdir:2}},
 {text:"Friends who are equally committed.",w:{peerDrive:3,peerInfluence:3}},
 {text:"A busy routine with fixed commitments.",w:{structure:3,breadth:2}}]},

{part:"A",type:"scenario",prompt:"Which concern feels most realistic in a highly selective cohort?",options:[
 {text:"They'd thrive and learn from stronger peers.",w:{resilience:3,peerDrive:3}},
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
 {text:"Not very — strong peers energise them.",w:{resilience:3,peerDrive:3}},
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

/* ---------- Part B · family values, culture, constraints ---------- */
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
];
