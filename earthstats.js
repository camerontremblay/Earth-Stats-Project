//interactive map
const northAmericaArea = document.getElementById('north-america');
const southAmericaArea = document.getElementById('south-america');
const europeArea = document.getElementById('europe');
const africaArea = document.getElementById('africa');
const asiaArea = document.getElementById('asia');
const australiaArea = document.getElementById('australia');
const antarcticaArea = document.getElementById('antarctica');

//charts
const areaCanvas = document.getElementById('areaBarChart');
const populationCanvas = document.getElementById('populationBarChart');

//interactive map
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

//Charts
const areaBarChart = new Chart(areaCanvas, {
    type: 'bar',
    data:{
        labels: ['Russia', 'Canada', 'United States', 'China', 'Brazil'],
        datasets: [{
            label: 'Area In Million Square Miles',
            data: [6.6, 3.9, 3.8, 3.7, 3.3],
            backgroundColor: [
                'rgba(2, 126, 67, 1)',
                'rgba(2, 126, 67, 1)',
                'rgba(2, 126, 67, 1)',
                'rgba(2, 126, 67, 1)',
                'rgba(2, 126, 67, 1)',
            ],
            borderColor: [
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
            ],
            borderWidth: 3
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

const populationBarChart = new Chart(populationCanvas, {
    type: 'bar',
    data:{
        labels: ['China', 'India', 'United States', 'Indonesia', 'Pakistan'],
        datasets: [{
            label: 'Population In Hundred Million People',
            data: [14.1, 14.1, 3.4, 2.8, 2.5],
            backgroundColor: [
                'rgba(2, 126, 67, 1)',
                'rgba(2, 126, 67, 1)',
                'rgba(2, 126, 67, 1)',
                'rgba(2, 126, 67, 1)',
                'rgba(2, 126, 67, 1)',
            ],
            borderColor: [
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
            ],
            borderWidth: 3
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
                text: 'Largest Countries By Population'
            }
        }
    }
})