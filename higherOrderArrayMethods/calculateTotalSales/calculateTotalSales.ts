interface Product {
  name: string;
  price: number;
  quantity: number;
}

export const calculateTotalSales = (
  products: Product[],
  taxRate: number
): number =>
  parseFloat(
    (
      products.reduce((acc, curr) => curr.price * curr.quantity + acc, 0) *
      (1 + taxRate / 100)
    ).toFixed(2)
  );
