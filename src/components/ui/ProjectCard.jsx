import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useLoc } from '../../i18n/localize'
import useMediaQuery from '../../hooks/useMediaQuery'
import ProjectShot from './ProjectShot'

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

function ProjectLinks({ github, live, t }) {
  const linkStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    color: 'rgba(255,255,255,0.6)',
    textDecoration: 'none',
    fontSize: '0.78rem',
    fontFamily: 'JetBrains Mono, monospace',
  }
  const hover = (e) => (e.currentTarget.style.color = '#00B4D8')
  const out = (e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')

  return (
    <div style={{ display: 'flex', gap: '1.2rem' }}>
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseEnter={hover} onMouseLeave={out}>
          <GitHubIcon /> {t('projects.code')}
        </a>
      )}
      {live && (
        <a href={live} target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseEnter={hover} onMouseLeave={out}>
          <ExternalLinkIcon /> {t('projects.demo')}
        </a>
      )}
    </div>
  )
}

function StackTags({ stack }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
      {stack.map((tech) => (
        <span
          key={tech}
          style={{
            padding: '3px 10px',
            backgroundColor: 'rgba(0,180,216,0.08)',
            border: '1px solid rgba(0,180,216,0.2)',
            borderRadius: '999px',
            fontSize: '0.7rem',
            color: 'rgba(255,255,255,0.65)',
            fontFamily: 'JetBrains Mono, monospace',
          }}
        >
          {tech}
        </span>
      ))}
    </div>
  )
}

const cardBase = {
  backgroundColor: 'rgba(255,255,255,0.02)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '14px',
}

function ProjectCard({ project, index, variant = 'compact' }) {
  const { t } = useTranslation()
  const loc = useLoc()
  const isMobile = useMediaQuery('(max-width: 760px)')
  const role = project.role ? loc(project.role) : null

  if (variant === 'featured') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        style={{
          ...cardBase,
          padding: '1.4rem',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: '1.6rem',
        }}
      >
        <div style={{ flex: isMobile ? 'none' : '0 0 42%' }}>
          <ProjectShot slug={project.slug} name={project.name} stack={project.stack} fit={project.shot} />
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', letterSpacing: '0.12em', color: '#00B4D8' }}>
            {t('projects.caseStudy')}
          </span>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', lineHeight: 1.25 }}>
            {project.name}
          </h3>

          {role && (
            <span
              style={{
                alignSelf: 'flex-start',
                fontSize: '0.72rem',
                fontFamily: 'JetBrains Mono, monospace',
                color: '#22c55e',
                border: '1px solid rgba(34,197,94,0.35)',
                backgroundColor: 'rgba(34,197,94,0.08)',
                borderRadius: '999px',
                padding: '3px 10px',
              }}
            >
              {role}
            </span>
          )}

          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.65 }}>
            {loc(project.description)}
          </p>

          {project.outcome && (
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)', display: 'flex', gap: '8px' }}>
              <span style={{ color: '#00B4D8' }}>▹</span>
              {loc(project.outcome)}
            </p>
          )}

          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.9rem', paddingTop: '0.4rem' }}>
            <StackTags stack={project.stack} />
            <ProjectLinks github={project.github} live={project.live} t={t} />
          </div>
        </div>
      </motion.div>
    )
  }

  // compact
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ borderColor: 'rgba(0,180,216,0.4)', y: -4 }}
      style={{ ...cardBase, padding: '1.3rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}
    >
      <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#fff' }}>{project.name}</h3>
      <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, flex: 1 }}>
        {loc(project.description)}
      </p>
      <StackTags stack={project.stack} />
      <ProjectLinks github={project.github} live={project.live} t={t} />
    </motion.div>
  )
}

export default ProjectCard
