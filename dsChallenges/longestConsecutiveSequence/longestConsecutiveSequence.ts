export const longestConsecutiveSequence = (arr: number[]): number => {
  let longestSequence = 0;
  const sequenceArr: number[] = [];

  const sortedArr = Array.from(new Set(arr.sort((a, b) => a - b)));

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] === sortedArr[i + 1] - 1) {
      longestSequence += 1;
      continue;
    }

    if (sortedArr[i] === sortedArr[i - 1] + 1) {
      longestSequence += 1;
      continue;
    }

    sequenceArr.push(longestSequence);
    longestSequence = 0;
  }

  sequenceArr.push(longestSequence);

  return Math.max(...sequenceArr);
};
