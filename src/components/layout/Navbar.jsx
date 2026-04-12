import { motion } from 'framer-motion'
import useScrollSection from '../../hooks/useScrollSection'

const navItems = [
  { id: 'home',             label: 'Home' },
  { id: 'about',            label: 'About' },
  { id: 'skills',           label: 'Skills' },
  { id: 'projects',         label: 'Projects' },
  { id: 'certifications',   label: 'Certifications' },
  { id: 'contact',          label: 'Contact' },
]

function Navbar() {
  const activeSection = useScrollSection()

  const scrollTo = (id) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      style={{
        position:       'fixed',
        right:          '2rem',
        top:            '50%',
        transform:      'translateY(-50%)',
        zIndex:         100,
        display:        'flex',
        flexDirection:  'column',
        alignItems:     'center',
        gap:            '1.2rem',
      }}
    >
      {navItems.map((item) => {
        const isActive = activeSection === item.id
        const id       = item.id
        const label    = item.label

        return (
          <div
            key={id}
            style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
          >
            {/* Tooltip label */}
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: 0 }}
              style={{
                position:        'absolute',
                right:           '24px',
                backgroundColor: 'rgba(10,10,26,0.9)',
                border:          '1px solid rgba(0,180,216,0.3)',
                color:           '#00B4D8',
                fontSize:        '0.72rem',
                fontFamily:      'JetBrains Mono, monospace',
                padding:         '4px 10px',
                borderRadius:    '4px',
                whiteSpace:      'nowrap',
                pointerEvents:   'none',
                opacity:         0,
              }}
            >
              {label}
            </motion.span>

            {/* Point */}
            <motion.button
              onClick={() => scrollTo(id)}
              animate={{
                scale:           isActive ? 1.4 : 1,
                backgroundColor: isActive ? '#00B4D8' : 'rgba(255,255,255,0.3)',
              }}
              whileHover={{
                scale:           1.6,
                backgroundColor: '#00B4D8',
              }}
              transition={{ duration: 0.2 }}
              style={{
                width:        '10px',
                height:       '10px',
                borderRadius: '50%',
                border:       'none',
                cursor:       'pointer',
                padding:      0,
                boxShadow:    isActive ? '0 0 8px rgba(0,180,216,0.6)' : 'none',
              }}
            />
          </div>
        )
      })}
    </motion.nav>
  )
}

export default Navbar