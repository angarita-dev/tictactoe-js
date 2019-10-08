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
      || (board[2] != null && board[2] === board[4] && board[4] === board[6])) {
      return true;
    }
    return false;
  };
  const checkTile = (tile) => {
    const result = (board[tile] === null);
    return result;
  };
  const setMove = (index, character) => {
    board[index] = character;
  };
  const emptyBoard = () => {
    board = [null, null, null, null, null, null, null, null, null];
  };
  return {
    board,
    gameWin,
    checkTile,
    setMove,
    emptyBoard,
  };
});
