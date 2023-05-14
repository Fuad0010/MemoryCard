let items = [
    {
        name: 'Adolf',
        img: 'Adolf.jpg'
    },
    {
        name: 'Alistair',
        img: 'Alistair.jpg'
    },
    {
        name: 'BMW_E46',
        img: 'BMW_E46.jpg'
    },
    {
        name: 'Cards',
        img: 'Cards.jpg'
    },
    {
        name: 'ChessSet',
        img: 'ChessSet.jpg'
    },
    {
        name: 'Doodle',
        img: 'Doodle.jpg'
    },
    {
        name: 'Invoker',
        img: 'Invoker.jpg'
    },
    {
        name: 'JohnWick',
        img: 'JohnWick.jpg'
    },
    {
        name: 'Kaneki',
        img: 'Kaneki.jpg'
    },
    {
        name: 'Magnus',
        img: 'Magnus.jpg'
    },
    {
        name: 'Papich',
        img: 'Papich.jpg'
    },
    {
        name: 'Tank',
        img: 'Tank.jpg'
    }
];

Array.prototype.push.apply(items, items);

console.log(items);

const cards_ground = document.querySelector('.cards_ground');

//randomize method
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

shuffle(items);

function createBoard() {
    for (let i = 0; i < items.length; i++) {
        const card = document.createElement('div');
        card.className = 'card';
        cards_ground.appendChild(card);
        card.setAttribute('id', 'id_' + i);

        card.addEventListener('click', flipCard)

        const img = document.createElement('img');
        card.appendChild(img);
        img.setAttribute('src', `/img/CardBackground.jpg`);
        console.log(items[i]);
    }
}

createBoard();

let cards = [];
let cardsInfo = [];

let scorePlace = document.getElementById('score');
let score = 0;
scorePlace.innerHTML = score;

function flipCard() {
    const cardId = this.getAttribute('id');
    const result = cardId.replace(/\D/g, '');
    cards.push(items[result].name);
    cardsInfo.push(cardId);
    this.firstElementChild.setAttribute('src', `/img/${items[result].img}`);
    if(cards.length == 1){
        document.getElementById(cardsInfo[0]).style.pointerEvents = "none";
    }
    if (cards.length == 2) {
        if (cards[0] === cards[1]) {
            document.getElementById(cardsInfo[0]).style.pointerEvents = "none";
            document.getElementById(cardsInfo[1]).style.pointerEvents = "none";
            document.getElementById(cardsInfo[0]).style.opacity = "0.5";
            document.getElementById(cardsInfo[1]).style.opacity = "0.5";
            score+= 50;
            scorePlace.innerHTML = score;
            cards = [];
            cardsInfo = [];
            if(document.querySelectorAll('.card').style.opacity == '0.5'){
                document.querySelector('.card').style.display = "none";
            }
        }
        else {
            document.querySelector('body').style.pointerEvents = "none";

            setTimeout(
            function () {
            document.querySelector('body').style.pointerEvents = "none";
                
                document.getElementById(cardsInfo[0]).firstElementChild.setAttribute('src', `/img/CardBackground.jpg`);
                document.getElementById(cardsInfo[1]).firstElementChild.setAttribute('src', `/img/CardBackground.jpg`);
                
                document.getElementById(cardsInfo[0]).style.pointerEvents = "auto";

                cards = [];
                cardsInfo = [];
            }, 2000);
            setTimeout(
                function () {
                    document.querySelector('body').style.pointerEvents = "auto";
                }, 2500);
        }
    }


    console.log(cards);
    console.log(cardsInfo);
}



console.log(items.length);