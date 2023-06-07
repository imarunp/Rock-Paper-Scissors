function getComputerChoice() {
  const arr = ["Rock", "Paper", "Scissors"];
  const compChoice = arr[Math.floor(Math.random() * 3)];
  return compChoice;
}
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return loss;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
    return win;
  } else if (playerSelection == "rock" && computerSelection == "rock") {
    tieScore++;
    return tie;
  }
  if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return loss;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
    return win;
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    tieScore++;
    return tie;
  }

  if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return loss;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++;
    return win;
  } else if (playerSelection == "scissors" && computerSelection == "scissors") {
    tieScore++;
    return tie;
  }
}
const win = "You win this round! \n ----";
const loss = "You lose this round! \n ----";
const tie = "This round is a tie! \n ----";

function game() {
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Enter paper, scissors or rock").toLowerCase();
    computerSelection = getComputerChoice().toLowerCase();
    const currentRound = playRound(playerSelection, computerSelection);
    console.log(currentRound);
  }
  if (playerScore > computerScore) {
    return "You win this game. \n ----";
  }
  if (playerScore === computerScore) {
    return "This game is a tie. \n ----";
  } else {
    return "You lose this game. \n ----";
  }
}
console.log(game());
