import { useState, useEffect } from 'react'

const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'contact']

function useScrollSection() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const observers = []

    sections.forEach((id) => {
      const el = id === 'home'
        ? document.getElementById('home') || document.querySelector('section')
        : document.getElementById(id)

      if (!el) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id)
            }
          })
        },
        { threshold: 0.4 }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => {
      observers.forEach((obs) => obs.disconnect())
    }
  }, [])

  return activeSection
}

export default useScrollSection