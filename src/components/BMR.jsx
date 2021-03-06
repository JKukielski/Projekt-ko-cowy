import React, { useState } from "react";
import "./bmr.scss";
import images from "../constants/images";
import { GrCircleInformation } from "react-icons/gr";
import Tooltip from "./Tooltip";

const BMR = ({ handleBMRChange, calculateBMR, bmr, submitBMR }) => {
  const [toggleTooltip, setToggleTooltip] = useState(false);

  let resultBMR;
  if (submitBMR.bmr) {
    resultBMR = <p className="app__bmr-resultBMR">{submitBMR.bmr}</p>;
  }

  return (
    <div className="app__bmr">
      <GrCircleInformation
        color="#000"
        fontSize={16}
        onMouseEnter={() => setToggleTooltip(true)}
        onMouseLeave={() => setToggleTooltip(false)}
      />
      {toggleTooltip && (
        <Tooltip text="The Basal Metabolic Rate (BMR) Calculator estimates your basal metabolic rate—the amount of energy expended while at rest in a neutrally temperate environment, and in a post-absorptive state (meaning that the digestive system is inactive, which requires about 12 hours of fasting)." />
      )}
      <h2 className="app__bmr-heading">BMR & DAILY CALORIE REQUIREMENT</h2>
      <p className="app__bmr-error">{submitBMR.error}</p>
      <div className="app__bmr-calculator_container">
        <div className="app__bmr-calculator_data">
          <div className="input-container">
            <label className="app__bmr-label">Gender</label>
            <label className="app__bmr-label_radio">
              <br />
              <input
                type="radio"
                name="gender"
                id="genderM"
                value="male"
                onChange={handleBMRChange}
              />
              Male
            </label>
            <label className="app__bmr-label_radio">
              <input
                type="radio"
                name="gender"
                id="genderF"
                value="female"
                onChange={handleBMRChange}
              />
              Female
            </label>
          </div>
          <div className="input-container">
            <label htmlFor="bmr-weight" className="app__bmr-label">
              Weight (kg)
            </label>
            <br />
            <input
              type="number"
              id="bmr-weight"
              name="weight"
              value={bmr.weight}
              onChange={handleBMRChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="bmr-height" className="app__bmr-label">
              Height (cm)
            </label>
            <br />
            <input
              type="number"
              id="bmr-height"
              name="height"
              value={bmr.height}
              onChange={handleBMRChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="bmr-age" className="app__bmr-label">
              Age
            </label>
            <br />
            <input
              type="number"
              id="bmr-age"
              min="0"
              max="120"
              name="age"
              value={bmr.age}
              onChange={handleBMRChange}
            />
          </div>
        </div>
        <div className="app__bmr-workout">
          <div className="app__bmr-buttons">
            <button
              type="button"
              className="app__bmr-button"
              onClick={calculateBMR}
            >
              CALCULATE BMR
            </button>
          </div>
          <h3 className="app__bmr-resultBMR_heading">Your BMR result:</h3>
          {resultBMR}
        </div>

        <img src={images.fitnessStats} alt="" />
      </div>
    </div>
  );
};

export default BMR;
