let sec = 0;
let timerID = 0;

function changeTimer() {
  sec++;
  $(".timer").html(sec + " секунд");
}

function initTimer() {
  timerID = setInterval(changeTimer, 1000);
}

function stopTimer() {
  clearInterval(timerID);
  sec = 0;
}
