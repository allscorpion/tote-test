import React from 'react';

export const Cart = (props) => {
    const {items, originalPrice, totalDiscount, totalPrice} = props;
    return (
        <>
            <p>Cart Items - {items.length}</p>
            {totalDiscount > 0 && <>
                <p>Original Price - £{originalPrice}</p>
                <p>Total Discount - £{totalDiscount}</p>    
            </>}
            <p>Total Price - £{totalPrice}</p>
        </>
    );
}