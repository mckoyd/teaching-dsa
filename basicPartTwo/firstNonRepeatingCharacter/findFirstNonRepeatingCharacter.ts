export const findFirstNonRepeatingCharacter = (str: string) => {
  const strMap = str.split("").reduce<Record<string, number>>((acc, curr) => {
    if (acc[curr]) {
      acc[curr] += 1;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});

  for (let i = 0; i < str.length; i++) {
    if (strMap[str[i]] === 1) {
      return str[i];
    }
  }

  return null;
};
