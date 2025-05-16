import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formState, setFormState] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = React.useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    // Add your form submission logic here
  }

  const contactInfo = [
    { icon: '📍', title: 'Visit Us', content: '123 Luxury Lane, Geneva, Switzerland' },
    { icon: '📞', title: 'Call Us', content: '+41 123 456 789' },
    { icon: '✉️', title: 'Email Us', content: 'contact@chronoelegance.com' },
    { icon: '⌚', title: 'Opening Hours', content: 'Mon-Sat: 10:00 - 19:00' }
  ]

  return (
    <motion.div
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="contact-hero glass">
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          Get in Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          We'd love to hear from you. Our friendly team is always here to chat.
        </motion.p>
      </div>

      <div className="contact-content">
        <motion.div
          className="contact-info"
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="info-grid">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="info-card glass"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="info-icon">{info.icon}</span>
                <h3>{info.title}</h3>
                <p>{info.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="contact-form glass"
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.3 }}
        >
          {submitted ? (
            <motion.div
              className="success-message"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h3>Thank you for your message! 🎉</h3>
              <p>We'll get back to you soon.</p>
              <motion.button
                className="button-primary glow"
                onClick={() => setSubmitted(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Another Message
              </motion.button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <motion.input
                  type="text"
                  id="name"
                  required
                  whileFocus={{ scale: 1.02 }}
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <motion.input
                  type="email"
                  id="email"
                  required
                  whileFocus={{ scale: 1.02 }}
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <motion.input
                  type="text"
                  id="subject"
                  required
                  whileFocus={{ scale: 1.02 }}
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <motion.textarea
                  id="message"
                  required
                  rows="5"
                  whileFocus={{ scale: 1.02 }}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                />
              </div>

              <motion.button
                type="submit"
                className="button-primary glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>

      <motion.div
        className="map-section glass"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2>Visit Our Boutique</h2>
        <div className="map-placeholder">
          {/* Add your map component here */}
          <div className="map-overlay">
            <p>Interactive Map Coming Soon</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Contact 