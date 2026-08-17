const gridArea = document.querySelector("div");
const body = document.querySelector("body");

function createGrid(x) {
    for (let i = 0; i < x*x; i++) {

        gridArea.classList.add("grid")

        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = 100 / x + "%";
        square.style.height = 100 / x + "%";

        gridArea.appendChild(square);

        square.addEventListener("mouseenter", () => square.style.backgroundColor = "black");
    }
}

function createButton () {
    const btn = document.createElement("button");
    btn.textContent = "new Grid";
    btn.classList.add("btn");
    body.insertBefore(btn, gridArea);
}

createGrid(64);
createButton();