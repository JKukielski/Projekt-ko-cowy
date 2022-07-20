import React from "react";
import BMI from "../components/BMI";
import BMR from "../components/BMR";
import FitnessHeader from "../components/FitnessHeader";
import Measurements from "../components/Measurements";
import Results from "../components/Results";
import "./fitness.scss";

const Fitness = ({
  handleChange,
  form,
  submitForm,
  handleSubmit,
  handleReset,
  // handleBMRChange,
  // calculateBMR,
  // calculateCalories,
}) => {
  // const [login, setLogin] = useState(true);

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   setLogin(false);
  // };
  return (
    <>
      <FitnessHeader />

      <div className="app__fitness">
        <Measurements
          handleChange={handleChange}
          form={form}
          submitForm={submitForm}
          handleSubmit={handleSubmit}
          handleReset={handleReset}
          // handleBMRChange={handleBMRChange}
          // calculateBMR={calculateBMR}
          // calculateCalories={calculateCalories}
        />
        <BMR />
        <BMI />
        <Results />
      </div>
    </>
  );
};

export default Fitness;
