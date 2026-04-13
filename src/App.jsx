import Scene from './components/3d/Scene'
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <div style={{
      position: 'fixed',
      width:    '100%',
      height:   '100%',
      overflow: 'hidden',
    }}>
      <Scene />
      <Navbar />
    </div>
  )
}

export default App