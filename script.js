function createGrid(size){
    let tag,
    text,
    element, col;

    for(let i = 0 ; i<size;i++){
        col=document.createElement("div");
        col.classList.add("col");
        element= document.getElementById("container");
        element.appendChild(col);
        for(let j = 0 ; j<size;j++){
            tag= document.createElement("div");
            col=document.getElementsByClassName("col")[i];
            col.appendChild(tag);
        }
        
    }
}

createGrid(80);
