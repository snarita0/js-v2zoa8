import * as challenges from './src/scripts/course-challenges/challengeImports.js';
import { Test } from './src/scripts/Test';

import './src/styles/app.css';

const app = async () => {
  const root = document.getElementById('root');
  root.innerHTML += Test();

  // JS Fundamentals Part 1 (Set 1):
  // challenges.challenge1_2();
  // challenges.challenge3();
  // challenges.challenge4();
};

app();
