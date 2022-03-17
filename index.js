import * as challenges from './src/scripts/course-challenges/challengeImports.js';

// Pages
import { Home } from './src/scripts/Home';
import { DOMAndEvents } from './src/scripts/course-challenges/dom-and-events/Page';

import './src/styles/app.css';

const app = async () => {
  // Display Page
  const pageContent = document.getElementById('root');
  pageContent.innerHTML = DOMAndEvents();

  // JS Fundamentals Part 1 (Set 1):
  // challenges.set1_challenge1_2();
  // challenges.set1_challenge3();
  // challenges.set1_challenge4();
  // challenges.set2_challenge1();
  // challenges.set2_challenge2();
  // challenges.set2_challenge3();
  // challenges.set2_challenge4();
  // challenges.set3_challenge1();
  challenges.set4_challenge1();
};

app();
