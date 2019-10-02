const Player = (character,turn) =>{
    this.character = character;
    this.turn = turn;
}

const GameData = () =>{
    board:[0,1,2,3,4,5,6,7,8];
}

const GameController = () => {
 let board = new GameData;
 let player = {
    X :new Player("X",true),
    O :new Player("O",false)
 }
}


function move(playerCharacter, position){
    let position = document.getElementById("position");
    board[position] = player.character;

}

function validMoves(){

}

function gameStatus(){

}
