

function color(cell){
    cell.classList.add("color");
}

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
            tag.classList.add("cell");

            col=document.getElementsByClassName("col")[i];
            col.appendChild(tag);
            tag.setAttribute("onmouseover","color(event.currentTarget)");
            
        }
        
    }
}
// var got = { first : 0, second : 0 };
//     function fire(event_type)
//     {
//       got[ event_type ] = 1;
//       if( got.first && got.second )
//       {
//         //do stuff and reset
//          got = { first : 0, second : 0 };
//       }
//     }
// This is the listener part:

//     document.onclick=function (){fire('first');}
//     document.onmouseover=function (){fire('second');}

createGrid(16);

// document.getElementsByClassName('cell').addEventListener("onmousedown" , color("event.composedPath[0]"),true);