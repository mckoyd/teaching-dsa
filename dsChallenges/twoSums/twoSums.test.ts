import { twoSums } from "./twoSums";

describe("`twoSums` method", () => {
  test("Test 1", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const result = twoSums(nums, target);
    expect(result).toEqual(expect.arrayContaining([0, 1]));
  });

  test("Test 2", () => {
    const nums = [3, 2, 4];
    const target = 6;
    const result = twoSums(nums, target);
    expect(result).toEqual(expect.arrayContaining([1, 2]));
  });

  test("Test 3", () => {
    const nums = [3, 3];
    const target = 6;
    const result = twoSums(nums, target);
    expect(result).toEqual(expect.arrayContaining([0, 1]));
  });
});
