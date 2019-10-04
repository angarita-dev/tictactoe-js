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
}


