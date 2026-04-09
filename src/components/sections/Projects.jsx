import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import projects, { categories } from '../../data/projects'
import ProjectCard from '../ui/ProjectCard'

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = projects.filter(p =>
    activeFilter === 'All' ? true : p.category === activeFilter
  )

  return (
    <section
      id="projects"
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
            marginBottom: '2rem',
          }}
        >
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            color: '#00B4D8',
            fontSize: '0.9rem',
          }}>
            03.
          </span>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
            fontWeight: 700,
            color: '#ffffff',
          }}>
            Projects
          </h2>
          <div style={{
            flex: 1,
            height: '1px',
            backgroundColor: 'rgba(255,255,255,0.1)',
            marginLeft: '1rem',
          }} />
        </motion.div>

        {/* Filtres */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: 'flex',
            gap: '0.5rem',
            flexWrap: 'wrap',
            marginBottom: '2.5rem',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                padding: '6px 16px',
                borderRadius: '999px',
                border: '1px solid',
                borderColor: activeFilter === cat
                  ? '#00B4D8'
                  : 'rgba(255,255,255,0.15)',
                backgroundColor: activeFilter === cat
                  ? 'rgba(0, 180, 216, 0.15)'
                  : 'transparent',
                color: activeFilter === cat
                  ? '#00B4D8'
                  : 'rgba(255,255,255,0.5)',
                fontSize: '0.8rem',
                fontFamily: 'JetBrains Mono, monospace',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grille projets */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {filtered.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}

export default Projects