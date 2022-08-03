import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, selectCartItems } from '../../features/cart';
import { fetchProducts, selectProducts } from '../../features/products/product-slice';
import { Products } from './products';

export const ProductsContainer = () => {

    const productItems = useSelector(selectProducts);
    const cartTtems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const addItemToBasket = (item) => {
        dispatch(addToCart(item));
    };

    if (!productItems.length) {
        return <p>Loading...</p>;
    } 

    return (
        <Products 
            items={productItems} 
            cartItems={cartTtems}
            addItemToBasket={addItemToBasket} 
        />
    );
};