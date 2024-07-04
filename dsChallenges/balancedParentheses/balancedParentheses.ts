import { Stack } from "../customStack/stack";

export const balancedParenthesis = (str: string) => {
  const parenthesesStack = new Stack();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      parenthesesStack.push(str[i]);
    } else if (str[i] === ")") {
      if (parenthesesStack.isEmpty()) {
        return false;
      }
      parenthesesStack.pop();
    }
  }
  return parenthesesStack.isEmpty();
};
