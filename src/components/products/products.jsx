import React from 'react';
import pie from '../../images/pie.jpg';
import chips from '../../images/chips.jpg';
import './products.css';

export const Products = (props) => {
    const {items, addItemToBasket, cartItems} = props;
    return (
        <div className="grid">
            {items.map(item => {
                const itemIsInCart = cartItems?.some(x => x.id === item.id);
                return (
                    <div className='grid-item' key={item.id}>
                        {/* thumbnail would usually come from the api */}
                        {item.product.toLowerCase() === 'pie' && <img src={pie} className="thumbnail" alt="Pie" />}
                        {item.product.toLowerCase() === 'chips' && <img src={chips} className="thumbnail" alt="Chips" />}
                        <h2>{item.product}</h2>
                        <p>£{item.cost}</p>
                        {item.discountPrice !== undefined && <p>Discount price - £{item.discountPrice}</p>}
                        <button 
                            onClick={() => {
                                addItemToBasket(item);
                            }}
                            disabled={itemIsInCart}
                        >
                            {!itemIsInCart ? 'Add' : 'Added'}
                        </button>
                    </div>
                );
            })}
        </div>
    );
}