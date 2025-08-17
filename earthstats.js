const northAmericaArea = document.getElementById('north-america');
const southAmericaArea = document.getElementById('south-america');
const europeArea = document.getElementById('europe');
const africaArea = document.getElementById('africa');
const asiaArea = document.getElementById('asia');
const australiaArea = document.getElementById('australia');
const antarcticaArea = document.getElementById('antarctica');

northAmericaArea.addEventListener('click', () => {
  const cards = document.querySelectorAll('.stats-card');
  cards.forEach(card => card.classList.remove('active'));

  const naCard = document.getElementById('north-america-card');
  naCard.classList.add('active');
});

southAmericaArea.addEventListener('click', () => {
  const cards = document.querySelectorAll('.stats-card');
  cards.forEach(card => card.classList.remove('active'));

  const naCard = document.getElementById('south-america-card');
  naCard.classList.add('active');
});

europeArea.addEventListener('click', () => {
  const cards = document.querySelectorAll('.stats-card');
  cards.forEach(card => card.classList.remove('active'));

  const naCard = document.getElementById('europe-card');
  naCard.classList.add('active');
});

africaArea.addEventListener('click', () => {
  const cards = document.querySelectorAll('.stats-card');
  cards.forEach(card => card.classList.remove('active'));

  const naCard = document.getElementById('africa-card');
  naCard.classList.add('active');
});

asiaArea.addEventListener('click', () => {
  const cards = document.querySelectorAll('.stats-card');
  cards.forEach(card => card.classList.remove('active'));

  const naCard = document.getElementById('asia-card');
  naCard.classList.add('active');
});

australiaArea.addEventListener('click', () => {
  const cards = document.querySelectorAll('.stats-card');
  cards.forEach(card => card.classList.remove('active'));

  const naCard = document.getElementById('australia-card');
  naCard.classList.add('active');
});

antarcticaArea.addEventListener('click', () => {
  const cards = document.querySelectorAll('.stats-card');
  cards.forEach(card => card.classList.remove('active'));

  const naCard = document.getElementById('antarctica-card');
  naCard.classList.add('active');
});

