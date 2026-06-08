import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import certifications from '../../data/certifications'
import CertifCard from '../ui/CertifCard'
import TimelineView from '../ui/TimelineView'

const tabs = [
  { id: 'certifications', labelKey: 'certifications.tabCertifications' },
  { id: 'timeline',       labelKey: 'certifications.tabTimeline' },
]

function Certifications() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState('certifications')

  return (
    <section
      id="certifications"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 2rem',
      }}
    >
      <div style={{ maxWidth: '900px', width: '100%' }}>

        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '2rem',
          }}
        >
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            color: '#00B4D8',
            fontSize: '0.9rem',
          }}>
            {t('certifications.n')}
          </span>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
            fontWeight: 700,
            color: '#ffffff',
          }}>
            {t('certifications.title')}
          </h2>
          <div style={{
            flex: 1,
            height: '1px',
            backgroundColor: 'rgba(255,255,255,0.1)',
            marginLeft: '1rem',
          }} />
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: 'flex',
            marginBottom: '2.5rem',
            backgroundColor: 'rgba(255,255,255,0.04)',
            borderRadius: '10px',
            padding: '4px',
            width: 'fit-content',
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '8px 20px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: activeTab === tab.id
                  ? 'rgba(0, 180, 216, 0.2)'
                  : 'transparent',
                color: activeTab === tab.id
                  ? '#00B4D8'
                  : 'rgba(255,255,255,0.4)',
                fontSize: '0.85rem',
                fontFamily: 'JetBrains Mono, monospace',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {t(tab.labelKey)}
            </button>
          ))}
        </motion.div>

        {/* Contenu */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'certifications' ? (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '1.5rem',
              }}>
                {certifications.map((certif, index) => (
                  <CertifCard key={certif.id} certif={certif} index={index} />
                ))}
              </div>
            ) : (
              <TimelineView />
            )}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}

export default Certifications