import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from './CartContext';

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    country: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add payment processing logic here
    clearCart();
    // Add order confirmation logic
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.div
      className="checkout-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        padding: '6rem 2rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        color: 'var(--text)',
      }}
    >
      <div className="checkout-content" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div className="order-summary glass" style={{ padding: '2rem', borderRadius: 'var(--radius-md)' }}>
          <h2 style={{ marginBottom: '2rem' }}>Order Summary</h2>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="checkout-item"
              style={{
                padding: '1rem',
                marginBottom: '1rem',
                borderBottom: '1px solid var(--navbar-border)',
              }}
            >
              <h3>{item.name}</h3>
              <p style={{ color: 'var(--text-muted)' }}>Quantity: {item.quantity}</p>
              <p>${(item.price * item.quantity).toLocaleString()}</p>
            </div>
          ))}
          <div className="total" style={{ marginTop: '2rem', textAlign: 'right' }}>
            <h3>
              Total: $
              {cartItems
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toLocaleString()}
            </h3>
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          className="checkout-form glass"
          style={{ padding: '2rem', borderRadius: 'var(--radius-md)' }}
        >
          <h2 style={{ marginBottom: '2rem' }}>Payment Information</h2>
          
          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.8rem',
                background: 'var(--primary)',
                border: '1px solid var(--navbar-border)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--text)',
              }}
            />
          </div>

          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.8rem',
                background: 'var(--primary)',
                border: '1px solid var(--navbar-border)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--text)',
              }}
            />
          </div>

          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.8rem',
                background: 'var(--primary)',
                border: '1px solid var(--navbar-border)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--text)',
              }}
            />
          </div>

          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.8rem',
                background: 'var(--primary)',
                border: '1px solid var(--navbar-border)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--text)',
              }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  background: 'var(--primary)',
                  border: '1px solid var(--navbar-border)',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--text)',
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="zipCode">ZIP Code</label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  background: 'var(--primary)',
                  border: '1px solid var(--navbar-border)',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--text)',
                }}
              />
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.8rem',
                background: 'var(--primary)',
                border: '1px solid var(--navbar-border)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--text)',
              }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
            <div className="form-group">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                placeholder="MM/YY"
                value={formData.expiryDate}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  background: 'var(--primary)',
                  border: '1px solid var(--navbar-border)',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--text)',
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  background: 'var(--primary)',
                  border: '1px solid var(--navbar-border)',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--text)',
                }}
              />
            </div>
          </div>

          <button
            type="submit"
            className="button-primary glow"
            style={{ width: '100%', padding: '1rem' }}
          >
            Complete Purchase
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Checkout; 