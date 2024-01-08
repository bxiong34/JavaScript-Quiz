var preGame = document.getElementById("pre-game");
var game = document.getElementById("game");
var gameEnd = document.getElementById("game-end");
var intro = document.getElementById("intro")
var hiScore = document.getElementById("hi-score")
var startButton = document.getElementById("start-button");
var hiButton = document.getElementById("hi");
var backButton = document.getElementById("back");

hiButton.addEventListener("click", viewHiScore);
backButton.addEventListener("click", function () {
    document.location.reload();
});

var score = 0;

function updateHighScore() {
    // get highest score from local storage
    var storedHighScore = localStorage.getItem("highScore");

    // calculate current score
    var currentPercentage = (score / totalQuestions) * 100;

    // if there is no stored high score or the current score is higher, update it
    if (storedHighScore === null || currentPercentage > parseFloat(storedHighScore)) {
        localStorage.setItem("highScore", currentPercentage.toFixed(2));
    }

    // show the updated highest score
    var hiScoreElement = document.getElementById("your-hi-score");
    hiScoreElement.textContent = "Your Highest Score: " + localStorage.getItem("highScore") + "%";
}

// 5 questions for quiz
var questions = [
    {
        question: "Where do we link JavaScript in the index.html?",
        answer: [
            {choice: "In the head", answer: false}, 
            {choice: "In the beginning of the body", answer: false},
            {choice: "At the end of the body", answer: true},
            {choice: "In the footer", answer: false}
            
        ]
    }, 
    {
        question: "What does location.reload(); do?",
        answer: [
            {choice: "It takes you back to the homepage", answer: false},
            {choice: "It forces the page to reload", answer: true},
            {choice: "It stops the page from reloading", answer: false},
            {choice: "It forces a page to reload when you reach a specific page", answer: false}
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
        question: "How do you retrieve the contents of a class element using innerHTML?",
        answer: [
            {choice: "getElementsByClassName", answer: true},
            {choice: "getElementById", answer: false},
            {choice: "getElementsByClass", answer: false},
            {choice: "getClassName", answer: false}
        ]
    },
    {
        question: "Which of the following statement is true about '==' and '==='?",
        answer: [
            {choice: "'==' checks for values but not datatype. '===' checks for datatype AND values", answer: true},
            {choice: "'==' checks for values AND datatype. '===' checks for values but not datatype", answer: false},
            {choice: "'==' checks for values. '===' checks for the datatype", answer: false},
            {choice: "They are the same and can be used interchangeably", answer: false}
        ]
    },
];
console.log(questions);

var currentQuestionIndex = 0;
var totalQuestions = questions.length;
var percentage = (score / totalQuestions) * 100;

function loadQuestions() {
    // check if there are more questions
    if (currentQuestionIndex < questions.length) {
        var currentQuestion = questions[currentQuestionIndex];

        // load the question
        var questionContainer = document.getElementById('question-container');
        questionContainer.innerHTML = '<p>' + (currentQuestionIndex + 1) + '. ' + currentQuestion.question + '</p>';

        // load the choices
        var choicesContainer = document.getElementById('choices-container');
        choicesContainer.innerHTML = '';

        currentQuestion.answer.forEach(function (choiceObj, index) {
            var choiceBtn = document.createElement('button');
            choiceBtn.className = 'choice-btn';
            choiceBtn.textContent = choiceObj.choice;

            // event listener for when a choice is clicked
            choiceBtn.addEventListener('click', function () {
                // check correct answer
                if (choiceObj.answer) {
                    alert('Correct!');
                    score++;
                    updateHighScore(); 
                } else {
                    alert('Incorrect!');
                }

                // moves to the next question
                currentQuestionIndex++;

                // load the next question
                loadQuestions();
            });

            choicesContainer.appendChild(choiceBtn);
        });
    } else {
        endGame();
    }
}

function viewScore() {
    // calculate the percentage at the moment of displaying
    var percentage = (score / totalQuestions) * 100;

    // view the score
    var yourScore = document.createElement('p');
    yourScore.className = 'your-score';
    yourScore.textContent = "Your Score: " + percentage.toFixed(2) + "%";
    document.getElementById('hi-score').appendChild(yourScore);

    updateHighScore();
}

function viewHiScore() {
    preGame.setAttribute("class", "is-inactive");
    game.setAttribute("class", "is-inactive");
    gameEnd.setAttribute("class", "is-inactive");
    hiScore.setAttribute("class", "is-active");
    timer.setAttribute("class", "is-inactive");

    updateHighScore();
}

// when 15 sec timer ends, message pops up to end game and show user their high score and show the option to go back to intro page
var timeLeft = 30;
var timer = document.getElementById('timer');
var countdownInterval;

function startTimer() {
    countdownInterval = setInterval(countdown, 1000);
}

function countdown() {
    if (timeLeft <= 0) {
        endGame();
    } else {
        timer.innerHTML = timeLeft + " seconds remaining";
        timeLeft--;
    }
}

function endGame() {
    clearInterval(countdownInterval); // stop the timer
    game.setAttribute("class", "is-inactive");
    gameEnd.setAttribute("class", "is-active");
    hiScore.setAttribute("class", "is-active");
    updateHighScore();
    viewScore();
}

function startGame() {
    preGame.setAttribute("class", "is-inactive");
    game.setAttribute("class", "is-active");
    gameEnd.setAttribute("class", "is-inactive");
    hiScore.setAttribute("class", "is-inactive");
    startButton.setAttribute("class", "is-inactive");
    intro.setAttribute("class", "is-inactive");
    startTimer();
    setTimeout(function () {
        loadQuestions();
        }, 1000);
}

// when start quiz button is pressed, timer starts
startButton.addEventListener("click", function () {
    startGame(); // starts game
});