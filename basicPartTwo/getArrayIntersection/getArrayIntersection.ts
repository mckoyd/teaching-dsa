export const getArrayIntersection = (arr1: number[], arr2: number[]) => {
  const intersectionArr: number[] = [];

  const arr1Map = new Set(arr1);
  arr2.forEach((number) => arr1Map.has(number) && intersectionArr.push(number));

  return intersectionArr;
};
