import * as challenges from './src/pages/course-challenges/challengeImports.js';

// Pages
import { Home } from './src/pages/Home';

import './src/pages/global.css';

const app = async () => {
  // Display Page
  const view = (view) => {
    const pageContent = document.getElementById('root');
    pageContent.innerHTML = view;
  };  

  // view(challenges.set1_challenge1_2());
  // view(challenges.set1_challenge3());
  // view(challenges.set1_challenge4());
  // view(challenges.set2_challenge1());
  // view(challenges.set2_challenge2());
  // view(challenges.set2_challenge3());
  // view(challenges.set2_challenge4());
  // view(challenges.set3_challenge1());
  // view(challenges.set4_challenge1());
  view(challenges.set4_challenge1());
};

app();
