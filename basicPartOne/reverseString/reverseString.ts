export const reverseString = (str: string): string => {
  const strLength = str.length;
  if (strLength === 0) return "";
  if (strLength === 1) return str;

  let result = str[strLength - 1];
  let i = strLength - 2;

  for (i; i >= 0; i--) {
    result += str[i];
  }

  return result;
};
