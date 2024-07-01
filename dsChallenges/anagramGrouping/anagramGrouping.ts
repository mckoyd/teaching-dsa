export const anagramGrouping = (words: string[]): string[][] => {
  const anagramGroups = words.reduce<Record<string, string[]>>(
    (anagramGroup, word) => {
      const sortedWord = word.split("").sort().join("");
      if (!anagramGroup[sortedWord]) {
        anagramGroup[sortedWord] = [word];
      } else {
        anagramGroup[sortedWord].push(word);
      }
      return anagramGroup;
    },
    {}
  );

  return Array.from(Object.values(anagramGroups));
};
