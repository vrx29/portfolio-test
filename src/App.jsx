import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'
import Blogs from './components/Blogs'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <div className='app'>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App