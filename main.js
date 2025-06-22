// Please feel free to change the JS as you see fit! This is just a starting point.

const root = document.getElementById("root");
root.addEventListener("click", (event) => {
  console.log(event.target.tagName);
  console.log(event.target);
});

const  table = document.querySelector('table');
const tbody = table.querySelector('tbody');
const addRowButton = document.getElementById('add-row');
const removeRowButton = document.getElementById('remove-row');
const thead = table.querySelector('thead');
const removeColmnButton = document.getElementById('remove-column');




// add row
addRowButton.addEventListener('click' , () => {
  const newRow = document.createElement('tr');
  const columnCount = table.rows[0]?.cells.length || 0;
  for(let i = 0; i < columnCount; i++){
    const cell = document.createElement('td')
    newRow.appendChild(cell);
  }
  tbody.appendChild(newRow);
});



// Remove Row (solution)
removeRowButton.addEventListener("click", () => {
  const rows = tbody.rows;
  if (rows.length > 0) {
    tbody.deleteRow(rows - 1);
  }
});


// add columns
const addColumnButton = document.getElementById('add-column');
addColumnButton.addEventListener('click', () => {
  const thead = table.querySelector('thead');
  if (thead) {
    const headerRow = thead.rows[0];
    const th = document.createElement('th');
    th.textContent = `Column ${headerRow.cells.length + 1}`;
    headerRow.appendChild(th);
  }
  Array.from(tbody.rows).forEach(row => {
    const cell = document.createElement('th');
    cell.textContent = '';
    row.appendChild(cell);
  });
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
