export const getArrayIntersection = (arr1: number[], arr2: number[]) => {
  const intersectionArr: number[] = [];

  const arr1Map = [...new Set(arr1)].reduce<Record<string, boolean>>(
    (acc, curr) => {
      acc[curr] = true;
      return acc;
    },
    {}
  );

  arr2.forEach((number) => arr1Map[number] && intersectionArr.push(number));

  return intersectionArr;
};
