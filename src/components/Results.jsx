import React from 'react'
import './results.scss';
import {GrCircleInformation} from 'react-icons/gr';
import images from '../constants/images';

const Results = () => {
  return (
    <div className="app__results">
      <GrCircleInformation 
      color="#000"
      fontSize={16}
      />
      <h2 className="app__results-heading">WORKOUT TRACKER</h2>
      <img src={images.fitnessStats} alt="" />
    </div>
  )
}

export default Results 
