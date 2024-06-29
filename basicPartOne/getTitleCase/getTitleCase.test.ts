import { getTitleCase } from "./getTitleCase";

describe("`getTitleCase` method", () => {
  it("Returns the given string with the first letter of each word capitalized", () => {
    expect(getTitleCase("I'm a little tea pot")).toBe("I'm A Little Tea Pot");
    expect(getTitleCase("sHoRt AnD sToUt")).toBe("Short And Stout");
    expect(getTitleCase("HERE IS MY HANDLE HERE IS MY SPOUT")).toBe(
      "Here Is My Handle Here Is My Spout"
    );
  });
});
