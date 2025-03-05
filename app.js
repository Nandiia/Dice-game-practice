/* // Praper to start program

let isGameOver;

let activePlayer = 0;
let roundScore = 0;
let scores = [0, 0];

let diceNumber;


let diceImgDom = document.querySelector(".dice");

// The function that start game
function initGame () {

    diceImgDom.style.display="none";
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;
    document.getElementById("score-0").textContent = 0;
    document.getElementById("score-1").textContent = 0;

    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";

    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");

    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");

    document.querySelector(".player-0-panel").classList.add("active");


    
}

initGame();

// working ROLE DICE button

document.querySelector(".btn-roll").addEventListener("click", function() {
    
  if ( isGameOver !== true) {
    diceNumber = Math.floor(Math.random()*6)+1;
    
    diceImgDom.style.display = "block";
    diceImgDom.src = "dice-" + diceNumber + ".png";

   
    if ( diceNumber !== 1 ) {

        roundScore = roundScore + diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScore;

    } else {
        switchToNextPlayer();
    };
  }
});

// working HOLD btn
document.querySelector(".btn-hold").addEventListener("click", function() {

    if ( isGameOver !== true ) {
        scores[activePlayer] = scores[activePlayer] + roundScore;
        document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
    
        roundScore=0;
        document.getElementById("current-" + activePlayer).textContent = 0; 
    
        switchToNextPlayer();
    }   
});

// working New game - btn
document.querySelector(".btn-new").addEventListener("click", initGame)


function switchToNextPlayer() {
        roundScore = 0;
        document.getElementById("current-" + activePlayer).textContent = 0

        if( scores[activePlayer] >= 10 ) {
            
            isGameOver = true;
            
            document.getElementById("name-" + activePlayer).textContent = "Winner!!!";
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");

            return;
        }

        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ;
        diceImgDom.style.display = "none";

        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
} */


let isGameOver ;
let activePlayer = 0;
let currentNumber = 0;
let scores = [0, 0];

let diceNumbe = 0;

let domeDice = document.querySelector(".dice");

function initGame () {


    isGameOver = false;
    activePlayer = 0;
    currentNumber = 0;
    scores = [0, 0];

    diceNumbe = 0;

    domeDice.style.display = "none";
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;
    document.getElementById("score-0").textContent = 0;
    document.getElementById("score-1").textContent = 0;

    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");

    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
}

initGame();

document.querySelector(".btn-roll").addEventListener("click" , function () {

    if (isGameOver === false) {
        diceNumber = Math.floor(Math.random()*6)+1;

    if ( diceNumber === 1 ) {

        switchToNextPlayer();

    } else {
        domeDice.style.display = "block";
        domeDice.src = "dice-" + diceNumber + ".png";

        currentNumber = currentNumber + diceNumber;
    
        document.getElementById("current-" + activePlayer ).textContent = currentNumber;
    };

    }
    
});

document.querySelector(".btn-hold").addEventListener("click", function () {
    
    // if ( activePlayer === 0 ) {
    //     scores[0] = scores [0] + currentNumber;
    // } else {
    //     scores[1] = scores[1] + currentNumber;
    // }

    // document.getElementById("score-0").textContent=scores[0];
    // document.getElementById("score-1").textContent=scores[1];

    if ( isGameOver === false ) {
        scores[activePlayer] = scores[activePlayer] + currentNumber;
        document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];

        switchToNextPlayer();

    }

    
});

function switchToNextPlayer () {
    domeDice.style.display = 'none'
    currentNumber = 0;
    document.getElementById("current-" + activePlayer).textContent = 0

    if ( scores[activePlayer] >= 100 ){

        isGameOver = true;

        document.getElementById("name-" + activePlayer).textContent = "Winner!!!";
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");

        return;
    };

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
}

document.querySelector(".btn-new").addEventListener("click" , initGame);

