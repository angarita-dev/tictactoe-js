const Player = ((name,character) => {
  return { name, character}
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
  document.getElementsByClassName("start-game-btn")[0].style.display = 'none';
  document.getElementsByClassName("player-info-container")[0].style.display = 'block';
}

function setPlayers() {
  document.getElementsByClassName("player-info-container")[0].style.display = 'none';
  document.getElementsByClassName("game-container")[0].style.display = 'block';

  const player1 = Player(document.getElementById("name-player1").value,document.getElementById("char-player1").value)
  const player2 = Player(document.getElementById("name-player2").value,document.getElementById("char-player2").value)
  console.log(player1);
  console.log(player2);
}

function decideTurn(player1, player2) {
  let turn = [player1,player2];
  return turn[Math.round(Math.random(0,1))]
}
