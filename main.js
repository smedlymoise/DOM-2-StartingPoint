// Please feel free to change the JS as you see fit! This is just a starting point.

const root = document.getElementById("root");
root.addEventListener("click", (event) => {
  console.log(event.target.tagName);
  console.log(event.target);
});



// Fill All Cells (Issue 8)
const fillGridButton = document.getElementById("fill-grid");

fillGridButton.addEventListener("click", () => {
  const cells = document.querySelectorAll("td");
  cells.forEach(cell => {
    cell.style.backgroundColor = selectedColor;
  });
});
