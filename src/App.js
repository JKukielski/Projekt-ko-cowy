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
                // handleBMRChange={handleBMRChange}
                // calculateBMR={calculateBMR}
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
                // handleBMRChange={handleBMRChange}
                // calculateBMR={calculateBMR}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
