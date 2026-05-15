// ini inisialisasi AOS
AOS.init({ once: true, duration: 800 });

// ini theme toggle
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  document.getElementById('themeIcon').className = isLight ? 'fas fa-moon' : 'fas fa-sun';
});

// ini scroll progress bar
window.addEventListener('scroll', () => {
  const el = document.getElementById('scrollBar');
  const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
  el.style.width = pct + '%';
});

// ini contact card flip
document.getElementById('scene').addEventListener('click', function (e) {
  if (e.target.closest('.f-input') || e.target.closest('.send-btn')) return;
  document.getElementById('cardFlip').classList.toggle('flipped');
});

// ini magnetic & glow effect portfolio card
const portfolioCards = document.querySelectorAll('.portfolio-card');

portfolioCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const moveCardX = (x - rect.width / 2) / 15;
    const moveCardY = (y - rect.height / 2) / 15;
    card.querySelector('.card-body').style.transform = `translate(${moveCardX}px, ${moveCardY - 15}px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.querySelector('.card-body').style.transform = 'translate(0, 0)';
  });
});