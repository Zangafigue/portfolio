import Navbar from './components/layout/Navbar'
import SectionOverlay from './components/layout/SectionOverlay'
import Footer from './components/layout/Footer'

// Portfolio produit-first : page classique, fond sombre (dégradé CSS dans index.css),
// pas de 3D. Le code spatial est conservé dans components/3d/* pour une future page « lab ».
function App() {
  return (
    <>
      <Navbar />
      <SectionOverlay />
      <Footer />
    </>
  )
}

export default App
