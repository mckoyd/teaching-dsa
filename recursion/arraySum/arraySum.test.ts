import { arraySum } from "./arraySum";

describe("`arraySum` method", () => {
  it("Returns the sum of all the numbers in a given array", () => {
    expect(arraySum([1, 2, 3, 4, 5])).toEqual(15);
    expect(arraySum([-1, -2, -3, -4, -5])).toEqual(-15);
    expect(arraySum([])).toEqual(0);
  });
});
