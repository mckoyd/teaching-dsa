export const countVowels = (str: string): number => {
  const vowelMap = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };

  let vowelCount = 0;

  str.split("").forEach((letter) => vowelMap[letter] && vowelCount++);

  return vowelCount;
};
