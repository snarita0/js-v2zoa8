import { challenge1_2 } from './src/scripts/course-challenges/challenge1&2.js';
import { challenge3 } from './src/scripts/course-challenges/challenge3.js';
import { Test } from './src/scripts/Test';

import './src/styles/app.css';

const app = async () => {
  const root = document.getElementById('root');
  root.innerHTML += Test();

  // challenge1_2();
  // challenge3();
};

app();
