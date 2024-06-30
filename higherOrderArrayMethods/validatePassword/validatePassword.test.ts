import { validatePassword } from "./validatePassword";

describe("`validatePassword` method", () => {
  it("Validates a given password based on certain criteria", () => {
    expect(validatePassword("Abc12345")).toBe(true);
    expect(validatePassword("password123")).toBe(false);
    expect(validatePassword("Pass")).toBe(false);
    expect(validatePassword("HelloWorld")).toBe(false);
  });
});
