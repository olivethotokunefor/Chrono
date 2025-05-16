import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

const Reviews = () => {
  const [selectedRating, setSelectedRating] = React.useState(null)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const reviews = [
    {
      id: 1,
      name: "James Wilson",
      rating: 5,
      title: "Exceptional Quality",
      review: "The Royal Oak Chronograph exceeded all my expectations. The attention to detail is remarkable.",
      date: "2024-02-15",
      verified: true,
      helpful: 45,
      image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3"
    },
    {
      id: 2,
      name: "Sarah Chen",
      rating: 5,
      title: "Outstanding Service",
      review: "Not only was the watch perfect, but the customer service was impeccable. They helped me choose the perfect timepiece.",
      date: "2024-02-10",
      verified: true,
      helpful: 32,
      image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa"
    },
    {
      id: 3,
      name: "Michael Brown",
      rating: 4,
      title: "Beautiful Timepiece",
      review: "The Submariner Date is a masterpiece. The only minor issue was the delivery time.",
      date: "2024-02-05",
      verified: true,
      helpful: 28,
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49"
    }
  ]

  const [reviewsData, setReviewsData] = React.useState(reviews)

  const handleHelpful = (reviewId) => {
    setReviewsData(prev => prev.map(review =>
      review.id === reviewId
        ? { ...review, helpful: review.helpful + 1 }
        : review
    ))
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="reviews-page"
    >
      <motion.div
        className="progress-bar"
        style={{ scaleX }}
      />

      <section className="reviews-hero">
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          Customer Reviews
        </motion.h1>
        <div className="rating-summary">
          <div className="average-rating">
            <h2>4.8</h2>
            <div className="stars">★★★★★</div>
            <p>Based on 105 reviews</p>
          </div>
          <div className="rating-bars">
            {[5, 4, 3, 2, 1].map(rating => (
              <motion.div
                key={rating}
                className="rating-bar"
                onClick={() => setSelectedRating(selectedRating === rating ? null : rating)}
                whileHover={{ scale: 1.02 }}
              >
                <span>{rating} ★</span>
                <div className="bar-container">
                  <motion.div
                    className="bar-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${(rating === 5 ? 75 : rating === 4 ? 20 : 5)}%` }}
                    transition={{ duration: 1, delay: rating * 0.1 }}
                  />
                </div>
                <span>{rating === 5 ? '75' : rating === 4 ? '20' : '5'}%</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="reviews-grid">
        {reviewsData
          .filter(review => !selectedRating || review.rating === selectedRating)
          .map((review, index) => (
            <motion.div
              key={review.id}
              className="review-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="review-header">
                <div className="reviewer-info">
                  <h3>{review.name}</h3>
                  {review.verified && (
                    <span className="verified-badge">✓ Verified Purchase</span>
                  )}
                </div>
                <div className="review-rating">
                  {'★'.repeat(review.rating)}
                  {'☆'.repeat(5 - review.rating)}
                </div>
              </div>
              
              <h4>{review.title}</h4>
              <p>{review.review}</p>
              
              {review.image && (
                <motion.img
                  src={review.image}
                  alt="Product"
                  className="review-image"
                  whileHover={{ scale: 1.05 }}
                />
              )}
              
              <div className="review-footer">
                <span className="review-date">{new Date(review.date).toLocaleDateString()}</span>
                <button
                  className="helpful-btn"
                  onClick={() => handleHelpful(review.id)}
                >
                  👍 Helpful ({review.helpful})
                </button>
              </div>
            </motion.div>
          ))}
      </section>

      <motion.button
        className="write-review-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Write a Review
      </motion.button>
    </motion.div>
  )
}

export default Reviews 