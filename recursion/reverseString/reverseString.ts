export const reverseString = (str: string) =>
  str.length === 0
    ? ""
    : str[str.length - 1] + reverseString(str.slice(0, str.length - 1));
