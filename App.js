import React from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import AboutUs from './AboutUs.jsx';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';
import { useSelector } from 'react-redux';

function Navbar() {
  const count = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );
  return (
    <nav className="navbar">
      <Link className="brand" to="/">🌿 Paradise Nursery</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/about">About Us</Link>
        <Link to="/cart" className="cart-link">🛒 Cart ({count})</Link>
      </div>
    </nav>
  );
}

function LandingPage() {
  const navigate = useNavigate();
  return (
    <main className="hero">
      <div className="hero-content">
        <p className="eyebrow">BRING NATURE HOME</p>
        <h1>Grow a little happiness.</h1>
        <p>Discover beautiful houseplants that make every room feel more alive.</p>
        <button className="primary-button" onClick={() => navigate('/plants')}>Get Started</button>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
      <footer className="footer">© {new Date().getFullYear()} Paradise Nursery · Grow greener every day.</footer>
    </div>
  );
}
