import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Header from "./containers/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Header />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
