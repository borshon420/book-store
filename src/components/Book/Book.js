import React from 'react';
import './Book.css';

const Book = (props) => {
    console.log(props)
    const {name, author, img, id, price, published} = props.book;
    return (
        <div className="book-container">
            <img src={img} alt="" />
            <h3>Name:{name} </h3>
            <p>Author: {author}</p>
            <p><small>Id: {id}</small></p>
            <p>Price: {price}</p>
            <p>Published: {published}</p>
            <button
            onClick={()=> props.handleAddToCart(props.book)} 
            className="regular-btn"
            >add to cart</button>
        </div>
    );
};

export default Book;