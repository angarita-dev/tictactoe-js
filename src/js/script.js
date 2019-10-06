let turn;
let moveCount = 0;
var board = [null,null,null,null,null,null,null,null,null];
const Player = ((name,character) => {
  return { name, character}
});

  
function getPlayerInfo() {
  document.getElementsByClassName("start-game-btn")[0].style.display = 'none';
  document.getElementsByClassName("player-info-container")[0].style.display = 'block';
}

function makePlayer() {
  return {
    player1: Player(document.getElementById("name-player1").value,document.getElementById("char-player1").value),
    player2: Player(document.getElementById("name-player2").value,document.getElementById("char-player2").value)
  };
}


function setPlayers() {
  document.getElementsByClassName("player-info-container")[0].style.display = 'none';
  document.getElementsByClassName("game-container")[0].style.display = 'block';
  player1 = makePlayer().player1; 
  player2 = makePlayer().player2;

  const playerData = `<p>Player1: ${player1.name}[${player1.character}]<br>
                         Player2: ${player2.name}[${player2.character}]</p>`;

  document.getElementsByClassName('player-data')[0].innerHTML = playerData;
  decideTurn(player1, player2);
}


function decideTurn(player1, player2) {
  let players = [player1,player2];
  if(moveCount == 0){
     turn =  players[Math.round(Math.random(0,1))];
     document.getElementById("turn-message").innerHTML = `${turn.name}'s turn`;
     return turn;
  }else{
    turn = (turn == player1)? player2 : player1;
    document.getElementById("turn-message").innerHTML = `${turn.name}'s turn`;
    return turn;
  }

}

function doMove(index, id) {

if (board[index] == null) {
  document.getElementById(id).innerHTML = turn.character;
  board[index] = turn.character;
   moveCount++;
 if(gameWin()){
   alert(`${turn.name} WINS!!!`);
   resetBoard();
   return;
 }
 turn = decideTurn(player1, player2);
 
  if (moveCount == 9){
    alert("GAME OVER: YOU HAVE A TIE!!");
    resetBoard();
  }
}else{
  alert("cell occupied");
}
}

function gameWin() {
  if((board[0] != null && board[0] == board[1] && board[1] == board[2]) ||
    (board[3] != null && board[3] == board[4] && board[4] == board[5]) ||
    (board[6] != null && board[6] == board[7] && board[7] == board[8]) ||
    (board[0] != null && board[0] == board[3] && board[3] == board[6]) ||
    (board[1] != null && board[1] == board[4] && board[4] == board[7]) ||
    (board[2] != null && board[2] == board[5] && board[5] == board[8]) ||
    (board[0] != null && board[0] == board[4] && board[4] == board[8]) ||
    (board[2] != null && board[2] == board[4] && board[4] == board[6]) 
    )
    {
     return true;
   }else{
     return false;
   }

}

function resetBoard(){
  location.reload();

}
