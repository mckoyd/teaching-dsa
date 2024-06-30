export const validatePassword = (str: string): boolean =>
  str.length >= 8 && /[A-Z]+[a-z]+[0-9]/g.test(str);
