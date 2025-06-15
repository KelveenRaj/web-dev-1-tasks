const btn = document.getElementById("btn-1");
const box = document.getElementById("box");

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

