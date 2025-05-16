import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    getCartTotal
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="shopping-cart glass"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '400px',
          height: '100vh',
          background: 'var(--card-bg)',
          padding: '2rem',
          boxShadow: 'var(--shadow-lg)',
          zIndex: 1000,
          color: 'var(--text)',
          overflowY: 'auto',
        }}
      >
        <div className="cart-header" style={{ marginBottom: '2rem', position: 'relative' }}>
          <h2>Your Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              background: 'none',
              border: 'none',
              color: 'var(--text)',
              cursor: 'pointer',
              fontSize: '1.5rem',
            }}
          >
            ✕
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
            <p>Your cart is empty</p>
            <motion.button
              onClick={() => setIsCartOpen(false)}
              className="button-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                marginTop: '1rem',
                padding: '0.8rem 1.5rem',
                background: 'var(--gradient-1)',
                border: 'none',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--text)',
                cursor: 'pointer',
              }}
            >
              Continue Shopping
            </motion.button>
          </div>
        ) : (
          <>
            <div className="cart-items" style={{ marginBottom: '2rem' }}>
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="cart-item glass"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  style={{
                    padding: '1rem',
                    marginBottom: '1rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--primary)',
                    position: 'relative',
                  }}
                >
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: '80px',
                        height: '80px',
                        objectFit: 'cover',
                        borderRadius: 'var(--radius-sm)',
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <h3 style={{ marginBottom: '0.5rem' }}>{item.name}</h3>
                      <p style={{ color: 'var(--text-muted)' }}>
                        ${item.price.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div
                    className="quantity-controls"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginTop: '1rem',
                    }}
                  >
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="button-secondary"
                      style={{
                        padding: '0.5rem',
                        background: 'var(--card-bg)',
                        border: 'none',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--text)',
                        cursor: 'pointer',
                      }}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="button-secondary"
                      style={{
                        padding: '0.5rem',
                        background: 'var(--card-bg)',
                        border: 'none',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--text)',
                        cursor: 'pointer',
                      }}
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="button-primary"
                      style={{
                        marginLeft: 'auto',
                        padding: '0.5rem',
                        background: 'var(--gradient-1)',
                        border: 'none',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--text)',
                        cursor: 'pointer',
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="cart-footer" style={{ borderTop: '1px solid var(--navbar-border)', paddingTop: '1rem' }}>
              <div
                className="total"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '1rem',
                }}
              >
                <h3>Total:</h3>
                <p style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                  ${getCartTotal().toLocaleString()}
                </p>
              </div>
              <Link
                to="/checkout"
                onClick={() => setIsCartOpen(false)}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '1rem',
                  background: 'var(--gradient-1)',
                  border: 'none',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--text)',
                  textAlign: 'center',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                Proceed to Checkout
              </Link>
            </div>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default ShoppingCart; 