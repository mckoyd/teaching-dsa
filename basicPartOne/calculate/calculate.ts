type Operators = "+" | "-" | "/" | "*" | "";

export const calculate = (
  a: number,
  b: number,
  operator: Operators
): number | undefined => {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "/":
      return a / b;
    case "*":
      return a * b;
    default:
      throw new Error("Invalid operator.");
  }
};
