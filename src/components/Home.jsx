import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        minHeight: '100vh',
        padding: '6rem 2rem 2rem',
        color: 'var(--text)',
      }}
    >
      <section
        className="hero glass"
        style={{
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '4rem 2rem',
          borderRadius: 'var(--radius-lg)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <motion.h1
          className="gradient-text"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ fontSize: '4rem', marginBottom: '1.5rem' }}
        >
          Welcome to Chrono Elegance
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px' }}
        >
          Discover our exclusive collection of luxury timepieces, where craftsmanship meets elegance
        </motion.p>

        <motion.div
          className="cta-buttons"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}
        >
          <Link to="/collection" className="button-primary glow">
            Explore Collection
          </Link>
          <Link to="/about" className="button-secondary glass">
            Our Story
          </Link>
        </motion.div>
      </section>

      <motion.section
        className="featured-section glass"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        style={{
          padding: '4rem 2rem',
          margin: '4rem 0',
          borderRadius: 'var(--radius-lg)',
        }}
      >
        <h2 className="gradient-text" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Featured Timepieces
        </h2>
        <div
          className="featured-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}
        >
          {[1, 2, 3].map((_, index) => (
            <motion.div
              key={index}
              className="featured-card glass"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * index }}
              whileHover={{ scale: 1.05 }}
              style={{
                padding: '2rem',
                borderRadius: 'var(--radius-md)',
                background: 'var(--card-bg)',
                border: '1px solid var(--navbar-border)',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '200px',
                  background: 'var(--primary)',
                  borderRadius: 'var(--radius-sm)',
                  marginBottom: '1rem',
                }}
              />
              <h3 style={{ marginBottom: '0.5rem' }}>Luxury Timepiece {index + 1}</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Experience unparalleled craftsmanship
              </p>
              <Link to="/collection" className="button-primary glow" style={{ display: 'inline-block' }}>
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Home; 