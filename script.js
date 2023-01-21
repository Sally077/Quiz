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














 
// script to initiate start button





