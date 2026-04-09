import { motion } from 'framer-motion'

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

function ProjectCard({ project, index }) {
  const handleMouseEnter = (e) => {
    e.currentTarget.style.color = '#00B4D8'
  }

  const handleMouseLeave = (e) => {
    e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ borderColor: 'rgba(0, 180, 216, 0.4)', y: -4 }}
      style={{
        backgroundColor: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '12px',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        cursor: 'default',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          {project.featured && (
            <span style={{
              fontSize: '0.7rem',
              color: '#00B4D8',
              fontFamily: 'JetBrains Mono, monospace',
              letterSpacing: '0.1em',
              display: 'block',
              marginBottom: '6px',
            }}>
              FEATURED
            </span>
          )}
          <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#ffffff', lineHeight: 1.3 }}>
            {project.name}
          </h3>
        </div>

        {/* Liens */}
        <div style={{ display: 'flex', gap: '12px', marginLeft: '1rem' }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}
            >
              <GitHubIcon />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              title="Live demo"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}
            >
              <ExternalLinkIcon />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p style={{
        fontSize: '0.85rem',
        color: 'rgba(255,255,255,0.6)',
        lineHeight: 1.7,
        flex: 1,
      }}>
        {project.description}
      </p>

      {/* Stack */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {project.stack.map((tech) => (
          <span
            key={tech}
            style={{
              padding: '3px 10px',
              backgroundColor: 'rgba(0, 180, 216, 0.08)',
              border: '1px solid rgba(0, 180, 216, 0.2)',
              borderRadius: '999px',
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
  )
}

export default ProjectCard