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
    timer.setAttribute("class", "is-active");

    //currentQuestion=0;
    
}

var question = document.getElementById("question")
var choice = document.getElementsByClassName("choice");


var totalQuestions = 5;
var currentQuestion = 0;

//5 questions for quiz
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
    {
        question: "How do you retrieve the contents of an element using innerHTML?",
        answer: [
            {choice: "getElementById", answer: false},
            {choice: "getElementsByClass", answer: false},
            {choice: "getElementsByClassName", answer: true},
            {choice: "getElementbyIdName", answer: false}
        ]
    },
    {
        question: "Which of the following statement is true about '==' and '==='?",
        answer: [
            {choice: "'==' checks for values but not datatype. '===' checks for datatype AND values.", answer: true},
            {choice: "'==' checks for values AND datatype. '===' checks for values but not datatype.", answer: false},
            {choice: "'==' checks for values. '===' checks for the datatype.", answer: false},
            {choice: "They are the same and can be used interchangeably.", answer: false}
        ]
    },
];
console.log(loadQuestions);



//push questions and answers to choices html


//save score to local storage
// localStorage.setItem(loadQuestions);



function endGame() {
    game.setAttribute("class", "is-inactive");
    gameEnd.setAttribute("class", "is-active");
    hiScore.setAttribute("class", "is-active");
}

function viewHiScore() {
    preGame.setAttribute("class", "is-inactive");
    game.setAttribute("class", "is-inactive");
    gameEnd.setAttribute("class", "is-inactive");
    hiScore.setAttribute("class", "is-active");
    timer.setAttribute("class", "is-inactive");
}

//seconds left is not showing on start quiz

//timer will be set to 30 but is 5 for now. when timer ends, message pops up to end game and show user
//their high score and show the option to go back to intro page
var timeLeft = 5;
var timer = document.getElementById('Timer');


//when start quiz button is pressed, timer starts
startButton.addEventListener("click", function() {
    var time = setInterval(countdown, 1000);
});

function countdown() {
  if (timeLeft == 0) {
    gameEnd.setAttribute("class", "is-active");
    hiScore.setAttribute("class", "is-active");
    preGame.setAttribute("class", "is-inactive");
    startButton.setAttribute("class", "is-inactive");
    intro.setAttribute("class", "is-inactive");
    timer.setAttribute("class", "is-inactive");
  } else {
    timer.innerHTML = timeLeft + " seconds remaining";
    timeLeft--;
  }
}



