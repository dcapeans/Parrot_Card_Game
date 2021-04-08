let NumberCards;

function askCardNumber(){
    NumberCards = prompt("Com quantas cartas quer jogar? (Min:4 Max: 14)")
    while(NumberCards < 4 || NumberCards > 14 || NumberCards % 2 === 1){
        NumberCards = prompt("Com quantas cartas quer jogar? (Min:4 Max: 14)")
    }
}
// askCardNumber()

const cardsList = [1, 2, 3, 4, 5, 6, 7];
const cardsIndex = [];

function setCardsIndex(){
    for(let i = 0; i <= NumberCards/2 - 1; i++){
        cardsIndex.push(i)
        cardsIndex.push(i)
    }
}

function randomNumber(){
    return Math.round(Math.random() - 1);
}

function shuffle(){
    cardsIndex.sort(randomNumber)
}





function flipCard(element){
    element.classList.add("flip")
}

