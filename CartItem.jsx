import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { decreaseQuantity, increaseQuantity, removeFromCart } from './CartSlice.js';

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const [message, setMessage] = useState('');
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="content-page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">YOUR SELECTION</p>
          <h1>Shopping cart</h1>
          <p>Review your plants and update quantities before checkout.</p>
        </div>
        <Link className="secondary-button" to="/plants">Continue Shopping</Link>
      </div>

      {items.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-icon">🪴</div>
          <h2>Your cart is waiting to grow</h2>
          <p>You have not added any plants yet.</p>
          <Link className="primary-button link-button" to="/plants">Explore Plants</Link>
        </div>
      ) : (
        <div className="cart-layout">
          <section className="cart-items">
            {items.map((item) => (
              <article className="cart-row" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-product-details">
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)} each</p>
                  <button className="text-button delete-button" onClick={() => dispatch(removeFromCart(item.id))}>
                    Remove
                  </button>
                </div>
                <div className="quantity-control">
                  <button aria-label={`Decrease ${item.name} quantity`} disabled={item.quantity <= 1} onClick={() => dispatch(decreaseQuantity(item.id))}>−</button>
                  <span>{item.quantity}</span>
                  <button aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                </div>
                <strong className="line-total">${(item.price * item.quantity).toFixed(2)}</strong>
              </article>
            ))}
          </section>
          <aside className="order-summary">
            <h2>Order summary</h2>
            <div className="summary-line"><span>Items</span><span>{items.reduce((sum, item) => sum + item.quantity, 0)}</span></div>
            <div className="summary-line total-line"><span>Total</span><strong>${total.toFixed(2)}</strong></div>
            <button className="primary-button checkout-button" onClick={() => setMessage('Checkout is coming soon! Your cart is saved for now.')}>Checkout</button>
            {message && <p className="checkout-message" role="status">{message}</p>}
          </aside>
        </div>
      )}
    </main>
  );
}
