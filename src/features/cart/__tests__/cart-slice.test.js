import cartReducer, {
  addToCart
} from '../cart-slice';

describe('cart reducer', () => {

  const initialState = {
    items: [],
    originalPrice: 0,
    totalDiscount: 0,
    totalPrice: 0
  }

  it('should handle initial state', () => {
    expect(cartReducer(undefined, { type: 'unknown' })).toEqual({
      items: [],
      originalPrice: 0,
      totalDiscount: 0,
      totalPrice: 0
    });
  });

  it('should handle addToCart', () => {
    const testItem = {
      "id": 1,
      "product": "Pie",
      "cost": "3.20",
      "expiryDate": "2022-08-08T00:00:00.000Z"
    };
    const actual = cartReducer(initialState, addToCart(testItem));
    expect(actual.items).toEqual([testItem]);
  });
});
