export const power = (base: number, exponent: number) =>
  exponent === 0 ? 1 : base * power(base, exponent - 1);
