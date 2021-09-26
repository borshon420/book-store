import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1>Zero Book Store</h1>
            <nav>
                <a href="/books">Books</a>
                <a href="/bestsellers">Bestsellers</a>
                <a href="/coming-soon">Coming Soon</a>
                <a href="/new-releases">New Releases</a>
            </nav>
            <h2>Total Books We Have: 100 Million</h2>
        </div>
    );
};

export default Header;