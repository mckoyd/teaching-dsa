import { areAllCharactersUnique } from "./areAllCharactersUnique";

describe("`areAllCharactersUnique` method", () => {
  it("Returns true or false depending on whether all elements in a given array are unique", () => {
    expect(areAllCharactersUnique("abcdefg")).toBe(true);
    expect(areAllCharactersUnique("abcdefgA")).toBe(true);
    expect(areAllCharactersUnique("programming")).toBe(false);
    expect(areAllCharactersUnique("")).toBe(true);
    expect(areAllCharactersUnique("a")).toBe(true);
  });
});
