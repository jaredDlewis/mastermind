const prompt = require("prompt-sync")();

// 6 possible colors
// only guess 4, repeats allowed
// white: right color, wrong spot
// black: right color, right spot

// Red(R), Green(G), Blue(B), Yellow(Y), Cyan(C), Purple(P)

// What is your guess?(format: XXXX)GGBG
// 1 right color right place
// 3 right color wrong place

const answer = ["R", "C", "G", "G"];

function checkForValidAnswers(userGuess, answer) {
  let whiteDot = 0;
  let blackDot = 0;
  const userGuessArr = userGuess.split("");

  // black check first to preserve indexes. remove cause we don't want to double count
  userGuessArr.forEach((value, index) => {
    if (value == answer[index]) {
      console.log(`Black ${answer[index]} at index ${index}`);
      userGuessArr[index] = "";
      answer[index] = "";
      blackDot++;
    }
  });

  userGuessArr.forEach((value, index) => {
    if (answer.includes(value)) {
      console.log(`White at index ${ index }: ${answer}, ${userGuess}`);
      answer[answer.indexOf(value)] = "";
      whiteDot++;
    }
  });

  return { whiteDot, blackDot };
}

const guessesAllowed = 10;

for (let i = 0; i < guessesAllowed; i++) {
  const userGuess = prompt("What is your guess? (format: XXXX) ");
  const checkResult = checkForValidAnswers(userGuess, [...answer]);
  console.log(`${checkResult.blackDot} right color right place\n${checkResult.whiteDot} right color wrong place\n`);
}
