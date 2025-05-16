import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

const Collection = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Watch data with placeholder images
  const watches = [
    {
      id: 1,
      name: 'Royal Oak Offshore',
      price: 45999,
      description: 'A masterpiece of engineering and design',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWExZjJjIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGFsaWdubWVudC1iYXNlbGluZT0ibWlkZGxlIiBmaWxsPSIjZTJlOGYwIj5Sb3lhbCBPYWsgT2Zmc2hvcmU8L3RleHQ+PC9zdmc+',
      category: 'Luxury'
    },
    {
      id: 2,
      name: 'Nautilus Chronograph',
      price: 89999,
      description: 'Timeless elegance meets modern sophistication',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWExZjJjIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGFsaWdubWVudC1iYXNlbGluZT0ibWlkZGxlIiBmaWxsPSIjZTJlOGYwIj5OYXV0aWx1cyBDaHJvbm9ncmFwaDwvdGV4dD48L3N2Zz4=',
      category: 'Premium'
    },
    {
      id: 3,
      name: 'Daytona Platinum',
      price: 75999,
      description: 'The epitome of luxury sports watches',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWExZjJjIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGFsaWdubWVudC1iYXNlbGluZT0ibWlkZGxlIiBmaWxsPSIjZTJlOGYwIj5EYXl0b25hIFBsYXRpbnVtPC90ZXh0Pjwvc3ZnPg==',
      category: 'Sport'
    },
    {
      id: 4,
      name: 'Submariner Gold',
      price: 35999,
      description: 'Diving excellence with precious metals',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWExZjJjIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGFsaWdubWVudC1iYXNlbGluZT0ibWlkZGxlIiBmaWxsPSIjZTJlOGYwIj5TdWJtYXJpbmVyIEdvbGQ8L3RleHQ+PC9zdmc+',
      category: 'Diving'
    },
    {
      id: 5,
      name: 'Perpetual Calendar',
      price: 95999,
      description: 'Complex mechanics, simple elegance',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWExZjJjIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGFsaWdubWVudC1iYXNlbGluZT0ibWlkZGxlIiBmaWxsPSIjZTJlOGYwIj5QZXJwZXR1YWwgQ2FsZW5kYXI8L3RleHQ+PC9zdmc+',
      category: 'Classic'
    },
    {
      id: 6,
      name: 'Tourbillon Master',
      price: 125999,
      description: 'The pinnacle of watchmaking art',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWExZjJjIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGFsaWdubWVudC1iYXNlbGluZT0ibWlkZGxlIiBmaWxsPSIjZTJlOGYwIj5Ub3VyYmlsbG9uIE1hc3RlcjwvdGV4dD48L3N2Zz4=',
      category: 'Luxury'
    }
  ];

  const categories = ['All', ...new Set(watches.map(watch => watch.category))];

  const filteredWatches = selectedCategory === 'All' 
    ? watches 
    : watches.filter(watch => watch.category === selectedCategory);

  const handleAddToCart = (watch) => {
    console.log('Adding to cart:', watch); // Debug log
    addToCart(watch);
  };

  return (
    <motion.div
      className="collection-page"
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
      <div className="collection-hero glass" style={{ textAlign: 'center', marginBottom: '4rem', padding: '2rem' }}>
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="gradient-text"
          style={{ fontSize: '3rem', marginBottom: '1rem' }}
        >
          Luxury Timepieces
        </motion.h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Discover our curated collection of exceptional watches
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link to="/reviews">
            <motion.button
              className="button-secondary glass"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '0.8rem 1.5rem',
                borderRadius: 'var(--radius-sm)',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text)',
                background: 'var(--card-bg)',
                fontSize: '1rem',
              }}
            >
              Read Reviews
            </motion.button>
          </Link>
          <Link to="/contact">
            <motion.button
              className="button-primary glass"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '0.8rem 1.5rem',
                borderRadius: 'var(--radius-sm)',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text)',
                background: 'var(--gradient-1)',
                fontSize: '1rem',
              }}
            >
              Contact Us
            </motion.button>
          </Link>
        </div>
      </div>

      <div className="categories-filter" style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`button-${selectedCategory === category ? 'primary' : 'secondary'} glass`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-sm)',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text)',
              background: selectedCategory === category ? 'var(--gradient-1)' : 'var(--card-bg)',
            }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <div
        className="collection-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
        }}
      >
        {filteredWatches.map((watch, index) => (
          <motion.div
            key={watch.id}
            className="watch-card glass"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            style={{
              padding: '2rem',
              borderRadius: 'var(--radius-md)',
              background: 'var(--card-bg)',
              border: '1px solid var(--navbar-border)',
              overflow: 'hidden',
            }}
          >
            <div className="watch-image" style={{ marginBottom: '1rem', position: 'relative' }}>
              <img
                src={watch.image}
                alt={watch.name}
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--primary)',
                }}
              />
              <div className="category-badge" style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'var(--primary)',
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--text)',
              }}>
                {watch.category}
              </div>
            </div>
            <h3 style={{ marginBottom: '0.5rem' }}>{watch.name}</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
              {watch.description}
            </p>
            <div className="watch-price" style={{ marginBottom: '1rem' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                ${watch.price.toLocaleString()}
              </span>
            </div>
            <motion.button
              onClick={() => handleAddToCart(watch)}
              className="button-primary glow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                width: '100%',
                padding: '0.8rem',
                border: 'none',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--gradient-1)',
                color: 'var(--text)',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
            >
              Add to Cart
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Collection; 