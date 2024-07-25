const GameState = {
  board: Array(9).fill(null),
  currentPlayer: "o",
  winningCombinations: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ],

  resetBoard() {
    this.board = Array(9).fill(null);
  },

  updateBoard(position, currentPlayer) {
    this.board[position] = currentPlayer;
  },

  switchPlayer() {
    this.currentPlayer =
      this.currentPlayer === "x" ? "o" : "x";
  },

  resetStartPlayer() {
    this.currentPlayer = "o";
  },

  playerWins() {
    return this.winningCombinations.some(
      (combo) => {
        const [a, b, c] = combo;
        return (
          this.board[a] &&
          this.board[a] === this.board[b] &&
          this.board[a] === this.board[c]
        );
      }
    );
  },

  playersTie() {
    return this.board.every(
      (square) => square !== null
    );
  },
};

export function checkBoard(position) {
  if (GameState.board[position]) return true;
  return false;
}

export default GameState;
