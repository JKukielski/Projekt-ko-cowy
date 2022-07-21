import React, { useState } from "react";
import "./bmi.scss";
import { GrCircleInformation } from "react-icons/gr";
import images from "../constants/images";
import Tooltip from "./Tooltip";
import { FaNimblr } from "react-icons/fa";
const BMI = () => {
  const [toggleTooltip, setToggleTooltip] = useState(false);

  const [bmi, setBmi] = useState(() => {
    const saved = localStorage.getItem("bmi");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const [submitBMI, setSubmitBMI] = useState({ weight: 0, height: 0 });

  const handleBMIChange = (e) => {
    const { name, value } = e.target;
    setBmi((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleBMISubmit = (e) => {
    e.preventDefault();
    console.log("Hello");
    setSubmitBMI({
      weight: bmi.weight,
      height: bmi.height,
      error: "",
      bmi: "",
    });
    if (bmi.weight === "" || bmi.height === "") {
      setSubmitBMI({
        error: "Please enter weight and height",
      });
    } else {
      let bmiCalc = (bmi.weight / ((bmi.height * bmi.height) / 10000)).toFixed(
        1
      );
      setSubmitBMI({
        bmi: bmiCalc,
      });
    }
  };

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
              onChange={handleBMIChange}
            />
          </div>
          <button type="submit" className="app__bmi-btn">
            CALCULATE BMI
          </button>
        </form>
        {resultBMI}
      </div>
      <img src={images.performance} alt="" />
    </div>
  );
};

export default BMI;
