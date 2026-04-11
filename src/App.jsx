import Scene from './components/3d/Scene'
import Landing from './components/sections/Landing'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Certifications from './components/sections/Certifications'
import Contact from './components/sections/Contact'

function App() {
  return (
    <div style={{ position: 'relative' }}>
      <Scene />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Landing />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </div>
    </div>
  )
}

export default App