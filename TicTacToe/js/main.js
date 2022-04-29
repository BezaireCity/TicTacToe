let currentPlayer = "X"

document.querySelectorAll(".Boxes").forEach(box => box.addEventListener('click', event =>{
    if (box.innerHTML==''){
        box.innerHTML = currentPlayer;
        checkWin() ? document.querySelector('h1').innerText=`${currentPlayer} has won!` : changePlayer(currentPlayer);
    }
}));

function changePlayer(player) {
    if (player=="X"){
        currentPlayer='O'
    } else {
        currentPlayer='X'
    }
}

document.querySelector("#startGame").addEventListener('click', event =>{
    document.querySelectorAll(".Boxes").forEach(box => box.innerHTML = "");
});

function checkWin(){
    const topLeft = document.querySelector("#TopLeft");
    const topMiddle = document.querySelector("#TopMiddle");
    const topRight = document.querySelector("#TopRight");
    const leftMiddle = document.querySelector("#LeftMiddle");
    const middleMiddle = document.querySelector("#MiddleMiddle");
    const rightMiddle = document.querySelector("#RightMiddle");
    const bottomLeft = document.querySelector("#BottomLeft");
    const bottomMiddle = document.querySelector("#BottomMiddle");
    const bottomRight = document.querySelector("#BottomRight");

    //Row Check
    if(
        //Row Check
        ((topLeft.innerHTML == topMiddle.innerHTML) && (topMiddle.innerHTML == topRight.innerHTML)) && (topMiddle.innerHTML != "") ||
        ((leftMiddle.innerHTML == middleMiddle.innerHTML) && (middleMiddle.innerHTML == rightMiddle.innerHTML)) && (leftMiddle.innerHTML != "") ||
        ((bottomLeft.innerHTML == bottomMiddle.innerHTML) && (bottomMiddle.innerHTML == bottomRight.innerHTML))  && (bottomLeft.innerHTML != "") ||
        
        //Column Check
        ((topLeft.innerHTML == leftMiddle.innerHTML) && (leftMiddle.innerHTML == bottomLeft.innerHTML)) && (topLeft.innerHTML != "")||
        ((topMiddle.innerHTML == middleMiddle.innerHTML) && (middleMiddle.innerHTML == bottomMiddle.innerHTML)) && (topMiddle.innerHTML != "") ||
        ((topRight.innerHTML == rightMiddle.innerHTML) && (rightMiddle.innerHTML == bottomRight.innerHTML)) && (topRight.innerHTML != "") ||
        
        //Diagonal Check
        ((topLeft.innerHTML == middleMiddle.innerHTML) && (middleMiddle.innerHTML == bottomRight.innerHTML)) && (topLeft.innerHTML != "") ||
        ((topRight.innerHTML == middleMiddle.innerHTML) && (middleMiddle.innerHTML == bottomLeft.innerHTML)) && (topRight.innerHTML != "")
    ){
        return true;
    }
    return false;
}
