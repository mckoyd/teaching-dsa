import { helloWorld } from "./helloWorld";

describe("`helloWorld` method", () => {
  test("Returns the string `Hello World`", () => {
    expect(helloWorld()).toBe("Hello World");
  });
});
