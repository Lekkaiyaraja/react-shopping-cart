import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Header from './components/Header';
import './App.css';

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    const products = [
        { id: 1, name: 'Neck T-Shirt for Men', description: 'BULLMER Black Trendy Front and Back Printed Oversized Round', rating: 4, price: 499, image: 'https://m.media-amazon.com/images/I/612Rl6GKHoL._SX679_.jpg',isSale: false },
        { id: 2, name: 'Neck T-Shirt for Men', description: 'BULLMER Black Trendy Front and Back Printed Oversized Round', rating: 5, price: 699, image: 'https://m.media-amazon.com/images/I/61qCcUZk5WL._SX679_.jpg',isSale: true},
        { id: 3, name: 'Neck T-Shirt for Men', description: 'BULLMER Black Trendy Front and Back Printed Oversized Round', rating: 5, price: 699, image: 'https://m.media-amazon.com/images/I/61ezXk580GL._SX679_.jpg' ,isSale: true},
        {id: 4, name: 'Neck T-Shirt for Men', description: 'BULLMER Black Trendy Front and Back Printed Oversized Round', rating: 4, price: 699, image:  'https://m.media-amazon.com/images/I/71tDWORaMVL._SX679_.jpg',isSale: false },
        {id: 5, name: 'Neck T-Shirt for Men', description: 'BULLMER Black Trendy Front and Back Printed Oversized Round', rating: 5, price: 499, image: 'https://m.media-amazon.com/images/I/61mkeIq7ciL._SX679_.jpg',isSale: true },
        { id: 6, name: 'Neck T-Shirt for Men', description: 'BULLMER Black Trendy Front and Back Printed Oversized Round', rating: 5, price: 800, image: 'https://m.media-amazon.com/images/I/6105Ll0xDkL._SX679_.jpg',isSale: false },
        { id: 7, name: 'Neck T-Shirt for Men', description: 'BULLMER Black Trendy Front and Back Printed Oversized Round', rating: 3, price: 399, image: 'https://m.media-amazon.com/images/I/61BfNlLPA6L._SX679_.jpg',isSale: true },
        { id: 8, name: 'Neck T-Shirt for Men', description: 'BULLMER Black Trendy Front and Back Printed Oversized Round', rating: 4, price: 499, image: 'https://m.media-amazon.com/images/I/61fdk6pwUUL._SX679_.jpg',isSale: false },   
    ];

    const handleAddToCart = (productId) => {
        setCartItems([...cartItems, productId]);
    };

    const handleRemoveFromCart = (productId) => {
        setCartItems(cartItems.filter(id => id !== productId));
    };

    const totalItems = cartItems.length;
    const totalPrice = cartItems.reduce((acc, itemId) => {
        const item = products.find(product => product.id === itemId);
        return acc + item.price;
    }, 0);

    return (
        <div className="App">
            <Header totalItems={totalItems} totalPrice={totalPrice} />
            <main>
                <ProductList
                    products={products}
                    onAddToCart={handleAddToCart}
                    onRemoveFromCart={handleRemoveFromCart}
                    cartItems={cartItems}
                />
            </main>
        </div>
    );
};

export default App;
