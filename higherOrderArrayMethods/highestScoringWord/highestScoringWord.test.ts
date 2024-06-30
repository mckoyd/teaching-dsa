import { highestScoringWord } from "./highestScoringWord";

describe("`highestScoringWord` method", () => {
  it("Returns the word with the highest number sum according to the letter placement in the alphabet", () => {
    expect(highestScoringWord("hello my name is xavier")).toBe("xavier");
    expect(highestScoringWord("what time are we climbing up the volcano")).toBe(
      "volcano"
    );
    expect(highestScoringWord("take me to semynak")).toBe("semynak");
  });
});
