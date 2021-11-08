let seconds = 0;

const renderClock = () => {
  let timer = document.createElement("aside");
  let body = document.querySelector("body");

  timer.setAttribute("class", "timer");
  timer.innerHTML = 0;

  body.appendChild(timer);
};

const incrementTimer = () => {
  timer = setInterval(stopwatch, 1000);
};
const stopwatch = () => {
  let timer = document.querySelector(".timer");
  seconds++;
  timer.innerHTML = seconds;
};

const endStopwatch = () => {
  clearInterval(timer);
  return seconds;
};
