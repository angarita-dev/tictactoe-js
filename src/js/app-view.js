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
    document.getElementById('win-message').innerHTML = 'GAME OVER: YOU HAVE A TIE!!';
    document.getElementsByClassName('game-buttons-container')[0].style.display = 'flex';
  };
  const clearBoard = () => {
    for (let i = 0; i < 9; i += 1) {
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
    clearBoard,
    getPlayerNames,
    getPlayerChars,
    resetBoard,
    hidePlayers,
  };
});
