/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

Your tasks:
  1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
  2. Use the function to calculate the average for both teams
  3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
  4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
  5. Ignore draws this time

Test data:
  § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

Hints:
  § To calculate average of 3 values, add them all together and divide by 3
  § To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores �
*/

export const set2_challenge1 = () => {
  let calcAverage = (scores) => {
    return (
      scores.reduce((averageScore, roundScore) => {
        return averageScore + roundScore;
      }) / scores.length
    ).toFixed(0);
  };

  // Data 1:
  let teamDolphinsScores = [96, 108, 89];
  let teamKoalasScores = [88, 91, 110];

  let avgDolphins = calcAverage(teamDolphinsScores);
  let avgKoalas = calcAverage(teamKoalasScores);
  let teamDolphinsWonMatch = avgDolphins > avgKoalas;
  let matchDraw = avgDolphins === avgKoalas;
  let minimumScore = 100;
  let minimumScoreNotReached = {
    teamDolphins: avgDolphins < minimumScore,
    teamKoalas: avgKoalas < minimumScore,
  };

  let printMatchResults = () => {
    let printScores_teamDolphinsWinOrDraw = `D: ${avgDolphins} - K: ${avgKoalas}`;
    let printScores_teamKoalasWin = `K: ${avgKoalas} - D: ${avgDolphins}`;

    /* prettier-ignore  
        Number of if statements could be cut in half by using 
        default match result messages (Draw, Koalas Win, Dolphins Win) 
        instead of using a custom message for every statement.
      */
    // else if doesn't work. StackBlitz issue.
    if (
      minimumScoreNotReached.teamDolphins &&
      minimumScoreNotReached.teamKoalas
    ) {
      return console.log(
        `Both teams have insufficient points to win the match. Draw! ${printScores_teamDolphinsWinOrDraw}`
      );
    }

    if (minimumScoreNotReached.teamKoalas) {
      return console.log(
        `Team Koalas lose by insufficient points. Team Dolphins Win! ${printScores_teamDolphinsWinOrDraw}`
      );
    }

    if (minimumScoreNotReached.teamDolphins) {
      return console.log(
        `Team Dolphins lose by insufficient points. Team Koalas Win! ${printScores_teamKoalasWin}`
      );
    }

    if (matchDraw) {
      return console.log(`Draw! ${printScores_teamDolphinsWinOrDraw}`);
    }

    if (teamDolphinsWonMatch) {
      return console.log(
        `Team Dolphins Win! ${printScores_teamDolphinsWinOrDraw}`
      );
    }

    if (!teamDolphinsWonMatch) {
      return console.log(`Team Koalas Win! ${printScores_teamKoalasWin}`);
    }
  };

  console.log(`Minimum Score Check:\n\t`, minimumScoreNotReached);
  printMatchResults();
};
