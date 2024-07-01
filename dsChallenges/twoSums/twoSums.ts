export const twoSums = (
  numbers: number[],
  targetNumber: number
): number[] | undefined => {
  const complementSet = new Set();

  for (let i = 0; i < numbers.length; i++) {
    if (complementSet.has(targetNumber - numbers[i])) {
      return [numbers.indexOf(targetNumber - numbers[i]), i];
    }

    complementSet.add(numbers[i]);
  }
};
