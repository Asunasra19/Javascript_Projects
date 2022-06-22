let mins = 00;
let seconds = 00;
let tens = 00;
let minutes = document.getElementById('minutes');
let appendTens = document.getElementById('tens');
let appendSeconds = document.getElementById('seconds');
let startBtn = document.getElementById('btn-start');
let stopBtn = document.getElementById('btn-stop');
let resetBtn = document.getElementById('btn-reset');
let Interval;



startBtn.addEventListener('click', ()=>{
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10)
})

stopBtn.addEventListener('click', ()=>{
    clearInterval(Interval);
})

resetBtn.addEventListener('click', ()=>{
    clearInterval(Interval);
    tens = "00";
    seconds = "00"
    mins = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    minutes.innerHTML = mins;
})



function startTimer(){
    tens++;

    if(tens <= 9){
        appendTens.innerHTML = "0" + tens; //adding 0 if value is 9 eg: 09;
    }

    if(tens > 9){
        appendTens.innerHTML = tens;
    }

    if (tens > 99){
        seconds++
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9){
        appendSeconds.innerHTML = seconds;
    }

    if (seconds > 59){
        mins++
        seconds = 0;
        minutes.innerHTML = "0" + mins;
        appendSeconds.innerHTML = "00";
    }

}


