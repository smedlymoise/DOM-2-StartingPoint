// Please feel free to change the JS as you see fit! This is just a starting point.

const root = document.getElementById("root");
root.addEventListener("click", (event) => {
  console.log(event.target.tagName);
  console.log(event.target);
});

const addColumnButton = document.getElementById('add-column');
const fillGridButton = document.getElementById("fill-grid");
const addRowButton = document.getElementById('add-row');
const  table = document.querySelector('table');
const tbody = table.querySelector('tbody');
const controlsDiv = document.querySelector("#root > div");
const fillUncoloredButton = document.createElement("button");
const removeColmnButton = document.getElementById('remove-column');
const removeRowButton = document.getElementById('remove-row');
const colorSelect = document.getElementById("color-select");

const newColors = ["green", "yellow", "purple", "indigo", "orange", "brown"];



// add row
addRowButton.addEventListener('click' , () => {
  const newRow = document.createElement('tr');
  const columnCount = table.rows[0]?.cells.length || 0;
  for(let i = 0; i < columnCount; i++){
    const cell = document.createElement('td')
    attachColorListeners(cell);
    newRow.appendChild(cell);
  }
  tbody.appendChild(newRow);
})

//add column

addColumnButton.addEventListener('click', () => {
  const thead = table.querySelector('thead');
  if (thead) {
    const headerRow = thead.rows[0];
    const th = document.createElement('th');
    th.textContent = `Column ${headerRow.cells.length + 1}`;
    headerRow.appendChild(th);
  }

  Array.from(tbody.rows).forEach(row => {
    const cell = document.createElement('td');
    cell.textContent = '';
    attachColorListeners(cell);

    row.appendChild(cell);
  });
}); 


// remove row
removeRowButton.addEventListener('click', () => {
  const rowCount = tbody.rows.length;
  if (rowCount > 0) {
    tbody.deleteRow(rowCount - 1);
  }
});

// Remove columns (solution)
removeColmnButton.addEventListener('click' , () => {
  const columnCount = tbody.rows[0].cells.length;
 const allRows = table.querySelectorAll('tr');
 allRows.forEach(row => {
    if (row.cells.length >= columnCount) {
      row.deleteCell(columnCount - 1);
    }
  })
});

// Select a color from a dropdown menu of colors
newColors.forEach((color) => {
  const option = document.createElement("option");
  option.value = color;
  option.textContent = color.charAt(0).toUpperCase() + color.slice(1);
  colorSelect.appendChild(option);
});

// Click Single Cell Change Color
let selectedColor = "red";
colorSelect.addEventListener("change", (event) => {
  selectedColor = event.target.value;
  console.log("Selected color:", selectedColor);
});

root.addEventListener("click", (event) => {
  if (event.target.tagName === "TD") {
    event.target.style.backgroundColor = selectedColor;
  }
});

//  Fill all uncolored cells with selected color (Issue #7)

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

  // Fill All Cells (Issue 8)
fillGridButton.addEventListener("click", () => {
  const selectedColor = document.getElementById("color-select").value;
  const cells = document.querySelectorAll("td");

  cells.forEach(cell => {
    cell.style.backgroundColor = selectedColor;
  });
});

// Clear All Cells (Issue 9)
const clearGridButton = document.getElementById("clear-grid");
clearGridButton.addEventListener("click", () => {
    const squares = document.querySelectorAll("table td");
    squares.forEach(cell =>{
        cell.style.backgroundColor = "";
    });
});

//Click and drag to color multiple cell
let mouseDown = false;

document.addEventListener("mousedown", () => {
  mouseDown = true;
});

document.addEventListener("mouseup", () => {
  mouseDown = false;
});

function attachColorListeners(cell) {
  cell.addEventListener("mousedown", () => {
    cell.style.backgroundColor = selectedColor;
  });

  cell.addEventListener("mouseover", () => {
    if (mouseDown) {
      cell.style.backgroundColor = selectedColor;
    }
  });
}
document.querySelectorAll("td").forEach(attachColorListeners);
