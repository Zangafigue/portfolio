import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Stars from './Stars'
import Planet from './Planet'
import planets from '../../data/planets'

function Scene() {
  const handlePlanetClick = (sectionId) => {
    const el = document.getElementById(sectionId)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div style={{
      position: 'fixed',
      top:      0,
      left:     0,
      width:    '100%',
      height:   '100%',
      zIndex:   0,
    }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>

          {/* Lumières */}
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
          <pointLight position={[-10, -5, -10]} intensity={0.5} color="#00B4D8" />

          {/* Fond étoilé */}
          <Stars />

          {/* Planètes */}
          {planets.map((planet) => {
            const id        = planet.id
            const name      = planet.name
            const sectionId = planet.sectionId
            const color     = planet.color
            const size      = planet.size
            const position  = planet.position

            return (
              <Planet
                key={id}
                name={name}
                sectionId={sectionId}
                color={color}
                size={size}
                position={position}
                onClick={handlePlanetClick}
              />
            )
          })}

        </Suspense>
      </Canvas>
    </div>
  )
}

export default Scene