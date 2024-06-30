import { sumUpTo } from "./sumUpTo";

describe("`sumUpTo` method", () => {
  it("Sums up all positive integers up to the number given", () => {
    expect(sumUpTo(5)).toBe(15);
    expect(sumUpTo(10)).toBe(55);
    expect(sumUpTo(1)).toBe(1);
    expect(sumUpTo(0)).toBe(0);
  });
});
