import { countVowels } from "./countVowels";

describe("`countVowels` method", () => {
  it("Counts the vowels in a given string", () => {
    expect(countVowels("hello")).toBe(2);
    expect(countVowels("why")).toBe(0);
    expect(countVowels("mississippi")).toBe(4);
  });
});
