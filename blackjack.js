/*
Blackjack
Author: Cheniece Manning
*/

let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];

let textArea = document.getElementById("text-area");
let newGameBtn = document.getElementById("new-game-btn");
let hitBtn = document.getElementById("hit-btn");
let stayBtn = document.getElementById("stay-btn");

hitBtn.style.display = 'none';
stayBtn.style.display = 'none';

newGameBtn.addEventListener('click', function(){
textArea.innerText = 'Started...';
newGameBtn.style.display = 'none';
hitBtn.style.display = 'inline';
stayBtn.style.display = 'inline';
});
function createDeck(){
    let deck = [];
    for (let suitIdx = 0; suitIdx<suits.length; suitIdx++){
        for (let valueIdx = 0; valueIdx < values.length; valueIdx++){
            let card = {
                suit: suits[suitIdx],
                value: values[valueIdx]
            };
            deck.push(card);
        }
    }
    return deck;
}

function getCardString(card){
    return card.value + ' of ' + card.suit;
}

function getNextCard(){
    return deck.shift();
}

let deck = createDeck();

let playerCards = [getNextCard(), getNextCard() ];
console.log("Welcome to Blackjack");

console.log("You are dealt: ");
console.log(" " + getCardString(playerCards[0]));
console.log(" " + getCardString(playerCards[1]));



