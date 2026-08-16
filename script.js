function createGrid(x) {
    for (let i = 0; i < x*x; i++) {
        const gridArea = document.querySelector("div");
        gridArea.classList.add("grid")
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = 100 / x + "%";
        square.style.height = 100 / x + "%";
        gridArea.appendChild(square);
    }
}

    
createGrid(16);
