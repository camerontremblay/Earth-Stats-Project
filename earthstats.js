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
const highPopulationDensityCanvas = document.getElementById('highPopulationDensityBarChart');
const oldestPopulationCanvas = document.getElementById('oldestPopulationBarChart');

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

// Global defaults (safe version)
Chart.defaults.font.size = 14;
Chart.defaults.font.family = "'Poppins', sans-serif";

// Title + legend
Chart.defaults.plugins.title.font = {
  size: 20
};
Chart.defaults.plugins.legend.labels.font = {
  size: 16
};




const areaBarChart = new Chart(areaCanvas, {
    type: 'bar',
    data:{
        labels: ['Russia', 'Canada', 'United States', 'China', 'Brazil'],
        datasets: [{
            label: 'Area In Million Square Miles',
            data: [6.6, 3.9, 3.8, 3.7, 3.3],
            backgroundColor: '#ffffff',
            borderColor: '#000000',
            borderWidth: 2
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
});

const populationBarChart = new Chart(populationCanvas, {
    type: 'bar',
    data:{
        labels: ['China', 'India', 'United States', 'Indonesia', 'Pakistan'],
        datasets: [{
            label: 'Population In Hundred Million People',
            data: [14.1, 14.1, 3.4, 2.8, 2.5],
            backgroundColor: '#ffffff',
            borderColor: '#000000',
            borderWidth: 2
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
});

const highPopulationDensityBarChart = new Chart(highPopulationDensityCanvas, {
    type: 'bar',
    data:{
        labels: ['Monaco', 'Singapore', 'Bahrain', 'Vatican City', 'Maldives'],
        datasets: [{
            label: 'Population Density In People Per Square Mile In Thousands',
            data: [49, 21, 5.2, 4.7, 4.6],
            backgroundColor: '#ffffff',
            borderColor: '#000000',
            borderWidth: 2
        }]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        scales: {
            x: {
                beginAtZero: true
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Countries With Highest Population Density'
            }
        }
    }
});

const oldestPopulationBarChart = new Chart(oldestPopulationCanvas, {
    type: 'bar',
    data:{
        labels: ['Monaco', 'Japan', 'Andorra', 'Italy', 'Germany'],
        datasets: [{
            label: 'Age Of Average Citizen',
            data: [56.9, 49.9, 48.8, 48.4, 46.8],
            backgroundColor: '#ffffff',
            borderColor: '#000000',
            borderWidth: 2
        }]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        scales: {
            x: {
                beginAtZero: true
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Oldest Countries By Average Civilian Age'
            }
        }
    }
});


//timeline

const currentYear = new Date().getFullYear();

const labels = [
  'Roman Empire',
  'Byzantine Empire',
  'Mongol Empire',
  'Ottoman Empire',
  'Mughal Empire',
  'Spanish Empire',
  'Portuguese Empire',
  'British Empire',
  'French Empire',
  'United States',
  'Canada',
  'Brazil',
  'Germany',
  'India',
  'China',
  'Russia',
  'Japan'
];

const starts = [
  0,    // Roman
  330,  // Byzantine
  1206, // Mongol
  1299, // Ottoman
  1526, // Mughal
  1492, // Spanish
  1415, // Portuguese
  1583, // British
  1534, // French
  1776, // USA
  1867, // Canada
  1822, // Brazil
  1871, // Germany
  1947, // India
  1949, // China
  1991, // Russia
  1868  // Japan
];

const ends = [
  476,  // Roman
  1453, // Byzantine
  1368, // Mongol
  1922, // Ottoman
  1857, // Mughal
  1898, // Spanish
  1999, // Portuguese
  1997, // British
  1980, // French
  currentYear, // USA
  currentYear, // Canada
  currentYear, // Brazil
  currentYear, // Germany
  currentYear, // India
  currentYear, // China
  currentYear, // Russia
  currentYear  // Japan
];


const durations = ends.map((end, i) => end - starts[i]);

const timeline = document.getElementById('timeline');

new Chart(timeline, {
  type: 'bar',
  data: {
    labels,
    datasets: [
      {
        label: 'Start',
        data: starts,
        backgroundColor: 'rgba(0,0,0,0)',
        stack: 'timeline'
      },
      {
        label: 'Duration',
        data: durations,
        backgroundColor: '#ffffff',
        stack: 'timeline',
        borderColor: '#000000',
        borderWidth: 2
      }
    ]
  },
  options: {
    indexAxis: 'y',
    responsive: true,
    scales: {
      x: {
        stacked: true,
        max: currentYear,
        title: {
          display: true,
          text: 'Year'
        }
      },
      y: {
        stacked: true
      }
    },
    plugins: {
      legend: { display: false }
    }
  }
});

function resizeMap() {
  const img = document.getElementById("world-map");
  const map = document.querySelector("map[name='continents']");
  const areas = map.getElementsByTagName("area");

  if (!img.naturalWidth || !img.naturalHeight) return;

  const w = img.width;
  const h = img.height;
  const wRatio = w / img.naturalWidth;
  const hRatio = h / img.naturalHeight;

  for (let area of areas) {
    // store the original coords the first time
    if (!area.dataset.originalCoords) {
      area.dataset.originalCoords = area.coords;
    }

    const originalCoords = area.dataset.originalCoords.split(",").map(Number);
    const newCoords = originalCoords.map((c, i) =>
      i % 2 === 0 ? c * wRatio : c * hRatio
    );
    area.coords = newCoords.join(",");
  }
}

// run when image loads and when window resizes
window.addEventListener("load", resizeMap);
window.addEventListener("resize", resizeMap);

