import React, { useEffect } from "react";
import FitnessHeader from "../components/FitnessHeader";

import "./userPage.scss";
const UserPage = ({ handleChange, form, submitForm, handleSubmit }) => {
  return (
    <>
      <FitnessHeader />
      <div className="app__user">
        <div className="app__user-container">
          <h1 className="app__user-heading">YOUR PROGRESS</h1>
          <div className="app__user-content">
            <div className="app__user-measurements-container">
              <div className="app__user-section app__user-measurements">
                <h2 className="app__user-subheading">LAST MEASUREMENTS</h2>
                <p>{form.weight}</p>
                <p>{form.height}</p>
                <p>{form.shoulder}</p>
                <p>{form.chest}</p>
                <p>{form.abdominal}</p>
                <p>{form.chest}</p>
                <p>{form.hips}</p>
                <p>{form.thigh}</p>
                <p>{form.calf}</p>
              </div>
              <div className="app__user-section app__user-bmr">
                <h2 className="app__user-subheading">BMR RATINGS</h2>
              </div>
              <div className="app__user-section app__user-bmi">
                <h2 className="app__user-subheading">BMI RATINGS</h2>
              </div>
            </div>
            <div className="app__user-results">
              <h2 className="app__user-subheading">PREVIOUS WORKOUT RESULTS</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPage;
