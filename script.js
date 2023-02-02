const gameContainer = document.getElementById("game");
let firstCard = null;
let secondCard = null;
let cardClicks = 0;
let cardsFlipped = false;

const COLORS = [
 "red",
 "blue",
 "green",
 "orange",
 "purple",
 "red",
 "blue",
 "green",
 "orange",
 "purple"
];


function shuffle(array) {
 let counter = array.length;
 while (counter > 0) {
   let index = Math.floor(Math.random() * counter);
   counter--;
   let temp = array[counter];
   array[counter] = array[index];
   array[index] = temp;
 }


 return array;
}


let shuffledColors = shuffle(COLORS);

function createDivsForColors(colorArray) {
 for (let color of colorArray) {
   const newDiv = document.createElement("div");
   newDiv.classList.add(color);
   newDiv.addEventListener("click", handleCardClick);
   gameContainer.append(newDiv);
 }
}

function handleCardClick(event) {
 event.target.style.backgroundColor = event.target.classList[0];

 if (!firstCard || !secondCard) {
   firstCard = firstCard || event.target;
   secondCard = event.target === firstCard ? null : event.target;
 }

 if (firstCard && secondCard) {
   cardsFlipped = true;
   let card1 = firstCard.className;
   let card2 = secondCard.className;

   if (card1 === card2) {
     firstCard.removeEventListener("click", handleCardClick);
     secondCard.removeEventListener("click", handleCardClick);
     firstCard = null;
     secondCard = null;
     cardsFlipped = false;
   } else {
     setTimeout(function() {
       firstCard.style.backgroundColor = "";
       secondCard.style.backgroundColor = "";
       firstCard = null;
       secondCard = null;
       cardsFlipped = false;
     }, 1000);
   }
 }
 if (cardClicks === COLORS.length) alert("GAME OVER!");
}

createDivsForColors(shuffledColors);


