function toggleCard(card) {
  requestAnimationFrame(() => {
    const isOpen = card.classList.contains('open');
    document.querySelectorAll('.info-card').forEach(c => c.classList.remove('open'));
    if (!isOpen) card.classList.add('open');
  });
}

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      requestAnimationFrame(() => e.target.classList.add('visible'));
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.servicos, .depoimentos, .cta').forEach(el => observer.observe(el));