//create variables to connect html
var startButton = document.getElementById("game-start")
var quizHeader = document.getElementById("challenge-start")
var submitButton = document.getElementById("submit")
var choiceContainer = document.getElementById("choice")
//create time
var timer ;
var clockSecs;
var score = 0;
var timerBox = document.getElementById("timer-clock")
//create questions
var questionNumber=0;
var quizQuestions = [
    {
        question:"Whats 1+1?",
        choices:["3","2","5","19"],
        answer:"2"
    },

    {
        question:"Whats 1+3?",
        choices:["3","2","5","19"],
        answer:"2"
    },

    {
        question:"Whats 1+2?",
        choices:["3","2","5","19"],
        answer:"2"
    },

    {
        question:"Whats 1+4?",
        choices:["3","2","5","19"],
        answer:"2"
    },
    
    {
        question:"Whats 1+5?",
        choices:["3","2","5","19"],
        answer:"2"
    }
]
//create master function
function beginQuiz() {
    clockSecs =10
    beginTimer()
    //display question function
    displayQuestions()
quizHeader.style.display="none"
}
//create timer function
function beginTimer() {
    timer = setInterval(function(){
        clockSecs--;
        timerBox.textContent=clockSecs;
        if (clockSecs===0){
            clearInterval(timer);
            //call function to finish the game
        }
        return timerBox
    },1000)
}
//create function to display questions on page
function displayQuestions(){
    var curQuestions=quizQuestions[questionNumber]
    var title=document.getElementById("question-title")
    title.textContent=curQuestions.question

//loop through choices and dispaly on page
choiceContainer.innerHTML=""
curQuestions.choices.forEach(function(choice,i){
    var choiceIndex=document.createElement("button")
    choiceIndex.setAttribute("class","choices")
    choiceIndex.setAttribute("value",choice)
    choiceIndex.textContent=i+1+": " + choice


//make listener for each choice
//choice index.onclick=checkQuestion
choiceContainer.appendChild(choiceIndex)
})
}
//create event listener for begin quiz
startButton.addEventListener("click",beginQuiz)