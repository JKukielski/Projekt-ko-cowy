import React, { useState } from "react";
import "./measurements.scss";
import images from "../constants/images";
import { GrCircleInformation } from "react-icons/gr";
import Tooltip from "./Tooltip";

const Measurements = () => {
  const [toggleTooltip, setToggleTooltip] = useState(false);
  const [submittedForm, setSubmittedForm] = useState({
    weight: null,
    height: null,
    shoulder: null,
    chest: null,
    abdominals: null,
    hips: null,
    thigh: null,
    calf: null,
  });

  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [shoulder, setShoulder] = useState();
  const [chest, setChest] = useState();
  const [abdominals, setAbdominals] = useState();
  const [hips, setHips] = useState();
  const [thigh, setThigh] = useState();
  const [calf, setCalf] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedForm({
      weight: weight,
      height: height,
      shoulder: shoulder,
      chest: chest,
      abdominals: abdominals,
      hips: hips,
      thigh: thigh,
      calf: calf,
    });
  };

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
            value={weight}
            name="weight"
            onChange={(e) => setWeight(e.target.value)}
          />
          <br />
          <label htmlFor="height">Height (cm)</label>
          <br />
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <br />
          <label htmlFor="shoulder">Shoulders</label>
          <br />
          <input
            type="number"
            id="shoulder"
            value={shoulder}
            onChange={(e) => setShoulder(e.target.value)}
          />
          <br />
          <label htmlFor="chest">Chest</label>
          <br />
          <input
            type="number"
            id="chest"
            value={chest}
            onChange={(e) => setChest(e.target.value)}
          />
          <br />
          <label htmlFor="abdominal">Abdominals</label>
          <br />
          <input
            type="number"
            id="abdominal"
            value={abdominals}
            onChange={(e) => setAbdominals(e.target.value)}
          />
          <br />
          <label htmlFor="hips">Hips</label>
          <br />
          <input
            type="number"
            id="hips"
            value={hips}
            onChange={(e) => setHips(e.target.value)}
          />
          <br />
          <label htmlFor="thigh">Thighs</label>
          <br />
          <input
            type="number"
            id="thigh"
            value={thigh}
            onChange={(e) => setThigh(e.target.value)}
          />
          <br />
          <label htmlFor="calf">Calves</label>
          <br />
          <input
            type="number"
            id="calf"
            value={calf}
            onChange={(e) => setCalf(e.target.value)}
          />
          <button type="submit" className="app__measurements-btn">
            SAVE RESULTS
          </button>
        </form>
      </div>
      <img src={images.success} alt="" />
    </div>
  );
};

export default Measurements;
