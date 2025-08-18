const northAmericaArea = document.getElementById('north-america');
const southAmericaArea = document.getElementById('south-america');
const europeArea = document.getElementById('europe');
const africaArea = document.getElementById('africa');
const asiaArea = document.getElementById('asia');
const australiaArea = document.getElementById('australia');
const antarcticaArea = document.getElementById('antarctica');
const areaCanvas = document.getElementById('areaBarChart');

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

const areaBarChart = new Chart(areaCanvas, {
    type: 'bar',
    data:{
        labels: ['Russia', 'Canada', 'United States', 'China', 'Brazil'],
        datasets: [{
            label: 'Area In Million Square Miles',
            data: [6.6, 3.9, 3.8, 3.7, 3.3],
            backgroundColor: [
                'rgba(28, 0, 189, 1)',
                'rgba(189, 0, 50, 1)',
                'rgba(28, 0, 189, 1)',
                'rgba(189, 0, 50, 1)',
                'rgba(2, 126, 67, 1)',
            ],
            borderColor: [
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Largest Countries By Size'
            }
        }
    }
})