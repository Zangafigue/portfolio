import { useTranslation } from 'react-i18next'

function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 1,
        borderTop: '1px solid rgba(255,255,255,0.07)',
        padding: '2rem 1.5rem',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.6rem',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1100px',
        margin: '0 auto',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '0.78rem',
        color: 'rgba(255,255,255,0.4)',
      }}
    >
      <span>© {year} Zangafigué Mathias TRAORE</span>
      <span>{t('footer.note')}</span>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          background: 'none',
          border: 'none',
          color: '#00B4D8',
          cursor: 'pointer',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.78rem',
        }}
      >
        {t('footer.backToTop')}
      </button>
    </footer>
  )
}

export default Footer
