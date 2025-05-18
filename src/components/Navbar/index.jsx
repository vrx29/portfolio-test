import React from 'react'
import './index.css';
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">MyPortfolio</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar