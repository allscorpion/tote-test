import { filterExpiredProducts } from "../filter-expired-products";

describe('Filter expired products', () => {

    beforeAll(() => {
        jest
            .useFakeTimers()
            .setSystemTime(new Date('2022-08-01'));
    });

    it('Filters correctly', () => {
        const testData = [
            {
                "id": 1,
                "product": "Pie",
                "cost": 3.20,
                "expiryDate": "2022-08-08T00:00:00.000Z"
            },
            {
                "id": 2,
                "product": "Pie",
                "cost": 3.20,
                "expiryDate": "2022-06-08T00:00:00.000Z"
            },
            {
                "id": 3,
                "product": "Chips",
                "cost": 1.80,
                "expiryDate": null
            },
        ];
        const actual = filterExpiredProducts(testData);
        expect(actual).toEqual([
            {
                "id": 1,
                "product": "Pie",
                "cost": 3.20,
                "expiryDate": "2022-08-08T00:00:00.000Z"
            },
            {
                "id": 3,
                "product": "Chips",
                "cost": 1.80,
                "expiryDate": null
            }
        ]);
    })
});