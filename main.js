let selectedColor = "red";

const colorSelect = document.getElementById("color-select");

colorSelect.addEventListener("change", (event) => {
  selectedColor = event.target.value;
  console.log("Selected color:", selectedColor);
});

let mouseDown = false;

document.addEventListener("mousedown", () => {
  mouseDown = true;
});
document.addEventListener("mouseup", () => {
  mouseDown = false;
});

const squares = document.querySelectorAll("table td");

squares.forEach(cell => {
  cell.addEventListener("mousedown", () => {
    cell.style.backgroundColor = selectedColor;
}); 
  cell.addEventListener("mouseover", () => {
    if (mouseDown){
      cell.style.backgroundColor = selectedColor;
    }
}); 
});