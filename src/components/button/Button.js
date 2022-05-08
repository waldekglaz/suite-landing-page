import React from "react";
import "./Button.css";
const Button = (props) => {
  return (
    <a href="/" className={props.classes}>
      Request Beta Access
    </a>
  );
};

export default Button;
