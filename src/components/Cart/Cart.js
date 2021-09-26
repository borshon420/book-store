import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    let total = 0;
    for(const book of cart){
        total = total + book.price;
    }
     
    return (
        <div className="cart-item">
            <h1>Book Items: {props.cart.length}</h1>
            <p>Price: {total.toFixed(2)}</p>
            <h3>Books name</h3>
            <ul>
                
                    {
                        cart.map(book => <li key={book.id}>{book.name}</li>)
                    }
                    
            </ul>
            <button className="buy-now-btn">{cartIcon} Buy Now</button>
        </div>
    );
};

export default Cart;