
/* ==========================
   PAGE NAVIGATION
========================== */

function showPage(page) {
  document.querySelectorAll('.page').forEach(section => {
    section.classList.remove('active');
  });

  document.getElementById(page).classList.add('active');

  document.querySelectorAll('.nav-btn').forEach(button => {
    button.classList.toggle(
      'active',
      button.dataset.page === page
    );
  });
}

document.querySelectorAll('.nav-btn').forEach(button => {
  button.addEventListener('click', () => {
    showPage(button.dataset.page);
  });
});

document.querySelectorAll('[data-goto]').forEach(button => {
  button.addEventListener('click', () => {
    showPage(button.dataset.goto);
  });
});


/* ==========================
   SEARCH EASTER EGG
========================== */

const searchInput = document.getElementById('searchInput');
const recentSearch = document.getElementById('recentSearch');
const easterEgg = document.getElementById('easterEgg');

searchInput.addEventListener('focus', () => {
  recentSearch.classList.add('show');
});

easterEgg.addEventListener('click', () => {
  searchInput.value = 'does aj have a cat';
  recentSearch.classList.remove('show');
});

document.addEventListener('click', event => {
  if (!event.target.closest('.search-wrap')) {
    recentSearch.classList.remove('show');
  }
});


/* ==========================
   CHARACTER DATABASE
========================== */

const characters = [
  {
    name: 'CHARACTER I',
    type: 'Unknown',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    art: '✿',
    stats: {
      HP: 75,
      STRENGTH: 40,
      CREATIVITY: 90,
      LUCK: 60
    }
  },

  {
    name: 'CHARACTER II',
    type: 'Unknown',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.',
    art: '✧',
    stats: {
      HP: 50,
      STRENGTH: 85,
      CREATIVITY: 65,
      LUCK: 30
    }
  }
];

let currentOC = 0;


/* ==========================
   DISPLAY CHARACTER
========================== */

function loadOC() {

  const character = characters[currentOC];

  document.getElementById('ocNumber').textContent =
    `CHARACTER 0${currentOC + 1} / 02`;

  document.getElementById('characterCounter').textContent =
    `0${currentOC + 1} — 02`;

  document.getElementById('ocName').textContent =
    character.name;

  document.getElementById('ocType').textContent =
    character.type;

  document.getElementById('ocDescription').textContent =
    character.description;

  document.getElementById('ocArt').textContent =
    character.art;

  const statList = document.getElementById('statList');

  statList.innerHTML = '';

  Object.entries(character.stats).forEach(([name, value]) => {

    const stat = document.createElement('div');

    stat.className = 'stat';

    stat.innerHTML = `
      <div class="stat-label">
        <span>${name}</span>
        <span class="stat-value">${value}%</span>
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value="${value}"
      >
    `;

    const slider = stat.querySelector('input');
    const valueDisplay = stat.querySelector('.stat-value');

    slider.addEventListener('input', () => {
      character.stats[name] = Number(slider.value);
      valueDisplay.textContent = slider.value + '%';
    });

    statList.appendChild(stat);

  });

}


/* ==========================
   SWITCH CHARACTERS
========================== */

function changeOC(direction) {

  currentOC =
    (currentOC + direction + characters.length)
    % characters.length;

  loadOC();

}

document.getElementById('previousOC')
  .addEventListener('click', () => {
    changeOC(-1);
  });

document.getElementById('nextOC')
  .addEventListener('click', () => {
    changeOC(1);
  });


/* ==========================
   INITIALIZE WEBSITE
========================== */

loadOC();
