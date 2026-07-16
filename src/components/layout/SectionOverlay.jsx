import Landing from '../sections/Landing'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Services from '../sections/Services'
import Certifications from '../sections/Certifications'
import Contact from '../sections/Contact'

// Toutes les sections sont empilées dans le flux normal (scroll natif).
// Ordre voulu : la preuve (Projects) précède l'offre (Services), qui mène au Contact.
function SectionOverlay() {
  return (
    <main style={{ position: 'relative', zIndex: 1 }}>
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Certifications />
      <Contact />
    </main>
  )
}

export default SectionOverlay
