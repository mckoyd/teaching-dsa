export const findMissingLetter = (arr: string[]) => {
  if (arr.length === 0) return "";

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].charCodeAt(0) !== arr[i - 1].charCodeAt(0) + 1) {
      return String.fromCharCode(arr[i - 1].charCodeAt(0) + 1);
    }
  }
};
