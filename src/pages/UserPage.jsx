import React from "react";
import FitnessHeader from "../components/FitnessHeader";

import "./userPage.scss";
const UserPage = () => {
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
