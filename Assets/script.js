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

// Declares i for incrementing through question generation function.
let i = 0;

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
    },
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

// Dynamically renders questions by taking input argument and using value to pull indexed value in quiz array.
function questionPopulation(a) {
    let i = a
    console.log(i);
    console.log(quiz.length);
    // Deleting this console.log breaks the function <<=========  WHY???
    console.log(
        questionBox.textContent = quiz[i].question, 
        optionA.dataset.quiz = i,
        optionA.dataset.answer = 0,
        optionA.textContent = quiz[i].choices[0],
        optionB.dataset.quiz = i,
        optionB.dataset.answer = 1,
        optionB.textContent = quiz[i].choices[1],
        optionC.dataset.quiz = i,
        optionC.dataset.answer = 2,
        optionC.textContent = quiz[i].choices[2],
        optionD.dataset.quiz = i,
        optionD.dataset.answer = 3,
        optionD.textContent = quiz[i].choices[3],
        );

    if(i === (quiz.length - 1)) {
        console.log("quiz.length - 1 reached");
        // optionA.removeEventListener("click", function(event) {
        //     let dataQuiz = event.target.getAttribute("data-quiz");
        //     let dataAnswer = event.target.getAttribute("data-answer");  
        //     answerChecker(dataQuiz, dataAnswer);
        //     questionPopulation(i);
        //     i++;
        // });
        optionA.addEventListener("click", finalPage);
        // optionB.removeEventListener("click", function(event) {
        //     let dataQuiz = event.target.getAttribute("data-quiz");
        //     let dataAnswer = event.target.getAttribute("data-answer");  
        //     answerChecker(dataQuiz, dataAnswer);
        //     questionPopulation(i);
        //     i++;
        // });
        optionB.addEventListener("click", finalPage);
        // optionC.removeEventListener("click", function(event) {
        //     let dataQuiz = event.target.getAttribute("data-quiz");
        //     let dataAnswer = event.target.getAttribute("data-answer");  
        //     answerChecker(dataQuiz, dataAnswer);
        //     questionPopulation(i);
        //     i++;
        // });
        optionC.addEventListener("click", finalPage);
        // optionD.removeEventListener("click", function(event) {
        //     let dataQuiz = event.target.getAttribute("data-quiz");
        //     let dataAnswer = event.target.getAttribute("data-answer");  
        //     answerChecker(dataQuiz, dataAnswer);
        //     questionPopulation(i);
        //     i++;
        // });
        optionD.addEventListener("click", finalPage);
    }
    else {
        optionA.dataset.quiz = i;
        optionA.dataset.answer = 0;
        optionA.textContent = quiz[i].choices[0];
        optionB.dataset.quiz = i;
        optionB.dataset.answer = 1;
        optionB.textContent = quiz[i].choices[1];
        optionC.dataset.quiz = i;
        optionC.dataset.answer = 2;
        optionC.textContent = quiz[i].choices[2];
        optionD.dataset.quiz = i;
        optionD.dataset.answer = 3;
        optionD.textContent = quiz[i].choices[3];
    };
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
startButton.addEventListener("click", function () {
    questionPopulation(i);
    i++; //need to increment i upon initial calling of the question population function to ensure questions cycle correctly.
});

// Event listeners for each of the selectable options. Pulls the dataset values assigned to the elements and passes those values into the answerChecker function when called.
optionA.addEventListener("click", function(event) {
    let dataQuiz = event.target.getAttribute("data-quiz");
    let dataAnswer = event.target.getAttribute("data-answer");  
    answerChecker(dataQuiz, dataAnswer);
    questionPopulation(i);
    i++;
});
optionB.addEventListener("click", function(event) {
    let dataQuiz = event.target.getAttribute("data-quiz");
    let dataAnswer = event.target.getAttribute("data-answer");  
    answerChecker(dataQuiz, dataAnswer)
    questionPopulation(i);
    i++;
});
optionC.addEventListener("click", function(event) {
    let dataQuiz = event.target.getAttribute("data-quiz");
    let dataAnswer = event.target.getAttribute("data-answer");  
    answerChecker(dataQuiz, dataAnswer)
    questionPopulation(i);
    i++;
});
optionD.addEventListener("click", function(event) {
    let dataQuiz = event.target.getAttribute("data-quiz");
    let dataAnswer = event.target.getAttribute("data-answer");  
    answerChecker(dataQuiz, dataAnswer)
    questionPopulation(i);
    i++;
});



