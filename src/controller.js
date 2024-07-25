import GameState, {
  checkBoard,
} from "./model.js";

import View from "./view.js";

View.highlightActivePlayer(
  GameState.currentPlayer
);

function handleClick(event) {
  const square = event.target;
  const position = parseInt(
    square.getAttribute("data-id"),
    10
  );
  if (checkBoard(position)) {
    return;
  }

  GameState.updateBoard(
    position,
    GameState.currentPlayer
  );

  View.updateSquare(
    position,
    GameState.currentPlayer
  );

  if (GameState.playersTie()) {
    View.tieLogic();
    return;
  }
  if (GameState.playerWins()) {
    View.winningLogic(GameState.currentPlayer);
    return;
  }

  GameState.switchPlayer();
  View.highlightActivePlayer(
    GameState.currentPlayer
  );
}

function init() {
  View.squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
}
function initRestart() {
  View.restartBtn.addEventListener(
    "click",
    handleRestartGame
  );
}

function handleRestartGame(event) {
  View.clearBoard();
  GameState.resetBoard();
  GameState.resetStartPlayer();
  View.highlightActivePlayer(
    GameState.currentPlayer
  );
  View.hideRestart();
  init();
}
initRestart();

init();

//encapsulating restboard into model, encapsulating clearBoard into View
//encapsulating hidding restart stuff
//NOTE: currentPlayer had to be reset from model as thats where its stored
// function handleRestartGame(event) {
//   squares.forEach((square) => {
//     square.textContent = "";
//   });
//   for (let i = 0; i < board.length; i++) {
//     board[i] = null;
//   }
//   currentPlayer = "o";
//   updateActivePlayer();
//   body.classList.remove("overlay");
//   restartBtn.style.display = "none";
//   winningMsg.textContent = ``;
//   init();
// }
