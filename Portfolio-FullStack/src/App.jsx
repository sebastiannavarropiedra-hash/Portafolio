import './Styles/App.css'
import Home from './Pages/Home.jsx'
import Aboutme from './Pages/Aboutme.jsx'
import Projects from './Pages/Projects.jsx'
import Contact from './Pages/Contact.jsx'
import NotFound from './Pages/NotFound.jsx'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>

        <Navbar />

        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutme />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </>
  );
}

export default App;