let totalSeconds = 0;
let timer;

function start() {
    timer = setInterval(updateTimer, 1000);
}

function stop() {
    clearInterval(timer);
}

function reset() {
    clearInterval(timer);
    document.getElementById("sec").value = "";
    document.getElementById("min").value = "";
    totalSeconds = 0;
}

function updateTimer() {
    totalSeconds++;

    let min = Math.floor(totalSeconds / 60);
    let sec = totalSeconds % 60;

    document.getElementById("min").value = min;
    document.getElementById("sec").value = sec < 10 ? "0" + sec : sec;
}
