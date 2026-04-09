import { motion } from 'framer-motion'
import timeline, { typeColors } from '../../data/timeline'

function TimelineView() {
  return (
    <div style={{ position: 'relative', paddingLeft: '2rem' }}>

      {/* Ligne verticale */}
      <div style={{
        position: 'absolute',
        left: '7px',
        top: 0,
        bottom: 0,
        width: '2px',
        backgroundColor: 'rgba(255,255,255,0.08)',
      }} />

      {timeline.map((item, index) => {
        const dotColor = item.current ? '#00B4D8' : typeColors[item.type]
        const title = item.title
        const year = item.year
        const description = item.description
        const isCurrent = item.current

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ position: 'relative', marginBottom: '2rem' }}
          >
            {/* Point */}
            <div style={{
              position: 'absolute',
              left: '-1.85rem',
              top: '4px',
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: dotColor,
              border: isCurrent ? '2px solid rgba(0,180,216,0.4)' : 'none',
              boxShadow: isCurrent ? '0 0 10px rgba(0,180,216,0.5)' : 'none',
            }} />

            {/* Contenu */}
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '10px',
              padding: '1rem 1.2rem',
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '0.4rem',
              }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#ffffff' }}>
                  {title}
                  {isCurrent && (
                    <span style={{
                      marginLeft: '8px',
                      fontSize: '0.65rem',
                      color: '#00B4D8',
                      fontFamily: 'JetBrains Mono, monospace',
                      border: '1px solid rgba(0,180,216,0.4)',
                      padding: '2px 8px',
                      borderRadius: '999px',
                    }}>
                      NOW
                    </span>
                  )}
                </h3>
                <span style={{
                  fontSize: '0.75rem',
                  color: typeColors[item.type],
                  fontFamily: 'JetBrains Mono, monospace',
                }}>
                  {year}
                </span>
              </div>
              <p style={{
                fontSize: '0.82rem',
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.6,
              }}>
                {description}
              </p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

export default TimelineView
