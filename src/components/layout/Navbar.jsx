import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import useScrollSection from '../../hooks/useScrollSection'
import useMediaQuery from '../../hooks/useMediaQuery'
import LanguageToggle from './LanguageToggle'

const navIds = ['home', 'about', 'skills', 'projects', 'certifications', 'contact']

function navTo(id) {
  if (id === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function NavLink({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '4px 2px',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '0.82rem',
        color: active ? '#00B4D8' : 'rgba(255,255,255,0.65)',
        borderBottom: active ? '1px solid #00B4D8' : '1px solid transparent',
        transition: 'color 0.2s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = '#00B4D8')}
      onMouseLeave={(e) => (e.currentTarget.style.color = active ? '#00B4D8' : 'rgba(255,255,255,0.65)')}
    >
      {label}
    </button>
  )
}

function Navbar() {
  const { t } = useTranslation()
  const activeSection = useScrollSection()
  const isMobile = useMediaQuery('(max-width: 760px)')
  const [open, setOpen] = useState(false)

  const go = (id) => {
    navTo(id)
    setOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        backgroundColor: 'rgba(10,10,26,0.72)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <nav
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0.85rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        {/* Nom / logo */}
        <button
          onClick={() => go('home')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'baseline',
            gap: '8px',
            padding: 0,
          }}
        >
          <span style={{ color: '#00B4D8', fontFamily: 'JetBrains Mono, monospace', fontWeight: 700 }}>Z.</span>
          <span style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem', letterSpacing: '0.02em' }}>
            TRAORE
          </span>
        </button>

        {/* Desktop: liens + langue */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.4rem' }}>
            {navIds.map((id) => (
              <NavLink
                key={id}
                label={t(`nav.${id}`)}
                active={activeSection === id}
                onClick={() => go(id)}
              />
            ))}
            <LanguageToggle />
          </div>
        )}

        {/* Mobile: langue + burger */}
        {isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <LanguageToggle />
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              aria-expanded={open}
              style={{
                background: 'none',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '8px',
                width: '38px',
                height: '34px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <span style={{ width: '16px', height: '2px', background: '#fff', display: 'block' }} />
              <span style={{ width: '16px', height: '2px', background: '#fff', display: 'block' }} />
              <span style={{ width: '16px', height: '2px', background: '#fff', display: 'block' }} />
            </button>
          </div>
        )}
      </nav>

      {/* Panneau mobile */}
      <AnimatePresence>
        {isMobile && open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', padding: '0.5rem 1.5rem 1rem' }}>
              {navIds.map((id) => (
                <button
                  key={id}
                  onClick={() => go(id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    padding: '0.7rem 0',
                    cursor: 'pointer',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.95rem',
                    color: activeSection === id ? '#00B4D8' : 'rgba(255,255,255,0.75)',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  {t(`nav.${id}`)}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
