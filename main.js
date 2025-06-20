// Please feel free to change the JS as you see fit! This is just a starting point.

const root = document.getElementById("root");
root.addEventListener("click", (event) => {
  console.log(event.target.tagName);
  console.log(event.target);
});



//  Fill all uncolored cells with selected color (Issue #7)
const controlsDiv = document.querySelector("#root > div");

const fillUncoloredButton = document.createElement("button");
fillUncoloredButton.id = "fill-uncolored";
fillUncoloredButton.textContent = "Fill Uncolored";

controlsDiv.appendChild(fillUncoloredButton);

fillUncoloredButton.addEventListener("click", () => {
  const selectedColor = document.getElementById("color-select").value;
  const cells = document.querySelectorAll("td");

  cells.forEach(cell => {
    const bg = cell.style.backgroundColor;
    if (!bg || bg === "transparent" || bg === "") {
      cell.style.backgroundColor = selectedColor;
    }
  });
});
