var preGame = document.getElementById("pre-game");
var game = document.getElementById("game");
var gameEnd = document.getElementById("game-end");
var hiScore = document.getElementById("hi-score");
var intro = document.getElementById("intro")

var startButton = document.getElementById("start-button");
var hiButton = document.getElementById("hi");
var backButton = document.getElementById("back");

hiButton.addEventListener("click", viewHiScore);
backButton.addEventListener("click", function () {
    document.location.reload();
});


startButton.addEventListener("click", startGame);

function startGame() {
    preGame.setAttribute("class", "is-inactive");
    game.setAttribute("class", "is-active");
    gameEnd.setAttribute("class", "is-inactive");
    hiScore.setAttribute("class", "is-inactive");
    startButton.setAttribute("class", "is-inactive");
    intro.setAttribute("class", "is-inactive");
}

var firstQuestion = document.getElementById("first-question"); 
var secondQuestion = document.getElementById("second-question"); 
var thirdQuestion = document.getElementById("third-question"); 
var fourthQuestion = document.getElementById("fourth-question"); 
var fifthQuestion = document.getElementById("fifth-question"); 

function Question1 () {
    firstQuestion.setAttribute ("class", "is-active");
    secondQuestion.setAttribute ("class", "is-inactive");
    thirdQuestion.setAttribute ("class", "is-inactive");
    fourthQuestion.setAttribute ("class", "is-inactive");
    fifthQuestion.setAttribute ("class", "is-inactive");
}

//function to tell if chosen answer is correct/wrong AND
//also moves on to the next question in 1 second ON
//CLICK of an answer

function endGame() {
    game.setAttribute("class", "is-inactive");
    gameEnd.setAttribute("class", "is-active");
}

function viewHiScore() {
    preGame.setAttribute("class", "is-inactive");
    game.setAttribute("class", "is-inactive");
    gameEnd.setAttribute("class", "is-inactive");
    hiScore.setAttribute("class", "is-active");
}

var timeLeft = 60;
var elem = document.getElementById('Timer');

var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == 0) {
    clearTimeout(timerId);
    doSomething();
  } else {
    elem.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
  }
}


