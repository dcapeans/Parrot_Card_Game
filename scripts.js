let NumberCards;
const container = document.querySelector(".container")
const cardsList = ["unicornparrot.gif", "bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif"];
let cardsIndex = [];
let openCards = [];
let matchedPairs = 0;
let movesCounter = 0;
let timer = document.querySelector(".timer")
let second = 0
let minute = 0
let interval;

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
    if(openCards.length === 2){
        return
    }
    if(!element.classList.contains("flip")){
        element.classList.add("flip")
        openCards.push(element)
        addMovesCounter()
        compareCards(openCards.length)
    }
    setTimeout(checkEndGame, 200)
}

function unmatched(){
    openCards[0].classList.remove("flip")
    openCards[1].classList.remove("flip")
    openCards = [];
}

function checkEndGame(){
    gameOverText = `Você ganhou em ${movesCounter} jogadas em ${minute}min e ${second}s`
    if(matchedPairs === NumberCards/2){
        clearInterval(interval)
        alert(gameOverText)
        restartGame()
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

function addMovesCounter(){
    movesCounter++
    if(movesCounter === 1){
        second = 0;
        minute = 0;
        setTimer()
    }
}

function setTimer(){
    interval = setInterval(function(){
        timer.innerHTML = `${minute}min ${second}s`;
        second++
        if(second === 60){
            minute++
            second = 0;
        }
        
    }, 1000)
}

function restartGame(){
    const restart = prompt("Gostaria de jogar novamente?")
    if(restart === "sim"){
        movesCounter = 0
        matchedPairs = 0
        cardsIndex = []
        container.innerHTML = ""
        second= 0
        minute = 0
        timer.innerHTML = `${minute}min ${second}s`;
        askCardNumber()
    }
}