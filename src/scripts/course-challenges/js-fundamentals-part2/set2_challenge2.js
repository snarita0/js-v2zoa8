/* 
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:
  1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
  2. And now let's use arrays! So create an array 'bills' containing the test data below
  3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before
  4. Bonus: Create an array 'total' containing the total values, so the bill + tip

Test data: 125, 555 and 44

Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) �
*/

// prices -> bills
// let tips = [<tip value for each>]
// let total = [<bill + tip for each>]

export const set2_challenge2 = () => {
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

  let bills = [125, 555, 44];
  let tips = [];
  let total = [];

  bills.forEach((bill) => {
    let { tip, _15PercentTipCheck } = calcTip(bill);
    // prettier-ignore
    console.log(`Price: $${bill}\nTip:    $${tip} (${_15PercentTipCheck}%)\n\tTotal: $${bill + tip}`);
  });
};
