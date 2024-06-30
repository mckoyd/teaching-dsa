import { sumOfEvenSquares } from "./sumOfEvenSquares";

describe("`sumOfEvenSquares` method", () => {
  it("Returns the sum of the squares of the even numbers in a given array", () => {
    expect(sumOfEvenSquares([1, 2, 3, 4, 5])).toBe(20);
    expect(sumOfEvenSquares([-1, 0, 1, 2, 3, 4])).toBe(20);
    expect(sumOfEvenSquares([])).toBe(0);
  });
});
