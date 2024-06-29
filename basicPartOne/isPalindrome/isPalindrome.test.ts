import { isPalindrome } from "./isPalindrome";

describe("`isPalindrome` method", () => {
  it("Returns `true` if the given string is a palindrome", () => {
    expect(isPalindrome("madam")).toBe(true);
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("racecar &*$")).toBe(true);
    expect(isPalindrome("hello")).toBe(false);
    expect(isPalindrome("")).toBe(true);
  });
});
