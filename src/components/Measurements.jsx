import React, { useState, useEffect } from "react";
import "./measurements.scss";
import images from "../constants/images";
import { GrCircleInformation } from "react-icons/gr";
import Tooltip from "./Tooltip";

const Measurements = ({ handleChange, form, handleSubmit, handleReset }) => {
  const [toggleTooltip, setToggleTooltip] = useState(false);

  return (
    <div className="app__measurements">
      <GrCircleInformation
        fontSize={16}
        onMouseEnter={() => setToggleTooltip(true)}
        onMouseLeave={() => setToggleTooltip(false)}
      />
      {toggleTooltip && (
        <Tooltip text="All measurements should be carried out while muscles are relaxes and be done in the exact same areas of the body every time. The time of day when the measurements are carried out should also be consistent" />
      )}
      <h2 className="app__measurements-heading">MEASUREMENTS</h2>
      <div className="app__measurements-data">
        <form className="app__measurements-form" onSubmit={handleSubmit}>
          <label htmlFor="weight">Weight (kg)</label>
          <br />
          <input
            type="number"
            id="weight"
            name="weight"
            value={form.weight}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="height">Height (cm)</label>
          <br />
          <input
            type="number"
            id="height"
            name="height"
            value={form.height}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="shoulder">Shoulders</label>
          <br />
          <input
            type="number"
            id="shoulder"
            name="shoulder"
            value={form.shoulder}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="chest">Chest</label>
          <br />
          <input
            type="number"
            id="chest"
            name="chest"
            value={form.chest}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="abdominal">Abdominals</label>
          <br />
          <input
            type="number"
            id="abdominal"
            name="abdominal"
            value={form.abdominal}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="hips">Hips</label>
          <br />
          <input
            type="number"
            id="hips"
            name="hips"
            value={form.hips}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="thigh">Thighs</label>
          <br />
          <input
            type="number"
            id="thigh"
            name="thigh"
            value={form.thigh}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="calf">Calves</label>
          <br />
          <input
            type="number"
            id="calf"
            name="calf"
            value={form.calf}
            onChange={handleChange}
          />
          <button type="submit" className="app__measurements-btn">
            SAVE RESULTS
          </button>
          <button
            type="button"
            className="app__measurements-btn"
            onClick={handleReset}
          >
            RESET
          </button>
        </form>
      </div>
      <img src={images.success} alt="" />
    </div>
  );
};

export default Measurements;
