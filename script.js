"use strict";

//Selecting Elements
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//Selecting Condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
let currentScore = 0;
let activePlayer = 0;

//Roling dice funcationlity
btnRoll.addEventListener("click", () => {
  //Generate Random number
  const diceRandomNumber = Math.trunc(Math.random() * 6) + 1;

  //Display number
  diceEl.classList.remove("hidden");
  diceEl.src = `assets/dice-${diceRandomNumber}.png`;

  //Check if true or switch player
  if (diceRandomNumber !== 1) {
    currentScore += diceRandomNumber;
    document.querySelector( `#current--${activePlayer}`).textContent = currentScore;
  }
  else{
    //Switch Player
    document.querySelector( `#current--${activePlayer}`).textContent = 0;
    currentScore=0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
  }
});
