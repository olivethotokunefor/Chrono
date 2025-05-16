import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Categories = () => {
  const categories = [
    {
      id: 'luxury',
      name: 'Luxury Collection',
      description: 'Timeless elegance and sophistication',
      image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa',
      count: 25,
      featured: ['Royal Oak', 'Nautilus', 'Daytona']
    },
    {
      id: 'sport',
      name: 'Sport Watches',
      description: 'Durability meets precision',
      image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49',
      count: 18,
      featured: ['Submariner', 'Seamaster', 'Big Pilot']
    },
    {
      id: 'dress',
      name: 'Dress Watches',
      description: 'Refined elegance for formal occasions',
      image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3',
      count: 15,
      featured: ['Calatrava', 'Reverso', 'Patrimony']
    },
    {
      id: 'pilot',
      name: 'Pilot Watches',
      description: 'Aviation-inspired timepieces',
      image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314',
      count: 12,
      featured: ['Big Pilot', 'Navitimer', 'Mark XVIII']
    },
    {
      id: 'smart',
      name: 'Smart Watches',
      description: 'Modern technology meets luxury',
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a',
      count: 8,
      featured: ['Connected', 'Summit', 'SmartWatch']
    }
  ]

  const [hoveredCategory, setHoveredCategory] = React.useState(null)
  const [selectedFeature, setSelectedFeature] = React.useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <motion.div
      className="categories-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        Watch Categories
      </motion.h1>

      <div className="categories-grid">
        {categories.map((category) => (
          <motion.div
            key={category.id}
            className="category-card"
            variants={itemVariants}
            onHoverStart={() => setHoveredCategory(category.id)}
            onHoverEnd={() => setHoveredCategory(null)}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="category-image-container"
              initial={false}
              animate={{
                scale: hoveredCategory === category.id ? 1.1 : 1
              }}
            >
              <img src={category.image} alt={category.name} />
            </motion.div>

            <div className="category-content">
              <h2>{category.name}</h2>
              <p>{category.description}</p>
              
              <motion.div
                className="category-stats"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="watch-count">{category.count} Watches</span>
                <div className="featured-watches">
                  {category.featured.map((watch, index) => (
                    <motion.span
                      key={watch}
                      className="featured-tag"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setSelectedFeature(watch)}
                      whileHover={{ scale: 1.1 }}
                    >
                      {watch}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="category-actions"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  to={`/collection/${category.id}`}
                  className="explore-btn"
                >
                  Explore Collection
                </Link>
              </motion.div>
            </div>

            <motion.div
              className="hover-indicator"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: hoveredCategory === category.id ? 1 : 0,
                opacity: hoveredCategory === category.id ? 1 : 0
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            />
          </motion.div>
        ))}
      </div>

      {selectedFeature && (
        <motion.div
          className="feature-popup"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
        >
          <h3>Featured Watch: {selectedFeature}</h3>
          <button onClick={() => setSelectedFeature(null)}>Close</button>
        </motion.div>
      )}
    </motion.div>
  )
}

export default Categories 