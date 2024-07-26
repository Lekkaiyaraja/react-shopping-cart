import React from 'react';
import ProductItem from './ProductItem';
// import './ProductList.css';

const ProductList = ({ products, onAddToCart, onRemoveFromCart, cartItems }) => {
    return (
        <div id="shop" className="product-list">
            {products.map(product => (
                <ProductItem
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                    onRemoveFromCart={onRemoveFromCart}
                    isInCart={cartItems.includes(product.id)}
                />
            ))}
        </div>
    );
};

export default ProductList;
