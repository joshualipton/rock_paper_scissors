function getComputerChoice() {
  let randomNum = Math.random();

  if (randomNum <= 0.33) {
    return "rock";
  } else if (randomNum <= 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  // Tie
  if (playerSelection === computerSelection) {
    return `Tie! Both sides picked ${playerSelection}.`;
  }

  // Win
  else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}.`;
  }

  // Lose
  else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function updateScore(playerValue, computerValue) {
  const playerScore = document.querySelector(".player-score");
  playerScore.textContent = `Player: ${playerValue}`;

  const computerScore = document.querySelector(".computer-score");
  computerScore.textContent = `Computer: ${computerValue}`;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  const buttons = document.querySelectorAll(".selector-button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const roundResult = playRound(button.id, getComputerChoice());
      if (roundResult.charAt(4) === "W") {
        ++playerScore;
        console.log("Win");
      } else if (roundResult.charAt(4) === "L") {
        ++computerScore;
        console.log("lose");
      }
      updateScore(playerScore, computerScore);

      if (playerScore === 5 || computerScore === 5) {
        const body = document.querySelector("body");
        const win = document.createElement("h3");
        if (playerScore > computerScore) {
          win.textContent = "You Win!";
        } else {
          win.textContent = "You Lose!";
        }
        body.appendChild(win);

        const buttons = document.querySelectorAll("button");

        buttons.forEach((button) => {
          button.remove();
        });

        const reset = document.createElement("button");
        reset.textContent = "Reset";

        body.appendChild(reset);

        reset.addEventListener("click", () => {
          window.location.reload();
        });
      }
    });
  });
}

game();
