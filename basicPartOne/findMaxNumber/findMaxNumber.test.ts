import { findMaxNumber } from "./findMaxNumber";

describe("`findMaxNumber` method", () => {
  it("Finds the maximum number in a given array", () => {
    expect(findMaxNumber([1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10])).toBe(10);
    expect(findMaxNumber([66, 23, 453, 4, 45, 63, 6, 4557, 8, 9, 10])).toBe(
      4557
    );
  });
});
