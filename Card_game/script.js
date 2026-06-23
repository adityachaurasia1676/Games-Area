const cardsArray = [
    { name: 'shell', img: 'img/blueshell.png' },
    { name: '1up', img: 'img/1up.png' },
    { name: 'mushroom', img: 'img/mushroom.png' },
    { name: 'star', img: 'img/star.png' },
    { name: 'bulletbill', img: 'img/bulletbill.png' },
    { name: 'coin', img: 'img/coin.png' },
    { name: 'luigi', img: 'img/luigi.png' },
    { name: 'mario', img: 'img/mario.png' },
    { name: 'peach', img: 'img/peach.png' },
    { name: 'bobomb', img: 'img/bobomb.png' }
];

// Grab game container
const game = document.getElementById('game');

// Create Grid
const grid = document.createElement('section');
grid.classList.add('grid');
game.appendChild(grid);

// Duplicate and Shuffle
let gameGrid = cardsArray.concat(cardsArray);

gameGrid.sort(() => Math.random() - 0.5);

let count = 0;
let firstCard = null;
let secondCard = null;
let matchedCards = 0;
let lockBoard = false;

// Create Cards
gameGrid.forEach(item => {

    const card = document.createElement('div');

    card.classList.add('card');
    card.dataset.name = item.name;
    card.dataset.image = item.img;

    grid.appendChild(card);
});

function checkMatch() {

    if (firstCard.dataset.name === secondCard.dataset.name) {

        setTimeout(() => {

            firstCard.classList.remove('selected');
            secondCard.classList.remove('selected');

            firstCard.classList.add('matched');
            secondCard.classList.add('matched');

            matchedCards += 2;

            resetTurn();

            // if (matchedCards === gameGrid.length) {
            //     setTimeout(() => {
            //         alert("🎉 You Win!");
            //     }, 500);
            // }

        }, 600);

    } else {

        lockBoard = true;

        setTimeout(() => {

            firstCard.classList.remove('selected');
            secondCard.classList.remove('selected');

            firstCard.style.backgroundImage = '';
            secondCard.style.backgroundImage = '';

            resetTurn();

        }, 1500);
    }
}

function resetTurn() {
    count = 0;
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}

grid.addEventListener('click', function(event) {

    const clicked = event.target;

    if (
        lockBoard ||
        clicked.nodeName === 'SECTION' ||
        clicked.classList.contains('selected') ||
        clicked.classList.contains('matched')
    ) {
        return;
    }

    clicked.classList.add('selected');

    clicked.style.backgroundImage =
        `url(${clicked.dataset.image})`;

    count++;

    if (count === 1) {
        firstCard = clicked;
    }

    if (count === 2) {
        secondCard = clicked;
        checkMatch();
    }
});