import { motion } from 'framer-motion'
import ScrollIndicator from '../ui/ScrollIndicator'

function Landing() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 2rem',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      {/* Badge Open to Work */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: 'rgba(0, 180, 216, 0.1)',
          border: '1px solid rgba(0, 180, 216, 0.4)',
          borderRadius: '999px',
          padding: '6px 16px',
          marginBottom: '2rem',
        }}
      >
        <motion.span
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#22c55e',
            display: 'inline-block',
          }}
        />
        <span
          style={{
            fontSize: '0.85rem',
            color: '#00B4D8',
            fontFamily: 'JetBrains Mono, monospace',
            letterSpacing: '0.05em',
          }}
        >
          Open to internships
        </span>
      </motion.div>

      {/* Nom principal */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          fontWeight: 700,
          fontFamily: 'Inter, sans-serif',
          color: '#ffffff',
          lineHeight: 1.1,
          marginBottom: '1rem',
        }}
      >
        Zangafigue Mathias
        <br />
        <span style={{ color: '#00B4D8' }}>TRAORE</span>
      </motion.h1>

      {/* Sous-titre */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
          color: 'rgba(255,255,255,0.6)',
          fontFamily: 'JetBrains Mono, monospace',
          marginBottom: '3rem',
        }}
      >
        Full-Stack Developer &nbsp;·&nbsp; Flutter &nbsp;·&nbsp; React &nbsp;·&nbsp; Node.js
      </motion.p>

      {/* Boutons CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: '5rem',
        }}
      >
        <a
          href="#projects"
          style={{
            padding: '12px 28px',
            backgroundColor: '#00B4D8',
            color: '#0a0a1a',
            borderRadius: '8px',
            fontWeight: 600,
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.95rem',
            textDecoration: 'none',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          View Projects
        </a>

        <a
          href="#contact"
          style={{
            padding: '12px 28px',
            backgroundColor: 'transparent',
            color: '#ffffff',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '8px',
            fontWeight: 600,
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.95rem',
            textDecoration: 'none',
            transition: 'border-color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.borderColor = '#00B4D8'}
          onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'}
        >
          Contact Me
        </a>
      </motion.div>

      <ScrollIndicator />

    </section>
  )
}

export default Landing