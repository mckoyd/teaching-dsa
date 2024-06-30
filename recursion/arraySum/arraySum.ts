export const arraySum = (arr: number[]): number =>
  arr.length === 0 ? 0 : arr[0] + arraySum(arr.slice(1));
