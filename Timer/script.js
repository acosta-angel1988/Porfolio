
const startBtn = document.getElementById("start");
const display = document.getElementById("timerDisplay");

startBtn.addEventListener("click",() =>{
    let hours = parseInt(document.getElementById("hours").value) || 0;
    let minutes = parseInt(document.getElementById("minutes").value) || 0;
    let seconds = parseInt(document.getElementById("seconds").value) || 0;

    let totalSeconds = hours * 3600 + minutes * 60 + seconds;

     // Show initial time
    updateDisplay(totalSeconds);

    let timer = setInterval(() => {
        totalSeconds--;

        if (totalSeconds <= 0) {
            clearInterval(timer);
            display.textContent = "Time's up!";
        } else {
            updateDisplay(totalSeconds);
        }
    }, 1000);

 // Helper: format time as H:M:S
function updateDisplay(totalSeconds) {
    let h = Math.floor(totalSeconds / 3600);
    let m = Math.floor((totalSeconds % 3600) / 60);
    let s = totalSeconds % 60;
    display.textContent = `${h}h : ${m}m : ${s}s`;
    }
});
