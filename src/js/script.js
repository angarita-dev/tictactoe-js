const Player = ((name, character) => {
  return { name, character }
});

const data = (() => {
  let board = [null, null, null, null, null, null, null, null, null];
  const gameWin = () => {
    if ((board[0] != null && board[0] === board[1] && board[1] === board[2])
      || (board[3] != null && board[3] === board[4] && board[4] === board[5])
      || (board[6] != null && board[6] === board[7] && board[7] === board[8])
      || (board[0] != null && board[0] === board[3] && board[3] === board[6])
      || (board[1] != null && board[1] === board[4] && board[4] === board[7])
      || (board[2] != null && board[2] === board[5] && board[5] === board[8])
      || (board[0] != null && board[0] === board[4] && board[4] === board[8])
      || (board[2] != null && board[2] === board[4] && board[4] === board[6])){
      return true;
    }
    return false;
  }
  const checkTile = (tile) => board[tile] === null;
  const setMove = (index, character) => board[index] = character;
  const emptyBoard = () => board = [null, null, null, null, null, null, null, null, null];
  return { 
    board,
    gameWin,
    checkTile,
    setMove,
    emptyBoard
  }
});

const domController = (() => {
  const getPlayerInfo = () => {
    document.getElementsByClassName('start-game-btn')[0].style.display = 'none';
    document.getElementsByClassName('player-info-container')[0].style.display = 'block';
  };
  const toggleBoard = () => {
    const playerInfoContainer = document.getElementsByClassName('player-info-container')[0];
    const gameContainer = document.getElementsByClassName('game-container')[0];
    playerInfoContainer.style.display = (playerInfoContainer.style.display === 'block') ? 'none' : 'block';
    gameContainer.style.display = (gameContainer.style.display === 'block') ? 'none' : 'block';
  };
  const displayPlayers = (player1, player2) => {
    const playerData = `<p>Player1: ${player1.name} Character: [${player1.character}]<br>
    Player2: ${player2.name} Character: [${player2.character}]</p>`;
    document.getElementsByClassName('player-data')[0].innerHTML = playerData;
  };
  const displayCharacter = (id, character) => {
    document.getElementById(id).innerHTML = character;
  };
  const displayTurn = (name) => {
    document.getElementById('turn-message').innerHTML = `${name}'s turn`;
  };
  const displayWin = (name) => {
    document.getElementById('win-message').innerHTML = `${name} WINS!!!`;
    document.getElementsByClassName('game-buttons-container')[0].style.display = 'flex';
  };
  const displayTie = () => {
    document.getElementById('win-message').innerHTML = `GAME OVER: YOU HAVE A TIE!!`;
    document.getElementsByClassName('game-buttons-container')[0].style.display = 'flex';
  };
  const clearBoard = () => {
    for (let i = 0; i < 9; i += 1){
      document.getElementById(`${i}`).innerHTML = null;
    }
  };
  const clearWin = () => {
    document.getElementById('win-message').innerHTML = null;
  };
  const resetBoard = () => {
    clearBoard();
    clearWin();
    document.getElementsByClassName('game-buttons-container')[0].style.display = 'none';
  };
  const getPlayerNames = () => [document.getElementById('name-player1').value, document.getElementById('name-player2').value];
  const getPlayerChars = () => [document.getElementById('char-player1').value, document.getElementById('char-player2').value];  
  const hidePlayers = () => {
    document.getElementsByClassName('player-data')[0].innerHTML = '';
  };
  return {
    getPlayerInfo,
    toggleBoard,
    displayPlayers,
    displayCharacter,
    displayTurn,
    displayWin,
    displayTie,
    getPlayerNames,
    getPlayerChars,
    resetBoard,
    hidePlayers
  }
});

const gameController = (() => {
  const gameBoard = data();
  const display = domController();
  let turn;
  let moveCount = 0;
  let players = [];
  const makePlayer = () => {
    const playerNames = display.getPlayerNames();
    const playerChars = display.getPlayerChars();
    players = [Player(playerNames[0], playerChars[0]), Player(playerNames[1], playerChars[1])];
  };
  const decideTurn = () => {
    if (moveCount === 0){
      turn = players[Math.round(Math.random(0, 1))];
      display.displayTurn(turn.name);
    } else {
      turn = (turn === players[0]) ? players[1] : players[0];
      display.displayTurn(turn.name);
    }
  };
  const setPlayers = () => {
    makePlayer();
    display.getPlayerInfo();
    display.toggleBoard();
    display.displayPlayers(...players);
    decideTurn(players);
  };
  const doMove = (index, id) => {
    if (gameBoard.checkTile(index)) {
      display.displayCharacter(id, turn.character);
      gameBoard.setMove(index, turn.character);
      moveCount += 1;
      if (gameBoard.gameWin()) {
        display.displayWin(turn.name);
        display.clearBoard();
        return;
      } else if (moveCount === 9) {
        display.displayTie();
        display.clearBoard();
        return;
      }
      decideTurn(players);
    }
  };
  const resetBoard = () => {
    gameBoard.emptyBoard();
    display.resetBoard();
    moveCount = 0;
    decideTurn();
  };
  const newGame = () => {
    moveCount = 0;
    gameBoard.emptyBoard();
    display.resetBoard();
    display.hidePlayers();
    display.toggleBoard();
    display.getPlayerInfo();
  };
  return {
    setPlayers,
    doMove,
    resetBoard,
    newGame
  }
});

const game = gameController();