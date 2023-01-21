// setting variables for time
var time = document.querySelector('#time');

var timeSecond = 5;

// creating code to countdown (testing from 5 to 0)

time.innerHTML = `00:${timeSecond}`;

const countDown = setInterval (()=>{
    timeSecond--;
    time.innerHTML = `00:${timeSecond}`;
    if(timeSecond <= 0 || timeSecond <1){
        clearInterval(countDown)
    }
},1000)



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
choicesEl.textContent = "What does the abbreviation DOM stand for : ";



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



// script to initiate start button





