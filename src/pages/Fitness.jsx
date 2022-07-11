import React from 'react'
import Display from '../components/Display'
import Sidebar from '../components/Sidebar'
import './fitness.scss'

const Fitness = () => {
  return (
    <div className="app__fitness">
      <Sidebar />
      <div className="app__display-content">
      <Display />
      </div>

    </div>
  )
}

export default Fitness
