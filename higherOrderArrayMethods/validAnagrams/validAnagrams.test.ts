import { validAnagrams } from "./validAnagrams";

describe("`validAnagrams` method", () => {
  it("Determines whether two given strings are anagrams", () => {
    expect(validAnagrams("listen", "silent")).toBe(true);
    expect(validAnagrams("hello", "world")).toBe(false);
    expect(validAnagrams("astronomer", "moonstarer")).toBe(true);
    expect(validAnagrams("apple", "banana")).toBe(false);
  });
});
