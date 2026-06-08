import { useState, useEffect } from 'react'

// Source unique de scroll : le scroll natif du document.
// Le 3D (CameraRig, via useFrame) lit getScrollOffset() à chaque frame ;
// les composants React (Navbar, overlay) s'abonnent via le hook useScrollOffset().

let currentOffset = 0
const listeners = new Set()

function compute() {
  const doc = document.documentElement
  const max = doc.scrollHeight - window.innerHeight
  currentOffset = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
  listeners.forEach((fn) => fn(currentOffset))
}

if (typeof window !== 'undefined') {
  window.addEventListener('scroll', compute, { passive: true })
  window.addEventListener('resize', compute)
  // Calcul initial après le premier rendu
  setTimeout(compute, 0)
}

// Lu chaque frame par le rig caméra (hors cycle React).
export function getScrollOffset() {
  return currentOffset
}

function useScrollOffset() {
  const [offset, setOffset] = useState(currentOffset)

  useEffect(() => {
    listeners.add(setOffset)
    return () => {
      listeners.delete(setOffset)
    }
  }, [])

  return offset
}

export default useScrollOffset
