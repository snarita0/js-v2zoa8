import { Test } from './scripts/Test'
import './styles/app.css'

const app = async () => {
  const root = document.getElementById("root");
  root.innerHTML += Test();
};

app();