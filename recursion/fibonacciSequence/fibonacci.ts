export const fibonacci = (num: number): number => {
  if (num < 2) {
    return num;
  }

  return fibonacci(num - 2) + fibonacci(num - 1);
};
