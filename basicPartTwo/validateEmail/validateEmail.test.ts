import { validateEmail } from "./validateEmail";

describe("`validateEmail` method", () => {
  it("Checks whether a given string contains an `@` and a `.`", () => {
    expect(validateEmail("john@example.com")).toBe(true);
    expect(validateEmail("jane.doe@domain.org")).toBe(true);
  });

  it("Checks whether a given string does not contain an `@` and a `.`", () => {
    expect(validateEmail("invalid-email")).toBe(false);
    expect(validateEmail("@domain.com")).toBe(false);
    expect(validateEmail("user@domain")).toBe(false);
  });
});
