export const factorial = (num: number) =>
  num === 0 ? 1 : num * factorial(num - 1);
