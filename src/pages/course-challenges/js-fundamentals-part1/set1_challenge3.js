/* 
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
  1. Calculate the average score for each team, using the test data below
  2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
  3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks �
  4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

Test data:
  § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
  § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 
  § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

Tests: 
  O : Dolphins Win
  O : Koalas Win
  O : Draw
  O : Dolphins Win (Koalas didn't reach minimum score)
  O : Koalas Win (Dolphins didn't reach minimum score)
  O : Draw (Neither team reached minimum score)
*/

export const set1_challenge3 = () => {
  // Data 1:
  // let teamDolphinsScores = [96, 108, 89];
  // let teamKoalasScores = [88, 91, 110];

  // Data Bonus 1 (Koalas Win):
  // let teamDolphinsScores = [103, 112, 101];
  // let teamKoalasScores = [97, 95, 123];

  // Data 2 (Koalas lose for not reaching minimum score)
  let teamDolphinsScores = [103, 112, 101];
  let teamKoalasScores = [9, 95, 123];

  // Data Bonus 2 (Draw):
  // let teamDolphinsScores = [97, 112, 101];
  // let teamKoalasScores = [109, 95, 106];

  let getAverageScore = (scores) => {
    return (
      scores.reduce((averageScore, roundScore) => {
        return averageScore + roundScore;
      }) / scores.length
    ).toFixed(0);
  };

  let teamDolphinsAverageScore = getAverageScore(teamDolphinsScores);
  let teamKoalasAverageScore = getAverageScore(teamKoalasScores);
  let teamDolphinsWonMatch = teamDolphinsAverageScore > teamKoalasAverageScore;
  let matchDraw = teamDolphinsAverageScore === teamKoalasAverageScore;
  let minimumScore = 100;
  let minimumScoreNotReached = {
    teamDolphins: teamDolphinsAverageScore < minimumScore,
    teamKoalas: teamKoalasAverageScore < minimumScore,
  };

  let printMatchResults = () => {
    let printScores_teamDolphinsWinOrDraw = `D: ${teamDolphinsAverageScore} - K: ${teamKoalasAverageScore}`;
    let printScores_teamKoalasWin = `K: ${teamKoalasAverageScore} - D: ${teamDolphinsAverageScore}`;

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
