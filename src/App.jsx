import Scene from './components/3d/Scene'
import Landing from './components/sections/Landing'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Certifications from './components/sections/Certifications'

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
      </div>
    </div>
  )
}

export default App