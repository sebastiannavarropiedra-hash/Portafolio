
import './Styles/App.css'
import Home from './Pages/Home.jsx'
import Aboutme from './Pages/Aboutme.jsx'
import Projects from './Pages/Projects.jsx'
import Contact from './Pages/Contact.jsx'
import NotFound from './Pages/404.jsx'
import Navbar from './Components/Navbar.jsx'
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <>
    
<BrowserRouter> 

<Navbar />

  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutme />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

</BrowserRouter>

    </>
  )
}

export default App