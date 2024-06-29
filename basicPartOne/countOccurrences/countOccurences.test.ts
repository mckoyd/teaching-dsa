import { countOccurrences } from "./countOccurences";

describe("`countOccurences` method", () => {
  it("Returns the number of times a given character appears in a string", () => {
    expect(countOccurrences("hello", "l")).toBe(2);
    expect(countOccurrences("hello", "z")).toBe(0);
  });
});
