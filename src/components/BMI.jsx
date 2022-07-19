import React, { useState } from "react";
import "./bmi.scss";
import { GrCircleInformation } from "react-icons/gr";
import images from "../constants/images";
import Tooltip from "./Tooltip";
const BMI = () => {
  const [toggleTooltip, setToggleTooltip] = useState(false);

  return (
    <div className="app__bmi">
      <GrCircleInformation
        color="#000"
        fontSize={16}
        onMouseEnter={() => setToggleTooltip(true)}
        onMouseLeave={() => setToggleTooltip(false)}
      />
      {toggleTooltip && (
        <Tooltip text="Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women." />
      )}
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
