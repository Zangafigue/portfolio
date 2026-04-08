import { motion } from 'framer-motion'

function SkillBar({ name, level, color }) {
  return (
    <div style={{ marginBottom: '1rem' }}>

      {/* Nom + pourcentage */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '6px',
      }}>
        <span style={{
          fontSize: '0.85rem',
          color: 'rgba(255,255,255,0.8)',
          fontFamily: 'JetBrains Mono, monospace',
        }}>
          {name}
        </span>
        <span style={{
          fontSize: '0.75rem',
          color: 'rgba(255,255,255,0.4)',
          fontFamily: 'JetBrains Mono, monospace',
        }}>
          {level}%
        </span>
      </div>

      {/* Barre de fond */}
      <div style={{
        height: '4px',
        backgroundColor: 'rgba(255,255,255,0.08)',
        borderRadius: '999px',
        overflow: 'hidden',
      }}>
        {/* Barre animée */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          style={{
            height: '100%',
            backgroundColor: color,
            borderRadius: '999px',
          }}
        />
      </div>

    </div>
  )
}

export default SkillBar