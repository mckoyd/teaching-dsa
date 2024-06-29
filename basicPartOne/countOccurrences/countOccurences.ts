export const countOccurrences = (str: string, character: string): number =>
  str.split(character).length - 1;
