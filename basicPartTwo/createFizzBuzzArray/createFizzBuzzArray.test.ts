import { createFizzBuzzArray } from "./createFizzBuzzArray";

describe("`createFizzBuzzArray` method", () => {
  it("Takes a number as a range and returns the common fizz buzz sequence via and array", () => {
    expect(createFizzBuzzArray(5)).toEqual([1, 2, "Fizz", 4, "Buzz"]);
    expect(createFizzBuzzArray(15)).toEqual([
      1,
      2,
      "Fizz",
      4,
      "Buzz",
      "Fizz",
      7,
      8,
      "Fizz",
      "Buzz",
      11,
      "Fizz",
      13,
      14,
      "FizzBuzz",
    ]);
  });
});
