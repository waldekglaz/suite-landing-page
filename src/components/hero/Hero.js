import React from "react";
import Button from "../button/Button";
import heroImage from "../../assets/image-hero-landscape.png";
import heroImageTablet from "../../assets/image-hero-portrait.png";
import heroImagePc from "../../assets/image-hero-portrait@2x.png";
import patternLine1 from "../../assets/pattern-curved-line-1.svg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero padding-container">
      <div className="hero__text-container">
        <img
          className="hero__pattern"
          src={patternLine1}
          alt="decorative pattern"
        />
        <h1 className="hero__title">
          A <span className="text--bold">super solution</span> for your{" "}
          <span className="text--bold">business.</span>
        </h1>
        <p className="hero__text">
          Our marketing and sales automations help you scale your outreach to
          get more leads for your company.
        </p>
        <Button classes="btn btn--dark btn--large" />
      </div>

      <picture>
        <source srcset={heroImagePc} media="(min-width: 1440px)"></source>
        <source srcset={heroImageTablet} media="(min-width: 768px)"></source>

        <img className="hero__img" src={heroImage} alt="suit graphic" />
      </picture>
    </div>
  );
};

export default Hero;
