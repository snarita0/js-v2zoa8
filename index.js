import { Test } from './src/scripts/Test'
import './src/styles/app.css'

const app = async () => {
  const root = document.getElementById("root");
  root.innerHTML += Test();
};

app();