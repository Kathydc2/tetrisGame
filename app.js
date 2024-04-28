const div = document.querySelector(".grid");
// Create 200 divs dynamically
for (let i = 0; i < 200; i++) {
  const squares = document.createElement("div"); 
  div.appendChild(squares); 
};


// Start Button
const container = document.querySelector(".button");
let startBtn = document.createElement("button");
startBtn.textContent = "Start/Pause";
startBtn.style.padding = "5px 15px"; 
startBtn.style.backgroundColor = "black";
startBtn.style.fontSize = "14pt" 
startBtn.style.color = "white";
startBtn.style.borderRadius = "2cm" 
startBtn.style.border = "solid"; 
startBtn.style.cursor = "pointer";
container.appendChild(startBtn);

// Add event listener to the start button
startBtn.addEventListener("click", toggleGame);
let gamePaused = true; // Variable to track if the game is paused
let currentPosition = 4 // Initial column position for Tetromino
let currentRotation = 0 // Initial rotation for Tetromino

// let timerId;

// Function to start or pause the game
function toggleGame() {
  gamePaused = !gamePaused;
    if (gamePaused) {
      clearInterval(timerId); // Pause the timer
    } else {
      startGame();
      timerId = setInterval(updateTimer, 1000); // Start the timer
    };
};


let remainingTime = 60; 
const timerDisplay = document.querySelector(".timer");

// Lines and Level display 
let linesCleared = 0;
let level = 1;
const linesScoreDisplay = document.getElementById("lines");
const levelScoreDisplay = document.getElementById("level");

// Function to check if a line is formed
function checkLine() {
  // check if line is formed then call updateScoresAndLevel function
};

// Function to update scores and levels
function updateScoresAndLevel(lines) {
  linesCleared += lines;
  linesScoreDisplay.textContent = linesCleared;

  if (linesCleared >= 5) {
    level++;
    linesCleared -= 5;
    levelScoreDisplay.textContent = level;
  }
  remainingTime += lines * 15; // Increase remaining time by 15 seconds per line
  timerDisplay.textContent = remainingTime;
};
// Function to update the timer and game over
function updateTimer() {
  if (remainingTime > 0) {
    remainingTime--
    timerDisplay.textContent = "Timer: " + remainingTime;
  } else {
    clearInterval(timerId);
    if (remainingTime === 0) {
      alert("GAME OVER");
      window.location.reload();
    };
  };
};

// // Define Tetromino shapes and their colors
// Array of available colors
const colors = ['cyan', 'yellow', 'purple', 'orange', 'blue', 'green', 'red'];

// Populate the tetrominoes array with random colors
const tetrominoes = [
  { shape: [[0, 0], [0, 1], [0, 2], [0, 3]], color: colors[Math.floor(Math.random() * colors.length)] }, // I Tetromino
  { shape: [[0, 0], [0, 1], [1, 0], [1, 1]], color: colors[Math.floor(Math.random() * colors.length)] }, // O Tetromino
  { shape: [[0, 0], [0, 1], [0, 2], [1, 0]], color: colors[Math.floor(Math.random() * colors.length)] }, // L Tetromino
  { shape: [[0, 0], [0, 1], [0, 2], [1, 2]], color: colors[Math.floor(Math.random() * colors.length)] }, // J Tetromino
  { shape: [[0, 1], [0, 2], [1, 0], [1, 1]], color: colors[Math.floor(Math.random() * colors.length)] }, // S Tetromino
  { shape: [[0, 0], [0, 1], [1, 1], [1, 2]], color: colors[Math.floor(Math.random() * colors.length)] }, // Z Tetromino
  { shape: [[0, 0], [0, 1], [0, 2], [1, 1]], color: colors[Math.floor(Math.random() * colors.length)] } // T Tetromino
];

console.log(tetrominoes)
// // Function to start the game
function startGame() {

  
}

