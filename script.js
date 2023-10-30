'use strict';

let SecretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
const x = function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    //when guess is invalid
    document.querySelector('.message').textContent = '⛔ invalid guess';
  } else if (guess === SecretNumber) {
    //when guess is correct
    document.querySelector('.message').textContent =
      '🍾 You Guessed The Number Correctly !';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = SecretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > SecretNumber) {
    if (guess > SecretNumber + 5) {
      if (score > 1) {
        document.querySelector('.message').textContent = 'Too High 👆!';
        document.querySelector('.score').textContent = score = score - 1;
      } else {
        document.querySelector('.score').textContent = 0;
        document.querySelector('.message').textContent = 'You Lost The Game 😔';
        document.querySelector('body').style.backgroundColor = '#7E191B';
      }
    } else {
      if (score > 1) {
        document.querySelector('.message').textContent = ' High 👆!';
        document.querySelector('.score').textContent = score = score - 1;
      } else {
        document.querySelector('.score').textContent = 0;
        document.querySelector('.message').textContent = 'You Lost The Game 😔';
        document.querySelector('body').style.backgroundColor = '#7E191B';
      }
    }
  } else if (guess < SecretNumber) {
    if (guess < SecretNumber - 5) {
      if (score > 1) {
        if (score > 1) {
          if (score > 1) {
            document.querySelector('.message').textContent = '👇Too Low !';
            document.querySelector('.score').textContent = score = score - 1;
          } else {
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent =
              'You Lost The Game 😔';
          }
        } else {
          document.querySelector('.score').textContent = 0;
          document.querySelector('.message').textContent =
            'You Lost The Game 😔';
          document.querySelector('body').style.backgroundColor = '#7E191B';
        }
      } else {
        document.querySelector('.score').textContent = 0;
        document.querySelector('.message').textContent = 'You Lost The Game 😔';
        document.querySelector('body').style.backgroundColor = '#7E191B';
      }
    } else {
      if (score > 1) {
        document.querySelector('.message').textContent = '👇 Low !';
        document.querySelector('.score').textContent = score = score - 1;
      } else {
        document.querySelector('.score').textContent = 0;
        document.querySelector('.message').textContent = 'You Lost The Game 😔';
        document.querySelector('body').style.backgroundColor = '#7E191B';
      }
    }
  }
};

document.querySelector('.check').addEventListener('click', x);
console.log(SecretNumber);

const ilia = function () {
  SecretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(SecretNumber);

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').innerHTML = 'Start guessing...';
  document.querySelector('.guess').value = '';
  score = 20; // Reset the score to 20
  document.querySelector('.score').innerHTML = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').innerHTML = '?';
};

document.querySelector('.btn').addEventListener('click', ilia);
