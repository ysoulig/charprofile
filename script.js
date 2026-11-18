
// PAGE NAVIGATION

const pages = document.querySelectorAll(".page");
const navButtons = document.querySelectorAll(".nav-button");

function showPage(pageName) {
  pages.forEach(page => {
    page.classList.toggle("active", page.id === pageName);
  });

  navButtons.forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.page === pageName
    );
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

navButtons.forEach(button => {
  button.addEventListener("click", () => {
    showPage(button.dataset.page);
  });
});

document.querySelectorAll("[data-go]").forEach(button => {
  button.addEventListener("click", () => {
    showPage(button.dataset.go);
  });
});


// SEARCH EASTER EGG

const searchBox = document.getElementById("searchBox");
const searchInput = document.getElementById("searchInput");
const recentSearch = document.getElementById("recentSearch");
const recentItem = document.getElementById("recentItem");

searchBox.addEventListener("click", () => {
  recentSearch.classList.toggle("show");
});

recentItem.addEventListener("click", (event) => {
  event.stopPropagation();

  searchInput.value = "does aj have a cat?";
  recentSearch.classList.remove("show");
});

document.addEventListener("click", (event) => {
  if (!searchBox.contains(event.target) &&
      !recentSearch.contains(event.target)) {
    recentSearch.classList.remove("show");
  }
});


// CHARACTER INFORMATION
// Replace these placeholders with your own OC details.

const characters = [
  {
    number: "NO. 001",
    name: "Character One",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    realName: "Lorem",
    age: "00",
    pronouns: "Lorem / Ipsum",
    species: "Lorem",
    art: "OC 001 ARTWORK",
    stats: {
      strength: 70,
      creativity: 90,
      energy: 55,
      luck: 80
    }
  },
  {
    number: "NO. 002",
    name: "Character Two",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    realName: "Ipsum",
    age: "00",
    pronouns: "Ipsum / Lorem",
    species: "Lorem",
    art: "OC 002 ARTWORK",
    stats: {
      strength: 45,
      creativity: 75,
      energy: 90,
      luck: 60
    }
  }
];

let currentCharacter = 0;


// DISPLAY CHARACTER PROFILE

function displayCharacter(index) {
  currentCharacter = (index + characters.length) % characters.length;

  const character = characters[currentCharacter];

  document.getElementById("profileNumber").textContent = character.number;
  document.getElementById("profileName").textContent = character.name;
  document.getElementById("profileDescription").textContent = character.description;
  document.getElementById("profileNameInfo").textContent = character.realName;
  document.getElementById("profileAge").textContent = character.age;
  document.getElementById("profilePronouns").textContent = character.pronouns;
  document.getElementById("profileSpecies").textContent = character.species;
  document.getElementById("profileArt").textContent = character.art;

  document.getElementById("statStrength").style.width =
    character.stats.strength + "%";

  document.getElementById("statCreativity").style.width =
    character.stats.creativity + "%";

  document.getElementById("statEnergy").style.width =
    character.stats.energy + "%";

  document.getElementById("statLuck").style.width =
    character.stats.luck + "%";

  showPage("profile");
}


// OPEN CHARACTER PROFILES

document.querySelectorAll("[data-profile]").forEach(button => {
  button.addEventListener("click", () => {
    displayCharacter(Number(button.dataset.profile));
  });
});


// SWITCH BETWEEN CHARACTERS

document.getElementById("nextCharacter").addEventListener("click", () => {
  displayCharacter(currentCharacter + 1);
});

document.getElementById("previousCharacter").addEventListener("click", () => {
  displayCharacter(currentCharacter - 1);
});


// INITIAL PROFILE DATA

displayCharacter(0);
showPage("home");
