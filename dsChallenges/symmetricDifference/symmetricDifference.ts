export const symmetricDifference = (
  arr1: number[],
  arr2: number[]
): number[] => {
  const arr1Set = new Set(arr1);
  const arr2Set = new Set(arr2);

  const symmetricDifferenceArr: number[] = [];

  for (let num of arr1Set) {
    if (!arr2Set.has(num)) {
      symmetricDifferenceArr.push(num);
    }
  }

  for (let num of arr2Set) {
    if (!arr1Set.has(num)) {
      symmetricDifferenceArr.push(num);
    }
  }

  return symmetricDifferenceArr;
};
