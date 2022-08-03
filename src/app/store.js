import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/products/product-slice';
import cartReducer from '../features/cart/cart-slice'

export function setupStore(preloadedState) {
  return configureStore({
    reducer: {
      cart: cartReducer,
      product: productReducer
    },
    preloadedState
  })
}