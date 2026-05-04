// Accordion — delegação de eventos + teclado
function toggleCard(card) {
  const isOpen = card.classList.contains('open');
  document.querySelectorAll('.info-card').forEach(c => {
    c.classList.remove('open');
    c.setAttribute('aria-expanded', 'false');
  });
  if (!isOpen) {
    card.classList.add('open');
    card.setAttribute('aria-expanded', 'true');
  }
}

document.querySelector('.info-cards').addEventListener('click', e => {
  const card = e.target.closest('.info-card');
  if (card) requestAnimationFrame(() => toggleCard(card));
});

document.querySelector('.info-cards').addEventListener('keydown', e => {
  const card = e.target.closest('.info-card');
  if (!card) return;
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    requestAnimationFrame(() => toggleCard(card));
  }
  if (e.key === 'Escape' && card.classList.contains('open')) {
    card.classList.remove('open');
    card.setAttribute('aria-expanded', 'false');
  }
});

// Scroll reveal — desconecta após animar
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      requestAnimationFrame(() => e.target.classList.add('visible'));
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.servicos, .depoimentos, .cta').forEach(el => observer.observe(el));
