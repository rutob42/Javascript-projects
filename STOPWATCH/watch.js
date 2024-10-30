// function startCountdown(){
//     var time = document.getElementById('timeInput').value;
//     var timeset = 0;

//     for(timeset = 0;time>timeset;time--){
//         const display = document.getElementById('display');
//     }
//     display.textContent = `Time Remaining: ${timeRemaining}s`;

//     if(time===''){
//         alert("cannot be empty");
//     }
//     else {
//         alert("Time cannot go below 0");
//     }
    
// }

function startCountdown(){
    var time = document.getElementById('timeinput').value;
    var display = document.getElementById('display');

    if(time === '' || time < 0){
        alert("Please enter a valid time greater than 0")
    }

    var timeRemaining = time;

    var countdown = setInterval(function() {
        if(timeRemaining > 0){
            display.textContent = `Time Remaining: ${timeRemaining}s`;
            timeRemaining--;
            if(timeRemaining === 0){
                display.textContent = "Time's up";
            }
        }
        else{
            clearInterval(countdown);
            display.textContent("Time's up!");
        }
    }, 1000);
}