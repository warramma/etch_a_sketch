const container = document.querySelector(".container");

function setGrid(num){
    if(num <= 100){
        for(i = 0; i < num; i++){
            const div = document.createElement("div");
            div.classList.add('line');
            fillLine(div, num);
            container.appendChild(div);
        }
    }
    else{
        setGrid(prompt('Please enter a number equal to or below 100: '));
    }
}



function fillLine(div, num){
    for(let i=0; i < num; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        div.appendChild(square);
    }
}
//----set size
setGrid(prompt("Enter a number between 1 and 100 to create your sketchpad: "));
//--set hover
const squares = document.querySelectorAll('.square');

for(let i = 0; i < squares.length; i++){
    squares[i].addEventListener("mouseover", ()=>{
        squares[i].classList.add("hover");
        event.stopPropagation();
    });
}


