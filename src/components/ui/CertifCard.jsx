import { motion } from 'framer-motion'

function CertifCard({ certif, index }) {
  const url = certif.credentialUrl
  const color = certif.color
  const date = certif.date
  const name = certif.name
  const issuer = certif.issuer
  const skills = certif.skills
  const featured = certif.featured

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      style={{
        backgroundColor: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '12px',
        padding: '1.5rem',
        borderTop: `3px solid ${color}`,
      }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '0.8rem',
      }}>
        <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#ffffff', flex: 1 }}>
          {name}
        </h3>
        <span style={{
          fontSize: '0.75rem',
          color: 'rgba(255,255,255,0.4)',
          fontFamily: 'JetBrains Mono, monospace',
          marginLeft: '1rem',
          whiteSpace: 'nowrap',
        }}>
          {date}
        </span>
      </div>

      <p style={{
        fontSize: '0.8rem',
        color: color,
        fontFamily: 'JetBrains Mono, monospace',
        marginBottom: '1rem',
      }}>
        {issuer}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {skills.map((skill) => (
          <span
            key={skill}
            style={{
              padding: '3px 10px',
              backgroundColor: 'rgba(255,255,255,0.05)',
              borderRadius: '999px',
              fontSize: '0.72rem',
              color: 'rgba(255,255,255,0.5)',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            {skill}
          </span>
        ))}
      </div>

      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            marginTop: '1rem',
            fontSize: '0.8rem',
            color: color,
            textDecoration: 'none',
            fontFamily: 'JetBrains Mono, monospace',
          }}
        >
          View credential →
        </a>
      )}
    </motion.div>
  )
}

export default CertifCard
