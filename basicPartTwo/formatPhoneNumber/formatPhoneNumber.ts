export const formatPhoneNumber = (numArray: number[]): string =>
  `(${numArray.slice(0, 3).join("")}) ${numArray
    .slice(3, 6)
    .join("")}-${numArray.slice(6).join("")}`;
