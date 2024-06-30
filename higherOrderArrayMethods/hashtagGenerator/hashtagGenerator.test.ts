import { generateHashtag } from "./hashtagGenerator";

describe("`hashtagGenerator` method", () => {
  it("Generates a hashtag according to given string or returns false if string is too long", () => {
    expect(generateHashtag("    Hello     World   ")).toBe("#HelloWorld");
    expect(generateHashtag(" Hello there thanks for trying my Kata")).toBe(
      "#HelloThereThanksForTryingMyKata"
    );
    expect(generateHashtag("")).toBe(false);
    expect(
      generateHashtag(
        "This is a very very very very very very very very very very very very very very long input that should result in a false hashtag because it exceeds the character limit of 140"
      )
    ).toBe(false);
  });
});
