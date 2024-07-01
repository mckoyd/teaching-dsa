export const permutations = (str: string): string[] => {
  const result: string[] = [];
  if (str.length === 0) {
    result.push("");
  }

  for (let i = 0; i < str.length; i++) {
    const firstLetter = str[i];
    const restOfString = str.slice(0, i) + str.slice(i + 1);
    const subPermutations = permutations(restOfString);

    for (let j = 0; j < subPermutations.length; j++) {
      result.push(firstLetter + subPermutations[j]);
    }
  }

  return result;
};
