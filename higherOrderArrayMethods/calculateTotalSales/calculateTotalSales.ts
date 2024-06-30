interface Product {
  name: string;
  price: number;
  quantity: number;
}

export const calculateTotalSales = (
  products: Product[],
  taxRate: number
): number =>
  products.reduce((acc, curr) => {
    const price = curr.price * curr.quantity;
    console.log(price);
    return price + acc;
  }, 0) *
  (1 + taxRate / 100);
