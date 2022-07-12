import React from 'react'
import BMI from '../components/BMI'
import BMR from '../components/BMR'
import FitnessHeader from '../components/FitnessHeader'
import Measurements from '../components/Measurements'
import Results from '../components/Results'
import './fitness.scss'

const Fitness = () => {
  return (
    <>
      
      <div className="app__fitness">
        <FitnessHeader />
        <Measurements />
        <BMR />
        <BMI />
        <Results />
      </div>
    </>

  )
}

export default Fitness
