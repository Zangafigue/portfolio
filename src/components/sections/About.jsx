import { motion } from 'framer-motion'
import about from '../../data/about'

function About() {
  return (
    <section
      id="about"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 2rem',
      }}
    >
      <div style={{ maxWidth: '900px', width: '100%' }}>

        {/* Titre de section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '3rem',
          }}
        >
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            color: '#00B4D8',
            fontSize: '0.9rem',
          }}>
            01.
          </span>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
            fontWeight: 700,
            color: '#ffffff',
          }}>
            About Me
          </h2>
          <div style={{
            flex: 1,
            height: '1px',
            backgroundColor: 'rgba(255,255,255,0.1)',
            marginLeft: '1rem',
          }} />
        </motion.div>

        {/* Contenu principal — 2 colonnes */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'start',
        }}>

          {/* Colonne gauche — Bio */}
          <div>
            {about.bio.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.8,
                  marginBottom: '1.2rem',
                  fontSize: '0.95rem',
                }}
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Langues */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ marginTop: '2rem' }}
            >
              <p style={{
                fontFamily: 'JetBrains Mono, monospace',
                color: '#00B4D8',
                fontSize: '0.8rem',
                marginBottom: '0.8rem',
                letterSpacing: '0.1em',
              }}>
                LANGUAGES
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {about.languages.map((lang) => (
                  <span
                    key={lang.name}
                    style={{
                      padding: '4px 12px',
                      border: '1px solid rgba(0, 180, 216, 0.3)',
                      borderRadius: '999px',
                      fontSize: '0.8rem',
                      color: 'rgba(255,255,255,0.7)',
                      fontFamily: 'JetBrains Mono, monospace',
                    }}
                  >
                    {lang.name} — {lang.level}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Colonne droite — Infos + Stats */}
          <div>

            {/* Infos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '12px',
                padding: '1.5rem',
                marginBottom: '1.5rem',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.85rem',
              }}
            >
              {[
                { label: 'School', value: about.school },
                { label: 'Location', value: about.location },
                { label: 'Year', value: about.year },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    marginBottom: '0.8rem',
                    alignItems: 'flex-start',
                  }}
                >
                  <span style={{ color: '#00B4D8', minWidth: '80px' }}>
                    {item.label}
                  </span>
                  <span style={{ color: 'rgba(255,255,255,0.7)' }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
            }}>
              {about.facts.map((fact, index) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  style={{
                    backgroundColor: 'rgba(0, 180, 216, 0.05)',
                    border: '1px solid rgba(0, 180, 216, 0.2)',
                    borderRadius: '10px',
                    padding: '1.2rem',
                    textAlign: 'center',
                  }}
                >
                  <div style={{
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    color: '#00B4D8',
                    fontFamily: 'JetBrains Mono, monospace',
                  }}>
                    {fact.value}
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: 'rgba(255,255,255,0.5)',
                    marginTop: '4px',
                  }}>
                    {fact.label}
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default About