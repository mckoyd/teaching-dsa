import { calculate } from "./calculate";

describe("`calculate` method", () => {
  it("Performs the calculation of two numbers stipulated by the given operator and numbers", () => {
    expect(calculate(1, 2, "+")).toBe(3);
    expect(calculate(10, 5, "-")).toBe(5);
    expect(calculate(2, 2, "*")).toBe(4);
    expect(calculate(10, 5, "/")).toBe(2);
    expect(() => {
      calculate(1, 2, "");
    }).toThrow(Error("Invalid operator."));
  });
});
