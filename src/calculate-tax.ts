const calculateTax = (income: number, taxRate: number): number => {
  if (income < 0) {
    throw new Error('Income cannot be negative');
  }
  return income * taxRate;
};
export default calculateTax;
