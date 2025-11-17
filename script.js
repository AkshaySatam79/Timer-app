const timer = document.querySelector("#time");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");

const date = new Date();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

timer.innerText = `${minutes} : ${seconds}`;

let timeLeft = 300;

function updateDisplay() {
  minutes = Math.floor(timeLeft / 60);
  seconds = timeLeft % 60;

  timer.textContent = `${String(minutes).padStart(2, "0")} : ${String(
    seconds
  ).padStart(2, "0")}`;
}

let interval;

function startTimer() {
  interval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(interval);
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);
  timeLeft = 300;
  updateDisplay();
}
