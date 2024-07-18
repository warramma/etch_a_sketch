const container = document.querySelector(".container");

for(i = 0; i < 16; i++){
    const div = document.createElement("div");
    div.classList.add('line');
    fillLine(div);
    container.appendChild(div);
}

function fillLine(div){
    for(let i=0; i < 16; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        div.appendChild(square);
    }
}
const squares = document.querySelectorAll('.square');

for(let i = 0; i < squares.length; i++){
    squares[i].addEventListener("mouseover", ()=>{
        squares[i].classList.add("hover");
        event.stopPropagation();
    });
}

//----set size


