export const createFizzBuzzArray = (num: number) => {
  const fizzBuzzArr: (number | string)[] = [];
  let i = 1;

  for (i; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      fizzBuzzArr.push("FizzBuzz");
      continue;
    }
    if (i % 3 === 0) {
      fizzBuzzArr.push("Fizz");
    } else if (i % 5 === 0) {
      fizzBuzzArr.push("Buzz");
    } else {
      fizzBuzzArr.push(i);
    }
  }

  return fizzBuzzArr;
};
