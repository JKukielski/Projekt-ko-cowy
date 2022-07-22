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
  handleBMRChange,
  calculateBMR,
  bmr,
  submitBMR,
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
        />
        <BMR
          handleBMRChange={handleBMRChange}
          calculateBMR={calculateBMR}
          bmr={bmr}
          submitBMR={submitBMR}
        />
        <BMI />
        <Results />
      </div>
    </>
  );
};

export default Fitness;
