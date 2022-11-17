// Select Dom Elements
const choices = document.querySelectorAll('.choices');
const score = document.getElementById('score');
const restart = document.getElementById('restart');
const result = document.getElementById('result');
const modal = document.querySelector('.modal');

// Scoreboard
const scoreBoard = {
  player: 0,
  computer: 0
};

// Play Game function()
const game = (event) => {
  restart.style.display = 'inline-block';
  const playerChoice = event.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice,computerChoice);
  showWinner(winner,computerChoice);
  console.log(playerChoice,computerChoice,winner);
}

// Get Computer Choice()
const getComputerChoice = () => {
  const randomNumber = Math.random();
  if(randomNumber < 0.34){
    return 'rock';
  } else if(randomNumber <= 0.67){
    return 'paper';
  } else {
    return 'scissors';
  }
}

// Get winner()
const getWinner = (p,c) => {
if(p === c) return 'draw';
// rock & paper
if(p === 'rock' && c === 'paper') return 'computer';
if(p === 'paper' && c === 'rock') return 'player'; 

// paper & scissors
if(p === 'paper' && c === 'scissors') return 'computer';
if(p === 'scissors' && c === 'paper') return 'player';

// rock & scissors
if(p === 'scissors' && c === 'rock') return 'computer'; 
if(p === 'rock' && c === 'scissors') return 'player'; 

}

// Display Winner
const showWinner = (winner, computerChoice) => {
// player wins
if(winner === 'player'){
  scoreBoard.player++;
  // display modal result
  result.innerHTML = `<h1 class = 'text-win'>You Win</h1> 
  <i class="fas fa-hand-${computerChoice} fa-10x"></i> 
  <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>`;

} else if(winner === 'computer') {
  // com wins
  scoreBoard.computer++;
  // display modal result
  result.innerHTML = `<h1 class = 'text-lose'>You Lose</h1> 
  <i class="fas fa-hand-${computerChoice} fa-10x"></i> 
  <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>`;

} else {
  result.innerHTML = `<h1>Its Draw</h1> 
  <i class="fas fa-hand-${computerChoice} fa-10x"></i> 
  <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>`;
}

// Show score
 score.innerHTML = `
 <p>Player: ${scoreBoard.player}</p>
 <p>Computer: ${scoreBoard.computer}</p>
 `;

 modal.style.display = 'block';
}

// clear modal
function clearModal(event){
  if(event.target === modal){
    modal.style.display = 'none';
  }
}

// Restart function
function restartGame(){
scoreBoard.player = 0;
scoreBoard.computer = 0;
score.innerHTML = `
<p>Player: 0</p>
<p>Computer: 0</p>
`;
restart.style.display = 'none';
}

// Event Listner
choices.forEach(choice => choice.addEventListener('click', game));
window.addEventListener('click', clearModal)
restart.addEventListener('click', restartGame);
