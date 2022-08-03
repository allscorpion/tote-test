import { formatToCurrency } from "../format-to-currency";

describe('Format to currency', () => {
    it('formats a number correctly', () => {
        expect(formatToCurrency(10)).toEqual("10.00");
    })
})