import React from "react";
import "./results.scss";
import { GrCircleInformation } from "react-icons/gr";
import images from "../constants/images";

const Results = () => {
  return (
    <div className="app__results">
      <GrCircleInformation color="#000" fontSize={16} />
      <h2 className="app__results-heading">WORKOUT TRACKER</h2>
      <div className="app__results-container">
        <table className="app__results-table">
          <thead>
            <th>Workout</th>
            <th>Sets</th>
            <th>Reps</th>
            <th>Weight(kg)</th>
          </thead>
          <tbody>
            <tr>
              <td>
                <select className="app__results-workout">
                  <optgroup label="Chest & Triceps">
                    <option value="">Bench press</option>
                  </optgroup>
                  <optgroup label="Back & Biceps">
                    <option value="">Seated row</option>
                  </optgroup>
                  <optgroup label="Legs">
                    <option value="">Squat</option>
                  </optgroup>
                  <optgroup label="Abdominals">
                    <option value="">Sit ups</option>
                  </optgroup>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <img src={images.fitnessStats} alt="" />
    </div>
  );
};

export default Results;
