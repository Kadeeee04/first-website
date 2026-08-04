const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const scoreText = document.getElementById("score");
const gridSize = 30;
const tilecount =20;

let snake = [{x: 10, y: 10}]
let dx = 1;
let dy = 0;
let food = {x: 5, y: 5};
let score = 0;

// drawing the snake in green //
function drawSnake() {
  ctx.fillStyle = "green";
  snake.forEach(segment => {
    ctx.fillRect(
        segment.x * gridSize,
        segment.y * gridSize,
        gridSize,
        gridSize
    );
});
}

// drawing the food in red (add fruit later) //

function drawFood() {
    ctx.fillStyle = "red";
    ctx.fillRect(
        food.x * gridSize,
        food.y * gridSize,
        gridSize,
        gridSize
    );
}

// Moving the snake //

function moveSnake() {
    const head = {
        x: snake[0].x + dx,
        y: snake[0].y + dy
    };
    snake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
        score++;
        scoreText.textContent = score;
        food = {
            x: Math.floor(Math.random() * tilecount),
            y: Math.floor(Math.random() * tilecount)
        };
    } else {
        snake.pop();    
        }
}

//see the walls//
function Collision() {
    const head = snake[0];

    if (
        head.x < 0 ||
        head.x >= tilecount ||
        head.y < 0 ||
        head.y >= tilecount
    ) {
        //you died and it resets//
        snake = [{x: 10, y: 10}];
        dx = 1;
        dy = 0;
        score = 0;
        scoreText.textContent = score;

        food = {
            x: Math.floor(Math.random() * tilecount),
            y: Math.floor(Math.random() * tilecount)
        };
    }
}

// drawing food and snake //

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFood();
    drawSnake();
}

//Game play //
function gamePlay() {
    moveSnake();
    Collision();
    draw();
}    

//contorls //
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" || e.key === "w" && dy !== 1) {
        dx = 0;
        dy = -1;
    }
    if (e.key === "ArrowDown" || e.key === "s" && dy !== -1) {
        dx = 0;
        dy = 1;
    }
    if (e.key === "ArrowLeft" || e.key === "a" && dx !== 1) {
        dx = -1;
        dy = 0;
    }
    if (e.key === "ArrowRight" || e.key === "d" && dx !== -1) {
        dx = 1;
        dy = 0;
    }
});


// Start game!//
setInterval(gamePlay, 150);