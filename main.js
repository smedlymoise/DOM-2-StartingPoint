// Please feel free to change the JS as you see fit! This is just a starting point.

const root = document.getElementById("root");
root.addEventListener("click", (event) => {
  console.log(event.target.tagName);
  console.log(event.target);
});

const colorSelect = document.getElementById("color-select");

const newColors = ["green", "yellow", "purple", "indigo", "orange", "brown"];

newColors.forEach((color) => {
  const option = document.createElement("option");
  option.value = color;
  option.textContent = color.charAt(0).toUpperCase() + color.slice(1);
  colorSelect.appendChild(option);
});
