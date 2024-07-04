import { longestConsecutiveSequence } from "./longestConsecutiveSequence";

describe("`longestConsecutiveSequence` method", () => {
  it("Returns the largest number of consecutive numbers in a given array", () => {
    expect(longestConsecutiveSequence([100, 4, 200, 1, 3, 2])).toBe(4);
    expect(longestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 9, 1])).toBe(10);
  });
});
