import React from "react";
import "./bmr.scss";
import { GrCircleInformation } from "react-icons/gr";
const BMR = () => {
  return (
    <div className="app__bmr">
      <GrCircleInformation color="#000" fontSize={16} />
      <h2 className="app__bmr-heading">BMR & DAILY CALORIE REQUIREMENT</h2>
      <div className="app__bmr-calculator_container">
        <div className="app__bmr-calculator__data">
          <div className="input-container">
            <label className="app__bmr-label">Gender</label>
            <label className="app__bmr-label_radio">
              <br />
              <input type="radio" name="gender" id="genderM" value="1" />
              Male
            </label>
            <label className="app__bmr-label_radio">
              <input type="radio" name="gender" id="genderF" value="2" />
              Female
            </label>
          </div>
          <div className="input-container">
            <label htmlFor="bmr-weight" className="app__bmr-label">
              Weight in kg
            </label>
            <br />
            <input type="number" id="bmr-weight" />
          </div>
          <div className="input-container">
            <label htmlFor="bmr-height" className="app__bmr-label">
              Height in cm
            </label>
            <br />
            <input type="number" id="bmr-height" />
          </div>
          <div className="input-container">
            <label htmlFor="bmr-age" className="app__bmr-label">
              Age
            </label>
            <br />
            <input type="number" id="bmr-age" />
          </div>
        </div>
        <div className="app__bmr-workout">
          <div className="input-container">
            <label className="app__bmr-label">Activity level</label>
            <br />
            <select name="activity" className="app__bmr-activity">
              <option value="">How active are you?</option>
              <option value="1.2">Sedentary: little or no exercise</option>
              <option value="1.375">Exercise 1-3 times/week</option>
              <option value="1.55">Exercise 4-5 times/week</option>
              <option value="1.725">
                Daily exercise or intense exercise 3-4 times/week
              </option>
              <option value="1.9">Intense exercise 6-7 times/week</option>
            </select>
          </div>
          <div className="app__bmr-buttons">
            <button type="button" className="app__bmr-button">
              CALCULATE BMR
            </button>
            <button type="button" className="app__bmr-button">
              CALCULATE CALORIES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMR;
