import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Stars as DreiStars } from '@react-three/drei'

function Stars() {
  const starsRef = useRef()

  // useFrame = s'exécute à chaque frame (60fps)
  // Rotation très lente pour donner vie au fond
  useFrame((state, delta) => {
    if (starsRef.current) {
      starsRef.current.rotation.y += delta * 0.02
      starsRef.current.rotation.x += delta * 0.01
    }
  })

  return (
    <group ref={starsRef}>
      <DreiStars
        radius={100}      // rayon de la sphère d'étoiles
        depth={50}        // profondeur du champ d'étoiles
        count={6000}      // nombre d'étoiles
        factor={4}        // taille des étoiles
        saturation={0}    // 0 = blanc pur
        fade              // fondu sur les bords
        speed={0.5}       // vitesse de scintillement
      />
    </group>
  )
}

export default Stars