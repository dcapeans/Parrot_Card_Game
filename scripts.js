let NumberCards;
const cardsList = ["unicornparrot.gif", "bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif"];
const cardsIndex = [];
let openCards = [];
let matchedPairs = 0;
let movesCounter = 0;

askCardNumber()

function askCardNumber() {
    setTimeout(NumberCards = prompt("Com quantas cartas quer jogar? (Min:4 Max: 14)"), 100)
    while (NumberCards < 4 || NumberCards > 14 || NumberCards % 2 === 1) {
        NumberCards = prompt("Com quantas cartas quer jogar? (Min:4 Max: 14)")
    }
    setCardsIndex();
    printCards();
}

function setCardsIndex() {
    for (let i = 0; i <= NumberCards / 2 - 1; i++) {
        cardsIndex.push(i)
        cardsIndex.push(i)
    }
    shuffle()
}

function printCards() {
    const container = document.querySelector(".container")

    for (let i = 0; i < NumberCards; i++) {
        container.innerHTML += `
            <article class="card" data-index="${cardsIndex[i]}" onclick="flipCard(this)">
                <div class="front-face face">
                    <img src="images/front.png" alt="Parrot image">
                </div>
                <div class="back-face face">
                    <img src="images/${cardsList[cardsIndex[i]]}"" alt="Parrot image">
                </div>
            </article>
        `
    }
}

function randomNumber() {
    return Math.round(Math.random() - 1);
}

function shuffle() {
    cardsIndex.sort(randomNumber)
}

function flipCard(element) {
    if(!element.classList.contains("flip")){
        element.classList.add("flip")
        openCards.push(element)
        const length = openCards.length
        movesCounter++

        compareCards(length)
    }
    setTimeout(checkEndGame, 200)
}

function unmatched(){
    openCards[0].classList.remove("flip")
    openCards[1].classList.remove("flip")
    openCards = [];
}

function checkEndGame(){
    gameOverText = `Você ganhou em ${movesCounter} jogadas!`
    if(matchedPairs === NumberCards/2){
        alert(gameOverText)
    }
}

function compareCards(length){
    if(length === 2){
        if(openCards[0].dataset.index === openCards[1].dataset.index){
            matchedPairs++;
            openCards = [];
        } else {
            setTimeout(unmatched, 1000)
        }
    }
}