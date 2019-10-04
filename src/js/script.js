const Player = ((name,character) => {
  return { name, character}
});

  var board = [null,null,null,null,null,null,null,null,null];


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
  document.getElementsByClassName("start-game-btn")[0].style.display = 'none';
  document.getElementsByClassName("player-info-container")[0].style.display = 'block';
}

function setPlayers() {
  document.getElementsByClassName("player-info-container")[0].style.display = 'none';
  document.getElementsByClassName("game-container")[0].style.display = 'block';

  const player1 = Player(document.getElementById("name-player1").value,document.getElementById("char-player1").value)
  const player2 = Player(document.getElementById("name-player2").value,document.getElementById("char-player2").value)
  
  const firstTurn = decideTurn(player1, player2);
  const playerData = `<p>Player1: ${player1.name}[${player1.character}]<br>
                         Player2: ${player2.name}[${player2.character}]</p>`

document.getElementsByClassName('player-data')[0].innerHTML = playerData;
}

let moveCount = 0;
let turn;
function decideTurn(player1, player2) {
  let players = [player1,player2];
  if(moveCount == 0){
     turn =  players[Math.round(Math.random(0,1))];
     return turn;
  }else{
    return (turn === player1)? player2 : player1;
  }

}

function doMove(index, id) {
document.getElementById(id).innerHTML = id;
board[index] = id;
moveCount++;
}
