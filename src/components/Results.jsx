import React from "react";
import "./results.scss";
import { GrCircleInformation } from "react-icons/gr";
import ResultsRow from "./ResultsRow";

const Results = () => {
  return (
    <div className="app__results">
      <GrCircleInformation color="#000" fontSize={16} />
      <h2 className="app__results-heading">WORKOUT TRACKER</h2>
      <div className="app__results-container">
        <div className="app__results-table_headings">
          <div className="app__results-table_workout">Workout</div>
          <div className="app__results-table_sets">Sets</div>
          <div className="app__results-table_reps">Reps</div>
          <div className="app__results-table_weight">Weight</div>
          <div className="app__results-table_btn"></div>
        </div>
        <div className="app__results-row_scroll-container">
          <ResultsRow />
          <ResultsRow />
          <ResultsRow />
          <ResultsRow />
          <ResultsRow />
          <ResultsRow />
        </div>
      </div>
      <button className="app__results-add_btn">Add workout</button>
    </div>
  );
};

export default Results;
