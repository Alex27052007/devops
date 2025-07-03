import calculateTax from '../calculate-tax';

describe('Tax Calculation', () => {
  it('should calculate tax for a given amount', () => {
    const amount = 100;
    const taxRate = 0.15;
    const expectedTax = amount * taxRate;

    const calculatedTax = calculateTax(amount, taxRate);

    expect(calculatedTax).toBe(expectedTax);
  });

  it('should return zero tax for zero amount', () => {
    const amount = 0;
    const taxRate = 0.15;

    const calculatedTax = calculateTax(amount, taxRate);

    expect(calculatedTax).toBe(0);
  });

  it('should throw an error for negative amounts', () => {
    const amount = -100;
    const taxRate = 0.15;

    expect(() => calculateTax(amount, taxRate)).toThrow('Income cannot be negative');
  });
});
