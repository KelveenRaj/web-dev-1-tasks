const btn = document.getElementById("btn-1");
const box = document.getElementById("box");
const pokemonContainer = document.getElementById("pokemon")

const generateColour = () => {
  const colours = ["red", "green", "blue"];
  const randomIndex = Math.floor(Math.random() * colours.length);
  btn.style.backgroundColor = colours[randomIndex];
};

const growBox = () => {
  box.style.width = "300px";
  box.style.height = "300px";
  box.style.backgroundColor = "lightgreen";
};

const shrinkBox = () => {
  box.style.width = "100px";
  box.style.height = "100px";
  box.style.backgroundColor = "red";
};

btn.addEventListener("click", generateColour);

box.addEventListener("mouseover", growBox);
box.addEventListener("mouseout", shrinkBox);
box.addEventListener("click", generateColour);

// Calling API

const API_URL = "https://pokeapi.co/api/v2/pokemon/"; // this is the endpoint we call

const getPokemonData = async () => {
  const response = await fetch(API_URL); // forcing JS to wait for an ction to be done

  const data = await response.json()// Convert response into object

  const pokemonName = data.results[0].name

  pokemonContainer.textContent = pokemonName


  console.log(data.results[0].name); 
};

getPokemonData()

// fetch method to call api
