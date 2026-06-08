import { useFrame } from '@react-three/fiber'
import { getScrollOffset } from '../../hooks/useScrollOffset'

// Pilote la caméra à partir du scroll natif du document (0 → 1).
// On avance dans l'axe -Z pour traverser le champ de planètes.
function CameraRig() {
  useFrame((state) => {
    const offset  = getScrollOffset()
    const targetZ = offset * -60
    const targetX = Math.sin(offset * Math.PI * 2) * 0.5

    state.camera.position.z += (targetZ - state.camera.position.z) * 0.05
    state.camera.position.x += (targetX - state.camera.position.x) * 0.05

    state.camera.lookAt(
      state.camera.position.x * 0.5,
      0,
      state.camera.position.z - 5
    )
  })

  return null
}

export default CameraRig
