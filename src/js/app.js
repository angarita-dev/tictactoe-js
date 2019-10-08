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
    if (moveCount === 0) {
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
      }
      if (moveCount === 9) {
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
    newGame,
  };
});

const game = gameController();