const choices = ['rock', 'paper', 'scissors'];

document.getElementById('rock').addEventListener('click', function() {
  playGame('rock');
});

document.getElementById('paper').addEventListener('click', function() {
  playGame('paper');
});

document.getElementById('scissors').addEventListener('click', function() {
  playGame('scissors');
});

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  if (playerChoice === computerChoice) {
    alert('It\'s a tie!');
  } else if (playerChoice === 'rock' && computerChoice === 'scissors' ||
             playerChoice === 'paper' && computerChoice === 'rock' ||
             playerChoice === 'scissors' && computerChoice === 'paper') {
    alert('You win!');
  } else {
   
