// Values for game
const gameValues = ["stone", "paper", "scissor"];

// get computer choice
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  let result;
  if (randomNumber === 0) {
    result = "Stone";
  } else if (randomNumber === 1) {
    result = "Paper";
  } else {
    result = "Scissor";
  }
  return result.toLowerCase();
}

// get player choice
function getPlayerChoice() {
  let playerTurn = prompt("Enter your choice").toLowerCase();
  return playerTurn;
}

let computerWin = 1;
let playerWin = 1;

// playing functionality
function playRound(playerSelection, computerSelection) {
  let result;
  if (!gameValues.includes(playerSelection)) {
    return (result = `${playerSelection} is invalid input`);
  }

  if (
    (playerSelection === "stone" && computerSelection === "scissor") ||
    (playerSelection === "paper" && computerSelection === "stone") ||
    (playerSelection === "scissor" && computerSelection === "paper")
  ) {
    return (result = `Player choice : ${playerSelection}, Computer choice : ${computerSelection}: ${playerSelection} wins, player ${playerWin++} times win`);
  } else if (
    (computerSelection === "stone" && playerSelection === "scissor") ||
    (computerSelection === "paper" && playerSelection === "stone") ||
    (computerSelection === "scissor" && playerSelection === "paper")
  ) {
    return (result = `Player choice : ${playerSelection}, Computer choice : ${computerSelection}: ${computerSelection} wins computer ${computerWin++} times win`);
  } else if (playerSelection === computerSelection) {
    return (result = `Same choices, try again`);
  }
}

function game(round) {
  for (let i = 1; i < 6; i++) {
    console.log(`Round: ${round++} `);
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    console.log(playRound(playerChoice, computerChoice));
  }
  if (playerWin > computerWin) {
    console.log(`Player wins the game`);
  } else if (computerWin > playerWin) {
    console.log(`Computer wins the game`);
  } else if (playerWin === computerWin) {
    console.log("its Draw");
  }
}
game(1);
