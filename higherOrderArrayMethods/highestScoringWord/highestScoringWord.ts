export const highestScoringWord = (str: string) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let maxScore = 0;
  let maxWord = "";

  str.split(" ").forEach((word) => {
    const wordSum = word
      .split("")
      .reduce((sum, letter) => alphabet.indexOf(letter) + 1 + sum, 0);

    if (wordSum > maxScore) {
      maxScore = wordSum;
      maxWord = word;
    }
  });

  return maxWord;
};
