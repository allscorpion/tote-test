import { createSlice } from '@reduxjs/toolkit';
import { convertCurrencyToNumber, formatToCurrency, getDiscountedPrice } from '../../utils';

const initialState = {
    items: [],
    originalPrice: 0,
    totalDiscount: 0,
    totalPrice: 0
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            if (state.items.some(x => x.id === action.payload.id)) return;

            state.items.push(action.payload);

            state.originalPrice = formatToCurrency(state.items.reduce((acc, item) => {
                return acc + convertCurrencyToNumber(item.cost);
            }, 0));

            console.log(action.payload);
            console.log(getDiscountedPrice(JSON.parse(JSON.stringify(state.items))));
            state.totalPrice = getDiscountedPrice(JSON.parse(JSON.stringify(state.items)));
            state.totalDiscount = formatToCurrency(state.originalPrice - state.totalPrice);
        }
    }
});

export const { addToCart } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectOriginalPrice = (state) => state.cart.originalPrice;
export const selectTotalDiscount = (state) => state.cart.totalDiscount;
export const selectTotalPrice = (state) => state.cart.totalPrice;

export default cartSlice.reducer;