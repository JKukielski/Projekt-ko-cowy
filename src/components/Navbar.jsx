import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import './navbar.scss'

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);


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
        <div className="app__navbar-smallscreen">
            {toggleMenu ? (
                <AiOutlineClose
                color='#FFF'
                size={36}
                onClick={() => {setToggleMenu(false)}}
                />
            ) : (
                <BiMenu 
                color="#FFF"
                size={36}
                onClick={() => {setToggleMenu(true)}}
                />
            )}
            {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay">
              <ul className="app__navbar-smallscreen_links">
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
          )}
        </div>
    </div>
  )
}

export default Navbar

