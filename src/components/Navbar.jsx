import React from 'react'
import { Link } from "react-router-dom";
import './navbar.scss'

const Navbar = () => {
  return (
    <div className="app__navbar">
              <Link to="/" className="app__navbar-logo">
          <a className="logo" href="/">
            FITNESS GURU
          </a>
        </Link>
        <ul className="app__navbar-links">
          <li className="app__navbar-link">
            <Link to="/">HOME</Link>
          </li>
          <li className="app__navbar-link">
            <Link to="/fitness-hub">FITNESS HUB</Link>
          </li>
          <li className="app__navbar-link">
            <a href="/exercises">EXERCISES</a>
          </li>

        </ul>
    </div>
  )
}

export default Navbar

