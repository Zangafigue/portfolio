import Landing from '../sections/Landing'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Certifications from '../sections/Certifications'
import Contact from '../sections/Contact'

// Toutes les sections sont empilées dans le flux normal (scroll natif).
// Le fond reste transparent pour laisser voir la scène 3D fixe derrière.
function SectionOverlay() {
  return (
    <main style={{ position: 'relative', zIndex: 1 }}>
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  )
}

export default SectionOverlay
