export const isPalindrome = (str: string): boolean =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .split("")
    .reverse()
    .join("") === str.toLowerCase().replace(/[^a-z0-9]/g, "");
