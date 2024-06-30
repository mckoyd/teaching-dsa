export const findMissingNumber = (arr: number[]): number => {
  if (arr.length === 0) return 1;

  const arrLengthIncremented = arr.length + 1;
  const expectedSum = (arrLengthIncremented * (arrLengthIncremented + 1)) / 2;
  const actualSum = arr.reduce((acc, curr) => acc + curr, 0);

  return expectedSum - actualSum;
};
