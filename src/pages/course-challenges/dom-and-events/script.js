/* 
Implement a game rest functionality, so that the player can make a new guess!

Your tasks:
  1. Select the element with the 'again' class and attach a click event handler
  2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables
  3. Restore the initial conditions of the message, number, score and guess input fields
  4. Also restore the original background color (#222) and number width (15rem)
*/

const generateRandomInt = (min = 1, max = 20) => {
  // Includes min and max
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let timeToLoadContent = 50;
setTimeout(() => {
  const againButton = document.querySelector('.again');
  const message = document.querySelector('.message');
  let defaultMessage = "Start guessing...";
  const userGuess = document.querySelector('.guess');
  const score = document.querySelector('.score');
  const highscore = document.querySelector('.highscore');
  const secretNumber = document.querySelector('.number');
  const checkButton = document.querySelector('.check');
  const documentBody = document.getElementsByTagName('body')[0];

  // userGuess.focus();

  let hiddenNumber = 1;
  // let hiddenNumber = generateRandomInt();
  function newGame() {
    documentBody.style.backgroundColor = '#222';
    score.innerText = '20';
    secretNumber.innerText = '?';
    secretNumber.style.width = 'calc(15rem / var(--document-downscale))';
    message.innerText = defaultMessage;
    userGuess.value = null;
    checkButton.disabled = false;
    hiddenNumber = 1;
    // hiddenNumber = generateRandomInt();
  }

  function gameWonCheck() {
    let guessNotInRange = userGuess.value < 1 || userGuess.value > 20;
    let gameWon = parseInt(userGuess.value) === hiddenNumber;
    let gameFinished = false;
    let newHighscore =
      parseInt(score.innerText) > parseInt(highscore.innerText);

    if (guessNotInRange) {
      message.classList.add('.message-error');
      message.innerText = 'Guess a number from 1 to 20.';
    } else {
      message.classList.remove('.message-error');
      message.innerText = defaultMessage;
    }

    if (gameWon) {
      gameFinished = true;
      documentBody.style.backgroundColor = '#60b347';
      secretNumber.innerText = hiddenNumber;
      secretNumber.style.width = '17.5rem';
      message.innerText = 'You Win!';
      checkButton.disabled = true;

      if (newHighscore) {
        highscore.innerText = score.innerText;
      }
    }
    if (!gameFinished && !guessNotInRange) {
      // Lose a point
      score.innerText = parseInt(score.innerText) - 1;
    }
  }

  document.addEventListener('keydown', (event) => {
    const SEMICOLON_KEY = 'Semicolon';
    const QUOTE_KEY = 'Quote';

    if (event.code === SEMICOLON_KEY) {
      gameWonCheck();
    }
    if (event.code === QUOTE_KEY) {
      newGame();
    }
  });

  checkButton.addEventListener('click', () => {
    gameWonCheck();
  });
  againButton.addEventListener('click', () => {
    newGame();
  });
}, timeToLoadContent);
