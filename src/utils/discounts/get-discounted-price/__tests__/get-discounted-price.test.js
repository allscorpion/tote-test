import { getDiscountedPrice } from "../get-discounted-price";

describe('Get discounted price', () => {
    it('Works with meal deals', () => {
        const testItems = [
            {
                "id": 1,
                "product": "Pie",
                "cost": "3.20",
                "expiryDate": "2022-08-12T00:00:00.000Z"
            },
            {
                "id": 2,
                "product": "Chips",
                "cost": "1.80",
                "expiryDate": null
            }
        ];
        const result = getDiscountedPrice(testItems);

        expect(result).toEqual('4.00');
    });

    it('Provides the best price to the customer and doesn\t apply meal deal discount', () => {
        const testItems = [
            {
                "id": 1,
                "product": "Pie",
                "cost": "3.20",
                "discountPrice": "1.60",
                "expiryDate": "2022-08-12T00:00:00.000Z"
            },
            {
                "id": 2,
                "product": "Chips",
                "cost": "1.80",
                "expiryDate": null
            }
        ];
        const result = getDiscountedPrice(testItems);

        expect(result).toEqual('3.40');
    });

    it('One pie on discount works correctly', () => {
        const testItems = [
            {
                "id": 1,
                "product": "Pie",
                "cost": "3.20",
                "discountPrice": "1.60",
                "expiryDate": "2022-08-12T00:00:00.000Z"
            }
        ];
        const result = getDiscountedPrice(testItems);

        expect(result).toEqual('1.60');
    });

    it('Provides the best price to the customer with meal deal discount applied to one pie', () => {
        const testItems = [
            {
                "id": 1,
                "product": "Pie",
                "cost": "3.20",
                "discountPrice": "1.60",
                "expiryDate": "2022-08-12T00:00:00.000Z"
            },
            {
                "id": 2,
                "product": "Pie",
                "cost": "3.20",
                "expiryDate": "2022-08-12T00:00:00.000Z"
            },
            {
                "id": 3,
                "product": "Chips",
                "cost": "1.80",
                "expiryDate": null
            }
        ];
        const result = getDiscountedPrice(testItems);

        expect(result).toEqual('5.60');
    });

    it('Applies multiple meal deal discounts', () => {
        const testItems = [
            {
                "id": 1,
                "product": "Pie",
                "cost": "3.20",
                "expiryDate": "2022-08-12T00:00:00.000Z"
            },
            {
                "id": 2,
                "product": "Chips",
                "cost": "1.80",
                "expiryDate": null
            },
            {
                "id": 3,
                "product": "Pie",
                "cost": "3.20",
                "expiryDate": "2022-08-12T00:00:00.000Z"
            },
            {
                "id": 4,
                "product": "Chips",
                "cost": "1.80",
                "expiryDate": null
            },
            {
                "id": 5,
                "product": "Pie",
                "cost": "3.20",
                "expiryDate": "2022-08-12T00:00:00.000Z"
            },
            {
                "id": 6,
                "product": "Chips",
                "cost": "1.80",
                "expiryDate": null
            }
        ];
        const result = getDiscountedPrice(testItems);

        expect(result).toEqual('12.00');
    });

    it('Applies two meal deals with an odd number of items', () => {
        const testItems = [
            {
                "id": 1,
                "product": "Pie",
                "cost": "3.20",
                "expiryDate": "2022-08-12T00:00:00.000Z"
            },
            {
                "id": 2,
                "product": "Chips",
                "cost": "1.80",
                "expiryDate": null
            },
            {
                "id": 3,
                "product": "Pie",
                "cost": "3.20",
                "expiryDate": "2022-08-12T00:00:00.000Z"
            },
            {
                "id": 4,
                "product": "Chips",
                "cost": "1.80",
                "expiryDate": null
            },
            {
                "id": 5,
                "product": "Chips",
                "cost": "1.80",
                "expiryDate": null
            }
        ];
        const result = getDiscountedPrice(testItems);

        expect(result).toEqual('9.80');
    });

});