import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './CartSlice.js';
import { Link } from 'react-router-dom';
import products from './products.js';

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <main className="content-page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">FIND YOUR GREEN</p>
          <h1>Shop houseplants</h1>
          <p>Choose a plant to make your space feel more like home.</p>
        </div>
        <Link className="secondary-button" to="/cart">View Cart</Link>
      </div>
      {categories.map((category) => (
        <section className="category-section" key={category}>
          <h2>{category}</h2>
          <div className="product-grid">
            {products.filter((product) => product.category === category).map((product) => {
              const added = cartItems.some((item) => item.id === product.id);
              return (
                <article className="product-card" key={product.id}>
                  <img src={product.image} alt={product.name} loading="lazy" />
                  <div className="product-info">
                    <span className="product-category">{product.category}</span>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <div className="product-bottom">
                      <strong>${product.price.toFixed(2)}</strong>
                      <button
                        className="primary-button small-button"
                        disabled={added}
                        onClick={() => dispatch(addToCart(product))}
                      >
                        {added ? 'Added' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}
