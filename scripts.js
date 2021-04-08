let NumberCards;
const cardsList = ["unicornparrot.gif", "bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif"];
const cardsIndex = [];

askCardNumber()

function askCardNumber() {
    NumberCards = prompt("Com quantas cartas quer jogar? (Min:4 Max: 14)")
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
            <article class="card" onclick="flipCard(this)">
                <div class="front-face face">
                    <img src="images/front.png" alt="Parrot image">
                </div>
                <div class="back-face face">
                    <img src="images/${cardsList[cardsIndex[i]]}" alt="Parrot image">
                </div>
            </article>
        `
        }
    // backImage.setAttribute("src", "")
}

function randomNumber() {
    return Math.round(Math.random() - 1);
}

function shuffle() {
    cardsIndex.sort(randomNumber)
}

function flipCard(element) {
    element.classList.add("flip")
}