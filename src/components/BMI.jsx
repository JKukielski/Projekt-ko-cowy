import React from "react";
import "./bmi.scss";
import { GrCircleInformation } from "react-icons/gr";
import images from "../constants/images";
const BMI = () => {
  return (
    <div className="app__bmi">
      <GrCircleInformation color="#000" fontSize={16} />
      <h2 className="app__bmi-header">BMI</h2>
      <div className="app__bmi-container">
        <div className="app__bmi-input_container">
          <label htmlFor="bmi-weight" className="app__bmi-label">
            Weight(kg)
          </label>
          <br />
          <input type="number" id="bmi-weight" />
        </div>
        <div className="app__bmi-input_container">
          <label htmlFor="bmi-weight" className="app__bmi-label">
            Height(cm)
          </label>
          <br />
          <input type="number" id="bmi-weight" />
        </div>
        <button type="submit" className="app__bmi-btn">
          CALCULATE BMI
        </button>
      </div>
      <img src={images.performance} alt="" />
    </div>
  );
};

export default BMI;
