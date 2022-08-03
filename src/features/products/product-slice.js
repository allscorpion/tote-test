import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { expiryDateDiscount, formatToCurrency } from '../../utils';
import { getProducts } from './product-api';
import { filterExpiredProducts } from './helpers';

const initialState = {
    items: [],
    status: 'idle',
};

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        // simulate api call
        const products = await getProducts();

        products.data = filterExpiredProducts(products.data).map((item) => {
            item.cost = formatToCurrency(item.cost);

            if (item.product === 'Pie') {
                item = expiryDateDiscount(item, 0.5);
            }

            return item;
        });

        return products.data;
    }
);

export const productSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'idle';
            state.items = action.payload;
        });
    },
});

export const selectProducts = (state) => state.product.items;

export default productSlice.reducer;