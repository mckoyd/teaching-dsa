export const countdown = (num: number): void => {
  if (num <= 0) {
    console.log("All done!");
    return;
  }

  console.log(num);

  return countdown(num - 1);
};
