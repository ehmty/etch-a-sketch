let gridArea = document.querySelector("div");
const body = document.querySelector("body");

function createGrid(x) {
    let gridArea = document.querySelector("div");
    if (!gridArea) {
        gridArea = document.createElement("div");
        gridArea.classList.add("grid");
        body.appendChild(gridArea);
    }

    for (let i = 0; i < x*x; i++) {

        gridArea.classList.add("grid");

        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = 100 / x + "%";
        square.style.height = 100 / x + "%";

        gridArea.appendChild(square);

        square.addEventListener("mouseenter", () => square.style.backgroundColor = "black");
    }

    let btn = document.querySelector("button");
    if (!btn) {
        btn = document.createElement("button");
        btn.textContent = "new Grid";
        btn.classList.add("btn");
        body.insertBefore(btn, gridArea);
    }
    

    btn.addEventListener("click", () => {
        body.removeChild(gridArea);
        const input = prompt("Please enter a number for the grid x*x");
        createGrid(input);
    })
    

}


createGrid(64);
