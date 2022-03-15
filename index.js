import * as challenges from './src/scripts/course-challenges/challengeImports.js';
import { Test } from './src/scripts/Test';

import './src/styles/app.css';

const app = async () => {
  const root = document.getElementById('root');
  root.innerHTML += Test();

  // JS Fundamentals Part 1 (Set 1):
  // challenges.set1_challenge1_2();
  // challenges.set1_challenge3();
  // challenges.set1_challenge4();
  // challenges.set2_challenge1();
  // challenges.set2_challenge2();
  // challenges.set2_challenge3();
  challenges.set2_challenge4();
};

app();
