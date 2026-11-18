/* =========================================================
   CUSTOMIZABLE OC DATABASE
   Edit the array below to add, remove, or customize your OCs!
   - Replace `artUrl` with a link to your own image (e.g., "assets/oc1.png")
     or leave it empty ("") to use the built-in retro placeholder art.
   ========================================================= */
const ocDatabase = [
  {
    id: "ID #001",
    name: "CHARACTER SLOT 01",
    role: "CYBER MAGE",
    level: 24,
    hp: { current: 85, max: 100 },
    mp: { current: 90, max: 100 },
    artUrl: "", // Paste image URL or relative path here
    placeholderColor: "#67b7f7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A customizable short summary describing your first original character.",
    basicInfo: [
      { label: "AGE", value: "19" },
      { label: "PRONOUNS", value: "They / Them" },
      { label: "SPECIES", value: "Android / Human" },
      { label: "AFFILIATION", value: "Sector 04" }
    ],
    traits: ["Curious", "Analytical", "Playful", "Daydreamer"],
    stats: [
      { name: "STRENGTH", value: 45 },
      { name: "AGILITY", value: 75 },
      { name: "MAGIC", value: 92 },
      { name: "LUCK", value: 68 }
    ]
  },
  {
    id: "ID #002",
    name: "CHARACTER SLOT 02",
    role: "FOREST RANGER",
    level: 31,
    hp: { current: 95, max: 100 },
    mp: { current: 55, max: 100 },
    artUrl: "", // Paste image URL or relative path here
    placeholderColor: "#5cd69c",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Swap in your second OC's lore, backstory, or fun facts here.",
    basicInfo: [
      { label: "AGE", value: "21" },
      { label: "PRONOUNS", value: "He / She" },
      { label: "SPECIES", value: "Elf / Custom" },
      { label: "AFFILIATION", value: "Emerald Guild" }
    ],
    traits: ["Loyal", "Resourceful", "Calm", "Observant"],
    stats: [
      { name: "STRENGTH", value: 82 },
      { name: "AGILITY", value: 88 },
      { name: "MAGIC", value: 50 },
      { name: "LUCK", value: 74 }
    ]
  }
];

/* =========================================================
   APP STATE & INITIALIZATION
   ========================================================= */
let currentOcIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  initClock();
  initNavigation();
  initSearchEasterEgg();
  initOcShowcase();
});

/* ---------------------------------------------------------
   1. LIVE RETRO CLOCK IN TOP STATUS BAR
   --------------------------------------------------------- */
function initClock() {
  const clockEl = document.getElementById("clock-display");
  function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const mins = String(now.getMinutes()).padStart(2, "0");
    clockEl.textContent = `${hours}:${mins}`;
  }
  updateClock();
  setInterval(updateClock, 15000);
}

/* ---------------------------------------------------------
   2. NAVIGATION TABS & QUICK JUMP BUTTONS
   --------------------------------------------------------- */
function initNavigation() {
  const navButtons = document.querySelectorAll(".nav-btn");
  const jumpButtons = document.querySelectorAll(".jump-btn");
  const sections = document.querySelectorAll(".tab-section");

  function switchTab(targetName) {
    // Update active nav button
    navButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.target === targetName);
    });

    // Show matching section
    sections.forEach((sec) => {
      sec.classList.toggle("active", sec.id === `section-${targetName}`);
    });
  }

  navButtons.forEach((btn) => {
    btn.addEventListener("click", () => switchTab(btn.dataset.target));
  });

  jumpButtons.forEach((btn) => {
    btn.addEventListener("click", () => switchTab(btn.dataset.target));
  });
}

/* ---------------------------------------------------------
   3. SEARCH BAR & "does aj have a cat" EASTER EGG
   --------------------------------------------------------- */
function initSearchEasterEgg() {
  const searchInput = document.getElementById("retro-search");
  const dropdown = document.getElementById("search-dropdown");
  const eggItem = document.getElementById("easter-egg-item");
  const eggReply = document.getElementById("easter-egg-reply");
  const clearBtn = document.getElementById("search-clear");

  // Open dropdown when clicking or focusing the search bar
  searchInput.addEventListener("focus", () => {
    dropdown.classList.remove("hidden");
  });

  searchInput.addEventListener("click", () => {
    dropdown.classList.remove("hidden");
  });

  // Clicking the recent search entry fills the bar & shows cute system reply
  eggItem.addEventListener("click", () => {
    searchInput.value = "does aj have a cat";
    eggReply.classList.remove("hidden");
  });

  // Clear button resets input and hides reply
  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    eggReply.classList.add("hidden");
    dropdown.classList.add("hidden");
  });

  // Close dropdown when clicking outside the search wrapper
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-wrapper")) {
      dropdown.classList.add("hidden");
    }
  });
}

/* ---------------------------------------------------------
   4. OC SHOWCASE RENDERER & ARROW NAVIGATION
   --------------------------------------------------------- */
function initOcShowcase() {
  const prevBtn = document.getElementById("prev-oc-btn");
  const nextBtn = document.getElementById("next-oc-btn");

  prevBtn.addEventListener("click", () => {
    currentOcIndex = (currentOcIndex - 1 + ocDatabase.length) % ocDatabase.length;
    renderOc(currentOcIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentOcIndex = (currentOcIndex + 1) % ocDatabase.length;
    renderOc(currentOcIndex);
  });

  renderOc(currentOcIndex);
}

function renderOc(index) {
  const oc = ocDatabase[index];
  if (!oc) return;

  // Update Slot Counter & Dots
  const total = ocDatabase.length;
  document.getElementById("slot-counter").textContent =
    `SLOT ${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

  const dotsContainer = document.getElementById("slot-dots");
  dotsContainer.innerHTML = "";
  ocDatabase.forEach((_, idx) => {
    const dot = document.createElement("span");
    dot.className = `slot-dot ${idx === index ? "active" : ""}`;
    dot.title = `View Slot ${idx + 1}`;
    dot.addEventListener("click", () => {
      currentOcIndex = idx;
      renderOc(currentOcIndex);
    });
    dotsContainer.appendChild(dot);
  });

  // Top Frame Metadata
  document.getElementById("oc-code").textContent = oc.id;
  document.getElementById("oc-lvl").textContent = `LVL. ${oc.level}`;

  // Artwork or Built-in Retro Placeholder Avatar
  const artContainer = document.getElementById("oc-art-container");
  if (oc.artUrl && oc.artUrl.trim() !== "") {
    artContainer.innerHTML = `<img src="${oc.artUrl}" alt="${oc.name} artwork" />`;
  } else {
    artContainer.innerHTML = createPlaceholderSvg(oc.placeholderColor, index + 1);
  }

  // HP & MP Bars
  const hpPercent = Math.min(100, Math.max(0, Math.round((oc.hp.current / oc.hp.max) * 100)));
  const mpPercent = Math.min(100, Math.max(0, Math.round((oc.mp.current / oc.mp.max) * 100)));

  document.getElementById("oc-hp-text").textContent = `${oc.hp.current} / ${oc.hp.max}`;
  document.getElementById("oc-hp-fill").style.width = `${hpPercent}%`;

  document.getElementById("oc-mp-text").textContent = `${oc.mp.current} / ${oc.mp.max}`;
  document.getElementById("oc-mp-fill").style.width = `${mpPercent}%`;

  // Name, Role & Description
  document.getElementById("oc-name").textContent = oc.name;
  document.getElementById("oc-role").textContent = oc.role;
  document.getElementById("oc-desc").textContent = oc.description;

  // Basic Info Grid
  const infoGrid = document.getElementById("oc-basic-info");
  infoGrid.innerHTML = oc.basicInfo
    .map(
      (item) => `
      <div class="info-item">
        <strong>${item.label}</strong>
        <span>${item.value}</span>
      </div>
    `
    )
    .join("");

  // Personality Traits
  const traitsWrap = document.getElementById("oc-traits");
  traitsWrap.innerHTML = oc.traits
    .map((trait) => `<span class="trait-chip">${trait}</span>`)
    .join("");

  // Video-Game Stats
  const statsList = document.getElementById("oc-stats");
  statsList.innerHTML = oc.stats
    .map(
      (stat) => `
      <div class="stat-row">
        <span class="stat-name">${stat.name}</span>
        <div class="stat-bar-bg">
          <div class="stat-bar-val" style="width: ${Math.min(100, Math.max(0, stat.value))}%"></div>
        </div>
        <span class="stat-num">${stat.value}</span>
      </div>
    `
    )
    .join("");
}

/* Cute Retro Placeholder Graphic when no custom image URL is set */
function createPlaceholderSvg(accentColor, slotNum) {
  return `
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="180" height="180" rx="22" fill="#ffffff" stroke="#2b4c6b" stroke-width="4" stroke-dasharray="8 6"/>
      <circle cx="100" cy="82" r="34" fill="${accentColor}" opacity="0.28" stroke="#2b4c6b" stroke-width="3"/>
      <circle cx="88" cy="78" r="4" fill="#23384d"/>
      <circle cx="112" cy="78" r="4" fill="#23384d"/>
      <path d="M 92 92 Q 100 100 108 92" stroke="#23384d" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M 56 155 C 56 124, 144 124, 144 155" fill="${accentColor}" opacity="0.45" stroke="#2b4c6b" stroke-width="3"/>
      <text x="100" y="176" text-anchor="middle" font-family="Silkscreen, monospace" font-size="11" fill="#23384d" font-weight="bold">
        ART SLOT 0${slotNum}
      </text>
    </svg>
  `;
}