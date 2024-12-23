const API_URL = "https://rickandmortyapi.com/api/character";

const charactersContainer = document.getElementById("characters");
const loadingElement = document.getElementById("loading");
const modal = document.getElementById("modal");
const modalDetails = document.getElementById("modal-details");
const closeModal = document.getElementById("closeModal");
const nextBtn = document.querySelector("#nextBtn");

const appState = {
  nextUrl: API_URL,
};
//peticion con then y catch
// fetch(API_URL)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => (loadingElement.innerHTML = error));

//-----------Async/Await

async function fetchCharacter() {
  try {
    // ...codigo
    loadingElement.style.display = "block";
    charactersContainer.innerHTML = "";
    const response = await fetch(appState.nextUrl);
    const data = await response.json();
    appState.nextUrl = data.info.next;
    setTimeout(() => {
      loadingElement.style.display = "none";
      displayCharacters(data.results);
    }, 1500);
  } catch (error) {
    console.error(error);
    loadingElement.style.display = "none";
    charactersContainer.innerHTML =
      "<p>Error cargando los personajes, intenta mas tarde</p>";
  }
}

function displayCharacters(characters) {
  charactersContainer.innerHTML = "";
  characters.forEach((character) => {
    const characterCard = document.createElement("div");
    characterCard.className = "character-card";

    characterCard.innerHTML = `
     <img src="${character.image}" alt="${character.name}" />
     <h3>${character.name}</h3>
     <p>Status: ${character.status}</p>
     <p>Species: ${character.species}</p>
    `;

    characterCard.addEventListener("click", () => {
      openModal(character);
    });

    charactersContainer.appendChild(characterCard);
  });
}

const openModal = (character) => {
  const { image, name, status, species, gender, origin, location } = character;
  modalDetails.innerHTML = `
   <img src="${image}" alt="${name}" />
   <h2>${name}</h2>
   <p><strong>Status:</strong> ${status}</p>
   <p><strong>Species:</strong> ${species}</p>
   <p><strong>Gender:</strong> ${gender}</p>
   <p><strong>Origin:</strong> ${origin.name}</p>
   <p><strong>Location:</strong> ${location.name}</p>
  `;
  modal.style.display = "block";
};

const init = () => {
  fetchCharacter();
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
  nextBtn.addEventListener("click", () => {
    fetchCharacter();
  });
};
init();
