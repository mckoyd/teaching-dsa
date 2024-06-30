import { reverseString } from "./reverseString";

describe("`reversedString` method", () => {
  it("Returns the reversed string of the string given", () => {
    expect(reverseString("Hello")).toBe("olleH");
    expect(reverseString("JavaScript")).toBe("tpircSavaJ");
    expect(reverseString("12345")).toBe("54321");
  });
});
