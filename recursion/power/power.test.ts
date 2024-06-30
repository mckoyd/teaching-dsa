import { power } from "./power";

describe("`power` method", () => {
  it("Returns the calucation of raising a given base number to a given exponent", () => {
    expect(power(2, 3)).toEqual(8);
    expect(power(5, 2)).toEqual(25);
    expect(power(3, 4)).toEqual(81);
  });
});
