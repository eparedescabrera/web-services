document.querySelectorAll('.card').forEach((card, index) => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
  card.style.animationDelay = `${index * 0.3}s`;
});
