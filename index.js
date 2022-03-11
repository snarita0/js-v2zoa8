let courseChallengesPath = "./src/scripts/course-challenges";
import { challenge1_2 } from `${courseChallengesPath}/challenge1&2.js`;
import { challenge3 } from `${courseChallengesPath}/challenge3.js`;
import { Test } from './src/scripts/Test';

import './src/styles/app.css';

const app = async () => {
  const root = document.getElementById('root');
  root.innerHTML += Test();

  challenge1_2();
  challenge3();
};

app();
