//FETCH

// fetch("https://pokeapi.co/api/v2/pokemon/eevee")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//ASYC/AWAIT

// const getPikachu = async () => {
//   const response = await fetch("https://pokeapi.co/api/v2/pokemon/62451554");
//   const data = await response.json();
//   console.log(data);
//   console.log(`${data.name} es de tipo ${data.types[0].type.name}`);
// };

// getPikachu();

const getPikachu = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur");
    const data = await response.json();
    // console.log(data);
    // console.log(`${data.name} es de tipo ${data.types[0].type.name}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// getPikachu();

const contenedor = document.querySelector(".contenedor");

const templatePokemon = (pokemon) => {
  const { name, sprites, types } = pokemon;
  const pokemonHTML = `
    <div class="card">
      <img src="${sprites.front_default}" alt="${name}">
      <h2>${name}</h2>
      <p>${types[0].type.name}</p>
    </div>
  `;
  contenedor.innerHTML = pokemonHTML;
};

//funcion renderizadora
const renderPokemon = async () => {
  try {
    const pokemon = await getPikachu();
    templatePokemon(pokemon);
  } catch (error) {
    console.log(error);
  }
};

renderPokemon();
