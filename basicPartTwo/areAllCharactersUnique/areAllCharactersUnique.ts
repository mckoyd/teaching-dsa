export const areAllCharactersUnique = (str: string) => {
  const strMap: Record<string, boolean> = {};

  for (let i = 0; i < str.length; i++) {
    if (strMap[str[i]]) {
      return false;
    } else {
      strMap[str[i]] = true;
    }
  }

  return true;
};
