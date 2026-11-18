<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Lorem Ipsum — Character Archive</title>

<style>
:root {
  --mint: #73d7b8;
  --aqua: #9ff6d8;
  --lime: #bee960;
  --cream: #edffc5;
  --blue: #87aece;
  --navy: #1d2a62;
  --green: #437118;
  --beige: #f5f3d8;
  --brown: #536b43;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: var(--beige);
  color: var(--navy);
  font-family: "Trebuchet MS", sans-serif;
  padding: 30px 15px;
}

button, a {
  font: inherit;
  cursor: pointer;
}

button {
  border: none;
}

.site {
  max-width: 1100px;
  margin: auto;
  border: 5px solid var(--green);
  border-radius: 22px;
  overflow: hidden;
  background: white;
  box-shadow: 0 8px 0 #c5d69b;
}

header {
  background: var(--navy);
  color: white;
  padding: 16px 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  flex-wrap: wrap;
}

.logo {
  font-size: 23px;
  font-weight: 900;
  letter-spacing: 3px;
}

.logo span {
  color: var(--lime);
}

.search-area {
  position: relative;
  display: flex;
  align-items: center;
  background: white;
  border: 3px solid var(--mint);
  border-radius: 30px;
  padding: 9px 16px;
  color: var(--navy);
  min-width: 250px;
  flex: 1;
  max-width: 380px;
}

.search-area input {
  border: none;
  outline: none;
  width: 100%;
  color: var(--navy);
  font-size: 14px;
}

.search-area button {
  background: transparent;
  font-size: 18px;
}

.recent {
  display: none;
  position: absolute;
  top: 48px;
  left: 0;
  width: 100%;
  background: white;
  border: 2px solid var(--mint);
  border-radius: 12px;
  padding: 12px;
  z-index: 10;
  box-shadow: 0 5px 12px #0002;
}

.recent.show {
  display: block;
}

.recent p {
  font-size: 11px;
  color: #77927e;
  margin-bottom: 8px;
}

.recent button {
  background: var(--cream);
  padding: 9px;
  border-radius: 8px;
  width: 100%;
  text-align: left;
}

nav {
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 15px;
  background: var(--lime);
  flex-wrap: wrap;
}

nav button {
  background: white;
  color: var(--green);
  border: 2px solid var(--green);
  border-radius: 20px;
  padding: 10px 25px;
  font-weight: bold;
}

nav button.active,
nav button:hover {
  background: var(--green);
  color: white;
}

.health-strip {
  display: flex;
  gap: 12px;
  padding: 15px;
  background: #e5f7df;
  justify-content: space-around;
  flex-wrap: wrap;
}

.health {
  flex: 1;
  min-width: 130px;
  background: white;
  border: 2px solid var(--green);
  border-radius: 20px;
  padding: 7px 12px;
  font-size: 12px;
  font-weight: bold;
}

.bar {
  height: 10px;
  background: #e4e9d6;
  border-radius: 20px;
  overflow: hidden;
  margin-top: 5px;
}

.fill {
  height: 100%;
  background: var(--mint);
  border-radius: 20px;
}

main {
  padding: 25px;
  min-height: 450px;
}

.page {
  display: none;
}

.page.active {
  display: block;
}

h1 {
  font-size: 30px;
  color: var(--green);
  margin-bottom: 8px;
}

h2 {
  color: var(--navy);
  margin-bottom: 12px;
}

.highlight {
  background: var(--lime);
  padding: 2px 7px;
  border-radius: 5px;
}

.subtitle {
  color: #78947e;
  margin-bottom: 22px;
  font-size: 13px;
}

.card {
  background: #f6fff0;
  border: 2px solid #b6d78a;
  border-radius: 17px;
  padding: 18px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
}

footer {
  background: var(--green);
  color: white;
  text-align: center;
  padding: 18px;
  font-size: 12px;
}

@media(max-width:650px) {
  .grid {
    grid-template-columns: 1fr;
  }
  main {
    padding: 16px;
  }
  .logo {
    font-size: 18px;
  }
}
</style>
</head>
<body><div class="site">

<header>
  <div class="logo">LOREM <span>IPSUM ✦</span></div>

  <div class="search-area">
    <input id="searchInput" placeholder="Search the archive...">
    <button onclick="toggleSearch()">⌕</button>

    <div class="recent" id="recentSearch">
      <p>RECENT SEARCH</p>
      <button onclick="runEasterEgg()">does aj have a cat</button>
    </div>
  </div>

  <div>LV. 01 ✦</div>
</header>

<nav>
  <button class="active" onclick="showPage('home',this)">⌂ HOME</button>
  <button onclick="showPage('socials',this)">♡ SOCIALS</button>
  <button onclick="showPage('ocs',this)">✧ CHARACTERS</button>
</nav>

<div class="health-strip">
  <div class="health">
    ♡ HP
    <div class="bar"><div class="fill" style="width:85%"></div></div>
  </div>
  <div class="health">
    ✧ MP
    <div class="bar"><div class="fill" style="width:65%;background:var(--blue)"></div></div>
  </div>
  <div class="health">
    ★ EXP
    <div class="bar"><div class="fill" style="width:40%;background:var(--lime)"></div></div>
  </div>
</div>

<main>

<!-- HOME PAGE -->

<section class="page active" id="home">
  <h1><span class="highlight">PLAYER PROFILE</span></h1>
  <p class="subtitle">Welcome to the archive. Vestibulum ante ipsum primis.</p>

  <div class="grid">
    <div class="card">
      <h2>◈ ABOUT ME</h2>
      <div style="background:var(--aqua);padding:30px;text-align:center;border-radius:12px;margin-bottom:15px;">
        <div style="font-size:55px;">✿</div>
        <b>PLAYER NAME</b>
        <p style="font-size:12px;">Class: Unknown</p>
      </div>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <br>
      <p><b>STATUS:</b> Online</p>
      <p><b>LEVEL:</b> 01</p>
      <p><b>LOCATION:</b> Unknown</p>
    </div>

    <div class="card">
      <h2>✧ QUICK ACCESS</h2>
      <p class="subtitle">Select a destination.</p>
      <button onclick="showPage('socials',document.querySelectorAll('nav button')[1])" style="background:var(--lime);padding:13px;width:100%;border-radius:12px;margin-bottom:10px;">♡ SOCIAL LINKS</button>
      <button onclick="showPage('ocs',document.querySelectorAll('nav button')[2])" style="background:var(--aqua);padding:13px;width:100%;border-radius:12px;margin-bottom:10px;">✧ CHARACTER ARCHIVE</button>
      <div style="background:var(--navy);color:white;padding:20px;border-radius:12px;margin-top:15px;">
        <b>NOTICE BOARD</b>
        <p style="font-size:12px;margin-top:8px;">Nulla facilisi. Praesent commodo cursus magna.</p>
      </div>
    </div>
  </div>
</section>

<!-- SOCIALS PAGE -->

<section class="page" id="socials">
  <h1><span class="highlight">SOCIAL DATABASE</span></h1>
  <p class="subtitle">Find the player across different platforms.</p>

  <div class="grid">
    <div class="card">
      <h2>♡ FIND ME</h2>
      <p style="margin-bottom:15px;">Connect through the following platforms.</p>
      <a href="#" style="display:block;background:var(--aqua);padding:13px;border-radius:10px;margin-bottom:10px;color:var(--navy);text-decoration:none;">✦ Instagram — @username</a>
      <a href="#" style="display:block;background:var(--lime);padding:13px;border-radius:10px;margin-bottom:10px;color:var(--navy);text-decoration:none;">✦ Tumblr — @username</a>
      <a href="#" style="display:block;background:#dceaff;padding:13px;border-radius:10px;color:var(--navy);text-decoration:none;">✦ Discord — username</a>
    </div>

    <div class="card">
      <h2>★ LIKES & DISLIKES</h2>
      <h3>LIKES</h3>
      <p>✿ Lorem ipsum</p>
      <p>✿ Dolor sit amet</p>
      <p>✿ Consectetur</p>
      <br>
      <h3>DISLIKES</h3>
      <p>✕ Tempor incididunt</p>
      <p>✕ Adipiscing elit</p>
      <p>✕ Nunc nonummy</p>
    </div>
  </div>
</section>

<!-- OC PAGE -->

<section class="page" id="ocs">
  <h1><span class="highlight">CHARACTER ARCHIVE</span></h1>
  <p class="subtitle">Two registered characters. Select a profile to explore.</p>

  <div class="card">
    <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;">
      <h2 id="ocNumber">CHARACTER I / II</h2>
      <div>
        <button onclick="changeOC(-1)" style="background:var(--lime);padding:10px 17px;border-radius:10px;">❮</button>
        <button onclick="changeOC(1)" style="background:var(--lime);padding:10px 17px;border-radius:10px;">❯</button>
      </div>
    </div>

    <div class="grid" style="margin-top:15px;">
      <div style="background:var(--aqua);border-radius:15px;min-height:270px;display:flex;align-items:center;justify-content:center;flex-direction:column;">
        <div id="ocArt" style="font-size:85px;">✿</div>
        <p>CHARACTER ART</p>
        <small>Image placeholder</small>
      </div>

      <div>
        <h1 id="ocName">CHARACTER I</h1>
        <p id="ocDescription" style="margin-bottom:20px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <p><b>TYPE:</b> <span id="ocType">Unknown</span></p>
        <p><b>STATUS:</b> Active</p>
        <p><b>LEVEL:</b> 01</p>

        <br>
        <h3>CHARACTER STATS</h3>

        <div id="statList"></div>
      </div>
    </div>
  </div>
</section>

</main>

<footer>
  ✧ LOREM IPSUM CHARACTER ARCHIVE ✧
  <br><br>
  Nulla facilisi — 2026
</footer>

</div><script>

// PAGE NAVIGATION

function showPage(page,button) {
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
  });

  document.getElementById(page).classList.add('active');

  document.querySelectorAll('nav button').forEach(b => {
    b.classList.remove('active');
  });

  if(button) button.classList.add('active');
}

// SEARCH EASTER EGG

const searchInput = document.getElementById('searchInput');
const recentSearch = document.getElementById('recentSearch');

function toggleSearch() {
  recentSearch.classList.toggle('show');
}

searchInput.addEventListener('focus', () => {
  recentSearch.classList.add('show');
});

function runEasterEgg() {
  searchInput.value = 'does aj have a cat';
  recentSearch.classList.remove('show');
}

document.addEventListener('click', (event) => {
  if(!event.target.closest('.search-area')) {
    recentSearch.classList.remove('show');
  }
});

// CHARACTER DATA

const characters = [
  {
    name: 'CHARACTER I',
    type: 'Unknown',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    art: '✿',
    stats: [75, 40, 90, 60]
  },
  {
    name: 'CHARACTER II',
    type: 'Unknown',
    description: 'Vestibulum ante ipsum primis in faucibus orci luctus.',
    art: '✧',
    stats: [50, 85, 65, 30]
  }
];

let currentOC = 0;

function loadOC() {
  const oc = characters[currentOC];

  document.getElementById('ocNumber').textContent =
    `CHARACTER ${currentOC + 1} / 2`;

  document.getElementById('ocName').textContent = oc.name;
  document.getElementById('ocType').textContent = oc.type;
  document.getElementById('ocDescription').textContent = oc.description;
  document.getElementById('ocArt').textContent = oc.art;

  const labels = ['HP', 'STRENGTH', 'CREATIVITY', 'LUCK'];

  document.getElementById('statList').innerHTML =
    labels.map((label,i) => `
      <div style="margin:12px 0;">
        <label><b>${label}</b></label>
        <input
          type="range"
          min="0"
          max="100"
          value="${oc.stats[i]}"
          oninput="characters[currentOC].stats[${i}]=Number(this.value);this.nextElementSibling.textContent=this.value+'%'"
          style="width:100%;accent-color:#73d7b8;"
        >
        <small>${oc.stats[i]}%</small>
      </div>
    `).join('');
}

function changeOC(direction) {
  currentOC += direction;

  if(currentOC < 0) currentOC = 1;
  if(currentOC > 1) currentOC = 0;

  loadOC();
}

loadOC();

</script>

</body>
</html>