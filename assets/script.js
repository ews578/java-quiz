//create variables to connect html
var startButton = document.getElementById("game-start")
var quizHeader = document.getElementById("challenge-start")
var submitButton = document.getElementById("submit")
var choiceContainer = document.getElementById("choice")

//create time
var timer;
var clockSecs;
var score = 0;
var timerClock = document.getElementById("timer-clock")
//create questions
var questionNumber = 0;
var quizQuestions = [
    {
        question: "Array's in JavaScript can be used to store _____.",
        choices: ["strings", "numbers", "booleans", "all of the above"],
        answer: "all of the above"
    },

    {
        question: "_____ containers for storing information",
        choices: ["variable", "string", "array", "boolean"],
        answer: "variable"
    },

    {
        question: "A value that can either be TRUE or FALSE is a ____",
        choices: ["number", "boolean", "statement", "array"],
        answer: "boolean"
    },

    {
        question: "______  is a function in JavaScript that waits for an event to occur then responds to it",
        choices: ["if-else statement", "string", "event listener", "array"],
        answer: "Playstation"
    },

    {
        question: "a scripting or programming language that allows you to implement complex features on web pages is _______",
        choices: ["javaScript", "html", "5CSS", "all of the above"],
        answer: "javaScript"
    }
]
//create master function
function beginQuiz() {
    clockSecs = 100
    beginTimer()
    //display question function
    displayQuestions()
    quizHeader.style.display = "none"
}
//create timer function
function beginTimer() {
    timer = setInterval(function () {
        clockSecs--;
        timerClock.textContent = clockSecs;
        if (clockSecs === 0) {
            clearInterval(timer);
            //call function to finish the game
        }
        return timerClock
    }, 1000)
}
//create function to display questions on page
function displayQuestions() {
    var curQuestions = quizQuestions[questionNumber]
    var title = document.getElementById("question-title")
    title.textContent = curQuestions.question
    console.log(curQuestions)
    

    //loop through choices and dispaly on page
    choiceContainer.innerHTML = ""
    curQuestions.choices.forEach(function (choice, i) {
        var choiceIndex = document.createElement("button")
        choiceIndex.setAttribute("class", "choices")
        choiceIndex.setAttribute("value", choice)
        choiceIndex.textContent = i + 1 + ": " + choice
        choiceIndex.onclick = checkAnswer



        //make listener for each choice
        // // Function to check the selected answer

        //choice index.onclick=checkQuestion
        choiceContainer.appendChild(choiceIndex)
    })
}
// function checkAnswer() {
//     const correctAnswer = quizQuestions[questionNumber].answer;

//     if (this.value === quizQuestions[questionNumber].answer) {
//         // window.alert("Correct!")
//         score += 1;
//         // questionNumber++;
//     } else {
//         // window.alert("Wrong!")
//         clockSecs -= 15
//     }

//     // Check if all questions have been answered
//     if (questionNumber === quizQuestions.length) {
//         window.alert("Times Up!")
//         endQuiz();
//     } else {
//         displayQuestions();
//     }

//     // Move to the next question
//     questionNumber++;
// }

function checkAnswer(){
    if (this.value !== quizQuestions[questionNumber].answer){
        clockSecs -= 15

        if(clockSecs < 0) {
            clockSecs = 0
        }
        console.log("wrong!")
    } else {
        console.log('correcto mando')
        score += 10
        console.log("current score", score)
    }

    questionNumber++;


    if( questionNumber === quizQuestions.length){
        // save current score to local storage
        endQuiz()
    } else {
        displayQuestions()
    }
}

function endQuiz(){
    clearInterval(timer)
    window.alert('FIN!')
    window.location.href = "highscore.html"
    // inside the new html you pull the score from local storage and then allow users to put name and then save the name and score to local storage
    localStorage.setItem("final-score", score);
    localStorage.setItem("initials",initials);
}   

//create event listener for begin quiz
startButton.addEventListener("click", beginQuiz)
