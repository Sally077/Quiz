var time = document.querySelector('#time');
var start = document.querySelector("#start");
var startScreen = document.querySelector(".startScreen");
var questions = document.querySelector("#questions");
var choices = document.querySelector("#choices");
var question = document.querySelector("#question");
var finalScore = document.querySelector("#finalScore");
var initials = document.querySelector("#initials");




// Attach event listener to start button to call startGame function on click
start.addEventListener("click", startGame);


// The startGame function is called when the start button is clicked
function startGame() {
    

    timeSecond = 60;

     question.classList.toggle("reveal");
    //  choices.classList.toggle("reveal");

     
    startTimer()
  }



  // The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    
    // Sets timer
    var timeSecond = 60;
    
    time.innerHTML = `00:${timeSecond}`;

    const countDown = setInterval (()=>{
        timeSecond--;
        time.innerHTML = `00:${timeSecond}`;
        if(timeSecond <= 0 || timeSecond <1){
            clearInterval(countDown)
        }
    },1000)
    
        }


// adding the title and choices creating elements

var body = document.body;
var h1El = document.createElement("h1");
var choicesEl = document.createElement("div");
var infoEl = document.createElement("div");

    // Create ordered list element
    var listEl = document.createElement("ol");
    // Create ordered list items
    
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");


 h1El.textContent = "Question 1";
 infoEl.textContent = "What does the abbreviation DOM stand for : ";
 li1.textContent = "Decipher Over Method";
 li2.textContent = "Document Object Model";
 li3.textContent = "Document Over Math";
 li4.textContent = "Decoding Object Maker";



body.appendChild(h1El);
body.appendChild(infoEl);
choicesEl.appendChild(listEl)
body.appendChild(choicesEl);
;
// Append ordered list 
choicesEl.appendChild(listEl);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
choicesEl.setAttribute("style", "margin:auto; width:50%; text-align:center; font-size:20px;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");

// Add ordered list items choices options
choicesEl.appendChild(li1);
choicesEl.appendChild(li2);
choicesEl.appendChild(li3);
choicesEl.appendChild(li4);









// Add listener to submit element
const element = document.getElementById("start");
element.addEventListener("click", function() {
  
});


function startQuiz() {
    console.log("Started Game");
    startButton.classList.remove("hide")
    

}




// reboot

// pseudocode

/* Initiate button to set timer
show question and choices
(process)when user clicks answer return value true=== || or false===
when false time -10 sec 
when true score +10 points
next question (process)
if timer = 0 go to end-screen
if quiz completed enter initials
show score  (use local server to store scores)

 */

// code to edit local storage
renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  var initals = localStorage.getItem("#initials");
  var finalScore = localStorage.getItem("#finalScore");

  if (!initals || !finalScore) {
    return;
  }

  userinitalsSpan.textContent = initials;
  userfinalScoreSpan.textContent = finalScore;
}

 clear.addEventListener("click", function(event) {
    //need event clear
    event.preventDefault();

//  ------------to be completed

  if (intials === "") {
    displayMessage("error", "initials cannot be blank");
  } else {
    displayMessage("success", "Your Score is " +finalScore);

    localStorage.setItem("intials", initials);
    localStorage.setItem("finalScore", finalScore);
    renderLastRegistered();
  }
});

    
  






