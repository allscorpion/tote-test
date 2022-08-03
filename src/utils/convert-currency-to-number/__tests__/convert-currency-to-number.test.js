import { convertCurrencyToNumber } from "../convert-currency-to-number";

describe('Convert currency to number', () => {
    it('Converts correctly', () => {
        expect(convertCurrencyToNumber("10.30")).toEqual(10.30);
    });
});