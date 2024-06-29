import { getSum } from "./getSum";

describe("`getSum` method", () => {
  it("Returns the sum of two numbers", () => {
    expect(getSum(1, 2)).toBe(3);
    expect(getSum(80, 34)).toBe(114);
    expect(getSum(10, 5)).toBe(15);
    expect(getSum(2, -2)).toBe(0);
  });
});
