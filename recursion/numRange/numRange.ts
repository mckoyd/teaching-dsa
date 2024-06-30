export const numRange = (start: number, end: number): number[] | undefined => {
  if (start === end) {
    return [start];
  }

  const numbers = numRange(start, end - 1);
  numbers?.push(end);
  return numbers;
};
