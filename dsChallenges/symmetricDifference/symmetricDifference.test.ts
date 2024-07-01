import { symmetricDifference } from "./symmetricDifference";

describe("`symmetricDifference` method", () => {
  it("Calculates the symmetric difference between two arrays", () => {
    expect(symmetricDifference([1, 2, 3], [3, 4, 5])).toEqual([1, 2, 4, 5]);
    expect(symmetricDifference([1, 2, 2, 3, 4], [2, 3, 3, 4, 5])).toEqual([
      1, 5,
    ]);
    expect(symmetricDifference([1, 2, 3, 4, 5], [5, 4, 3, 2, 1])).toEqual([]);
    expect(symmetricDifference([1, 2, 3], [4, 5, 6])).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });
});