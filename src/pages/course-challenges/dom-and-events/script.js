let timeToLoadContent = 1000;

// Give DOM enough time to load, to access it.
setTimeout(() => {
  const test = document.querySelector('.number');
  console.log(test);
}, timeToLoadContent);
