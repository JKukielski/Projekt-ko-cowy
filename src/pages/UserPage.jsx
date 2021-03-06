import React from "react";
import FitnessHeader from "../components/FitnessHeader";

import "./userPage.scss";
const UserPage = ({ form, bmr, submitBMR, submitBMI, bmi }) => {
  return (
    <>
      <FitnessHeader />
      <div className="app__user">
        <div className="app__user-container">
          <h1 className="app__user-heading">YOUR PROGRESS</h1>
          <div className="app__user-content">
            <div className="app__user-measurements-container">
              <div className="app__user-section">
                <h2 className="app__user-subheading">LAST MEASUREMENTS</h2>
                <div className="app__user-measurements">
                  <div className="app__user-measurements_single">
                    <h3 className="app__user-measurements_single-heading">
                      Weight:
                    </h3>
                    <p>{form.weight}cm</p>
                  </div>
                  <div className="app__user-measurements_single">
                    <h3 className="app__user-measurements_single-heading">
                      Height:
                    </h3>
                    <p>{form.height}cm</p>
                  </div>
                  <div className="app__user-measurements_single">
                    <h3 className="app__user-measurements_single-heading">
                      Shoulder:
                    </h3>
                    <p>{form.shoulder}cm</p>
                  </div>
                  <div className="app__user-measurements_single">
                    <h3 className="app__user-measurements_single-heading">
                      Chest:
                    </h3>
                    <p>{form.chest}cm</p>
                  </div>
                  <div className="app__user-measurements_single">
                    <h3 className="app__user-measurements_single-heading">
                      Abdominal:
                    </h3>
                    <p>{form.abdominal}cm</p>
                  </div>
                  <div className="app__user-measurements_single">
                    <h3 className="app__user-measurements_single-heading">
                      Hips:
                    </h3>
                    <p>{form.hips}cm</p>
                  </div>
                  <div className="app__user-measurements_single">
                    <h3 className="app__user-measurements_single-heading">
                      Thigh:
                    </h3>
                    <p>{form.thigh}cm</p>
                  </div>
                  <div className="app__user-measurements_single">
                    <h3 className="app__user-measurements_single-heading">
                      Calf:
                    </h3>
                    <p>{form.calf}cm</p>
                  </div>
                </div>
              </div>
              <div className="app__user-section app__user-bmr">
                <h2 className="app__user-subheading">LATEST BMR</h2>
                <div className="app__user-bmr_content">
                  <h3 className="app__user-bmr_heading">
                    YOUR LAST BMR RESULT
                  </h3>
                  <p className="app__user-bmr_result">{submitBMR.bmr}</p>
                  <h3 className="app__user-bmr_heading">FOR ENTERED DATA:</h3>
                  <p>Weight: {bmr.weight}kg</p>
                  <p>Height: {bmr.height}kg</p>
                  <p>Age: {bmr.age}kg</p>
                </div>
              </div>
              <div className="app__user-section app__user-bmi">
                <h2 className="app__user-subheading">LATEST BMI</h2>
                <div className="app__user-bmi_content">
                  <h3 className="app__user-bmi_heading">
                    YOUR LAST BMI RESULT
                  </h3>
                  <p className="app__user-bmi_result">{submitBMI.bmi}</p>
                  <h3 className="app__user-bmi_heading">FOR ENTERED DATA:</h3>
                  <p>Weight: {bmi.weight}kg</p>
                  <p>Height: {bmr.height}kg</p>
                </div>
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
