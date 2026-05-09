
import './Styles/App.css'
import Home from './Pages/Home'
import Aboutme from './Pages/Aboutme'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import NotFound from './Pages/404'
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <>
    
<BrowserRouter> 

  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

</BrowserRouter>

    </>
  )
}

export default App