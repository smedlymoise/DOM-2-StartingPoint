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



// Remove Row (solution)
removeRowButton.addEventListener("click", () => {
  const rows = tbody.rows;
  if (rows.length > 0) {
    tbody.deleteRow(rows - 1);
  }
});







