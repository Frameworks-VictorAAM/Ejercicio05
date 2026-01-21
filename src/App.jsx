import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './componentes/secciones/Home'
import News from "./componentes/secciones/News";
import About from './componentes/secciones/About'
import Navbar from './componentes/Navbar'
import Banner from './componentes/Banner';


const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <BrowserRouter>
        <Navbar />
         <>
      <Banner />
      <main id="descubre" style={{ padding: "2rem" }}>
        <h2>Descubre más</h2>
        <p>Contenido de tu sitio…</p>
      </main>
    </>
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/News" element={<News />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}


export default App
