let startButton = document.getElementById("start-button");
let timer = document.getElementById("timer")
let quizBody = document.getElementById("quiz-body");
let questionBox = document.getElementById("question-box");
let answerBox = document.getElementById("answer-box");
let optionA = document.getElementById("option-A");
let optionB = document.getElementById("option-B");
let optionC = document.getElementById("option-C");
let optionD = document.getElementById("option-D");
let hiddenMessage = document.getElementById("hidden-message");
let scoreBoard = document.getElementById("score-board");

let quiz = [
    {question: "What color is the sky?",
    choices: ["blue", "green", "grey", "orange"],
    answers: [true, false, false, false]
    },
    {question: "What do fish do?",
    choices: ["fly", "swim", "run", "nothing"],
    answers: [false, true, false, false]
    },
    {question: "Are you hungry?",
    choices: ["maybe", "yes", "no", "I am the correct answer"],
    answers: [false, false, false, true]
    },
    {question: "What is the meaning of life?",
    choices: ["Existence", "To leave the world a better place", "There is no purpose", "I am still the correct answer"],
    answers: [false, false, false, true]
    },
    {question: "You have a 25% chance of getting this question correct by choosing at random.",
    choices: ["option A", "option B", "option C", "option D"],
    answers: [false, false, true, false]
    }
];

let timeLeft = 10;
let score = 0; //remove once turning local storage back on.
// let score = localStorage.getItem("score");



scoreBoard.textContent = score;

// provides functionality for start button to begin the quiz. 
function startQuiz(event) {
    event.preventDefault()
    startButton.style = "visibility: hidden" // hides start button when quiz started
    quizBody.style = "visibility: visible" // shows quiz body when quiz started
    let quizTime = setInterval(function() {
        timer.textContent = `Time left: ${timeLeft}`;
        timeLeft--
        if(timeLeft === 0){
            hiddenMessage.textContent = "Time's up!";
            hiddenMessage.style = "visibility: visible";
            quizBody.style = "visibility: hidden";
            startButton.style = "visibility: visible";
            timer.textContent = `You are out of time`;
            clearInterval(quizTime)
        }
    }, 1000);
};

// increases score when called. Need to link to correct answers from answer bank. 
function increaseScore() {
    score++;
    scoreBoard.textContent = `Score: ${score}`;
    // localStorage.setItem("score", score);
}

//decreases the timer value by 5 upon each call.
function decreaseTimer() {
    timeLeft-=5;
}

function answerChecker(x, y) {
    if (quiz[x].answers[y] == true) {
        increaseScore()
    }
    else {
        decreaseTimer()
    }
}

function questionOne() {
    questionBox.textContent = quiz[0].question
    optionA.textContent = quiz[0].choices[0];
    optionA.addEventListener("click", questionTwo);
    optionA.addEventListener("click", function() {answerChecker(0, 0);});
    optionB.textContent = quiz[0].choices[1];
    // optionB.addEventListener("click", questionTwo);
    optionB.addEventListener("click", function() {answerChecker(0, 1);});
    optionC.textContent = quiz[0].choices[2];
    // optionC.addEventListener("click", questionTwo);
    optionC.addEventListener("click", function() {answerChecker(0, 2);});
    optionD.textContent = quiz[0].choices[3];
    // optionD.addEventListener("click", questionTwo);
    optionD.addEventListener("click", function() {answerChecker(0, 3);});   
};
function questionTwo() {
    questionBox.textContent = quiz[1].question;
    optionA.textContent = quiz[1].choices[0];
    optionA.addEventListener("click", questionThree);
    optionA.addEventListener("click", function() {answerChecker(1, 0);});
    optionB.textContent = quiz[1].choices[1];
    // optionB.addEventListener("click", questionThree);
    optionB.addEventListener("click", function() {answerChecker(1, 1);});
    optionC.textContent = quiz[1].choices[2];
    // optionC.addEventListener("click", questionThree);
    optionC.addEventListener("click", function() {answerChecker(1, 2);});
    optionD.textContent = quiz[1].choices[3];
    // optionD.addEventListener("click", questionThree);
    optionD.addEventListener("click", function() {answerChecker(1, 3);});
};
function questionThree() {
    questionBox.textContent = quiz[2].question
    optionA.textContent = quiz[2].choices[0];
    optionA.addEventListener("click", questionFour);
    optionA.addEventListener("click", function() {answerChecker(2, 0);});
    optionB.textContent = quiz[2].choices[1];
    // optionB.addEventListener("click", questionFour);
    optionB.addEventListener("click", function() {answerChecker(2, 1);});
    optionC.textContent = quiz[2].choices[2];
    // optionC.addEventListener("click", questionFour);
    optionC.addEventListener("click", function() {answerChecker(2, 2);});
    optionD.textContent = quiz[2].choices[3];
    // optionD.addEventListener("click", questionFour);
    optionD.addEventListener("click", function() {answerChecker(2, 3);});   
};
function questionFour() {
    questionBox.textContent = quiz[3].question
    optionA.textContent = quiz[3].choices[0];
    optionA.addEventListener("click", questionFive);
    optionA.addEventListener("click", function() {answerChecker(3, 0);});
    optionB.textContent = quiz[3].choices[1];
    // optionB.addEventListener("click", questionFive);
    optionB.addEventListener("click", function() {answerChecker(3, 1);});
    optionC.textContent = quiz[3].choices[2];
    // optionC.addEventListener("click", questionFive);
    optionC.addEventListener("click", function() {answerChecker(3, 2);});
    optionD.textContent = quiz[3].choices[3];
    // optionD.addEventListener("click", questionFive);
    optionD.addEventListener("click", function() {answerChecker(3, 3);});   
};
function questionFive() {
    questionBox.textContent = quiz[4].question
    optionA.textContent = quiz[4].choices[0];
    // optionA.addEventListener("click", questionTwo);
    optionA.addEventListener("click", function() {answerChecker(4, 0);});
    optionB.textContent = quiz[4].choices[1];
    // optionB.addEventListener("click", questionTwo);
    optionB.addEventListener("click", function() {answerChecker(4, 1);});
    optionC.textContent = quiz[4].choices[2];
    // optionC.addEventListener("click", questionTwo);
    optionC.addEventListener("click", function() {answerChecker(4, 2);});
    optionD.textContent = quiz[4].choices[3];
    // optionD.addEventListener("click", questionTwo);
    optionD.addEventListener("click", function() {answerChecker(4, 3);});   
};

startButton.addEventListener("click", startQuiz);
startButton.addEventListener("click", questionOne);
// startButton.addEventListener("click", ***);