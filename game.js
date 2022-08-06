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

function game() {
  let playerScore = 0;
  let computerScore = 0;

  const buttons = document.querySelector("selector-button");

  let playerChoice = "";

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      playerChoice = button.id;
    });
  });

  console.log(playerChoice);

  let roundResult = playRound(playerChoice, getComputerChoice());
  console.log(roundResult);

  if (roundResult.charAt(4) === "W") {
    ++playerScore;
  } else if (roundResult.charAt(4) === "L") {
    ++computerScore;
  }

  if (playerScore > computerScore) {
    console.log("You Win!");
  } else if (computerScore > playerScore) {
    console.log("You Lose!");
  } else {
    console.log("Tie!");
  }
}
