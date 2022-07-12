import React from 'react'
import './fitnessheader.scss'
import { Link } from "react-router-dom";
import { BiMenu } from 'react-icons/bi';
import { FaRegUserCircle } from 'react-icons/fa'

const FitnessHeader = () => {
  return (
    <div className='app__fitness-header'>
        <Link to="/" className="app__navbar-logo">
          <a className="fitness-logo" href="/">
            FITNESS GURU
          </a>
        </Link>
        <div className="app__fitness-icons">
        <FaRegUserCircle 
        color='#000'
        size={30}
        />
        <BiMenu
        color='#000'
        size={36}
        />
        </div>
    </div>
  )
}

export default FitnessHeader
