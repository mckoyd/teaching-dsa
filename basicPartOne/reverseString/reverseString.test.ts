import { reverseString } from "./reverseString";

describe("`reverseString` method", () => {
  it("Returns the given string in reverse", () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("world")).toBe("dlrow");
    expect(reverseString("")).toBe("");
    expect(reverseString("a")).toBe("a");
  });
});
