import { findMissingLetter } from "./findMissingLetter";

describe("`findMissingLetterRefactor` method", () => {
  it("Finds the missing letter in a given array of consecutive letters", () => {
    expect(findMissingLetter(["a", "b", "c", "e"])).toBe("d");
    expect(findMissingLetter(["X", "Z"])).toBe("Y");
    expect(findMissingLetter(["m", "n", "o", "q", "r"])).toBe("p");
    expect(findMissingLetter(["F", "G", "H", "J"])).toBe("I");
  });
});
