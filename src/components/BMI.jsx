import React, { useState } from "react";
import "./bmi.scss";
import { GrCircleInformation } from "react-icons/gr";
import images from "../constants/images";
import Tooltip from "./Tooltip";
import { FaNimblr } from "react-icons/fa";
const BMI = ({ bmi, submitBMI, handleBMIChange, handleBMISubmit }) => {
  const [toggleTooltip, setToggleTooltip] = useState(false);

  let resultBMI;
  if (submitBMI.bmi) {
    resultBMI = <p className="app__bmr-resultBMI">{submitBMI.bmi}</p>;
  }

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
      <p className="app__bmi-error">{submitBMI.error}</p>
      <div className="app__bmi-container">
        <form className="app__bmi-form" onSubmit={handleBMISubmit}>
          <div className="app__bmi-input_container">
            <label htmlFor="bmi-weight" className="app__bmi-label">
              Weight(kg)
            </label>
            <br />
            <input
              type="number"
              id="bmi-weight"
              name="weight"
              value={bmi.weight}
              onChange={handleBMIChange}
            />
          </div>
          <div className="app__bmi-input_container">
            <label htmlFor="bmi-weight" className="app__bmi-label">
              Height(cm)
            </label>
            <br />
            <input
              type="number"
              id="bmi-weight"
              name="height"
              value={bmi.height}
              onChange={handleBMIChange}
            />
          </div>
          <button type="submit" className="app__bmi-btn">
            CALCULATE BMI
          </button>
        </form>
        <h3 className="app__bmr-resultBMI_heading">Your BMI result:</h3>
        {resultBMI}
      </div>

      <img src={images.performance} alt="" />
    </div>
  );
};

export default BMI;
