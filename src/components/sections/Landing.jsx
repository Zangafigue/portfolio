import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import about from '../../data/about'
import { useLoc } from '../../i18n/localize'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
})

function Landing() {
  const { t } = useTranslation()
  const loc = useLoc()

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '7rem 1.5rem 4rem',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '820px', width: '100%' }}>
        {/* Badge */}
        <motion.div
          {...fade(0.05)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(34,197,94,0.08)',
            border: '1px solid rgba(34,197,94,0.35)',
            borderRadius: '999px',
            padding: '6px 16px',
            marginBottom: '1.8rem',
          }}
        >
          <motion.span
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e' }}
          />
          <span style={{ fontSize: '0.82rem', color: '#22c55e', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.04em' }}>
            {t('landing.badge')}
          </span>
        </motion.div>

        {/* Nom */}
        <motion.h1
          {...fade(0.15)}
          style={{
            fontSize: 'clamp(2.4rem, 6vw, 4.6rem)',
            fontWeight: 700,
            lineHeight: 1.05,
            color: '#fff',
            marginBottom: '1.2rem',
          }}
        >
          Zangafigué Mathias <span style={{ color: '#00B4D8' }}>TRAORE</span>
        </motion.h1>

        {/* Positionnement (proposition de valeur) */}
        <motion.p
          {...fade(0.3)}
          style={{
            fontSize: 'clamp(1.05rem, 2.4vw, 1.5rem)',
            color: 'rgba(255,255,255,0.82)',
            lineHeight: 1.5,
            maxWidth: '640px',
            margin: '0 auto 1rem',
          }}
        >
          {t('landing.positioning')}
        </motion.p>

        {/* Rôle + stack */}
        <motion.p
          {...fade(0.4)}
          style={{
            fontSize: '0.92rem',
            color: 'rgba(255,255,255,0.5)',
            fontFamily: 'JetBrains Mono, monospace',
            marginBottom: '2.2rem',
          }}
        >
          {t('landing.role')} &nbsp;·&nbsp; {t('landing.stack')}
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fade(0.5)}
          style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}
        >
          <a href="#projects" style={primaryBtn}>{t('landing.viewProjects')}</a>
          <a href="/cv-zangafigue.pdf" target="_blank" rel="noopener noreferrer" style={ghostBtn}>
            {t('landing.downloadCv')}
          </a>
          <a href="#contact" style={ghostBtn}>{t('landing.contact')}</a>
        </motion.div>

        {/* Stats clés */}
        <motion.div
          {...fade(0.65)}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2.4rem',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: '2rem',
          }}
        >
          {about.facts.map((fact) => (
            <div key={loc(fact.label)} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#00B4D8', fontFamily: 'JetBrains Mono, monospace' }}>
                {fact.value}
              </div>
              <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)', marginTop: '2px' }}>
                {loc(fact.label)}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const primaryBtn = {
  padding: '12px 26px',
  backgroundColor: '#00B4D8',
  color: '#0a0a1a',
  borderRadius: '8px',
  fontWeight: 600,
  fontSize: '0.95rem',
  textDecoration: 'none',
}

const ghostBtn = {
  padding: '12px 26px',
  backgroundColor: 'transparent',
  color: '#fff',
  border: '1px solid rgba(255,255,255,0.25)',
  borderRadius: '8px',
  fontWeight: 600,
  fontSize: '0.95rem',
  textDecoration: 'none',
}

export default Landing
