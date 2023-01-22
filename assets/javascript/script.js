let startQuizButton = document.getElementById("start-button");
let timeElement = document.getElementById("time");
let score = document.getElementById("final-score");

// variables needed for functions
let timer;
let timerCount = 0;
let scoreCounter = 0;

// Start the timer when the user clicks on the Start Quiz button
startQuizButton.addEventListener("click", startTimer);

// The init function is called when the page loads 
function init() {
    getScore();
  }
  
// The startQuiz function is called when the start button is clicked
function startQuiz() {
    console.log("are you ready?");
}
// The startTimer function starts the timer and subtracts time from it users' answers are incorrect
function startTimer() {
    timerCount = 120;
    timer = setInterval(function () {
        timerCount--;
        timeElement.textContent = timerCount;
        // Tests if time has run out
        if (timerCount === 0) {
          // Clears interval and stops timer
          clearInterval(timer);
        }  
     
    }, 1000);
}

// Updates score on screen and saves score to local storage
function setScore() {
    score.textContent = scoreCounter;
    localStorage.setItem("scoreCount", scoreCounter);
}

function getScore() {
    let storedScore = localStorage.getItem("scoreCount");
    // If there are no stored scores, set counter to 0
    if (storedScore === null) {
        scoreCounter = 0;
      } else {
        // If a value is retrieved from local storage set the scoreCounter to that value
        scoreCounter = storedScore;
      }
      //Render total score to page
      score.textContent = scoreCounter;
}