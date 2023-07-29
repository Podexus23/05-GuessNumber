'use strict';

const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const inputNumber = document.querySelector('.guess');
const btnCheck = document.querySelector('.check');
const bodyEl = document.querySelector('body');
const btnAgain = document.querySelector('.again');
const highScoreEl = document.querySelector('.highscore');

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
scoreEl.textContent = score;
let highScore = 0;

const addWinState = function () {
  numberEl.textContent = number;
  numberEl.style.width = '30rem';
  bodyEl.style.backgroundColor = '#60b347';
};

const resetTheGame = () => {
  number = Math.trunc(Math.random() * 20) + 1;
  numberEl.textContent = '?';
  numberEl.style.width = '15rem';

  bodyEl.style.backgroundColor = '#222';

  inputNumber.value = '';
  messageEl.textContent = 'Start guessing ...';

  score = 20;
  scoreEl.textContent = score;
};

const checkNumber = function (e) {
  const guess = Number(inputNumber.value);

  if (score > 0) {
    if (!guess) {
      messageEl.textContent = '🛑 No number!';
    } else if (guess === number) {
      messageEl.textContent = '😀 Correct Number!';
      addWinState();
      if (score > highScore) {
        highScore = score;
        highScoreEl.textContent = highScore;
      }
    } else if (guess > number) {
      messageEl.textContent = '📈 Too high!';
      score--;
    } else if (guess < number) {
      messageEl.textContent = '📉 Too low!';
      score--;
    }
  }

  scoreEl.textContent = score;

  if (score <= 0) {
    messageEl.textContent = '💥 You lost the game!';
    numberEl.textContent = number;
    return;
  }
};

btnCheck.addEventListener('click', checkNumber);
btnAgain.addEventListener('click', resetTheGame);
