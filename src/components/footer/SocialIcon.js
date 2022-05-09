import React from "react";

const SocialIcon = (props) => {
  return (
    <a href={props.href} className="social" target="_blank" rel="noreferrer">
      <img src={props.src} alt="icon" />
    </a>
  );
};

export default SocialIcon;
