'use strict';

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  colors: [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
    '#81F79F',
    '#5F04B4',
  ],
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colorSwitch = {
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;

    this.timerId = setInterval(() => {
      const bodyColorsNumber = randomIntegerFromInterval(
        0,
        refs.colors.length - 1,
      );

      document.body.setAttribute(
        'style',
        `background-color:${refs.colors[bodyColorsNumber]}`,
      );
    }, 1000);
  },

  stop() {
    clearInterval(this.timerId);
    this.isActive = false;
  },
};

refs.startBtn.addEventListener('click', colorSwitch.start.bind(colorSwitch));
refs.stopBtn.addEventListener('click', colorSwitch.stop.bind(colorSwitch));
