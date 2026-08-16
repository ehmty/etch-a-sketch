function createGrid(x) {
    for (let col = 0; col < x*x; col++) {
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
