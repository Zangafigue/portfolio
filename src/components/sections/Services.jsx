import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import services from '../../data/services'
import { useLoc } from '../../i18n/localize'

function Services() {
  const { t } = useTranslation()
  const loc = useLoc()

  return (
    <section
      id="services"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6rem 1.5rem' }}
    >
      <div style={{ maxWidth: '1000px', width: '100%' }}>

        {/* Titre de section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}
        >
          <span style={{ fontFamily: 'JetBrains Mono, monospace', color: '#00B4D8', fontSize: '0.9rem' }}>{t('services.n')}</span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, color: '#fff' }}>{t('services.title')}</h2>
          <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(255,255,255,0.1)', marginLeft: '1rem' }} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '0.95rem',
            lineHeight: 1.7,
            maxWidth: '620px',
            marginBottom: '2.5rem',
          }}
        >
          {t('services.intro')}
        </motion.p>

        {/* Grille des prestations */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.2rem' }}>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              style={{
                backgroundColor: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '14px',
                padding: '1.4rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.9rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: service.color }} />
                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#fff' }}>{loc(service.title)}</h3>
              </div>

              <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.7, flex: 1 }}>
                {loc(service.description)}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {service.stack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: '4px 10px',
                      backgroundColor: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                      fontSize: '0.72rem',
                      color: 'rgba(255,255,255,0.6)',
                      fontFamily: 'JetBrains Mono, monospace',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ marginTop: '2.5rem', textAlign: 'center' }}
        >
          <a
            href="#contact"
            style={{
              display: 'inline-block',
              padding: '12px 26px',
              backgroundColor: '#00B4D8',
              color: '#0a0a1a',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '0.95rem',
              textDecoration: 'none',
            }}
          >
            {t('services.cta')}
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Services
