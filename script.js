'use strict';

//Selecting Elements
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.querySelector("#current--0");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//Selecting Condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
let currentScore = 0;

//Roling dice funcationlity
btnRoll.addEventListener("click",()=>{
    //Generate Random number
    const diceRandomNumber = Math.trunc(Math.random()*6) + 1;
    console.log(diceRandomNumber);
    //Display number
    diceEl.classList.remove("hidden");
    diceEl.src =`assets/dice-${diceRandomNumber}.png`


    //Check if true or switch player
    if(diceRandomNumber !== 1){
        currentScore += diceRandomNumber;
        current0El.textContent = currentScore
    }
})
