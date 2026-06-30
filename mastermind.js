const { black } = require("colors");

const prompt = require("prompt-sync")();

// 6 possible colors
// only guess 4, repeats allowed
// white: right color, wrong spot
// black: right color, right spot

// Red(R), Green(G), Blue(B), Yellow(Y), Cyan(C), Purple(P)

const userGuess = prompt("What is your guess?(format: XXXX)");

const answer = ["R", "C", "G", "G"];

function checkForValidAnswers(userGuess, answer) {
  let whiteDot = 0;
  let blackDot = 0;
  const userGuessArr = userGuess.split("");

  userGuessArr.forEach((value, index) => {
    if (value == answer[index]) {
      answer[index] = "";
      blackDot++;
    }
  });

  userGuessArr.forEach((value, index) => {
    if (answer.includes(value)) {
      answer[index] = "";
      whiteDot++;
    }
  });

  return { whiteDot, blackDot };
}

console.log(checkForValidAnswers(userGuess, answer));
