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
    let bookName = '';
    for(const book of cart){
        bookName = bookName + book.name + ', '  
    } 
    return (
        <div className="cart-item">
            <h1>Book Items: {props.cart.length}</h1>
            <h3>Author: {bookName}</h3>
            <p>Price: {total}</p>
            <button className="buy-now-btn">{cartIcon} Buy Now</button>
        </div>
    );
};

export default Cart;