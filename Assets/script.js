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
let score = 0;
// let score = localStorage.getItem("score");
let questionBank = ["What color is the sky?", "What do fish do?", "Are you hungry?", "What is the meaning of life?", "You have a 25% chance of getting this question right choosing at random."];
let answerBankA = ["blue", "fly", "Maybe", "Existence", "option A"];
let answerBankB = ["green", "swim", "yes", "To leave the world a better place", "option B"];
let answerBankC = ["grey", "run", "no", "I don't know", "option C"];
let answerBankD = ["orange", "nothing", "I am the correct answer", "I am still the correct answer", "Am I still the right answer?"];

scoreBoard.textContent = score;

function startQuiz(event) {
    event.preventDefault()
    startButton.style = "visibility: hidden"
    quizBody.style = "visibility: visible"
    let timeLeft = 10;
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

function increaseScore(event) {
    event.preventDefault()
    score++;
    scoreBoard.textContent = `Score: ${score}`;
    // localStorage.setItem("score", score);
}

function questionOne() {
    questionBox.textContent = questionBank[0];
    optionA.textContent = answerBankA[0];
    optionA.addEventListener("click", questionTwo);
    optionA.addEventListener("click", increaseScore);
    optionB.textContent = answerBankB[0];
    optionB.addEventListener("click", questionTwo)
    optionC.textContent = answerBankC[0];
    optionC.addEventListener("click", questionTwo)
    optionD.textContent = answerBankD[0];
    optionD.addEventListener("click", questionTwo)
};
function questionTwo() {
    questionBox.textContent = questionBank[1];
    optionA.textContent = answerBankA[1];
    optionA.addEventListener("click", questionThree)
    optionB.textContent = answerBankB[1];
    optionB.addEventListener("click", questionThree)
    optionB.addEventListener("click", increaseScore);
    optionC.textContent = answerBankC[1];
    optionC.addEventListener("click", questionThree)
    optionD.textContent = answerBankD[1];
    optionD.addEventListener("click", questionThree)
};
function questionThree() {
    questionBox.textContent = questionBank[2];
    optionA.textContent = answerBankA[2];
    optionA.addEventListener("click", questionFour)
    optionB.textContent = answerBankB[2];
    optionB.addEventListener("click", questionFour)
    optionC.textContent = answerBankC[2];
    optionC.addEventListener("click", questionFour)
    optionD.textContent = answerBankD[2];
    optionD.addEventListener("click", questionFour)
    optionD.addEventListener("click", increaseScore);
};
function questionFour() {
    questionBox.textContent = questionBank[3];
    optionA.textContent = answerBankA[3];
    optionA.addEventListener("click", questionFive)
    optionB.textContent = answerBankB[3];
    optionB.addEventListener("click", questionFive)
    optionC.textContent = answerBankC[3];
    optionC.addEventListener("click", questionFive)
    optionD.textContent = answerBankD[3];
    optionD.addEventListener("click", questionFive)
    optionD.addEventListener("click", increaseScore);
};
function questionFive() {
    questionBox.textContent = questionBank[4];
    optionA.textContent = answerBankA[4];
    optionA.addEventListener("click", questionTwo)
    optionB.textContent = answerBankB[4];
    optionB.addEventListener("click", questionTwo)
    optionB.addEventListener("click", increaseScore);
    optionC.textContent = answerBankC[4];
    optionC.addEventListener("click", questionTwo)
    optionD.textContent = answerBankD[4];
    optionD.addEventListener("click", questionTwo)
};

startButton.addEventListener("click", startQuiz);
startButton.addEventListener("click", questionOne);
// startButton.addEventListener("click", ***);