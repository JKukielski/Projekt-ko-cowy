import React from "react";
import "./tooltip.scss";

const Tooltip = ({ text }) => {
  return (
    <div className="app__tooltip">
      <p>{text}</p>
    </div>
  );
};

export default Tooltip;
