//Maze architecture
const mazeLayout = [
//   1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],// 1
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1],// 2
    [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1],// 3
    [1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1],// 4
    [1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1],// 5
    [1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],// 6
    [1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1],// 7
    [1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1],// 8
    [1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1],// 9
    [1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1],// 10
    [1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1],// 11
    [1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1],// 12
    [1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1],// 13
    [1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1],// 14
    [1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1],// 15
    [1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],// 16
    [1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],// 17
    [1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1],// 18
    [1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1],// 19
    [1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1],// 20
    [1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1],// 21
    [1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1],// 22
    [1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1],// 23
    [1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1],// 24
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1] // 25
];
// 0 = empty, 1 = wall, 2 = goal

//Get the element with the specified id: maze 
const mazeContainer = document.getElementById('maze');

//Player starting position
const startPos ={x: 1, y: 1}
let playerPos = {...startPos};

//create maze
function drawMaze() {
    mazeContainer.innerHTML = '';
    for (let y = 0; y < mazeLayout.length; y++) {
        for (let x = 0; x < mazeLayout[y].length; x++) {
        const cell = document.createElement('div');
        cell.classList.add('cell'); // open block
        if (mazeLayout[y][x] === 1) cell.classList.add('wall'); 
        if (mazeLayout[y][x] === 2) cell.classList.add('goal');
        if (x === playerPos.x && y === playerPos.y) {
            cell.className = 'player';
            
        }
        mazeContainer.appendChild(cell);
        }
    }
}

function movePlayer(dx, dy) {
    const newX = playerPos.x + dx;
    const newY = playerPos.y + dy;
    if (mazeLayout[newY][newX] !== 1) { //if cell != 1 move character
        playerPos.x = newX;
        playerPos.y = newY;
        if (mazeLayout[newY][newX] === 2) { //if cell = 2, game completed
        alert("🎉 You reached the goal!");
        clearInterval(timerInterval);
        }
    }
    drawMaze();
}
//Player movement listener
document.addEventListener('keydown', (e) => {
    const player = document.getElementById('player');
    switch(e.key) {
        case 'ArrowUp': movePlayer(0, -1); break;
        case 'ArrowDown': movePlayer(0, 1); break;
        case 'ArrowLeft': movePlayer(-1, 0); break;
        case 'ArrowRight':movePlayer(1, 0); break;
    }
});

drawMaze();

let timeLeft = 60;
let timerInterval;

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60); //return integer
    const seconds = timeLeft % 60;
    //display timer
    document.getElementById("timer").textContent =
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;//display timer
    
    timeLeft--;

    if (timeLeft < 0) {
        clearInterval(timerInterval);
        document.getElementById("timer").textContent = "Time's up!";
        playerPos= {...startPos};
        
        
    }
}

function startTimer() {
    clearInterval(timerInterval); // Clear existing interval if any
    timeLeft = 60;
    updateTimer(); // Show initial time right away
    timerInterval = setInterval(updateTimer, 1000);
}

function resetTimer() {
    startTimer();
}

// Reset function
function resetPlayer() {
    playerPos= {...startPos}
    drawMaze(); // Reset to starting cell
    startTimer();
}

// Start automatically on page load
window.onload = startTimer;

