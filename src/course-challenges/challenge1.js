/*
Challenge #1: Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
  BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter). 

Your tasks:
  1. Store Mark's and John's mass and height in variables.
  2. Calculate both their BMIs using the formula (you can even implement both versions).
  3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John. 

Test data:
  § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
  § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall. 

Challenge #2:
Use the BMI example from Challenge #1, and the code you already wrote, and improve it. 

Your tasks:
  1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!" 
  2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!" 
*/

export const challenge1 = () => {
  const calculateBMI = (mass, height) => {
    return mass / height ** 2;
  };

  let markBMIData = {
    weight_set1: 78,
    height_set1: 1.69,
    weight_set2: 95,
    height_set2: 1.88,
  };
  let johnBMIData = {
    weight_set1: 92,
    height_set1: 1.95,
    weight_set2: 85,
    height_set2: 1.76,
  };

  let {
    weight_set1: markWeight_set1,
    height_set1: markHeight_set1,
    weight_set2: markWeight_set2,
    height_set2: markHeight_set2,
  } = markBMIData;
  let {
    weight_set1: johnWeight_set1,
    height_set1: johnHeight_set1,
    weight_set2: johnWeight_set2,
    height_set2: johnHeight_set2,
  } = johnBMIData;

  markBMIData.BMI_set1 = calculateBMI(markWeight_set1, markHeight_set1);
  markBMIData.BMI_set2 = calculateBMI(markWeight_set2, markHeight_set2);
  johnBMIData.BMI_set1 = calculateBMI(johnWeight_set1, johnHeight_set1);
  johnBMIData.BMI_set2 = calculateBMI(johnWeight_set2, johnHeight_set2);

  let { BMI_set1: markBMI_set1, BMI_set2: markBMI_set2 } = markBMIData;
  let { BMI_set1: johnBMI_set1, BMI_set2: johnBMI_set2 } = johnBMIData;
  let markHigherBMI_set1 = markBMI_set1 > johnBMI_set1;
  let markHigherBMI_set2 = markBMI_set2 > johnBMI_set2;

  //prettier-ignore
  console.log(`Set 1: ${markHigherBMI_set1} (${markBMI_set1.toFixed(3)} > 
  ${johnBMI_set1.toFixed(3)})
  Set 2: ${markHigherBMI_set2} (${markBMI_set2.toFixed(3)} < 
  ${johnBMI_set2.toFixed(3)})`);

  //prettier-ignore
  if (markHigherBMI_set1) {
    console.log(`Mark's BMI (${markBMI_set1.toFixed(3)}) is higher than John's (${johnBMI_set1.toFixed(3)})!`);
  } else {
    console.log(`Mark's BMI ( ${markBMI_set1.toFixed(3)}) is lower than John's (${johnBMI_set1.toFixed(3)})!`);
  }

  //prettier-ignore
  if (markHigherBMI_set2) {
    console.log(`Mark's BMI ( ${markBMI_set2.toFixed(3)}) is higher than John's (${johnBMI_set2.toFixed(3)})!`);
  } else {
    console.log(`Mark's BMI ( ${markBMI_set2.toFixed(3)}) is lower than John's (${johnBMI_set2.toFixed(3)})!`);
  }
};
