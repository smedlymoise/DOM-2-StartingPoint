const clearGridButton = document.getElementById("clear-grid");
clearGridButton.addEventListener("click", () => {
    const squares = document.querySelectorAll("table td");
    squares.forEach(cell =>{
        cell.computedStyleMap.backgroundColor = "";
    });
});