//quiz
let quiz = document.querySelector(".qiz");

function hideScore() {
  const scoreContainer = document.getElementById("score-container");
  const shading = document.getElementById("shading");
  
  scoreContainer.style.display = "none";
  shading.style.display = "none";
}
hideScore()
function finalResult(){
  const scoreContainer = document.getElementById("score-container");
  const shading = document.getElementById("shading");
  
  scoreContainer.style.display = "block";
  shading.style.display = "block";
  scoreContainer.textContent=`Congratulations! You scored ${score} out of 10`
  document.body.style.overflow="hidden"
}
 //score creation
 let score = 0;



function sel() {
  
  
  let quizArray = Array.from(document.querySelectorAll(".questions"));
  
 

  quizArray.forEach(function (question) {
    const selectedChoice = question.querySelector(".selected");

    if (selectedChoice) {
      
      const selectedText = selectedChoice.textContent;
      
      if (question === quizArray[0] && selectedText === "a) <a>") {
        score += 2;
      } else if (question === quizArray[1] && selectedText === "a) alt") {
        score += 2;
      } else if (question === quizArray[2] && selectedText === "d) Hyper Text Markup Language") {
        score += 2;
      } else if (question === quizArray[3] && selectedText === "c) <ol>") {
        score += 2;
      } else if (question === quizArray[4] && selectedText === "d) <p>") {
        score += 2;
      }
    } else {
     
    }
  });
  finalResult()
  
}

let timeInSeconds = 120;

function updateTimer() {
    const timerElement = document.getElementById("timer");
    
    // Calculate minutes and seconds
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    // Display the timer
    timerElement.textContent = `${formattedMinutes}:${formattedSeconds}`;
    
    
    timeInSeconds--;

    
    if (timeInSeconds <= 0) {
      clearInterval(timerInterval);
      alert("Time's up!");
  
      setTimeout(function () {
        window.scrollTo(0, document.body.scrollHeight)
         finalResult()
      }, 0); 
  }
  
}


const timerInterval = setInterval(updateTimer, 1000);



const questions = document.querySelectorAll(".questions");

questions.forEach(function (question) {
  const choices = question.querySelectorAll("span");

  choices.forEach(function (choice) {
    choice.addEventListener("click", function () {
      // Removing the "selected" class 
      const choicesWithinQuestion = question.querySelectorAll(".selected");
      choicesWithinQuestion.forEach(function (c) {
        c.classList.remove("selected");
      });

      // Adding the "selected" class to the clicked choice
      choice.classList.add("selected");
    });
  });
});

let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  var confirmEnd = confirm("Are you sure you want to end the exam?");
  if (confirmEnd) {
    window.scrollTo(0, document.body.scrollHeight)
    clearInterval(timerInterval);
    sel();
  } else {
    
  }
});

