import { useCallback, useSyncExternalStore } from 'react'

// Hook utilitaire : renvoie true si la media query correspond.
// Sert à alléger la scène 3D sur mobile (moins d'étoiles, DPR réduit).
// useSyncExternalStore évite tout setState dans un effet.
function useMediaQuery(query) {
  const subscribe = useCallback(
    (callback) => {
      const mql = window.matchMedia(query)
      mql.addEventListener('change', callback)
      return () => mql.removeEventListener('change', callback)
    },
    [query]
  )

  const getSnapshot = () => window.matchMedia(query).matches
  const getServerSnapshot = () => false

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

export default useMediaQuery
