import React, { useState, useEffect } from "react";
import "./bmr.scss";
import images from "../constants/images";
import { GrCircleInformation } from "react-icons/gr";
import Tooltip from "./Tooltip";
const BMR = () => {
  const [toggleTooltip, setToggleTooltip] = useState(false);

  const [bmr, setBmr] = useState(() => {
    const saved = localStorage.getItem("bmr");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const [submitBMR, setSubmitBMR] = useState({
    gender: "",
    weight: "",
    age: "",
    height: "",
    activity: "",
    bmr: "",
    error: "",
  });

  const handleBMRChange = (e) => {
    const { name, value } = e.target;
    setBmr((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const calculateBMR = (e) => {
    console.log("Hello");
    setSubmitBMR({
      gender: bmr.gender,
      weight: bmr.weight,
      age: bmr.age,
      height: bmr.height,
      activity: bmr.activity,
      bmr: bmr.bmr,
      error: bmr.error,
    });
    if (
      bmr.gender === "" ||
      bmr.weight === "" ||
      bmr.age === "" ||
      bmr.height === "" ||
      bmr.activity === ""
    ) {
      console.log("Hello1");
    }
    localStorage.setItem("bmr", JSON.stringify(bmr));
  };

  const calculateCalories = (e) => {
    console.log("Hello calories");
  };

  let error;

  if (submitBMR.error) {
    error = <p className="error">{submitBMR.error}</p>;
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
      {error}
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
                value="1"
                onChange={handleBMRChange}
              />
              Male
            </label>
            <label className="app__bmr-label_radio">
              <input
                type="radio"
                name="gender"
                id="genderF"
                value="2"
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
          <div className="input-container">
            <label className="app__bmr-label app__bmr-activity">
              Activity level
            </label>
            <br />
            <select
              name="activity"
              className="app__bmr-activity"
              value={bmr.activity}
              onChange={handleBMRChange}
            >
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
            <button
              type="button"
              className="app__bmr-button"
              onClick={calculateBMR}
            >
              CALCULATE BMR
            </button>
            <button
              type="button"
              className="app__bmr-button"
              onClick={calculateCalories}
            >
              CALCULATE CALORIES
            </button>
          </div>
        </div>
        <img src={images.fitnessStats} alt="" />
      </div>
    </div>
  );
};

export default BMR;
