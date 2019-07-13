'use strict';

const refs = {
  timerDay: document.querySelector('span[data-value="days"]'),
  timerHours: document.querySelector('span[data-value="hours"]'),
  timerMins: document.querySelector('span[data-value="mins"]'),
  timerSecs: document.querySelector('span[data-value="secs"]'),
};

const currentDate = Date.now();
console.log(currentDate);
const targetDate = new Date('Jul 17, 2019');

// const CountdownTimer = function(selector, targetDate){

const timerId = setInterval(() => {
  const currentDate = Date.now();
  const time = targetDate - currentDate;
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  console.log(`${days}:${hours}:${mins}:${secs}`);
  updateTimer(days, hours, mins, secs);
}, 1000);

function pad(value) {
  return String(value).padStart(2, '0');
}

function updateTimer(days, hours, mins, secs) {
  refs.timerDay.textContent = days;
  refs.timerHours.textContent = hours;
  refs.timerMins.textContent = mins;
  refs.timerSecs.textContent = secs;
}
