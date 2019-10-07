let turn;
let moveCount = 0;


const Player = ((name,character) => {
  return { name, character}
});

const data = (() => {
  let board = [null,null,null,null,null,null,null,null,null];
  const gameWin = () => {
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
  const checkTile = (tile) => {
    return board[tile] == null;
  }
  const setMove = (index,character) => {
    board[index] = character
  }
  const emptyBoard = () => {
    board = [null,null,null,null,null,null,null,null,null];
  }
  return { board, gameWin, checkTile, setMove, emptyBoard }
});

const gameBoard = data();
const domController = (() =>{
  const getPlayerInfo = () => {
    document.getElementsByClassName("start-game-btn")[0].style.display = 'none';
    document.getElementsByClassName("player-info-container")[0].style.display  = 'block';
  }
  const toggleBoard = () => {
    document.getElementsByClassName("player-info-container")[0].style.display = 'none';
    document.getElementsByClassName("game-container")[0].style.display = 'block';
  }
  const displayPlayers = (player1, player2) => {
    const playerData = `<p>Player1: ${player1.name} Character: [${player1.character}]<br>
    Player2: ${player2.name} Character: [${player2.character}]</p>`;
    document.getElementsByClassName('player-data')[0].innerHTML = playerData;
  }
  const displayCharacter = (id, character) => {
    document.getElementById(id).innerHTML = character;
  }
  const displayTurn = (name) => {
    document.getElementById("turn-message").innerHTML = `${name}'s turn`;
  }
  const displayWin = () => {
    document.getElementById("win-message").innerHTML = `${turn.name} WINS!!!`;
    document.getElementsByClassName("reset-game-btn")[0].style.display = 'block';
  }
  const displayTie = () => {
    document.getElementById("win-message").innerHTML = `GAME OVER: YOU HAVE A TIE!!`;
    document.getElementsByClassName("reset-game-btn")[0].style.display = 'block';
  }
  const clearBoard = () => {
    for(let i=0; i<9; i++){
      document.getElementById(`${i}`).innerHTML = null;
    }
  }
  const getPlayerNames = () => {
    return [document.getElementById('name-player1').value,document.getElementById('name-player2').value]
  }
  const getPlayerChars = () => {
    return [document.getElementById('char-player1').value,document.getElementById('char-player2').value]
  }
  return { getPlayerInfo, 
           toggleBoard, 
           displayPlayers, 
           displayCharacter, 
           displayTurn,
           displayWin,
           displayTie,
           clearBoard,
           getPlayerNames,
           getPlayerChars
          };
});

function makePlayer() {
  let playerNames = domController().getPlayerNames();
  let playerChars = domController().getPlayerChars();
  return {
    player1: Player(playerNames[0], playerChars[0]),
    player2: Player(playerNames[1], playerChars[1]),
  };
}

function setPlayers() {
  domController().getPlayerInfo()
  domController().toggleBoard();
  player1 = makePlayer().player1;
  player2 = makePlayer().player2;

  domController().displayPlayers(player1,player2);
  
  decideTurn(player1, player2);
}


function decideTurn(player1, player2) {
  let players = [player1,player2];
  if(moveCount == 0){
    turn =  players[Math.round(Math.random(0,1))];
    domController().displayTurn(turn.name);
  } else{
    turn = (turn == player1)? player2 : player1;
    domController().displayTurn(turn.name);
  }
  return turn;
}

function doMove(index, id) {

  if (gameBoard.checkTile()) {
    domController().displayCharacter(id,turn.character);
    gameBoard.setMove(index,turn.character);
    moveCount++;
    if(gameBoard.gameWin()){
      console.log('in win')
      domController().displayWin();
      domController.clearBoard();
      return
    } else if(moveCount == 9){
      domController().displayTie();
      domController.clearBoard();
      return
    }
    turn = decideTurn(player1, player2);
  } else{
    alert("cell occupied invalid move");
  }
}

function resetBoard(){
  location.reload();
}
