import { factorial } from "./factorial";

describe("`factorial` method", () => {
  it("Calculates the factorial of a given number", () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(5)).toBe(120);
    expect(factorial(10)).toBe(3628800);
  });
});
