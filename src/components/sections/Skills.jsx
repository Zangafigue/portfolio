import { motion } from 'framer-motion'
import skills from '../../data/skills'
import SkillBar from '../ui/SkillBar'

function Skills() {
  return (
    <section
      id="skills"
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
            02.
          </span>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
            fontWeight: 700,
            color: '#ffffff',
          }}>
            Skills & Tech Stack
          </h2>
          <div style={{
            flex: 1,
            height: '1px',
            backgroundColor: 'rgba(255,255,255,0.1)',
            marginLeft: '1rem',
          }} />
        </motion.div>

        {/* Grille des catégories */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '2rem',
        }}>
          {skills.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: groupIndex * 0.15 }}
              style={{
                backgroundColor: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '12px',
                padding: '1.5rem',
              }}
            >
              {/* Titre catégorie */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '1.5rem',
              }}>
                <div style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: group.color,
                }} />
                <span style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.8rem',
                  color: group.color,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}>
                  {group.category}
                </span>
              </div>

              {/* Barres de compétences */}
              {group.items.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={group.color}
                />
              ))}

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills