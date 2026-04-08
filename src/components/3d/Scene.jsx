import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Stars from './Stars'

function Scene() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <Stars />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Scene