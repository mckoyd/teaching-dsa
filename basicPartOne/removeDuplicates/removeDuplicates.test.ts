import { removeDuplicates } from "./removeDuplicates";

describe("`removeDuplicates` method", () => {
  it("Removes any duplicate items from a given array", () => {
    expect(removeDuplicates([1, 1, 1, 23, 4, 5, 1])).toEqual([1, 23, 4, 5]);
    expect(
      removeDuplicates(["apple", "banana", "orange", "banana", "kiwi"])
    ).toEqual(["apple", "banana", "orange", "kiwi"]);
    expect(removeDuplicates([true, true, false, true, false])).toEqual([
      true,
      false,
    ]);
  });
});
