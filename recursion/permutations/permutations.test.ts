import { permutations } from "./permutations";

describe("`permutations` method", () => {
  it("Returns all permutations of a given string via an array", () => {
    expect(permutations("abc")).toEqual([
      "abc",
      "acb",
      "bac",
      "bca",
      "cab",
      "cba",
    ]);
    expect(permutations("dog")).toEqual([
      "dog",
      "dgo",
      "odg",
      "ogd",
      "gdo",
      "god",
    ]);
    expect(permutations("")).toEqual([""]);
  });
});
