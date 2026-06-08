import { useTranslation } from 'react-i18next'

// Pill FR/EN inline (rendu dans la Navbar). Bascule + persiste (voir i18n/index.js).
function LanguageToggle() {
  const { i18n } = useTranslation()
  const current = i18n.resolvedLanguage === 'en' ? 'en' : 'fr'
  const next = current === 'fr' ? 'en' : 'fr'

  const toggle = () => i18n.changeLanguage(next)

  return (
    <button
      onClick={toggle}
      aria-label={next === 'en' ? 'Switch to English' : 'Passer en français'}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        padding: '5px 12px',
        backgroundColor: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.15)',
        borderRadius: '999px',
        color: 'rgba(255,255,255,0.7)',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '0.75rem',
        letterSpacing: '0.05em',
        cursor: 'pointer',
        transition: 'border-color 0.2s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#00B4D8')}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)')}
    >
      <span style={{ color: current === 'fr' ? '#00B4D8' : 'inherit' }}>FR</span>
      <span style={{ opacity: 0.4 }}>/</span>
      <span style={{ color: current === 'en' ? '#00B4D8' : 'inherit' }}>EN</span>
    </button>
  )
}

export default LanguageToggle
