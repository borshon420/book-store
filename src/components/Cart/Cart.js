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
            <p>Price: {total}</p>
            <h3>Author </h3>
            <ul>
                
                    {
                        cart.map(author => <li key={author.id}>{author.author}</li>)
                    }
                    
            </ul>
            <button className="buy-now-btn">{cartIcon} Buy Now</button>
        </div>
    );
};

export default Cart;