import { motion } from 'framer-motion'

function ScrollIndicator() {
  return (
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      style={{
        position: 'absolute',
        bottom: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        color: 'rgba(255,255,255,0.3)',
        fontSize: '0.75rem',
        fontFamily: 'JetBrains Mono, monospace',
        letterSpacing: '0.1em',
      }}
    >
      <span>SCROLL TO EXPLORE</span>
      <svg
        width="16"
        height="24"
        viewBox="0 0 16 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1" y="1" width="14" height="22" rx="7"
          stroke="currentColor" strokeWidth="1.5"
        />
        <motion.rect
          x="6.5" y="4" width="3" height="6" rx="1.5"
          fill="currentColor"
          animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </svg>
    </motion.div>
  )
}

export default ScrollIndicator