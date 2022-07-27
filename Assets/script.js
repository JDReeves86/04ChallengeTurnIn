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

let timeLeft = 30;
let score = 0; //remove once turning local storage back on.
// let score = localStorage.getItem("score");

scoreBoard.textContent = `Score: --`;

// provides functionality for start button to begin the quiz. 
function startQuiz() {
    startButton.style = "visibility: hidden"; // hides start button when quiz started
    quizBody.style = "visibility: visible"; // shows quiz body when quiz started
    hiddenMessage.style = "visibility: hidden";
    let quizTime = setInterval(function() {
        timeLeft--;
        timer.textContent = `Time left: ${timeLeft}`;
        if(timeLeft <= 0){
            timeLeft = 30;
            score = 0;
            clearInterval(quizTime);
            outOfTime();
        };
    }, 1000);
};

// Changes HTML to display that the user ran out of time.
function outOfTime(){
    hiddenMessage.textContent = "Time's up!";
    hiddenMessage.style = "visibility: visible";
    quizBody.style = "visibility: hidden";
    startButton.style = "visibility: visible";
    timer.textContent = `You are out of time`;
};

// checks boolean values in object associated with correct answers. True = correct answer. If true, adds a point to the score, if false, timer decreases by 5 seconds.
function answerChecker(x, y) {
    if (quiz[x].answers[y] == true) {
        score++;
        scoreBoard.textContent = `Score: ${score}`
    }
    else {
        timeLeft-=5;
    }
};

function questionOne() {
    questionBox.textContent = quiz[0].question;
    optionA.dataset.quiz = 0;
    optionA.dataset.answer = 0;
    optionA.textContent = quiz[0].choices[0];
    optionA.addEventListener("click", questionTwo);
    optionB.dataset.quiz = 0;
    optionB.dataset.answer = 1;
    optionB.textContent = quiz[0].choices[1];
    optionB.addEventListener("click", questionTwo);
    optionC.dataset.quiz = 0;
    optionC.dataset.answer = 2;
    optionC.textContent = quiz[0].choices[2];
    optionC.addEventListener("click", questionTwo);
    optionD.dataset.quiz = 0;
    optionD.dataset.answer = 3;
    optionD.textContent = quiz[0].choices[3];
    optionD.addEventListener("click", questionTwo);
};
function questionTwo() {
    questionBox.textContent = quiz[1].question;
    optionA.dataset.quiz = 1;
    optionA.dataset.answer = 0;
    optionA.textContent = quiz[1].choices[0];
    optionA.addEventListener("click", questionThree);
    optionB.dataset.quiz = 1;
    optionB.dataset.answer = 1;
    optionB.textContent = quiz[1].choices[1];
    optionB.addEventListener("click", questionThree);
    optionC.dataset.quiz = 1;
    optionC.dataset.answer = 2;
    optionC.textContent = quiz[1].choices[2];
    optionC.addEventListener("click", questionThree);
    optionD.dataset.quiz = 1;
    optionD.dataset.answer = 3;
    optionD.textContent = quiz[1].choices[3];
    optionD.addEventListener("click", questionThree);
};
function questionThree() {
    questionBox.textContent = quiz[2].question
    optionA.dataset.quiz = 2;
    optionA.dataset.answer = 0;
    optionA.textContent = quiz[2].choices[0];
    optionA.addEventListener("click", questionFour);
    optionB.dataset.quiz = 2;
    optionB.dataset.answer = 1;
    optionB.textContent = quiz[2].choices[1];
    optionB.addEventListener("click", questionFour);
    optionC.dataset.quiz = 2;
    optionC.dataset.answer = 2;
    optionC.textContent = quiz[2].choices[2];
    optionC.addEventListener("click", questionFour);
    optionD.dataset.quiz = 2;
    optionD.dataset.answer = 3;
    optionD.textContent = quiz[2].choices[3];
    optionD.addEventListener("click", questionFour);
};
function questionFour() {
    questionBox.textContent = quiz[3].question
    optionA.dataset.quiz = 3;
    optionA.dataset.answer = 0;
    optionA.textContent = quiz[3].choices[0];
    optionA.addEventListener("click", questionFive);
    optionB.dataset.quiz = 3;
    optionB.dataset.answer = 1;
    optionB.textContent = quiz[3].choices[1];
    optionB.addEventListener("click", questionFive);
    optionC.dataset.quiz = 3;
    optionC.dataset.answer = 2;
    optionC.textContent = quiz[3].choices[2];
    optionC.addEventListener("click", questionFive);
    optionD.dataset.quiz = 3;
    optionD.dataset.answer = 3;
    optionD.textContent = quiz[3].choices[3];
    optionD.addEventListener("click", questionFive);
};
function questionFive() {
    questionBox.textContent = quiz[4].question
    optionA.dataset.quiz = 4;
    optionA.dataset.answer = 0;
    optionA.textContent = quiz[4].choices[0];
    optionB.dataset.quiz = 4;
    optionB.dataset.answer = 1;
    optionB.textContent = quiz[4].choices[1];
    optionC.dataset.quiz = 4;
    optionC.dataset.answer = 2;
    optionC.textContent = quiz[4].choices[2];
    optionD.dataset.quiz = 4;
    optionD.dataset.answer = 3;
    optionD.textContent = quiz[4].choices[3];
};

startButton.addEventListener("click", startQuiz);
startButton.addEventListener("click", questionOne);
// startButton.addEventListener("click", ***);

optionA.addEventListener("click", function(event) {
    let dataQuiz = event.target.getAttribute("data-quiz");
    let dataAnswer = event.target.getAttribute("data-answer");  
    answerChecker(dataQuiz, dataAnswer);
});
optionB.addEventListener("click", function(event) {
    let dataQuiz = event.target.getAttribute("data-quiz");
    let dataAnswer = event.target.getAttribute("data-answer");  
    answerChecker(dataQuiz, dataAnswer);
});
optionC.addEventListener("click", function(event) {
    let dataQuiz = event.target.getAttribute("data-quiz");
    let dataAnswer = event.target.getAttribute("data-answer");  
    answerChecker(dataQuiz, dataAnswer);
});
optionD.addEventListener("click", function(event) {
    let dataQuiz = event.target.getAttribute("data-quiz");
    let dataAnswer = event.target.getAttribute("data-answer");
    answerChecker(dataQuiz, dataAnswer);
}); 