const yearsEl = document.getElementById("years");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");


const bday = '04 Oct 2029';

function countdown() {
    const bdayDate =  new Date(bday);
    const currentDate = new Date();
    const totalSeconds = (bdayDate - currentDate) / 1000;

    const years = Math.floor(totalSeconds / 3600 / 24 / 365);
    const days = Math.floor(totalSeconds / 3600 / 24) % 365;
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    yearsEl.innerHTML = years;
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}
countdown();
setInterval(countdown, 1000)