import React from "react";
import "./resultsRow.scss";

const ResultsRow = () => {
  return (
    <div className="app__results-row_container">
      <div className="app__results-row_workout">
        <div className="app__results-row_input-container">
          <select name="" id="">
            <optgroup label="Chest & Triceps">
              <option value="">Bench press</option>
              <option value="">Incline bench press</option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </optgroup>
            <optgroup label="Back & Biceps">
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </optgroup>
            <optgroup label="Shoulders">
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </optgroup>
            <optgroup label="Legs">
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </optgroup>
            <optgroup label="Abdominals">
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </optgroup>
          </select>
        </div>
      </div>
      <div className="app__results-row_sets">
        <div className="app__results-row_input-container">
          <input type="number" />
        </div>
      </div>
      <div className="app__results-row_reps">
        <div className="app__results-row_input-container">
          <input type="number" />
        </div>
      </div>
      <div className="app__results-row_weight">
        <div className="app__results-row_input-container">
          <input type="number" />
        </div>
      </div>
      <button className="app__results-row_btn" type="button">
        Save Workout
      </button>
    </div>
  );
};

export default ResultsRow;
