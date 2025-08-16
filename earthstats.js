const northAmericaArea = document.getElementById('north-america');

northAmericaArea.addEventListener('click', () => {
  const cards = document.querySelectorAll('.stats-card');
  cards.forEach(card => card.classList.remove('active'));

  const naCard = document.getElementById('north-america-card');
  naCard.classList.add('active');
});

