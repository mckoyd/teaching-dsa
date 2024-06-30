import { findFirstNonRepeatingCharacter } from "./findFirstNonRepeatingCharacter";

describe("`findFirstNonRepeatingCharacter` method", () => {
  it("Returns the first non repeating letter in a string", () => {
    expect(findFirstNonRepeatingCharacter("aabccdeff")).toBe("b");
    expect(findFirstNonRepeatingCharacter("aabbcc")).toBe(null);
    expect(findFirstNonRepeatingCharacter("hello world")).toBe("h");
  });
});
