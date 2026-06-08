import { useState } from 'react'

// Visuel d'un projet : tente public/projects/<slug>.png ; si absent/erreur,
// affiche un placeholder élégant (cadre navigateur + dégradé + initiales + stack).
function ProjectShot({ slug, name, stack = [], fit = 'cover' }) {
  const [error, setError] = useState(false)
  const src = `/projects/${slug}.jpg`

  const initials = (name.replace(/[^a-zA-Z0-9]/g, '').slice(0, 2) || '?').toUpperCase()

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16 / 10',
        borderRadius: '10px',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.08)',
        backgroundColor: '#0d0d22',
      }}
    >
      {/* Barre de fenêtre */}
      <div
        style={{
          height: '28px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '0 12px',
          backgroundColor: 'rgba(255,255,255,0.04)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <span style={dot('#ff5f56')} />
        <span style={dot('#ffbd2e')} />
        <span style={dot('#27c93f')} />
      </div>

      <div style={{ position: 'relative', width: '100%', height: 'calc(100% - 28px)' }}>
        {!error ? (
          <img
            src={src}
            alt={name}
            loading="lazy"
            onError={() => setError(true)}
            style={{ width: '100%', height: '100%', objectFit: fit, display: 'block' }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.9rem',
              backgroundImage:
                'linear-gradient(135deg, rgba(0,180,216,0.16), rgba(124,58,237,0.16))',
            }}
          >
            <span
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '2.6rem',
                fontWeight: 700,
                color: 'rgba(255,255,255,0.85)',
                letterSpacing: '0.05em',
              }}
            >
              {initials}
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center', padding: '0 1rem' }}>
              {stack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.68rem',
                    color: 'rgba(255,255,255,0.6)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: '999px',
                    padding: '2px 8px',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const dot = (color) => ({
  width: '9px',
  height: '9px',
  borderRadius: '50%',
  backgroundColor: color,
  display: 'inline-block',
})

export default ProjectShot
