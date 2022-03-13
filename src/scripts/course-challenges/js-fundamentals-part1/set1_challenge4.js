/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:
  1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement � (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
  2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”

Test data:
  § Data 1: Test for bill values 275, 40 and 430
Hints:
  § To calculate 20% of a value, simply multiply it by 20/100 = 0.2 § Value X is between 50 and 300, if it's >= 50 && <= 300 �
*/

export const challenge4 = () => {
  const calculateTip = (price) => {
    let tipPercentage = {
      _15Check: price >= 50 && price <= 300,
      _15: price * (15 / 100),
      _20: price * (20 / 100),
    };

    let tip = tipPercentage._15Check ? tipPercentage._15 : tipPercentage._20;

    // 15% percent tip check is returned to
    // display each price showing their
    // corresponding tip percentage.
    return { tip: tip, _15PercentTipCheck: tipPercentage._15Check ? 15 : 20 };
  };

  let prices = [275, 40, 430];

  for (let price of prices) {
    let { tip, _15PercentTipCheck } = calculateTip(price);
    // prettier-ignore
    console.log(`Price: $${price}\nTip:    $${tip} (${_15PercentTipCheck}%)\n\tTotal: $${price + tip}`);
  }
};
