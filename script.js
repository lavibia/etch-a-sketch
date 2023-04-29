function color(cell) {
    cell.classList.add("color");
}

function createGrid(size) {
    let tag,
        text,
        element, col;

    for (let i = 0; i < size; i++) {
        col = document.createElement("div");
        col.classList.add("col");
        element = document.getElementById("container");
        element.appendChild(col);
        for (let j = 0; j < size; j++) {
            tag = document.createElement("div");
            tag.classList.add("cell");

            col = document.getElementsByClassName("col")[i];
            col.appendChild(tag);
            tag.setAttribute("onmouseover", "color(this)");

        }

    }
}

function removeGrid() {
    let container = document.getElementById("container");
    let cols = container.children;
    for (let i in cols) {
        while (cols[i].firstChild) {
            cols[i].removeChild(cols[i].lastChild);
        }
    }
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

}

function changeGrid() {
    let size = prompt("Enter a number less than 100");
    if ( size<=100) {
        removeGrid();
        createGrid(size);
    }
    else{
        changeGrid();
    }
}

createGrid(16);
document.getElementById("btnSize").addEventListener("click", changeGrid);