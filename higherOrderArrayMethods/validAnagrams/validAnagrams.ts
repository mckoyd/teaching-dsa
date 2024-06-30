export const validAnagrams = (str1: string, str2: string): boolean =>
  str1.split("").sort().join("") === str2.split("").sort().join("");
