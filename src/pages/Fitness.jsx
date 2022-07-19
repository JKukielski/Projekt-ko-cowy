import React, { useState } from "react";
import BMI from "../components/BMI";
import BMR from "../components/BMR";
import FitnessHeader from "../components/FitnessHeader";
import Measurements from "../components/Measurements";
import Results from "../components/Results";
import "./fitness.scss";

const Fitness = ({ handleChange, form, submitForm, handleSubmit }) => {
  return (
    <>
      <FitnessHeader />
      <div className="app__fitness">
        <Measurements
          handleChange={handleChange}
          form={form}
          submitForm={submitForm}
          handleSubmit={handleSubmit}
        />
        <BMR />
        <BMI />
        <Results />
      </div>
    </>
  );
};

export default Fitness;
