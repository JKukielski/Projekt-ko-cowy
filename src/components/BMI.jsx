import React from 'react'
import './bmi.scss'
import {GrCircleInformation} from 'react-icons/gr';
import images from '../constants/images';
const BMI = () => {
  return (
    <div className="app__bmi">
      <GrCircleInformation 
      color="#000"
      fontSize={16}
      />
      <h2 className="app__bmi-header">BMI</h2>
      <img src={images.performance} alt="" />
    </div>
  )
}

export default BMI
