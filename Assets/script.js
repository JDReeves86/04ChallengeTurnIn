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
let restart = document.getElementById("restart");
let score = 0;

// Allows for global scoping of timer so it can be stopped upon completion of quiz.
let quizTime; 

// Allows for global scoping of remaining time
let timeLeft; 

// for setting local storage of userScores object
let highScores = [] 

// stored user initials, score, and remaining time to be pushed into highScores array prior to being set to local storage.
let userScores = {} 

//Quiz bank, includes questions/answers/booleans
let quiz = [
    {question: "Which type of loop is used to perform repeated actions?",
    choices: ["for loop", "and loop", "if loop", "whoop loop"],
    answers: [true, false, false, false]
    },
    {question: "What type of brackets are used in an array?",
    choices: ["curly", "straight", "round", "angle"],
    answers: [false, true, false, false]
    },
    {question: "HTML stands for ______.",
    choices: ["Hyper Text Make-up Language", "Hyper Time Markup Lamguage", "Hyper Text Markup Lingo", "Hyper Text Markup Language"],
    answers: [false, false, false, true]
    },
    {question: "The && operator is used for _______.",
    choices: ["concatinating strings together", "creating a comment line", "logical operators meaning AND", "logical operators meaning OR"],
    answers: [false, false, true, false]
    },
    {question: "Math.random() is used to generate random ______. ",
    choices: ["functions", "variables", "numbers", "letters"],
    answers: [false, false, true, false]
    }
];

scoreBoard.textContent = `Score: ${score}` 

// provides functionality for start button to begin the quiz. 
function startQuiz() {
    startButton.style = "visibility: hidden"; // hides start button upon starting quiz
    quizBody.style = "visibility: visible"; // shows quiz body when quiz started
    timeLeft = 90;
    quizTime = setInterval(function() { 
        timeLeft--;
        timer.textContent = `Time left: ${timeLeft}`;
        if(timeLeft <= 0){
            clearInterval(quizTime);
            finalPage();
        };
    }, 1000);
};

// checks boolean values in object associated with correct answers. True = correct answer. If true, adds a point to the score, if false, timer decreases by 5 seconds.
function answerChecker(x, y) {
    if (quiz[x].answers[y] == true) {
        score++;
        scoreBoard.textContent = `Score: ${score}` 
        hiddenMessage.textContent = "Correct"
    }
    else {
        timeLeft-=15;
        hiddenMessage.textContent = "Incorrect"
    }
};


function questionPopulation(a, b, c, d, e) {
    let i = a
    questionBox.textContent = quiz[i].question;
    switch (i) {
        case 0: 
            optionA.dataset.quiz = i;
            optionA.dataset.answer = b;
            optionA.textContent = quiz[optionA.dataset.quiz].choices[optionA.dataset.answer];
            optionB.dataset.quiz = i;
            optionB.dataset.answer = c;
            optionB.textContent = quiz[optionB.dataset.quiz].choices[optionB.dataset.answer];
            optionC.dataset.quiz = i;
            optionC.dataset.answer = d;
            optionC.textContent = quiz[optionC.dataset.quiz].choices[optionC.dataset.answer];
            optionD.dataset.quiz = i;
            optionD.dataset.answer = e;
            optionD.textContent = quiz[optionD.dataset.quiz].choices[optionD.dataset.answer];
        case 1:
            optionA.dataset.quiz = i;
            optionA.dataset.answer = b;
            optionA.textContent = quiz[optionA.dataset.quiz].choices[optionA.dataset.answer];
            optionB.dataset.quiz = i;
            optionB.dataset.answer = c;
            optionB.textContent = quiz[optionB.dataset.quiz].choices[optionB.dataset.answer];
            optionC.dataset.quiz = i;
            optionC.dataset.answer = d;
            optionC.textContent = quiz[optionC.dataset.quiz].choices[optionC.dataset.answer];
            optionD.dataset.quiz = i;
            optionD.dataset.answer = e;
            optionD.textContent = quiz[optionD.dataset.quiz].choices[optionD.dataset.answer];
        case 2:
            optionA.dataset.quiz = i;
            optionA.dataset.answer = b;
            optionA.textContent = quiz[optionA.dataset.quiz].choices[optionA.dataset.answer];
            optionB.dataset.quiz = i;
            optionB.dataset.answer = c;
            optionB.textContent = quiz[optionB.dataset.quiz].choices[optionB.dataset.answer];
            optionC.dataset.quiz = i;
            optionC.dataset.answer = d;
            optionC.textContent = quiz[optionC.dataset.quiz].choices[optionC.dataset.answer];
            optionD.dataset.quiz = i;
            optionD.dataset.answer = e;
            optionD.textContent = quiz[optionD.dataset.quiz].choices[optionD.dataset.answer];
        case 3:
            optionA.dataset.quiz = i;
            optionA.dataset.answer = b;
            optionA.textContent = quiz[optionA.dataset.quiz].choices[optionA.dataset.answer];
            optionB.dataset.quiz = i;
            optionB.dataset.answer = c;
            optionB.textContent = quiz[optionB.dataset.quiz].choices[optionB.dataset.answer];
            optionC.dataset.quiz = i;
            optionC.dataset.answer = d;
            optionC.textContent = quiz[optionC.dataset.quiz].choices[optionC.dataset.answer];
            optionD.dataset.quiz = i;
            optionD.dataset.answer = e;
            optionD.textContent = quiz[optionD.dataset.quiz].choices[optionD.dataset.answer];
        case 4:
            optionA.dataset.quiz = i;
            optionA.dataset.answer = b;
            optionA.textContent = quiz[optionA.dataset.quiz].choices[optionA.dataset.answer];
            optionB.dataset.quiz = i;
            optionB.dataset.answer = c;
            optionB.textContent = quiz[optionB.dataset.quiz].choices[optionB.dataset.answer];
            optionC.dataset.quiz = i;
            optionC.dataset.answer = d;
            optionC.textContent = quiz[optionC.dataset.quiz].choices[optionC.dataset.answer];
            optionD.dataset.quiz = i;
            optionD.dataset.answer = e;
            optionD.textContent = quiz[optionD.dataset.quiz].choices[optionD.dataset.answer];
    };
    optionA.addEventListener("click", questionPopulation(i++, b, c, d, e));
    optionB.addEventListener("click", questionPopulation(i++, b, c, d, e));
    optionC.addEventListener("click", questionPopulation(i++, b, c, d, e));
    optionD.addEventListener("click", questionPopulation(i++, b, c, d, e)); 
};

//populates first question & assigns data values to allow for answerChecker function.
function questionOne() {
    questionBox.textContent = quiz[0].question;
    optionA.dataset.quiz = 0;
    optionA.dataset.answer = 0;
    optionA.textContent = quiz[optionA.dataset.quiz].choices[optionA.dataset.answer];
    optionA.addEventListener("click", questionTwo);
    optionB.dataset.quiz = 0;
    optionB.dataset.answer = 1;
    optionB.textContent = quiz[optionB.dataset.quiz].choices[optionB.dataset.answer];
    optionB.addEventListener("click", questionTwo);
    optionC.dataset.quiz = 0;
    optionC.dataset.answer = 2;
    optionC.textContent = quiz[optionC.dataset.quiz].choices[optionC.dataset.answer];
    optionC.addEventListener("click", questionTwo);
    optionD.dataset.quiz = 0;
    optionD.dataset.answer = 3;
    optionD.textContent = quiz[optionD.dataset.quiz].choices[optionD.dataset.answer];
    optionD.addEventListener("click", questionTwo);
};

//populates second question & reassigns data values
function questionTwo() {
    questionBox.textContent = quiz[1].question;
    optionA.dataset.quiz = 1;
    optionA.dataset.answer = 0;
    optionA.textContent = quiz[optionA.dataset.quiz].choices[optionA.dataset.answer];
    optionA.removeEventListener("click", questionTwo); // remove prior event listener to prevent stacking of event listeners.
    optionA.addEventListener("click", questionThree); // replace removed event listener to allow for moving on to next question.
    optionB.dataset.quiz = 1;
    optionB.dataset.answer = 1;
    optionB.textContent = quiz[optionB.dataset.quiz].choices[optionB.dataset.answer];
    optionB.removeEventListener("click", questionTwo);
    optionB.addEventListener("click", questionThree);
    optionC.dataset.quiz = 1;
    optionC.dataset.answer = 2;
    optionC.textContent = quiz[optionC.dataset.quiz].choices[optionC.dataset.answer];
    optionC.removeEventListener("click", questionTwo);
    optionC.addEventListener("click", questionThree);
    optionD.dataset.quiz = 1;
    optionD.dataset.answer = 3;
    optionD.textContent = quiz[optionD.dataset.quiz].choices[optionD.dataset.answer];
    optionD.removeEventListener("click", questionTwo);
    optionD.addEventListener("click", questionThree);
};

//populates third question & reassigns data values
function questionThree() {
    questionBox.textContent = quiz[2].question
    optionA.dataset.quiz = 2;
    optionA.dataset.answer = 0;
    optionA.textContent = quiz[optionA.dataset.quiz].choices[optionA.dataset.answer];
    optionA.removeEventListener("click", questionThree);
    optionA.addEventListener("click", questionFour);
    optionB.dataset.quiz = 2;
    optionB.dataset.answer = 1;
    optionB.textContent = quiz[optionB.dataset.quiz].choices[optionB.dataset.answer];
    optionB.removeEventListener("click", questionThree);
    optionB.addEventListener("click", questionFour);
    optionC.dataset.quiz = 2;
    optionC.dataset.answer = 2;
    optionC.textContent = quiz[optionC.dataset.quiz].choices[optionC.dataset.answer];
    optionC.removeEventListener("click", questionThree);
    optionC.addEventListener("click", questionFour);
    optionD.dataset.quiz = 2;
    optionD.dataset.answer = 3;
    optionD.textContent = quiz[optionD.dataset.quiz].choices[optionD.dataset.answer];
    optionD.removeEventListener("click", questionThree);
    optionD.addEventListener("click", questionFour);
};

// populates fourth question & reassigns data values
function questionFour() {
    questionBox.textContent = quiz[3].question
    optionA.dataset.quiz = 3;
    optionA.dataset.answer = 0;
    optionA.textContent = quiz[optionA.dataset.quiz].choices[optionA.dataset.answer];
    optionA.removeEventListener("click", questionFour);
    optionA.addEventListener("click", questionFive);
    optionB.dataset.quiz = 3;
    optionB.dataset.answer = 1;
    optionB.textContent = quiz[optionB.dataset.quiz].choices[optionB.dataset.answer];
    optionB.removeEventListener("click", questionFour);
    optionB.addEventListener("click", questionFive);
    optionC.dataset.quiz = 3;
    optionC.dataset.answer = 2;
    optionC.textContent = quiz[optionC.dataset.quiz].choices[optionC.dataset.answer];
    optionC.removeEventListener("click", questionFour);
    optionC.addEventListener("click", questionFive);
    optionD.dataset.quiz = 3;
    optionD.dataset.answer = 3;
    optionD.textContent = quiz[optionD.dataset.quiz].choices[optionD.dataset.answer];
    optionD.removeEventListener("click", questionFour);
    optionD.addEventListener("click", questionFive);
};

// populates fifth question & reassigns data values
function questionFive() {
    questionBox.textContent = quiz[4].question
    optionA.dataset.quiz = 4;
    optionA.dataset.answer = 0;
    optionA.textContent = quiz[optionA.dataset.quiz].choices[optionA.dataset.answer];
    optionA.removeEventListener("click", questionFive);
    optionA.addEventListener("click", finalPage);
    optionB.dataset.quiz = 4;
    optionB.dataset.answer = 1;
    optionB.textContent = quiz[optionB.dataset.quiz].choices[optionB.dataset.answer];
    optionB.removeEventListener("click", questionFive);
    optionB.addEventListener("click", finalPage);
    optionC.dataset.quiz = 4;
    optionC.dataset.answer = 2;
    optionC.textContent = quiz[optionC.dataset.quiz].choices[optionC.dataset.answer];
    optionC.removeEventListener("click", questionFive);
    optionC.addEventListener("click", finalPage);
    optionD.dataset.quiz = 4;
    optionD.dataset.answer = 3;
    optionD.textContent = quiz[optionD.dataset.quiz].choices[optionD.dataset.answer];
    optionD.removeEventListener("click", questionFive);
    optionD.addEventListener("click", finalPage);
};

// Takes user to final page, removes the quiz form HTML elements and generates a form for the user to input their data. Submit button calls generateLeaderboard function.
function finalPage() {
    quizBody.remove(); // Removes quiz body HTML prior to rendering new HTML elements

    clearInterval(quizTime); //Stops timer

    timer.textContent = `Quiz finished`;

    //creates form element
    let form = document.createElement("form");
    form.setAttribute("id", "username")
    form.textContent = "Input your initials";
    document.body.appendChild(form);

    //creates input field
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    form.appendChild(input);

    //creates button
    let button = document.createElement("button");
    button.textContent = "submit";
    button.setAttribute("id", "submit-score");
    form.appendChild(button);

    //button listener event
    document.getElementById("submit-score").addEventListener("click", function(event){
        event.preventDefault();

        //sets user inputted initials, current score and timeLeft values into the userScores object declared earlier.
        userScores.user = input.value
        userScores.totalScore = score
        userScores.totalTime = timeLeft
        storeHighScores()
        console.log(userScores) //auditing object & arrays
        console.log(highScores) //

        //calls function to create leaderboard
        generateLeaderBoard();
    });
}


// Generates the leaderboard, requires input from the user as the 'x' variable to ensure users typed input is displayed.
function generateLeaderBoard() {
    document.getElementById("username").remove(); // Remove form input elements

    let leaderBoard = document.createElement("div"); // generates div for leaderboard elements
    leaderBoard.setAttribute("id", "leaderboard");
    document.body.appendChild(leaderBoard);

    let header = document.createElement("h3"); // generates leaderboard header h3
    header.textContent = "Leaderboard";
    leaderBoard.appendChild(header);

    let list = document.createElement("ol"); //generates leaderboard ol
    leaderBoard.appendChild(list);

    // loops through highScores array and reaches into the objects stored in the array to display data. Loop necessary as multiple objects may be stored in array.
    for (i = 0; i < highScores.length; i++) {
        let highscoreUsers = `${highScores[i].user} \u00a0 \u00a0 Score: ${highScores[i].totalScore} \u00a0 \u00a0 Remaining time: ${highScores[i].totalTime}`;
        let highscoreListItem = document.createElement("li"); // generates list item for leaderboard
        highscoreListItem.textContent = highscoreUsers; // set li text content 
        list.appendChild(highscoreListItem) // appends generated li before looping again.
    }

    let restart = document.createElement("button"); // generates restart button to restart the page
    restart.setAttribute("id", "restart");
    restart.textContent = "Restart"
    leaderBoard.appendChild(restart);

    restart.addEventListener("click", function(){ // sets functionality of reset button. Merely reloads page
        window.location.reload()
    });

    let clearLeaderboard = document.createElement("button"); // generates clear leaderboard button to restart the page
    clearLeaderboard.setAttribute("id", "clear");
    clearLeaderboard.textContent = "Clear leaderboard"
    leaderBoard.appendChild(clearLeaderboard);

    // clear leaderboard functionality. Pushes current userScores object into the array before splicing index 0 to purge entire array. Then resets local storage to the now empty array.
    clearLeaderboard.addEventListener("click", function(){
        highScores.push(userScores)
        highScores.splice(0)
        localStorage.setItem("highscores", JSON.stringify(highScores))
        console.log(highScores); // auditing newly cleared array
        regenLeaderBoard(); // calls regenLeaderBoard()
    });
}

// Copy/Paste of generateLaderboard(), except instead of removing the form element, it removes the leaderboard element and reconstructs it. 
function regenLeaderBoard() {
    document.getElementById("leaderboard").remove(); // Remove form input elements

    let leaderBoard = document.createElement("div");
    leaderBoard.setAttribute("id", "leaderboard");
    document.body.appendChild(leaderBoard);

    let header = document.createElement("h3");
    header.textContent = "Leaderboard";
    leaderBoard.appendChild(header);

    let list = document.createElement("ol");
    leaderBoard.appendChild(list);

    for (i = 0; i < highScores.length; i++) {
        let highscoreUsers = `${highScores[i].user} \u00a0 \u00a0 Score: ${highScores[i].totalScore} \u00a0 \u00a0 Remaining time: ${highScores[i].totalTime}`;
        let highscoreListItem = document.createElement("li");
        highscoreListItem.textContent = highscoreUsers;

        list.appendChild(highscoreListItem)
    }

    let restart = document.createElement("button"); 
    restart.setAttribute("id", "restart");
    restart.textContent = "Restart"
    leaderBoard.appendChild(restart);

    restart.addEventListener("click", function(){
        optionA.removeEventListener("click", finalPage)
        optionB.removeEventListener("click", finalPage)
        optionC.removeEventListener("click", finalPage)
        optionD.removeEventListener("click", finalPage)
        window.location.reload()
    });

    let clearLeaderboard = document.createElement("button"); // generates clear leaderboard button to restart the page for aesthetics only, listener event removed as once leaderboard is cleared there is no purpose in this button.
    clearLeaderboard.textContent = "Clear leaderboard"
    leaderBoard.appendChild(clearLeaderboard);
}

// checks localstorage for highscores. If present, parses objects within the array and places into highScores array to be used during leaderboard generation.
function init() {
    let storedHighScores = JSON.parse(localStorage.getItem("highscores"))
    if (storedHighScores !== null) {
        highScores = storedHighScores
    }
}

// takes userScores object popuylated by current users data and pushes into highScores array before stringifying it and placing into local storage.
function storeHighScores() {
    highScores.push(userScores)
    localStorage.setItem("highscores", JSON.stringify(highScores))
}

//calls init()
init()

startButton.addEventListener("click", startQuiz);
startButton.addEventListener("click", questionPopulation(0, 0, 1, 2, 3));

// Event listeners for each of the selectable options. Pulls the dataset values assigned to the elements and passes those values into the answerChecker function when called.
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


