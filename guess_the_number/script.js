let startScreen = document.getElementById("startScreen");
let startButton = document.getElementById("startButton");
let gameScreen = document.getElementById("gameScreen");

let message = document.getElementById("message");

let submitGuess = document.getElementById("submitGuess");
let guessInput = document.getElementById("guessInput");

let attemptsText = document.getElementById("attempts");

let secretNum;
let attempt;

startButton.addEventListener("click", startGame);

function startGame() {

    secretNum = Math.floor(Math.random() * 100) + 1;

    attempt = 0;

    attemptsText.textContent = "Attempts: 0";

    message.textContent = "";

    guessInput.value = "";

    startScreen.style.display = "none";
    gameScreen.style.display = "block";

    // Remove this later
    // console.log(secretNum);
}

submitGuess.addEventListener("click", check);

guessInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        check();
    }

});

function check() {

    if (guessInput.value === "") {

        message.textContent = "Please enter a number";

        return;
    }

    let guess = Number(guessInput.value);

    attempt++;

    attemptsText.textContent = `Attempts: ${attempt}`;

    if (guess < secretNum) {

        message.textContent = "📈 Go to a larger value";

    }
    else if (guess > secretNum) {

        message.textContent = "📉 Move to a smaller value";

    }
    else {

        alert(
            `🎉 Congratulations! You found the number in ${attempt} attempts!`
        );

        gameScreen.style.display = "none";
        startScreen.style.display = "block";
    }

    guessInput.value = "";
}