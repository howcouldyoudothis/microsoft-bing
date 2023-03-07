const gameBoard = document.querySelector('.game-board');
const scoreDisplay = document.querySelector('#score');
let score = 0;
let moleTimer = null;
const moleTimeMin = 500;
const moleTimeMax = 1500;

function startGame() {
	// Reset game state
	score = 0;
	updateScoreDisplay();
	clearBoard();

	// Start mole timer
	moleTimer = setInterval(addMole, getRandomTime());
}

function addMole() {
	// Create new mole element
	const mole = document.createElement('div');
	mole.classList.add('mole');
	mole.style.top = getRandomPosition() + 'px';
	mole.style.left = getRandomPosition() + 'px';
	mole.addEventListener('click', onMoleClick);

	// Add mole to game board
	gameBoard.appendChild(mole);

	// Remove mole after a short time
	setTimeout(() => {
		gameBoard.removeChild(mole);
	}, getRandomTime());
}

function onMoleClick() {
	// Increase score and update display
	score++;
	updateScoreDisplay();

	// Remove clicked mole from game board
	gameBoard.removeChild(this);
}

function updateScoreDisplay() {
	scoreDisplay.textContent = score;
}

function clearBoard() {
	while (gameBoard.firstChild) {
		gameBoard.removeChild(gameBoard.firstChild);
	}
}

function getRandomPosition() {
	return Math.floor(Math.random() * (gameBoard.offsetHeight - 80));
}

function getRandomTime() {
	return Math.floor(Math.random() * (moleTimeMax - moleTimeMin + 1)) + moleTimeMin;
}

startGame();
