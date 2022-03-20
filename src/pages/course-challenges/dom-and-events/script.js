/* 
Implement a game rest functionality, so that the player can make a new guess!

Your tasks:
  1. Select the element with the 'again' class and attach a click event handler
  2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables
  3. Restore the initial conditions of the message, number, score and guess input fields
  4. Also restore the original background color (#222) and number width (15rem)
*/

// #60b347

const generateRandomInt = (min = 1, max = 20) => {
  // Includes min and max
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let timeToLoadContent = 500;

// Give DOM enough time to load, to access it.
setTimeout(() => {
  const againButton = document.querySelector('.again');
  const message = document.querySelector('.message');
  const userGuess = document.querySelector('.guess');
  const score = document.querySelector('.score');
  const highscore = document.querySelector('.highscore');
  const secretNumber = document.querySelector('.number');
  const checkButton = document.querySelector('.check');
  const documentBody = document.getElementsByTagName('body')[0];

  let hiddenNumber = generateRandomInt();
  const newGame = () => {
    documentBody.style.backgroundColor = '#222';
    score.innerText = '20';
    secretNumber.innerText = '?';
    message.innerText = 'Start guessing...';
    userGuess.value = null;
    checkButton.disabled = false;
    hiddenNumber = generateRandomInt();
  };

  function keyListener(event) {}

  checkButton.addEventListener('keydown', (event) => {
    const ENTER_KEY = 13;
    event = event || window.event;

    if (event.key === ENTER_KEY) {
      // Create a newGame function to wrap the click event code around
      // If Enter key is pressed, run newGame()
      console.log('Enter pressed');
    }
  });

  checkButton.addEventListener('click', () => {
    let gameWon = parseInt(userGuess.value) === hiddenNumber;
    let newHighscore =
      parseInt(score.innerText) > parseInt(highscore.innerText);

    if (gameWon) {
      documentBody.style.backgroundColor = '#60b347';
      secretNumber.innerText = hiddenNumber;
      message.innerText = 'You Win!';
      checkButton.disabled = true;

      if (newHighscore) {
        highscore.innerText = score.innerText;
      }
    } else {
      score.innerText = parseInt(score.innerText) - 1;
    }
  });

  againButton.addEventListener('click', () => {
    newGame();
  });
}, timeToLoadContent);
