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

//when start button is clicked, questions pop up
startButton.addEventListener("click", startGame);

function startGame() {
    preGame.setAttribute("class", "is-inactive");
    game.setAttribute("class", "is-active");
    gameEnd.setAttribute("class", "is-inactive");
    hiScore.setAttribute("class", "is-inactive");
    startButton.setAttribute("class", "is-inactive");
    intro.setAttribute("class", "is-inactive");
}

//function to tell if chosen answer is correct/wrong AND
//also moves on to the next question in 1 second ON
//CLICK of an answer

// var answerButton = document.getElementsByClassName("answer-button");
// answerButton.addEventListener("click", ;


var currentQuestion = 0;

var loadQuestions = [
    {
        question: "Where do we link JavaScript in the index.html?",
        answer: [
            {choice: "In the head.", answer: false}, 
            {choice: "In the beginning of the body.", answer: false},
            {choice: "At the end of the body.", answer: true},
            {choice: "In the footer.", answer: false}
            
        ]
    }, 
    {
        question: "What does location.reload(); do?",
        answer: [
            {choice: "It takes you back to the homepage.", answer: false},
            {choice: "It forces the page to reload.", answer: true},
            {choice: "It stops the page from reloading.", answer: false},
            {choice: "It forces a page to reload when you reach a specific page.", answer: false}
        ]
    },
    {
        question: "Which of the following stores data even after a browser has closed and/or computer has restarted?",
        answer: [
            {choice: "Cookies", answer: false},
            {choice: "sessionStorage", answer: false},
            {choice: "Cache Storage", answer: false},
            {choice: "localStorage", answer: true}
        ]
    },
];

//push questions and answers to choices html


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

//when timer ends, message pops up to end game and show user
//their high score and show the option to go back to intro page
var timeLeft = 5;
var time = document.getElementById('Timer');


game.addEventListener("click", function() {
    var timer = setInterval(countdown, 1000);
});

function countdown() {
  if (timeLeft == 0) {
    gameEnd.setAttribute("class", "is-active");
    hiScore.setAttribute("class", "is-active");
    preGame.setAttribute("class", "is-inactive");
    startButton.setAttribute("class", "is-inactive");
    intro.setAttribute("class", "is-inactive");
  } else {
    time.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
  }
}


