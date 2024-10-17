const spanSec = document.getElementById("sec");
const spanMin = document.getElementById("min");
const spanHr = document.getElementById("hr");
const startButton = document.querySelector("button");

let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

startButton.addEventListener('click', () => {
  if (!interval) { //al agregar esta parte se confirma que no exista un intervalo iniciado, evitando el accionar mas de una vez el cronometro.
    startCronometro();
  }
});

function startCronometro() {
  interval = setInterval(() => {
    seconds++;
    if (seconds === 5) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 5) {
      minutes = 0;
      hours++;
    }

    spanSec.textContent = seconds;
    spanMin.textContent = minutes;
    spanHr.textContent = hours;
  }, 1000); // Cada segundo
}
