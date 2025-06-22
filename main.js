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







