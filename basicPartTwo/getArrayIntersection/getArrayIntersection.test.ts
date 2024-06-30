import { getArrayIntersection } from "./getArrayIntersection";

describe("`getArrayIntersection` method", () => {
  it("Returns an array with the common elements of two arrays", () => {
    expect(getArrayIntersection([1, 2, 3], [3, 2, 7])).toEqual([3, 2]);
    expect(getArrayIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])).toEqual([
      3, 4, 5,
    ]);
    expect(getArrayIntersection([10, 20, 30], [30, 40, 50])).toEqual([30]);
    expect(getArrayIntersection([1, 2, 3], [4, 5, 6])).toEqual([]);
  });
});
