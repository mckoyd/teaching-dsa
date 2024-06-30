import { numRange } from "./numRange";

describe("`numRange` method", () => {
  it("Returns the numbers from a given start to a given end via an array", () => {
    expect(numRange(1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(numRange(3, 10)).toEqual([3, 4, 5, 6, 7, 8, 9, 10]);
    expect(numRange(7, 7)).toEqual([7]);
  });
});
