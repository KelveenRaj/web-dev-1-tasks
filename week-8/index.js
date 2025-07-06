const searchButton = document.getElementById("search");
const randomButton = document.getElementById("random");
const pokemonNameInput = document.getElementById("pokemonName");
const pokemonContainer = document.getElementById("pokemonDetails");

const API_URL = "https://pokeapi.co/api/v2/pokemon/";

const displayPokemonData = (pokemonData) => {
  pokemonContainer.innerHTML = "";

  const pokemonName = pokemonData.name;
  const pokemonImg = pokemonData.sprites.front_default; // normal
  const pokemonShinyImg = pokemonData.sprites.front_shiny; // shiny
  const pokemonWeight = pokemonData.weight;
  const pokemonHeight = pokemonData.height;
  const pokemonType = pokemonData.types[0].type.name;

  let pokemonImgUrl = pokemonImg;

  const toggleShiny = () => {
    if (pokemonImgUrl === pokemonImg) {
      pokemonImgUrl = pokemonShinyImg;
    } else {
      pokemonImgUrl = pokemonImg;
    }
  };

  const pokemonHTML = ` 
    <h1>${pokemonName}</h1>
    <img src="${pokemonImgUrl}"  alt="pokemon-img" class="pokemon-image" />
    <button onclick="${toggleShiny()}">Shiny</button>
    <p>Weight: ${pokemonWeight / 10}kg </p>
    <p>Height: ${pokemonHeight / 10}m </p>
    <p>Type: ${pokemonType} </p>

  `;

  pokemonContainer.innerHTML = pokemonHTML;
};

const getPokemonData = async (name) => {
  try {
    const response = await fetch(API_URL + name);
    const data = await response.json();

    if (data) displayPokemonData(data);
  } catch (error) {
    console.log(errpr);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  getPokemonData("vulpix");
});

searchButton.addEventListener("click", () => {
  if (pokemonNameInput.value.trim()) {
    getPokemonData(pokemonNameInput.value);
    pokemonNameInput.value = "";
  } else {
    alert("Please enter pokemon name");
  }
});
