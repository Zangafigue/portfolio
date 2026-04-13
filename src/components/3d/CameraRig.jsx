import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'

function CameraRig() {
  const scroll = useScroll()

  useFrame((state) => {
    const targetZ = scroll.offset * -60
    const targetX = Math.sin(scroll.offset * Math.PI * 2) * 0.5

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