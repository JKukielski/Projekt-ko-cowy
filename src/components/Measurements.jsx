import React from 'react'
import './measurements.scss';
import images from '../constants/images';
import {GrCircleInformation} from 'react-icons/gr';


const Measurements = () => {
  return (
    <div className="app__measurements">
      <GrCircleInformation 
      color="#000"
      fontSize={16}
      />
      <h2 className="app__measurements-heading">MEASUREMENTS</h2>
      <div className="app__measurements-data">
        <form className="app__measurements-form">
          <label htmlFor="weight">Weight</label>
          <br />
          <input type="number" id="weight" />
          <br />
          <label htmlFor="height">Height</label>
          <br />
          <input type="number" id="height" />
          <br />
          <label htmlFor="shoulder">Shoulders</label>
          <br />
          <input type="number" id="shoulder" />
          <br />
          <label htmlFor="chest">Chest</label>
          <br />
          <input type="number" id="chest" />
          <br />
          <label htmlFor="abdominal">Abdominals</label>
          <br />
          <input type="number" id="abdominal" />
          <br />
          <label htmlFor="hips">Hips</label>
          <br />
          <input type="number" id="hips" />
          <br />
          <label htmlFor="thigh">Thighs</label>
          <br />
          <input type="number" id="thigh" />
          <br />
          <label htmlFor="calf">Calves</label>
          <br />
          <input type="number" id="calf"/>
        </form>
      </div>
      <img src={images.success} alt="" />
    </div>
  )
}

export default Measurements
