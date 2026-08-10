const slides = Array.from(document.querySelectorAll('.slide'));
  const total = slides.length;
  let idx = 0;
  let quizScore = 0;

  const elCurrent = document.getElementById('slideCurrent');
  const elTotal = document.getElementById('slideTotal');
  const fill = document.getElementById('progressFill');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dotsWrap = document.getElementById('dots');
  elTotal.textContent = total;

  slides.forEach((s, i) => {
    const d = document.createElement('button');
    d.className = 'dot';
    d.title = s.dataset.title || ('Slide ' + (i + 1));
    d.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(d);
  });
  const dots = Array.from(dotsWrap.children);

  function goTo(i) {
    i = Math.max(0, Math.min(total - 1, i));
    slides[idx].classList.remove('active');
    idx = i;
    slides[idx].classList.add('active');
    slides[idx].scrollTop = 0;
    elCurrent.textContent = idx + 1;
    fill.style.width = ((idx + 1) / total * 100) + '%';
    dots.forEach((d, j) => d.classList.toggle('active', j === idx));
    prevBtn.disabled = idx === 0;
    nextBtn.disabled = idx === total - 1;
    if (slides[idx].dataset.title === 'Wrap-up') updateFinalScore();
  }

  prevBtn.addEventListener('click', () => goTo(idx - 1));
  nextBtn.addEventListener('click', () => goTo(idx + 1));
  document.getElementById('brandHome').addEventListener('click', () => goTo(0));

  window.addEventListener('keydown', (e) => {
    if (['ArrowRight', 'PageDown'].includes(e.key)) { e.preventDefault(); goTo(idx + 1); }
    else if (['ArrowLeft', 'PageUp'].includes(e.key)) { e.preventDefault(); goTo(idx - 1); }
  });

  function handleAnswer(opt) {
    const q = opt.closest('.quiz-question');
    if (q.classList.contains('answered')) return;
    q.classList.add('answered');
    const correct = opt.dataset.correct === 'true';
    opt.classList.add(correct ? 'opt-correct' : 'opt-incorrect');
    if (!correct) {
      const correctOpt = q.querySelector('.option[data-correct="true"]');
      if (correctOpt) correctOpt.classList.add('opt-correct');
    } else {
      quizScore++;
      document.querySelectorAll('.score-value').forEach(el => el.textContent = quizScore);
    }
    const fb = q.querySelector('.quiz-feedback');
    if (fb) {
      fb.textContent = (correct ? 'Correct. ' : 'Not quite. ') + fb.dataset.explain;
      fb.classList.add('show');
    }
  }

  function updateFinalScore() {
    const el = document.getElementById('finalScore');
    if (el) el.textContent = quizScore + ' / 6';
  }

  document.addEventListener('click', (e) => {
    const item = e.target.closest('.checklist-item');
    if (item) {
      item.classList.toggle('checked');
      const block = item.closest('.checklist-block');
      if (block) {
        const done = block.querySelectorAll('.checklist-item.checked').length;
        const doneEl = block.querySelector('.cc-done');
        if (doneEl) doneEl.textContent = done;
      }
    }
    const card = e.target.closest('.flashcard');
    if (card) card.classList.toggle('flipped');

    const opt = e.target.closest('.option');
    if (opt) handleAnswer(opt);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const el = document.activeElement;
    if (el && el.classList.contains('flashcard')) { e.preventDefault(); el.classList.toggle('flipped'); }
  });

  goTo(0);
