import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Book.css';


const Book = (props) => {
    const {name, author, img, id, price, published} = props.book;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="book-container">
            <img src={img} alt="" />
            <h3>{name} </h3>
            <h5>Author: {author}</h5>
            <p><small>Id: {id}</small></p>
            <p>Price: {price}</p>
            <p>Published: {published}</p>
            <button
            onClick={()=> props.handleAddToCart(props.book)} 
            className="regular-btn"
            >{cartIcon} add to cart</button>
        </div>
    );
};

export default Book;