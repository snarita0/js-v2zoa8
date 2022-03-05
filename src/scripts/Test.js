// prettier-ignore
let add = (x, y) => { return x + y; };

export const Test = () => {
  const template = `
    <header>
      <h1>Refresher</h1>
      <hr>
      <p>${add(1,2)}</p>
    </header>
  `;
  return template;
};
