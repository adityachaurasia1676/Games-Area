const player = document.getElementById("player");
const platforms = document.querySelectorAll(".platform");

let x = 50;
let y = 50;

let velocityY = 0;
let gravity = 0.5;
let jumpPower = 12;

let isJumping = false;

const keys = {};

document.addEventListener("keydown", (e) => {
    keys[e.code] = true;

    if (e.code === "Space" && !isJumping) {
        velocityY = jumpPower;
        isJumping = true;
    }
});

document.addEventListener("keyup", (e) => {
    keys[e.code] = false;
});

function checkPlatformCollision() {
    let playerRect = player.getBoundingClientRect();

    platforms.forEach(platform => {

        if (platform.classList.contains("ground")) return;

        let platRect = platform.getBoundingClientRect();

        if (
            playerRect.bottom >= platRect.top &&
            playerRect.bottom <= platRect.top + 20 &&
            playerRect.right > platRect.left &&
            playerRect.left < platRect.right &&
            velocityY < 0
        ) {
            y = 400 - platform.offsetTop - 20;
            velocityY = 0;
            isJumping = false;
        }
    });
}

function gameLoop() {

    if (keys["ArrowRight"]) {
        x += 5;
    }

    if (keys["ArrowLeft"]) {
        x -= 5;
    }

    if (x < 0) x = 0;
    if (x > 760) x = 760;

    velocityY -= gravity;
    y += velocityY;

    if (y < 50) {
        y = 50;
        velocityY = 0;
        isJumping = false;
    }

    player.style.left = x + "px";
    player.style.bottom = y + "px";

    checkPlatformCollision();

    requestAnimationFrame(gameLoop);
}

gameLoop();