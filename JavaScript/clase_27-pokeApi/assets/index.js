import { fetchPokemons } from "./request.js";

const pokemonsContainer = document.querySelector("#caja");
const loader = document.querySelector(".pokeballs-container");
// fetchPokemons("https://pokeapi.co/api/v2/pokemon?offset=0&limit=8");

const appState = {
  currentUrl: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=8",
  isLoading: false,
};

const pokemonTemplate = (pokemon) => {
  return {
    id: pokemon.id,
    name: pokemon.name.toUpperCase(),
    image: pokemon.sprites.other.home.front_default,
    height: pokemon.height / 10,
    weight: pokemon.weight / 10,
    types: pokemon.types,
    experience: pokemon.base_experience,
  };
};

const createTypeCards = (types) => {
  return types
    .map((tipo) => {
      return `<div class="poke__type ${tipo.type.name} ">${tipo.type.name}</div>`;
    })
    .join("");
};

const createTemplate = (pokemon) => {
  const { image, name, id, height, weight, types, experience } =
    pokemonTemplate(pokemon);
  return `
        <div class="poke">
          <img
            src="${image}"
          />
          <h2>${name}</h2>
          <span class="exp">EXP: ${experience}</span>
          ${createTypeCards(types)}
          
          <p class="id-poke">#${id}</p>
          <p class="height">Height: ${height}m</p>
          <p class="weight">Weight: ${weight}Kg</p>
        </div>
    `;
};

const renderPokemonList = (pokemonsList) => {
  pokemonsContainer.innerHTML += pokemonsList
    .map((pokemon) => createTemplate(pokemon))
    .join("");
};

const getPokemonsData = async () => {
  const { next, results } = await fetchPokemons(appState.currentUrl);
  appState.currentUrl = next;

  const pokemonsDataUrls = results.map((pokemon) => pokemon.url);
  const pokemonsData = await Promise.all(
    pokemonsDataUrls.map(async (url) => {
      const res = await fetch(url);
      return await res.json();
    })
  );
  return pokemonsData;
};

const loadAndRenderPokemons = async (renderingFunction) => {
  const pokemonsData = await getPokemonsData();
  renderingFunction(pokemonsData);
};

const isEndOfPage = () => {
  const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

  const isBottom = scrollTop + clientHeight >= scrollHeight - 5;
  return isBottom;
};

const renderOnScroll = (pokemonList) => {
  loader.classList.toggle("show");
  setTimeout(() => {
    // loader.classList.toggle('show')
    renderPokemonList(pokemonList);
    appState.isLoading = false;
  }, 1500);
};

const loadNextPokemons = async () => {
  if (!appState.isLoading && isEndOfPage()) {
    appState.isLoading = true;
    loadAndRenderPokemons(renderOnScroll);
  }
};

const init = () => {
  window.addEventListener(
    "DOMContentLoaded",
    async () => await loadAndRenderPokemons(renderPokemonList)
  );

  window.addEventListener("scroll", async () => await loadNextPokemons());
};
init();
