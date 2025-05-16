import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const [achievements, setAchievements] = React.useState([
    { id: 1, title: 'Master Craftsman', points: 0, target: 150 },
    { id: 2, title: 'Time Explorer', points: 0, target: 200 },
    { id: 3, title: 'Watch Connoisseur', points: 0, target: 300 }
  ])

  const incrementAchievement = (id) => {
    setAchievements(prev => prev.map(ach => 
      ach.id === id ? { ...ach, points: Math.min(ach.points + 10, ach.target) } : ach
    ))
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="about-page"
    >
      <section className="about-hero">
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          Our Story
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Chrono Elegance was founded with a passion for exceptional timepieces and a commitment to bringing the finest luxury watches to connoisseurs worldwide.
        </motion.p>
      </section>

      <section className="about-values">
        <h2>Our Values</h2>
        <div className="values-grid">
          {[
            { icon: "⚒️", title: "Craftsmanship", desc: "Unparalleled attention to detail" },
            { icon: "🌟", title: "Excellence", desc: "Only the finest timepieces" },
            { icon: "🤝", title: "Trust", desc: "Building lasting relationships" },
            { icon: "🎯", title: "Innovation", desc: "Pushing horological boundaries" }
          ].map((value, index) => (
            <motion.div
              key={value.title}
              className="value-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="value-icon">{value.icon}</span>
              <h3>{value.title}</h3>
              <p>{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="achievements">
        <h2>Unlock Achievements</h2>
        <div className="achievements-grid">
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              className="achievement-badge"
              onClick={() => incrementAchievement(achievement.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3>{achievement.title}</h3>
              <div className="progress-bar">
                <motion.div
                  className="progress"
                  initial={{ width: 0 }}
                  animate={{ width: `${(achievement.points / achievement.target) * 100}%` }}
                  transition={{ type: "spring", stiffness: 50 }}
                />
              </div>
              <p>{achievement.points} / {achievement.target} points</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="timeline">
        <h2>Our Journey</h2>
        <div className="timeline-events">
          {[
            { year: 2010, title: "Founded in Geneva" },
            { year: 2015, title: "Expanded Globally" },
            { year: 2018, title: "Luxury Award Winner" },
            { year: 2023, title: "Digital Innovation" }
          ].map((event, index) => (
            <motion.div
              key={event.year}
              className="timeline-event"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="year">{event.year}</span>
              <h3>{event.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  )
}

export default About 