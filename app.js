const paperBtn = document.getElementById("btn-paper");
const scissorsBtn = document.getElementById("btn-scissors");
const rockBtn = document.getElementById("btn-rock");
const output = document.getElementById("output");
const compOp = document.getElementById("computerScore");
const tieOp = document.getElementById("tieScore");
const playerOp = document.getElementById("playerScore");
const selection = document.getElementById("selection");
const winner = document.getElementById("winner");
function getComputerChoice() {
  const arr = ["Rock", "Paper", "Scissors"];
  const compChoice = arr[Math.floor(Math.random() * 3)];
  return compChoice;
}
paperBtn.addEventListener("click", () => {
  playerSelection = "paper";
  computerSelection = getComputerChoice().toLowerCase();
  selection.textContent = `You chose ${playerSelection} and computer chose ${computerSelection}`;
  output.textContent = playRound(playerSelection, computerSelection);
  compOp.textContent = computerScore;
  tieOp.textContent = tieScore;
  playerOp.textContent = playerScore;
  if (computerScore == 5) {
    winner.textContent = `The winner is Computer. Try again next time.`;
  } else if (playerScore == 5) {
    winner.textContent = `The winner is Player. Congratulations`;
  }
});
scissorsBtn.addEventListener("click", () => {
  playerSelection = "scissors";
  computerSelection = getComputerChoice().toLowerCase();
  selection.textContent = `You chose ${playerSelection} and computer chose ${computerSelection}`;
  output.textContent = playRound(playerSelection, computerSelection);
  compOp.textContent = computerScore;
  tieOp.textContent = tieScore;
  playerOp.textContent = playerScore;
  if (computerScore == 5) {
    winner.textContent = `The winner is Computer. Try again next time.`;
  } else if (playerScore == 5) {
    winner.textContent = `You Won. Congratulations`;
  }
});
rockBtn.addEventListener("click", () => {
  playerSelection = "rock";
  computerSelection = getComputerChoice().toLowerCase();
  selection.textContent = `You chose ${playerSelection} and computer chose ${computerSelection}`;
  output.textContent = playRound(playerSelection, computerSelection);
  compOp.textContent = computerScore;
  tieOp.textContent = tieScore;
  playerOp.textContent = playerScore;
  if (computerScore == 5) {
    winner.textContent = `The winner is Computer. Try again next time.`;
  } else if (playerScore == 5) {
    winner.textContent = `The winner is Player. Congratulations`;
  }
});

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

// function game() {
//   for (let i = 0; i < 5; i++) {
//     // playerSelection = prompt("Enter paper, scissors or rock").toLowerCase();
//     computerSelection = getComputerChoice().toLowerCase();
//     const currentRound = playRound(playerSelection, computerSelection);
//     console.log(currentRound);
//   }
//   if (playerScore > computerScore) {
//     return "You win this game. \n ----";
//   }
//   if (playerScore === computerScore) {
//     return "This game is a tie. \n ----";
//   } else {
//     return "You lose this game. \n ----";
//   }
// }
// console.log(game());
