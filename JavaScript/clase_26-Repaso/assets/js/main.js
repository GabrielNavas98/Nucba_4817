import { requestGame, requestDetail } from "./request.js";

const gamesContainer = document.querySelector(".cards-container");
const loading = document.querySelector(".loading-container");

const crearTemplateGame = (game) => {
  const { name, rating, background_image } = game;

  return `
    <div class="game-card" >
      <img
        src="${background_image}"
        alt="${name}"
        class="game-image"
      />
      <div class="game-info">
        <h3 class="game-title">${name}</h3>
        <p class="game-rating">⭐ Rating: ${rating}</p>
      </div>
    </div> 
  `;
};

const renderGames = (games) => {
  gamesContainer.innerHTML = games
    .map((game) => crearTemplateGame(game))
    .join("");
};

const renderDetail = async () => {
  try {
    const detail = await requestDetail(3498);
    alert(detail.description);
  } catch (error) {}
};

const getGames = async () => {
  try {
    loading.style.display = "block";
    const games = await requestGame();
    renderGames(games);
    loading.style.display = "none";
  } catch (error) {
    console.log(error);
  }
};

const init = () => {
  gamesContainer.addEventListener("click", () => renderDetail());
  getGames();
};
init();
