var finalScore = document.getElementById("final-score")
var initials = document.getElementById("initials")

finalScore.textContent=JSON.parse(localStorage.getItem("final-score"))||0


function saveHighscore(){
    var currentHighscores =JSON.parse(localStorage.getItem("scores")) || []
    var newScore = {
        initials: initials.value,
        score: localStorage.getItem("final-score") || 0
    }
    currentHighscores.push(newScore)
    localStorage.setItem("scores",JSON.stringify(currentHighscores))
    getHighscores()
}
function getHighscores(){
    var currentHighscores =JSON.parse(localStorage.getItem("scores")) || []
    var highscoresList=document.createElement("ul")
    for (var i=0;i<currentHighscores.length;i++){
        var scoreEl=document.createElement("li")
        scoreEl.textContent=`Initials: ${currentHighscores[i].initials}, Score:${currentHighscores[i].score}`
        highscoresList.appendChild(scoreEl)
    }
    document.getElementById("challenge-end").appendChild(highscoresList)
}

document.getElementById("submit").addEventListener("click",saveHighscore)