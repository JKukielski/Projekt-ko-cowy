import React, { useState, useEffect } from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Fitness from "./pages/Fitness";
import UserPage from "./pages/UserPage";

function App() {
  const [form, setForm] = useState(() => {
    const saved = localStorage.getItem("form");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const [submitForm, setSubmitForm] = useState({
    weight: 0,
    height: 0,
    shoulder: 0,
    chest: 0,
    abdominal: 0,
    hips: 0,
    thigh: 0,
    calf: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitForm({
      weight: form.weight,
      height: form.height,
      shoulder: form.shoulder,
      chest: form.chest,
      abdominal: form.abdominal,
      hips: form.hips,
      thigh: form.thigh,
      calf: form.calf,
    });
    localStorage.setItem("form", JSON.stringify(form));
  };

  const handleReset = (e) => {
    e.preventDefault();
    setForm({
      weight: 0,
      height: 0,
      shoulder: 0,
      chest: 0,
      abdominal: 0,
      hips: 0,
      thigh: 0,
      calf: 0,
    });
  };

  const [bmr, setBmr] = useState(() => {
    const savedBMR = localStorage.getItem("bmr");
    const initialValueBMR = JSON.parse(savedBMR);
    return initialValueBMR || "";
  });

  const [submitBMR, setSubmitBMR] = useState({
    gender: "",
    weight: "",
    age: "",
    height: "",
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

  const calculateBMR = () => {
    setSubmitBMR({
      gender: bmr.gender,
      weight: bmr.weight,
      age: bmr.age,
      height: bmr.height,
      calories: "",
      bmr: "",
      error: "",
    });

    if (
      bmr.gender === "" ||
      bmr.weight === "" ||
      bmr.age === "" ||
      bmr.height === "" ||
      bmr.activity === ""
    ) {
      setSubmitBMR({
        error: "Please fill in all required fields",
      });
    } else {
      let bmrCalc = "";
      if (bmr.gender === "male") {
        bmrCalc = (
          88.362 +
          13.397 * bmr.weight +
          4.799 * bmr.height -
          5.677 * bmr.age
        ).toFixed(2);
      } else if (bmr.gender === "female") {
        bmrCalc = (
          447.593 +
          9.247 * bmr.weight +
          3.098 * bmr.height -
          4.33 * bmr.age
        ).toFixed(2);
      }

      setSubmitBMR({
        bmr: bmrCalc,
      });
      localStorage.setItem("bmrResult", JSON.stringify(submitBMR.bmr));
    }

    localStorage.setItem("bmr", JSON.stringify(bmr));
  };

  const [bmi, setBmi] = useState(() => {
    const saved = localStorage.getItem("bmi");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const [submitBMI, setSubmitBMI] = useState({
    weight: "",
    height: "",
    error: "",
  });

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
    setSubmitBMI({
      weight: bmi.weight,
      height: bmi.height,
      error: "",
      bmi: "",
    });
    if (submitBMI.weight === "" || submitBMI.height === "") {
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
      localStorage.setItem("bmiResult", JSON.stringify(submitBMI.bmi));
    }
  };
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/fitness"
            element={
              <Fitness
                handleChange={handleChange}
                form={form}
                submitForm={submitForm}
                handleSubmit={handleSubmit}
                handleReset={handleReset}
                handleBMRChange={handleBMRChange}
                calculateBMR={calculateBMR}
                bmr={bmr}
                submitBMR={submitBMR}
                bmi={bmi}
                submitBMI={submitBMI}
                handleBMIChange={handleBMIChange}
                handleBMISubmit={handleBMISubmit}
              />
            }
          />
          <Route
            exact
            path="/user"
            element={
              <UserPage
                handleChange={handleChange}
                form={form}
                submitForm={submitForm}
                handleSubmit={handleSubmit}
                handleBMRChange={handleBMRChange}
                calculateBMR={calculateBMR}
                bmr={bmr}
                submitBMR={submitBMR}
                bmi={bmi}
                submitBMI={submitBMI}
                handleBMIChange={handleBMIChange}
                handleBMISubmit={handleBMISubmit}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
