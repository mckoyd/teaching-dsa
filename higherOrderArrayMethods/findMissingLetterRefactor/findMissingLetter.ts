export const findMissingLetter = (arr: string[]) => {
  if (arr.length === 0) return "";

  let missingLetter = "";
  arr.forEach((letter, i) => {
    if (i > 0 && letter.charCodeAt(0) !== arr[i - 1].charCodeAt(0) + 1) {
      missingLetter = String.fromCharCode(arr[i - 1].charCodeAt(0) + 1);
    }
  });

  return missingLetter;
};
