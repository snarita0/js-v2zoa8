/* 
Implement a game rest functionality, so that the player can make a new guess!

Your tasks:
  1. Select the element with the 'again' class and attach a click event handler
  2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables
  3. Restore the initial conditions of the message, number, score and guess input fields
  4. Also restore the original background color (#222) and number width (15rem)
*/

// Generate random number from 1 - 20
// Grab number input
// Test if match

// #60b347

const generateRandomInt = (min = 1, max = 20) => {
  // Includes min and max
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let timeToLoadContent = 1000;
let hiddenNumber = generateRandomInt();

// Give DOM enough time to load, to access it.
setTimeout(() => {
  const againButton = document.querySelector('.again');
  const message = document.querySelector('.message');
  const score = document.querySelector('.score');
  const secretNumber = document.querySelector('.number');

  const userGuess = document.querySelector('.guess');
  const checkButton = document.querySelector('.check');

  const documentBody = document.getElementsByTagName('body')[0];

  checkButton.addEventListener('click', () => {
    if (userGuess.value === hiddenNumber) {
      // change background color
      // reeval secretNumber with the hidden number.
    }
  });

  againButton.addEventListener('click', () => {
    score.innerText = 0;
    secretNumber.innerText = '?';
    message.innerText = 'Start guessing...';
    userGuess.value = null;
  });
}, timeToLoadContent);
