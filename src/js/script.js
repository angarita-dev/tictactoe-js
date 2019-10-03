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



function validMoves(){

}

function gameStatus(){

}

function getPlayerInfo() {
   document.getElementsByClassName("player-info-container")[0].style.display = 'block';
}

function setPlayers() {

  document.getElementsByClassName("player-info-container")[0].style.display = 'none';
  document.getElementsByClassName("game-container")[0].style.display = 'block';
  
}