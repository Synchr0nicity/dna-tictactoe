export class View {
  constructor() {
    this.playerX =
      document.querySelector(".x-player");
    this.playerO =
      document.querySelector(".o-player");
    this.squares =
      document.querySelectorAll(".square");
    this.body = document.querySelector("body");
    this.restartBtn =
      document.querySelector(".restart");
    this.endGameMsg = document.querySelector(
      ".endGame-message"
    );
  }

  clearBoard() {
    this.squares.forEach((square) => {
      square.textContent = "";
    });
  }

  updateSquare(position, currentPlayer) {
    this.squares[position].textContent =
      currentPlayer;
  }

  winningLogic(currentPlayer) {
    this.body.classList.add("overlay");
    this.restartBtn.style.display = "flex";
    this.endGameMsg.textContent = `${currentPlayer.toUpperCase()} WINS!`;
  }

  tieLogic() {
    this.body.classList.add("overlay");
    this.restartBtn.style.display = "flex";
    this.endGameMsg.textContent = "It's a tie!";
  }

  hideRestart() {
    this.body.classList.remove("overlay");
    this.restartBtn.style.display = "none";
    this.endGameMsg.textContent = "";
  }

  highlightActivePlayer(currentPlayer) {
    if (currentPlayer === "x") {
      this.playerX.classList.add("activePlayer");
      this.playerO.classList.remove(
        "activePlayer"
      );
    } else {
      this.playerX.classList.remove(
        "activePlayer"
      );
      this.playerO.classList.add("activePlayer");
    }
  }
}

export default new View();
