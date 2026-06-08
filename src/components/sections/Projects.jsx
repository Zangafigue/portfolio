import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import projects from '../../data/projects'
import ProjectCard from '../ui/ProjectCard'

function SectionHeader({ n, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}
    >
      <span style={{ fontFamily: 'JetBrains Mono, monospace', color: '#00B4D8', fontSize: '0.9rem' }}>{n}</span>
      <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, color: '#fff' }}>{title}</h2>
      <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(255,255,255,0.1)', marginLeft: '1rem' }} />
    </motion.div>
  )
}

function Subheading({ children }) {
  return (
    <h3
      style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '0.8rem',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.45)',
        marginBottom: '1.4rem',
      }}
    >
      {children}
    </h3>
  )
}

function Projects() {
  const { t } = useTranslation()

  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section
      id="projects"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6rem 1.5rem' }}
    >
      <div style={{ maxWidth: '1000px', width: '100%' }}>
        <SectionHeader n={t('projects.n')} title={t('projects.title')} />

        {/* Projets phares — études de cas */}
        <Subheading>{t('projects.featuredTitle')}</Subheading>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3.5rem' }}>
          {featured.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} variant="featured" />
          ))}
        </div>

        {/* Autres projets — grille compacte */}
        <Subheading>{t('projects.allTitle')}</Subheading>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.2rem',
          }}
        >
          {rest.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} variant="compact" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
