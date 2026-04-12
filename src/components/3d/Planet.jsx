import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'

function Planet({ position, color, size, name, sectionId, onClick }) {
  const meshRef      = useRef()
  const atmosRef     = useRef()
  const [hovered, setHovered] = useState(false)

  // Rotation sur elle-même + légère oscillation
  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y += 0.003

    // Oscillation verticale douce
    const t = state.clock.getElapsedTime()
    meshRef.current.position.y = Math.sin(t * 0.5) * 0.15

    // Atmosphère pulse au hover
    if (atmosRef.current) {
      const scale = hovered ? 1.15 : 1.08
      atmosRef.current.scale.setScalar(
        atmosRef.current.scale.x + (scale - atmosRef.current.scale.x) * 0.05
      )
    }
  })

  const handleClick = () => {
    if (onClick) onClick(sectionId)
  }

  const handlePointerOver = () => {
    setHovered(true)
    document.body.style.cursor = 'pointer'
  }

  const handlePointerOut = () => {
    setHovered(false)
    document.body.style.cursor = 'auto'
  }

  return (
    <group position={position}>

      {/* Atmosphère */}
      <mesh ref={atmosRef}>
        <sphereGeometry args={[size * 1.08, 32, 32]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={hovered ? 0.12 : 0.06}
        />
      </mesh>

      {/* Planète */}
      <mesh
        ref={meshRef}
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <sphereGeometry args={[size, 64, 64]} />
        <meshStandardMaterial
          color={color}
          roughness={0.7}
          metalness={0.2}
          emissive={color}
          emissiveIntensity={hovered ? 0.3 : 0.1}
        />
      </mesh>

      {/* Anneau décoratif (optionnel) */}
      <mesh rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[size * 1.4, size * 0.04, 8, 64]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Label au survol */}
      {hovered && (
        <Html
          position={[0, size + 0.5, 0]}
          center
          style={{ pointerEvents: 'none' }}
        >
          <div style={{
            backgroundColor: 'rgba(10,10,26,0.9)',
            border:          `1px solid ${color}`,
            color:           color,
            padding:         '6px 14px',
            borderRadius:    '4px',
            fontSize:        '0.75rem',
            fontFamily:      'JetBrains Mono, monospace',
            whiteSpace:      'nowrap',
            letterSpacing:   '0.08em',
          }}>
            {name}
          </div>
        </Html>
      )}

    </group>
  )
}

export default Planet