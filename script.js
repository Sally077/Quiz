var time = document.querySelector('#time');



// Attach event listener to start button to call startGame function on click
start.addEventListener("click", startGame);



// The startGame function is called when the start button is clicked
function startGame() {
    isWin = false;
    timeSecond = 60;
    //  setting variables for time  
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

// h1El.textContent = "Question 1";
// infoEl.textContent = "What does the abbreviation DOM stand for : ";
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




// script to initiate start button

// Access toggle switch HTML element
var start = document.querySelector("#start");
var startScreen = document.querySelector(".startScreen");


const startButton = document.getElementById("start");
const questions = document.getElementById("questions")

// Add listener to submit element
const element = document.getElementById("start");
element.addEventListener("click", function() {
  document.getElementById("question").innerHTML = "Hello World";
});


function startQuiz() {
    console.log("Started Game");
    startButton.classList.remove("hide")
    questions.classList.add("hide")

}




//     event.preventDefault();
//     var startScreen = "What does the abbreviation DOM stand for : " + start.value + ".";
//     startScreen.textContent = startScreen;
// }


    
  






