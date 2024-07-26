import React from 'react';
// import './ProductItem.css';

const ProductItem = ({ product, onAddToCart, onRemoveFromCart, isInCart }) => {
    return (
        <div className="product-item">
            {product.isSale && <span className="sale-badge">Sale</span>}
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="rating">
                {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
            </div>
            <p className="price">${product.price.toFixed(2)}</p>
            <button onClick={() => isInCart ? onRemoveFromCart(product.id) : onAddToCart(product.id)}>
                {isInCart ? 'Remove from Cart' : 'Add to Cart'}
            </button>
        </div>
    );
};

export default ProductItem;
