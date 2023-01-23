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


// Questions
var questionBank = [ {
    
    question : "What does the abbreviation DOM stand for : ",
    choice : ["Decipher Over Method", "Document Object Model", "Document Over Math", "Decoding Object Maker"],
    answer : "Document Object Model" ,

},

{

    
    question : "How does an append array work?",
    choice : ["Sorts Data", "Deletes Data", "Filters Data", "Adds data"],
    answer : "Adds Data" ,

},

{ 
    question : "How do you create a count controlled loop in Javascript?",
    choice : ["for(i=0; i<variable.length; i++)", "for x in range(1,10):", "While i === 1", "i=i + 1"],
    answer : "for(i=0; i<variable.length; i++)" ,

}


]

var question = document.getElementById
("question");

var quizContainer = document.getElementById
("quiz-container");
var scorecard = document.getElementById
("scorecard");
var choice0 = document.getElementById
("choice0");
var choice1 = document.getElementById
("choice1");
var choice2 = document.getElementById
("choice2");
var choices = document.querySelectorAll(".next");
var points = document.getElementById("score");
var span = document.querySelectorAll('span');
var i = 0;
var score = 0;

// display questions
function displayQuestions() {
    for (var a=0;a<span.length;a++){
        span[a].style.background ="none";
    }
    question.innerHTML = "Q." +(i+1)+ " "
    +questionBank[i].question;
    choice0.innerHTML = questionBank[i].option
    [0];
    choice1.innerHTML = questionBank[i].option
    [1];
    choice2.innerHTML = questionBank[i].option
    [2];
    statusbar.innerHTML = "Question"+" "+(i+1)+ " "
    +"of"+" "+questionBank.length;
    
}

function calcScore(e){
    if(e.innerHTML===questionBank[i].answer &&
       score<questionBank.length )
       
       {
        score = score + 1;
        document.getElementById(e.id).style.
       background = "limegreen";
        
    }


    else{
        document.getElementById(e.id).style.
       background = "red";
    
    }
    setTimeout(nextQuestion,300);
}

function nextQuestion(){
    if(i<questionBank.length-1)
    {
      i = i + 1;
      displayQuestion();  
    }
    else{
        points.innerHTML = score+ '/'+
        questionBank.length;
        quizContainer.style.display = "block"

    }
}
// event click
nextQuestion.addEventListener("click", nextQuestion);

// return to Quiz Button event
function backToQuiz(){
    location.reload();

}

// function - check answers

function checkAnswer(){
    var answerBank = document.getElementById
    ("answerBank");
    var answers = document.getElementById
    ("answers");
    answerBank.style.display = "block";
    scoreboard.style.display = "block";
    for (var a=0; a<questionBank.length;a++)
    {
        var list = document.createElement("li");
        list.innerHTML = questionBank[a].answer;
        answers.appendChild(list);
    }

}

displayQuestion();



// adding the title and choices creating elements

// var body = document.body;
// var h1El = document.createElement("h1");
// var choicesEl = document.createElement("div");
// var infoEl = document.createElement("div");




//  h1El.textContent = "Question 1";
//  infoEl.textContent = "What does the abbreviation DOM stand for : ";
//  li1.textContent = "Decipher Over Method";
//  li2.textContent = "Document Object Model";
//  li3.textContent = "Document Over Math";
//  li4.textContent = "Decoding Object Maker";



// body.appendChild(h1El);
// body.appendChild(infoEl);
// choicesEl.appendChild(listEl)
// body.appendChild(choicesEl);
// ;
// // Append ordered list 
// choicesEl.appendChild(listEl);

// h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
// choicesEl.setAttribute("style", "margin:auto; width:50%; text-align:center; font-size:20px;");
// infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");

// // Add ordered list items choices options
// choicesEl.appendChild(li1);
// choicesEl.appendChild(li2);
// choicesEl.appendChild(li3);
// choicesEl.appendChild(li4);

//     // Create ordered list element
//     var listEl = document.createElement("ol");
//     // Create ordered list items
    
//     var li1 = document.createElement("li");
//     var li2 = document.createElement("li");
//     var li3 = document.createElement("li");
//     var li4 = document.createElement("li");




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

    
  






