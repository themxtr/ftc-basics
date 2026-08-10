const TERMS = [
  {term:"GM0", def:"Game Manual 0, a community-written FTC reference used heavily by veteran teams.", note:"Useful, but not an official FIRST rule document."},
  {term:"School Team", def:"An FTC team run through a school, usually with stronger continuity and funding access.", note:"Tradeoff: more schedule, purchasing, and budget constraints."},
  {term:"Home Team", def:"An independent team hosted by families or mentors, often with more schedule freedom.", note:"Tradeoff: harder sponsorships and limited space."},
  {term:"Community Team", def:"A team affiliated with a community group or nonprofit structure.", note:"Most flexible, but usually the highest admin burden."},
  {term:"Mentor", def:"An adult guide. FIRST requires two mentors, both 18+, with Youth Protection Screening.", note:"Healthy teams avoid depending on only one adult."},
  {term:"Cross-training", def:"Teaching students outside their primary role so knowledge does not bottleneck in one person.", note:"Examples: programmers learn CAD mounts; builders learn basic wiring."},
  {term:"Squad Lead", def:"A student lead responsible for delegation and progress inside one team area.", note:"Common squads: design, build, software, outreach, drive, scouting."},
  {term:"Onboarding", def:"A planned path that teaches new members logins, tools, build skills, and coding basics.", note:"Do not leave rookies to learn by accident."},
  {term:"PDP", def:"Program Delivery Partner, the regional director or delivery organization for FTC events.", note:"Previously called Affiliate Partner in some older material."},
  {term:"Qualifier", def:"A tournament with qualification matches, judged awards, alliance eliminations, and advancement.", note:"Often the main event format teams prepare for."},
  {term:"League Meet", def:"A lower-pressure event with ranked matches and usually no judging.", note:"Good for testing before higher-stakes tournaments."},
  {term:"Alliance", def:"Teams working together in a match; normally two teams, with three in eliminations.", note:"Your partner changes during qualification matches."},
  {term:"RP", def:"Ranking Points, the primary ranking metric based on match results.", note:"Win, tie, and loss outcomes affect RP."},
  {term:"TBP", def:"TieBreaker Points, secondary ranking metrics usually tied to autonomous and endgame scoring.", note:"Commonly referenced as TBP1 and TBP2."},
  {term:"Robot Controller", def:"The device mounted on the robot that runs the op mode and controls hardware.", note:"Often a REV Control Hub in modern FTC."},
  {term:"Driver Station", def:"The device held by drivers to select op modes, start/stop the robot, and receive telemetry.", note:"Often a REV Driver Hub."},
  {term:"Blocks", def:"A beginner-friendly visual programming tool for writing FTC op modes.", note:"Best as an onboarding tool, not a long-term competitive ceiling."},
  {term:"Android Studio", def:"The full IDE path for FTC Java development and advanced libraries.", note:"Needed for libraries like Road Runner, FTCLib, and FTC Dashboard."}
];

const SLIDES = [
  {
    type:"title",
    eyebrow:"GM0 Walkthrough",
    headline:"FTC Coach's Guide <span>Module 0</span>",
    sub:"Team building, FTC lingo, and programming-track decisions before the robot build gets serious.",
    note:"Frame this as the team's operating system: how people, language, and tooling fit together before mechanical and software work accelerates."
  },
  {
    type:"bullets",
    eyebrow:"Part 0 - Context",
    headline:"What GM0 Actually Is",
    bullets:[
      "Game Manual 0 is a community-written FTC reference, not an official FIRST rule document",
      "Veteran teams use it as a practical handbook for rookies and coaches",
      "It covers team structure, design, hardware, manufacturing, mechanisms, electronics, software, awards, resources, and appendix material"
    ],
    note:"Be explicit that official rules still come from FIRST game manuals and season resources. GM0 is guidance, not the legal rule source."
  },
  {
    type:"table",
    eyebrow:"Part 1 - Structure",
    headline:"Pick A Team Structure Deliberately",
    cols:["Structure","Advantages","Disadvantages"],
    rows:[
      ["School team","Sustainable, more consistent funding","Less schedule freedom, purchasing red tape, yearly budget pressure"],
      ["Home team","Flexible practice schedule, fewer part restrictions","Harder sponsorships, space constraints"],
      ["Community team","Most flexible, better for donor tax write-offs","Hardest setup, highest admin load"]
    ],
    note:"The key point is not that one structure is universally best. The key point is to choose knowingly instead of inheriting problems by default."
  },
  {
    type:"sysgrid",
    eyebrow:"Part 1 - People",
    headline:"Mentors, Recruiting, And Continuity",
    cards:[
      {k:"Two mentors", v:"FIRST requires two mentors, both 18+, with Youth Protection Screening."},
      {k:"Do not rely on one adult", v:"Split technical mentoring from fundraising, leadership, outreach, and logistics."},
      {k:"Recruit from grade 7+", v:"A team survives when younger members learn before older members graduate."},
      {k:"Budget check", v:"FTC India fees and kit costs should be verified against the current ftcindia.org.in season page."}
    ],
    note:"If this is for India, remind the team that GM0 budget numbers are US-centered. Local registration, kit purchasing, import duties, and sponsorship rules matter."
  },
  {
    type:"sysgrid",
    eyebrow:"Part 1 - Organization",
    headline:"Build Squads, Then Cross-Train Them",
    quote:"The strongest teams avoid one-person bottlenecks. Everyone should understand enough outside their lane to communicate clearly.",
    cards:[
      {k:"Design", v:"CAD, prototypes, field strategy, packaging."},
      {k:"Mechanical", v:"Build quality, mechanisms, repairs, tools."},
      {k:"Software", v:"Git, op modes, telemetry, autonomous, tuning."},
      {k:"Outreach", v:"Sponsors, portfolio, presentations, story."},
      {k:"Drive + scouting", v:"Match execution, data, alliance strategy."},
      {k:"Captain / leads", v:"Delegation and deadline ownership, not task hoarding."}
    ],
    note:"Challenge the team to identify current bottlenecks. If only one person can wire, CAD, code, or present, that is a risk."
  },
  {
    type:"bullets",
    eyebrow:"Part 1 - Culture",
    headline:"Efficiency Is A Culture Choice",
    bullets:[
      "Run weekly or twice-weekly status check-ins where each squad reports blockers and next actions",
      "Prototype competitively: test two or three mechanism ideas, then merge the best evidence-backed design",
      "Use shared CAD and GitHub so work is visible instead of trapped on one laptop",
      "Do not hide mistakes; early failure reports save far more time than they cost",
      "Create a basic team identity: logo, colors, fonts, robot labels, and presentation consistency"
    ],
    note:"This is a good slide for norms. The rule is simple: expose problems early and make work visible."
  },
  {
    type:"table",
    eyebrow:"Part 2 - Competition Lingo",
    headline:"Terms You Will Hear At Events",
    cols:["Term","Meaning"],
    rows:[
      ["PDP","Program Delivery Partner; regional FTC event director or delivery organization"],
      ["Qualifier","Tournament with rankings, judging, eliminations, and advancement"],
      ["League Meet","Ranked matches only; usually lower stress and no judging"],
      ["Alliance","Two teams in normal matches, three teams in eliminations"],
      ["RP","Ranking Points, the main ranking metric"],
      ["TBP","TieBreaker Points, often split into autonomous and endgame scoring"]
    ],
    note:"Use these words in meetings so new members stop treating event language as a separate dialect."
  },
  {
    type:"sysgrid",
    eyebrow:"Part 2 - Robot Lingo",
    headline:"Robot Words That Remove Confusion",
    cards:[
      {k:"DC Motor", v:"Open-loop 12V motor for wheels and spinning mechanisms; max 8."},
      {k:"Servo", v:"PWM-controlled positional motor; useful for claws and gates; max 12."},
      {k:"Drivetrain", v:"The system that moves the robot around the field."},
      {k:"Intake", v:"Mechanism that pulls game elements into the robot."},
      {k:"Arm / slide", v:"Mechanisms that extend reach by rotation or linear motion."},
      {k:"DS / RC", v:"Driver Station is with drivers; Robot Controller is on the robot."}
    ],
    note:"DS and RC confusion causes real setup mistakes. Drill that distinction early."
  },
  {
    type:"compare",
    eyebrow:"Part 3 - Programming Track",
    headline:"Blocks Is A Start, Not The Ceiling",
    boxA:{k:"Blocks", v:"Fastest way to onboard true beginners and get a robot moving. Good for first contact with op modes and driver control."},
    boxB:{k:"Android Studio", v:"The flexible competitive path for real debugging and libraries like FTCLib, Road Runner, and FTC Dashboard."},
    minis:[
      {k:"OnBot Java", v:"Real Java in a browser, useful bridge from Blocks."},
      {k:"Kotlin", v:"Java-interoperable, cleaner syntax, still less common."},
      {k:"C++", v:"Rare in FTC; usually not worth setup cost."},
      {k:"Team policy", v:"Blocks for rookies; Java track for autonomous maintainers."}
    ],
    note:"Do not shame Blocks. It is valuable for onboarding. The decision is about where the competition code should mature."
  },
  {
    type:"bullets",
    eyebrow:"Part 4 - Action List",
    headline:"Before Module 1, Lock These Down",
    bullets:[
      "Confirm whether the team is school, home, or community based",
      "Verify both required adult mentors have Youth Protection Screening completed",
      "Set up shared CAD and a GitHub repo, even if only one student codes today",
      "Choose the language track: Blocks for recruits, OnBot Java or Android Studio for competitive code",
      "Draft a one-page onboarding doc covering logins, tools, and first skills to learn"
    ],
    note:"This is the handoff point. Module 1 can introduce the FTC control system once the team has a basic operating plan."
  }
];

const modeBtns = document.querySelectorAll('.app-mode-btn');
const views = document.querySelectorAll('.view');
modeBtns.forEach(btn => btn.addEventListener('click', () => {
  modeBtns.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  views.forEach(v => v.classList.remove('active'));
  document.getElementById(btn.dataset.view).classList.add('active');
  if(btn.dataset.view === 'quizAppView' && !quizStarted){ startQuiz(); }
}));

let idx = 0;
const stage = document.getElementById('stage');

function renderSlide(s){
  const wrap = document.createElement('div');
  wrap.className = 'slide active';
  let inner = `<div class="eyebrow">${s.eyebrow}</div><h1 class="headline">${s.headline}</h1>`;

  if(s.type === 'title'){
    inner += `<p class="sub">${s.sub}</p>`;
  }
  else if(s.type === 'bullets'){
    inner += `<ul class="bullets">${s.bullets.map(b=>`<li>${b}</li>`).join('')}</ul>`;
  }
  else if(s.type === 'quote'){
    inner += `<div class="quote">${s.quote}</div>`;
  }
  else if(s.type === 'table'){
    inner += `<table class="dtable"><thead><tr>${s.cols.map(c=>`<th>${c}</th>`).join('')}</tr></thead><tbody>${s.rows.map(r=>`<tr>${r.map((cell,i)=>`<td class="${i ? 'dim' : ''}">${cell}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
  }
  else if(s.type === 'sysgrid'){
    if(s.quote){ inner += `<div class="quote">${s.quote}</div>`; }
    inner += `<div class="sys-grid">${s.cards.map(c=>`<div class="sys-card"><div class="k">${c.k}</div><div class="v">${c.v}</div></div>`).join('')}</div>`;
  }
  else if(s.type === 'compare'){
    inner += `<div class="compare"><div class="compare-box a"><div class="k">${s.boxA.k.toUpperCase()}</div><div class="v">${s.boxA.v}</div></div><div class="compare-box b"><div class="k">${s.boxB.k.toUpperCase()}</div><div class="v">${s.boxB.v}</div></div></div><div class="compare-sub-label">Bridge Options</div><div class="compare-mini-grid">${s.minis.map(m=>`<div class="compare-mini"><div class="k">${m.k}</div><div class="v">${m.v}</div></div>`).join('')}</div>`;
  }

  wrap.innerHTML = inner;
  return wrap;
}

function renderSlideView(){
  stage.innerHTML = '';
  stage.appendChild(renderSlide(SLIDES[idx]));
  document.getElementById('count').textContent = `${idx+1} / ${SLIDES.length}`;
  document.getElementById('progressFill').style.width = `${(idx+1)/SLIDES.length*100}%`;
  document.getElementById('notesText').textContent = SLIDES[idx].note || '';
  document.getElementById('prevBtn').disabled = idx === 0;
  document.getElementById('nextBtn').disabled = idx === SLIDES.length - 1;
}

document.getElementById('prevBtn').addEventListener('click', () => { if(idx>0){ idx--; renderSlideView(); } });
document.getElementById('nextBtn').addEventListener('click', () => { if(idx<SLIDES.length-1){ idx++; renderSlideView(); } });

const notesToggle = document.getElementById('notesToggle');
const notesDrawer = document.getElementById('notesDrawer');
let notesOn = false;
function toggleNotes(){
  notesOn = !notesOn;
  notesDrawer.classList.toggle('show', notesOn);
  notesToggle.classList.toggle('active', notesOn);
  notesToggle.textContent = `Facilitator Notes: ${notesOn ? 'On' : 'Off'}`;
}
notesToggle.addEventListener('click', toggleNotes);

document.addEventListener('keydown', (e) => {
  if(document.getElementById('slidesView').classList.contains('active')){
    if(e.key === 'ArrowRight' || e.key === ' '){ e.preventDefault(); if(idx<SLIDES.length-1){ idx++; renderSlideView(); } }
    else if(e.key === 'ArrowLeft'){ if(idx>0){ idx--; renderSlideView(); } }
    else if(e.key.toLowerCase() === 'n'){ toggleNotes(); }
  }
});

renderSlideView();

const grid = document.getElementById('cardGrid');
const flipped = new Set();

TERMS.forEach((item, i) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `<div class="card-inner"><button class="card-face card-front" aria-label="Reveal definition for ${item.term}"><span class="no">${String(i+1).padStart(2,'0')} / ${TERMS.length}</span><span class="term">${item.term}</span><span class="hint2">tap to reveal -&gt;</span></button><button class="card-face card-back" aria-label="Hide definition for ${item.term}"><span class="def">${item.def}</span><span class="note">${item.note}</span></button></div>`;
  const btns = card.querySelectorAll('.card-face');
  btns.forEach(b => b.addEventListener('click', () => {
    card.classList.toggle('flipped');
    if(!flipped.has(i)){ flipped.add(i); updateFcProgress(); }
  }));
  grid.appendChild(card);
});

function updateFcProgress(){
  document.getElementById('fcProgressLabel').textContent = `${flipped.size} / ${TERMS.length} reviewed`;
  document.getElementById('fcProgressFill').style.width = (flipped.size/TERMS.length*100) + '%';
}

const quizWrap = document.getElementById('quizWrap');
let quizOrder = [], qIndex = 0, score = 0, answered = false, quizStarted = false;

function shuffle(arr){
  const a = [...arr];
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

function startQuiz(){
  quizStarted = true;
  quizOrder = shuffle(TERMS.map((_,i)=>i));
  qIndex = 0;
  score = 0;
  answered = false;
  renderQuestion();
}

function renderQuestion(){
  if(qIndex >= quizOrder.length){ renderResult(); return; }
  answered = false;
  const correctIdx = quizOrder[qIndex];
  const correctItem = TERMS[correctIdx];
  const wrongPool = TERMS.map((_,i)=>i).filter(i => i !== correctIdx);
  const wrongs = shuffle(wrongPool).slice(0,3);
  const options = shuffle([correctIdx, ...wrongs]);

  quizWrap.innerHTML = `<div class="quiz-q"><div class="label">QUESTION ${qIndex+1} OF ${quizOrder.length} - WHICH TERM MATCHES?</div><div class="def">${correctItem.def}</div></div><div class="quiz-options" id="quizOptions">${options.map(i => `<button class="quiz-option" data-idx="${i}">${TERMS[i].term}</button>`).join('')}</div><div class="quiz-footer"><span class="quiz-score">Score: ${score} / ${qIndex}</span><button class="btn" id="nextBtn2" disabled>Next -&gt;</button></div>`;

  document.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => {
      if(answered) return;
      answered = true;
      const optIdx = parseInt(btn.dataset.idx,10);
      if(optIdx === correctIdx){ score++; btn.classList.add('correct'); }
      else {
        btn.classList.add('wrong');
        document.querySelector(`.quiz-option[data-idx="${correctIdx}"]`).classList.add('correct');
      }
      document.querySelectorAll('.quiz-option').forEach(b => b.disabled = true);
      document.getElementById('nextBtn2').disabled = false;
    });
  });
  document.getElementById('nextBtn2').addEventListener('click', () => { qIndex++; renderQuestion(); });
}

function renderResult(){
  quizWrap.innerHTML = `<div class="quiz-result"><div class="big">${score} / ${quizOrder.length}</div><p>terms matched correctly</p><button class="btn" id="retryBtn">Try Again</button></div>`;
  document.getElementById('retryBtn').addEventListener('click', startQuiz);
}
