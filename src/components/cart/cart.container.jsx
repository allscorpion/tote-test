import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems, selectOriginalPrice, selectTotalDiscount, selectTotalPrice } from '../../features/cart';
import { Cart } from './cart';

export const CartContainer = () => {

    const items = useSelector(selectCartItems);
    const originalPrice = useSelector(selectOriginalPrice);
    const totalDiscount = useSelector(selectTotalDiscount);
    const totalPrice = useSelector(selectTotalPrice);

    return (
        <Cart 
            items={items} 
            originalPrice={originalPrice}
            totalDiscount={totalDiscount}
            totalPrice={totalPrice}
        />
    );
};