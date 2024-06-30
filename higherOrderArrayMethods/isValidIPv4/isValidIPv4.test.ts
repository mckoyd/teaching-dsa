import { isValidIPv4 } from "./isValidIPv4";

describe("`isValidIPv4` method", () => {
  it("Validates via boolean whether the given ip is a valid IPv4 address", () => {
    expect(isValidIPv4("1.2.3.4")).toBe(true);
    expect(isValidIPv4("123.45.67.89")).toBe(true);
    expect(isValidIPv4("1.2.3")).toBe(false);
    expect(isValidIPv4("1.2.3.4.5")).toBe(false);
    expect(isValidIPv4("123.456.78.90")).toBe(false);
    expect(isValidIPv4("123.045.067.089")).toBe(false);
  });
});
