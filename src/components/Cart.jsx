import React from 'react';

const Cart = ({ cartItems, products }) => {
    const totalItems = cartItems.length;
    const totalPrice = cartItems.reduce((acc, itemId) => {
        const item = products.find(product => product.id === itemId);
        return acc + item.price;
    }, 0);

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            <p>Items in cart: {totalItems}</p>
            <p>Total price: ${totalPrice.toFixed(2)}</p>
        </div>
    );
};

export default Cart;
