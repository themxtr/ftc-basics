const TERMS = [
  {term:"Robot Controller", def:"The device mounted on the robot that runs the op mode and directly controls motors, servos, and sensors.", note:"Modern teams usually use a REV Control Hub for this role."},
  {term:"Driver Station", def:"The device held by the drivers to select op modes, start and stop the robot, send gamepad input, and view telemetry.", note:"Modern teams usually use a REV Driver Hub."},
  {term:"Control Hub", def:"An all-in-one Robot Controller device with Android-based software and hardware ports for motors, servos, sensors, and expansion.", note:"This is the recommended Robot Controller hardware."},
  {term:"Expansion Hub", def:"A hardware I/O hub used with a phone Robot Controller or as an expansion device for more ports.", note:"It is not the Driver Station."},
  {term:"Driver Hub", def:"A dedicated handheld Android device for running the Driver Station app.", note:"Gamepads plug into this device during TeleOp."},
  {term:"Op Mode", def:"The robot program selected and run from the Driver Station.", note:"Blocks, OnBot Java, and Android Studio all create op modes."},
  {term:"Autonomous", def:"The match phase where the robot runs pre-written code with no human driver input.", note:"Often shortened to AUTO."},
  {term:"TeleOp", def:"The match phase where human drivers control the robot live using gamepads.", note:"TeleOp depends on reliable Driver Station to Robot Controller communication."},
  {term:"Telemetry", def:"Status information sent from the robot back to the Driver Station screen.", note:"Telemetry is how programmers debug what the robot thinks is happening."},
  {term:"Program & Manage", def:"The robot's Wi-Fi network used by a laptop to open the Blocks programming interface.", note:"You do not need general internet access to use it."},
  {term:"Blocks", def:"A visual programming tool for writing FTC op modes in a browser.", note:"Best for onboarding beginners quickly."},
  {term:"Gamepad", def:"The controller drivers use to command the robot during TeleOp.", note:"Up to two gamepads are commonly used."}
];

const SLIDES = [
  {
    type:"title",
    eyebrow:"FTC Blocks Course",
    headline:"Control System <span>Introduction</span>",
    sub:"Understand the Robot Controller, Driver Station, required materials, and Android device habits before writing Blocks code.",
    note:"Set the expectation: this module is about the system being programmed, not code syntax yet."
  },
  {
    type:"bullets",
    eyebrow:"Part 1 - Why First",
    headline:"Before Code, Build The Mental Model",
    bullets:[
      "FTC robots use a two-device control architecture",
      "One device rides on the robot and runs the program",
      "One device stays with the drivers and sends commands",
      "Later ideas like op modes, telemetry, and gamepad input only make sense after this"
    ],
    note:"Ask students to point to which device is physically on the robot and which one the drivers touch."
  },
  {
    type:"table",
    eyebrow:"Part 2 - Match Phases",
    headline:"Every Match Has Two Robot Modes",
    cols:["Phase","Also Called","Robot Behavior"],
    rows:[
      ["AUTO","Autonomous","Runs pre-written code from start to finish with zero human input"],
      ["TELEOP","Tele-operated","Responds live to up to two human drivers using gamepads"]
    ],
    note:"Keep this short. AUTO is robot independence; TELEOP is driver control."
  },
  {
    type:"compare",
    eyebrow:"Part 3 - The Pair",
    headline:"Robot Controller Vs Driver Station",
    boxA:{k:"Robot Controller", v:"Mounted on the robot. Runs the op mode. Controls motors, servos, and sensors directly."},
    boxB:{k:"Driver Station", v:"Held by the drivers. Selects op modes, starts and stops matches, sends gamepad input, and shows telemetry."},
    minis:[
      {k:"Wireless link", v:"The devices talk over the robot control network."},
      {k:"Telemetry", v:"Robot status shown back to the drivers and programmers."},
      {k:"Gamepads", v:"Plug into the Driver Station, not the robot."},
      {k:"Op mode", v:"Runs on the Robot Controller, not the laptop."}
    ],
    note:"This is the most important distinction in the module. Repeat it until students can say it cleanly."
  },
  {
    type:"sysgrid",
    eyebrow:"Part 4 - Robot Side",
    headline:"Robot Controller Hardware Options",
    cards:[
      {k:"Control Hub", v:"Recommended all-in-one Robot Controller with built-in Android software and hardware ports."},
      {k:"Expansion Hub + phone", v:"Older setup where an Android phone acts as the Robot Controller and the Expansion Hub provides hardware ports."},
      {k:"Motors", v:"Plug into motor ports and are commanded by the op mode."},
      {k:"Servos", v:"Plug into servo ports and move to commanded positions."},
      {k:"Sensors", v:"Send data back to the Robot Controller for code decisions."},
      {k:"Battery", v:"Keeps the control system and robot hardware powered."}
    ],
    note:"If your team has the actual hardware nearby, show the ports physically while this slide is open."
  },
  {
    type:"sysgrid",
    eyebrow:"Part 5 - Driver Side",
    headline:"Driver Station Hardware Options",
    cards:[
      {k:"Driver Hub", v:"Dedicated device for the Driver Station app and gamepad connections."},
      {k:"Android phone", v:"Allowed only if it is on the supported device list and configured correctly."},
      {k:"Gamepads", v:"Used during TeleOp for live robot control."},
      {k:"Op mode screen", v:"Where drivers choose the autonomous or teleop program before starting."}
    ],
    note:"Make clear that the Driver Station does not run the robot code; it commands the Robot Controller."
  },
  {
    type:"table",
    eyebrow:"Part 6 - Programming Options",
    headline:"Three Ways To Write An Op Mode",
    cols:["Tool","Best For","Tradeoff"],
    rows:[
      ["Blocks","True beginners and quick onboarding","Fast to learn, but limited for advanced competitive code"],
      ["OnBot Java","Students ready for Java in the browser","More flexible than Blocks, but external libraries are hard"],
      ["Android Studio","Advanced teams and long-term codebases","Steeper setup, but supports libraries and real debugging"]
    ],
    note:"This should connect back to Module 0: Blocks is useful, but choose a path for experienced programmers too."
  },
  {
    type:"bullets",
    eyebrow:"Part 7 - Materials",
    headline:"What You Need Before Programming",
    bullets:[
      "Robot Controller: Control Hub or Expansion Hub plus supported phone",
      "Driver Station: Driver Hub or supported Android phone",
      "At least one compatible gamepad for TeleOp testing",
      "Laptop with Wi-Fi and a JavaScript-enabled browser; Chrome is recommended",
      "Access to the robot's Program & Manage Wi-Fi network"
    ],
    note:"The important practical point: no full FTC software install is needed for Blocks. The browser connects to the Robot Controller."
  },
  {
    type:"bullets",
    eyebrow:"Part 8 - Device Habits",
    headline:"Two Habits Prevent Setup Pain",
    bullets:[
      "Label every device clearly as Robot Controller or Driver Station",
      "Keep phones, Driver Hubs, Control Hubs, and batteries charged before every session",
      "Keep required Android devices unlocked and prevent sleep during robot use",
      "Learn basic Android navigation because setup often requires switching between FTC apps and Wi-Fi settings"
    ],
    note:"Device confusion is a common rookie failure. Labels are not optional if multiple devices are in the room."
  },
  {
    type:"bullets",
    eyebrow:"Part 9 - Checkpoint",
    headline:"Before Moving To Module 2",
    bullets:[
      "Explain Robot Controller vs Driver Station in one sentence each",
      "Identify which hardware your team uses for each role",
      "Explain what an op mode is and where it runs",
      "Confirm laptop, browser, gamepads, and robot Wi-Fi access",
      "Confirm Android devices are charged, labeled, unlocked, and ready"
    ],
    note:"Use this as a verbal exit ticket. If students cannot explain RC vs DS, repeat the module before hardware configuration."
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
    if(s.quote){ inner += `<div class="quote quote-small">${s.quote}</div>`; }
    inner += `<div class="sys-grid">${s.cards.map(c=>`<div class="sys-card"><div class="k">${c.k}</div><div class="v">${c.v}</div></div>`).join('')}</div>`;
  }
  else if(s.type === 'compare'){
    inner += `<div class="compare"><div class="compare-box a"><div class="k">${s.boxA.k.toUpperCase()}</div><div class="v">${s.boxA.v}</div></div><div class="compare-box b"><div class="k">${s.boxB.k.toUpperCase()}</div><div class="v">${s.boxB.v}</div></div></div><div class="compare-sub-label">Key Connections</div><div class="compare-mini-grid">${s.minis.map(m=>`<div class="compare-mini"><div class="k">${m.k}</div><div class="v">${m.v}</div></div>`).join('')}</div>`;
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
