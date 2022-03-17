/*
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:
  1. Create an array 'bills' containing all 10 test bill values
  2. Create empty arrays for the tips and the totals ('tips' and 'totals')
  3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the tips and totals arrays �
Bonus:

4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array
*/

export const set2_challenge4 = () => {
  const calcAverage = (arr) => {
    return (
      arr.reduce((accumulatedTotals, total) => {
        return accumulatedTotals + total;
      }) / arr.length
    ).toFixed(0);
  };

  const calcTip = (price) => {
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

  let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  let tips = [];
  let totals = [];

  bills.forEach((bill) => {
    let { tip, _15PercentTipCheck } = calcTip(bill);
    tips.push(tip), totals.push(bill + tip);

    // prettier-ignore
    console.log(`Price: $${bill}\nTip:    $${tip} (${_15PercentTipCheck}%)\n\tTotal: $${bill + tip}`);
  });

  let totalsAverage = calcAverage(totals);
  console.log(bills, tips, totals);
  console.log(`Total Average: ${totalsAverage}`);
};
