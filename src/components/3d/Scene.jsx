import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Stars from './Stars'
import Planet from './Planet'
import CameraRig from './CameraRig'
import planets from '../../data/planets'
import useMediaQuery from '../../hooks/useMediaQuery'

// Fond 3D fixe. Le scroll natif du document pilote la caméra (voir CameraRig).
// Les planètes sont décoratives en v1 (la navigation se fait via la Navbar) ;
// l'interaction « atterrir sur une planète » est prévue en Phase 2.
function Scene() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, isMobile ? 1.5 : 2]}
        gl={{ antialias: !isMobile, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <pointLight position={[-10, -5, -10]} intensity={0.5} color="#00B4D8" />

          <Stars mobile={isMobile} />
          <CameraRig />

          {planets.map((planet) => (
            <Planet
              key={planet.id}
              name={planet.name}
              sectionId={planet.sectionId}
              color={planet.color}
              size={planet.size}
              position={planet.position}
            />
          ))}
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Scene
