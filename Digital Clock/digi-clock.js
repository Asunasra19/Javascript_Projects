const myClockDisplay = document.getElementById('MyClockDisplay');



function setTime(){
    let date = new Date();
    let h = date.getHours(); //hours 0-24
    let m = date.getMinutes(); //minutes 0-59
    let s = date.getSeconds(); //seconds 0-59
    let session = "AM";

    if(h == 0){
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM"
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = h + ":" + m + ":" + s + " " +
    session;

    myClockDisplay.innerText = time;
    myClockDisplay.textContent = time;

    setInterval(setTime, 1000);
}

setTime();