const boxes = document.querySelectorAll('.box');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const startBtn = document.querySelector('#start-btn');

let score = 0;
let timeLeft = 20;
let activeBox = null;
let countdownInterval = null;
let ratInterval = null;

function startGame() {
    score = 0;
    timeLeft = 20;

    scoreDisplay.textContent = score;
    timeDisplay.textContent = timeLeft;

    startBtn.disabled = true;

    ratInterval = setInterval(randomRat, 1000);
    countdownInterval = setInterval(countdown, 1000);
}

function randomRat() {
    
    if (activeBox) {
        activeBox.classList.remove('rat');
    }

    const randomIndex = Math.floor(Math.random() * boxes.length);
    activeBox = boxes[randomIndex];
    activeBox.classList.add('rat');
}

boxes.forEach(box => {
    box.addEventListener('click', () => {
        if (box === activeBox) {
            score++;
            scoreDisplay.textContent = score;

            box.classList.remove('rat');
            activeBox = null;
        }
    });
});

function countdown() {
    timeLeft--;
    timeDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(ratInterval);
        clearInterval(countdownInterval);

        if (activeBox) {
            activeBox.classList.remove('rat');
            activeBox = null;
        }

        startBtn.disabled = false;

        alert(`Game Over! Your score is ${score}`);
    }
}

startBtn.addEventListener('click', startGame);