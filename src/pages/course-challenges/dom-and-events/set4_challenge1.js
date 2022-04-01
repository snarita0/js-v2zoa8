// Write all logic in file and return it in view
import './script';
import './style.css';

export const set4_challenge1 = () => {
  const template = `<header>
       <h1 id="test">Guess My Number!</h1>
       <p class="between">(Between 1 and 20)</p>  
       <button class="btn again">Again!</button>
       <div class="number">?</div>
     </header>
     <main>
       <section class="left">
         <input type="number" class="guess" />
         <button class="btn check">Check!</button>
       </section>
       <section class="right">
         <p class="message">Start guessing...</p>
         <p class="label-score">💯 Score: <span class="score">20</span></p>
         <p class="label-highscore">🥇 Highscore: <span class="highscore">0</span>
         </p>
        <section class="key-bindings">
        <p>Key Bindings:</p>
        <p>[ - Guess Number</p>
        <p>] - New Game</p>

        </section>
       </section>
     </main>`;

  return template;
};
