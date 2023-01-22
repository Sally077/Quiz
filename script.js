var time = document.querySelector('#time');
var start = document.querySelector("#start");
var startScreen = document.querySelector(".startScreen");
var questions = document.querySelector("#questions");
var choices = document.querySelector("#choices");
var question = document.querySelector("#question");


var currentQuestion = {};
var correctAnswers = true;
score = 0;
counter = 0;
// creating an object model (data dictionary thing)
availableQuestions = [];

var questions = [{
    question : "What does the abbreviation DOM stand for : ",
    choice1  : "Decipher Over Method",
    choice2  : "Document Object Model",
    choice3  : "Document Over Math",
    choice4  : "Decoding Object Maker",
    answer  : 2,
},
]

var questions = [{
    question : "Append array can be used to do the following : ",
    choice1  : "Delete variables in the array",
    choice2  : "Sort variables in the array",
    choice3  : "Filter variables in the array",
    choice4  : "Add items to the array",
    answer  : 4,
},
]

var questions = [{
    question : "Which code is correct for creating a count controlled loop? : ",
    choice1  : "for (var i = 0; i < variable.length; i++)",
    choice2  : "while (true === count)",
    choice3  : "for i in range (1,20):",
    choice4  : "while i == i * 1",
    answer  : 1,
}
]



// Attach event listener to start button to call startGame function on click
start.addEventListener("click", startGame);


// The startGame function is called when the start button is clicked
function startGame() {
    

    timeSecond = 60;

   

     
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




// Access toggle switch HTML element





// Add listener to submit element
const element = document.getElementById("start");
element.addEventListener("click", function() {
  
});


function startQuiz() {
    console.log("Started Game");
    startButton.classList.remove("hide")
    

}





    
  






