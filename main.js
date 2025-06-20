// Please feel free to change the JS as you see fit! This is just a starting point.

const root = document.getElementById("root");
root.addEventListener("click", (event) => {
  console.log(event.target.tagName);
  console.log(event.target);
});

let selectedColor = "red";

const colorSelect = document.getElementById("color-select");

colorSelect.addEventListener("change", (event) => {
  selectedColor = event.target.value;
  console.log("Selected color:", selectedColor);
});

root.addEventListener("click", (event) => {
  if (event.target.tagName === "TD") {
    event.target.style.backgroundColor = selectedColor;
  }
});