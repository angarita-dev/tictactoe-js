const Player = ((name,character,turn) => {
  { name, character, turn}
});

const GameData = (() =>{
  let board = [null,null,null,null,null,null,null,null,null];
  
});

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
