export const sumOfEvenSquares = (arr: number[]): number =>
  arr.reduce((sum, num) => (num % 2 === 0 ? num ** 2 + sum : sum), 0);
