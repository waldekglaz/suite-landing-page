import React from "react";
import "./Counter.css";

const Counter = (props) => {
  return (
    <div className="counter">
      <div className="counter__number">{props.number}</div>
      <div className="counter__desc">{props.description}</div>
    </div>
  );
};

export default Counter;
