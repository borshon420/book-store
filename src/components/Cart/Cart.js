import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const book of cart){
        total = total + book.price;
    }
    let bookName = ' ';
    for(const book of cart){
        bookName = bookName + book.name + ', '  
    } 
    return (
        <div>
            <h1>Book Items: {props.cart.length}</h1>
            <h3>Author: {bookName}</h3>
            <p>Price: {total}</p>
        </div>
    );
};

export default Cart;