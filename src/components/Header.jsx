import React from 'react';
import cartIcon from '../assets/cart-icon.png';
// import './Header.css';

const Header = ({ totalItems, totalPrice }) => {
    return (
        <header className="header">
            <div className="container">
                <h1 className="logo">Shopping Cart</h1>
                <nav className="nav">
                    <a href="#home">Home</a>
                    <div className="shop-dropdown">
                        <a href="#shop">Shop</a>
                        <div className="dropdown-content">
                            <a href="#all-products">All Products</a>
                            <a href="#popular-items">Popular Items</a>
                            <a href="#new-arrivals">New Arrivals</a>
                        </div>
                    </div>
                    <a href="#contact">About</a>
                </nav>
                <div className="cart-summary">
                    <img src={cartIcon} alt="Cart" className="cart-icon" />
                    <p>Items: {totalItems}</p>
                    <p>Total: ${totalPrice.toFixed(2)}</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
