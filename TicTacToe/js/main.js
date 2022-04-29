let currentPlayer = "X"

document.querySelectorAll(".Boxes").forEach(box => box.addEventListener('click', event =>{
    box.innerHTML = currentPlayer;
    checkWin() ? alert(`${currentPlayer} has won!`) : currentPlayer = (currentPlayer == "X") ? "O" : "X";
}));

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

    console.log(topLeft.innerHTML);
    console.log(topRight.innerHTML);
    console.log(topMiddle.innerHTML);
    console.log(leftMiddle.innerHTML);
    console.log(middleMiddle.innerHTML);
    console.log(rightMiddle.innerHTML);
    //Row Check
    if(
        //Row Check
        ((topLeft.innerHTML == topMiddle.innerHTML) && (topMiddle.innerHTML == topRight.innerHTML)) ||
        ((leftMiddle.innerHTML == middleMiddle.innerHTML) && (middleMiddle.innerHTML == rightMiddle.innerHTML)) ||
        ((bottomLeft.innerHTML == bottomMiddle.innerHTML) && (bottomMiddle.innerHTML == bottomRight.innerHTML)) ||
        
        //Column Check
        ((topLeft.innerHTML == leftMiddle.innerHTML) && (leftMiddle.innerHTML == bottomLeft.innerHTML)) ||
        ((topMiddle.innerHTML == middleMiddle.innerHTML) && (middleMiddle.innerHTML == bottomMiddle.innerHTML)) ||
        ((topRight.innerHTML == rightMiddle.innerHTML) && (rightMiddle.innerHTML == bottomRight.innerHTML)) ||
        
        //Diagonal Check
        ((topLeft.innerHTML == middleMiddle.innerHTML) && (middleMiddle.innerHTML == bottomRight.innerHTML)) ||
        ((topRight.innerHTML == middleMiddle.innerHTML) && (middleMiddle.innerHTML == bottomLeft.innerHTML))
    ){
        return true;
    }
    return false;
}
