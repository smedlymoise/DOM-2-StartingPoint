

const root = document.getElementById("root");
root.addEventListener("click", (event) => {
  console.log(event.target.tagName);
  console.log(event.target);
});

const addColumnButton = document.getElementById('add-column');
const table = document.querySelector('table');
const tbody = table.querySelector('tbody');


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
    row.appendChild(cell);
  });
});


