import React from 'react'
import './bmr.scss';
import images from '../constants/images';
import {GrCircleInformation} from 'react-icons/gr';
const BMR = () => {
  return (
    <div className="app__bmr">
      <GrCircleInformation 
      color="#000"
      fontSize={16}
      />
      <h2 className="app__bmr-heading">BMR</h2>
      <img src={images.personalTrainer} alt="" />
    </div>
  )
}

export default BMR
