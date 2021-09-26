import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Cart from '../Cart/Cart';
import './Store.css';

const Store = () => {
    const [books, setBooks] = useState([])
    const [cart, setCart] = useState([])
    
    useEffect(()=>{
        fetch('./books.JSON')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    const handleAddToCart = book =>{
        const newCart = [...cart, book];
        setCart(newCart)
    }
    return (

        <>
            <div className="store-container">
                
                <div className="books-container">
                    {
                        books.map(book => <Book
                            handleAddToCart={handleAddToCart}
                            key={book.id} 
                            book={book}
                            ></Book>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                    
                </div>
                
            </div>
            
        </>
    );
};

export default Store;