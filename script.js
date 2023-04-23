function createGrid(size){
    let tag,
    text,
    element;

    for(let i = 0 ; i<size*size;i++){
        tag= document.createElement("div");
        text= document.createTextNode(" ");
    tag.appendChild(text);
        element= document.getElementById("container");
        element.appendChild(tag);
    }
}

createGrid(16);
