import { expiryDateDiscount } from "../expiry-date-discount";

describe('Expiry date discount', () => {

    beforeAll(() => {
        jest
            .useFakeTimers()
            .setSystemTime(new Date('2022-08-01'));
    });

    it('Applys discount correctly', () => {
        const result = expiryDateDiscount({
            id: 1,
            cost: '3.20',
            expiryDate: '2022-08-01T00:00:00.000Z'
        }, 0.5);

        expect(result.discountPrice).toEqual('1.60');
    });

    it('Discount doesn\'t apply when it\'s not expiry day', () => {
        const result = expiryDateDiscount({
            id: 1,
            cost: '3.20',
            expiryDate: '2022-08-10T00:00:00.000Z'
        }, 0.5);

        expect(result.discountPrice).toEqual(undefined);
    });
});