import React from 'react'
import './sidebar.scss'
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="app__sidebar">
        <Link to="/" className="app__display-logo">
          <a className="display-logo" href="/">
            FITNESS GURU
          </a>
        </Link>
        <div className="app__sidebar-element">
            <h2 className="app__sidebar-heading">Workout results</h2>
            <p className="app__sidebar-feature">Workout results</p>
        </div>
        <div className="app__sidebar-element">
            <h2 className="app__sidebar-heading">Measurements</h2>
            <p className="app__sidebar-feature">Body measurements</p>
        </div>
        <div className="app__sidebar-element">
            <h2 className="app__sidebar-heading">Calculators</h2>
            <p className="app__sidebar-feature">BMI</p>
            <p className="app__sidebar-feature">BMR</p>
        </div>
        <div className="app__sidebar-element">
            <h2 className="app__sidebar-heading">Workout plan</h2>
            <p className="app__sidebar-feature"></p>
        </div>
        <div className="app__sidebar-element">
            <h2 className="app__sidebar-heading">Exercises</h2>
        </div>
        <div className="app__sidebar-element">
            <h2 className="app__sidebar-heading">Summary</h2>
        </div>
    </div>
  )
}

export default Sidebar
