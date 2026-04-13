import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Career from './pages/Career'
import Projects from './pages/Projects'
import Technologies from './pages/Technologies'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trayectoria" element={<Career />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/tecnologias" element={<Technologies />} />
        </Routes>
      </main>
    </>
  )
}

export default App