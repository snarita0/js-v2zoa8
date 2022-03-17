/* 
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

Your tasks:
  1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
  2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method
  3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
*/

export const set2_challenge3 = () => {
  // calcBMI() is defined as is in each object
  // to follow suit with the challenge
  let markBMIData = {
    fullName: 'Mark Miller',
    weight: 78,
    height: 1.69,
    calcBMI: (mass, height) => {
      return mass / height ** 2;
    },
  };
  let johnBMIData = {
    fullName: 'John Smith',
    weight: 92,
    height: 1.95,
    calcBMI: (mass, height) => {
      return mass / height ** 2;
    },
  };

  let {
    fullName: markFullName,
    weight: markWeight,
    height: markHeight,
    calcBMI,
  } = markBMIData;
  let {
    fullName: johnFullName,
    weight: johnWeight,
    height: johnHeight,
  } = johnBMIData;

  markBMIData.BMI = calcBMI(markWeight, markHeight);
  johnBMIData.BMI = calcBMI(johnWeight, johnHeight);

  let markHigherBMI = markBMIData.BMI > johnBMIData.BMI;

  // prettier-ignore
  markHigherBMI ? 
  console.log(`${markFullName}'s BMI (${markBMIData.BMI.toFixed(3)}) is higher than ${johnFullName}'s (${johnBMIData.BMI.toFixed(3)})!`) :
  console.log(`${markFullName}'s BMI (${markBMIData.BMI.toFixed(3)}) is lower than ${johnFullName}'s (${johnBMIData.BMI.toFixed(3)})!`);
};
