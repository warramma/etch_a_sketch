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
    const squares = document.querySelectorAll('.square');

    for(let i = 0; i < squares.length; i++){
        squares[i].addEventListener("mouseover", ()=>{
            squares[i].style.backgroundColor = randomColor();
            event.stopPropagation();
        });
}
}

function fillLine(div, num){
    for(let i=0; i < num; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        div.appendChild(square);
    }
}

function randomColor(){
    let color = "#";
    let random = Math.floor(Math.random()*16777215).toString(16);
    return color + random;
}

//----set size based on user input

const gridBtn = document.querySelector("#setGridbtn");
gridBtn.addEventListener("click", ()=>{
    setGrid(prompt("Enter a number between 1 and 100: "));
});




