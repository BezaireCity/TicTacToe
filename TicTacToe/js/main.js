function playerTurn(player){
    let currentPlayer=player
    let nextPlayer
    if (currentplayer=='X'){
        nextPlayer='O'
    } else {
        nextPlayer='X'
    }
    document.querySelector('Boxes').addEventListener('click', addMark())
    checkIfWin()? gameEnd(currentPlayer): playerTurn(nextPlayer)
}

function gameEnd(player){
    alert(`Congrats player ${player} you have won!`)
    document.querySelector('#startGame').addEventListener('click', startGame())
}

function checkWin(){
    const topLeft = document.getElementById("#TopLeft");
    const topMiddle = document.getElementById("#TopMiddle");
    const topRight = document.getElementById("#TopRight");
    const leftMiddle = document.getElementById("#LeftMiddle");
    const middleMiddle = document.getElementById("#MiddleMiddle");
    const rightMiddle = document.getElementById("#RightMiddle");
    const bottomLeft = document.getElementById("#BottmeLeft");
    const bottomMiddle = document.getElementById("#BottomMiddle");
    const bottomRight = document.getElementById("#BottomRight");

    //Row Check
    if(
        //Row Check
        ((topLeft.value == topMiddle.value) && (topMiddle.value == topRight.value)) ||
        ((leftMiddle.value == middleMiddle.value) && (middleMiddle.value == rightMiddle.value)) ||
        ((bottomLeft.value == bottomMiddle.value) && (bottomMiddle.value == bottomRight.value)) ||
        
        //Column Check
        ((topLeft.value == leftMiddle.value) && (leftMiddle.value == bottomLeft.value)) ||
        ((topMiddle.value == middleMiddle.value) && (middleMiddle.value == bottomMiddle.value)) ||
        ((topRight.value == rightMiddle.value) && (rightMiddle.value == bottomRight.value)) ||
        
        //Diagonal Check
        ((topLeft.value == middleMiddle.value) && (middleMiddle.value == bottomRight.value)) ||
        ((topRight.value == middleMiddle.value) && (middleMiddle.value == bottomLeft.value))
    ){
        return true;
    } else {
    return false;
    }
}

document.querySelector('#startGame').addEventListener('click', startGame())

function startGame(){
    alert('Player 1 goes first! You are X!')
    playerTurn("X")
}

function addMark(player){
    this.innerText? this.innerText==player : playerTurn(player)
}
