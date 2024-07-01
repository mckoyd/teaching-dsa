export const wordFrequencyCounter = (str: string) => {
  const wordMap = new Map();
  if (str.length === 0) return wordMap;

  console.log(str.toLowerCase().split(/\W+/));

  str
    .toLowerCase()
    .split(/\W+/)
    .filter((word) => word.length !== 0)
    .forEach((word) => {
      wordMap.set(word, (wordMap.get(word) || 0) + 1);
    });

  return wordMap;
};
