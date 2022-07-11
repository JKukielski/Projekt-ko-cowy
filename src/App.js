import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Fitness from "./pages/Fitness";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/fitness" element={<Fitness />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
