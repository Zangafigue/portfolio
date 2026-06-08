import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import skills from '../../data/skills'
import { useLoc } from '../../i18n/localize'

function Skills() {
  const { t } = useTranslation()
  const loc = useLoc()

  return (
    <section
      id="skills"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6rem 1.5rem' }}
    >
      <div style={{ maxWidth: '1000px', width: '100%' }}>

        {/* Titre de section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}
        >
          <span style={{ fontFamily: 'JetBrains Mono, monospace', color: '#00B4D8', fontSize: '0.9rem' }}>{t('skills.n')}</span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, color: '#fff' }}>{t('skills.title')}</h2>
          <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(255,255,255,0.1)', marginLeft: '1rem' }} />
        </motion.div>

        {/* Grille des domaines */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.2rem' }}>
          {skills.map((group, groupIndex) => {
            const category = loc(group.category)
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIndex * 0.08 }}
                style={{
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '14px',
                  padding: '1.4rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.1rem' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: group.color }} />
                  <span
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.8rem',
                      color: group.color,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {category}
                  </span>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {group.items.map((skill) => {
                    const label = loc(skill)
                    return (
                      <span
                        key={label}
                        style={{
                          padding: '5px 12px',
                          backgroundColor: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          borderRadius: '8px',
                          fontSize: '0.8rem',
                          color: 'rgba(255,255,255,0.78)',
                          fontFamily: 'JetBrains Mono, monospace',
                        }}
                      >
                        {label}
                      </span>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Skills
