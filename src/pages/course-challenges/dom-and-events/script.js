/* 
Implement a game rest functionality, so that the player can make a new guess!

Your tasks:
  1. Select the element with the 'again' class and attach a click event handler
  2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables
  3. Restore the initial conditions of the message, number, score and guess input fields
  4. Also restore the original background color (#222) and number width (15rem)

  When listening for "keydown" event, the keys  being listened to get spammed multiple times. The number of times spammed grows overtime while playing the game. If played long enough, pressing those keys will cause a seizure.


*/

const generateRandomInt = (min = 1, max = 20) => {
  // Includes min and max
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// let timeToLoadContent = 500;

// Give DOM enough time to load, to access it.
// setTimeout(() => {}, timeToLoadContent);
console.log(document.readyState);

if (document.readyState === 'complete') {
  const againButton = document.querySelector('.again');
  const message = document.querySelector('.message');
  const userGuess = document.querySelector('.guess');
  const score = document.querySelector('.score');
  const highscore = document.querySelector('.highscore');
  const secretNumber = document.querySelector('.number');
  const checkButton = document.querySelector('.check');
  const documentBody = document.getElementsByTagName('body')[0];

  let hiddenNumber = 1;
  // let hiddenNumber = generateRandomInt();
  function newGame() {
    documentBody.style.backgroundColor = '#222';
    score.innerText = '20';
    secretNumber.innerText = '?';
    secretNumber.style.width = 'calc(15rem / var(--document-downscale))';
    message.innerText = 'Start guessing...';
    userGuess.value = null;
    checkButton.disabled = false;
    hiddenNumber = 1;
    // hiddenNumber = generateRandomInt();
  }

  function gameWonCheck() {
    let gameWon = parseInt(userGuess.value) === hiddenNumber;
    let newHighscore =
      parseInt(score.innerText) > parseInt(highscore.innerText);

    if (gameWon) {
      documentBody.style.backgroundColor = '#60b347';
      secretNumber.innerText = hiddenNumber;
      secretNumber.style.width = '17.5rem';
      message.innerText = 'You Win!';
      checkButton.disabled = true;

      if (newHighscore) {
        highscore.innerText = score.innerText;
      }
    } else {
      // Lose a point
      score.innerText = parseInt(score.innerText) - 1;
    }
  }

  // document.addEventListener('keydown', (event) => {
  //   const ENTER_KEY = 'Enter';
  //   const QUOTE_KEY = 'Quote';

  //   if (event.code === ENTER_KEY) {
  //     // gameWonCheck();
  //     console.log('Enter pressed');
  //   }
  //   if (event.code === QUOTE_KEY) {
  //     // newGame();
  //     console.log('Apostraphe pressed');
  //   }

  //   // event.preventDefault();
  // });

  // checkButton.addEventListener('click', gameWonCheck());
  // againButton.addEventListener('click', newGame());
}
