import React from "react";
import jeremySmall from "../../assets/image-jeremy-small.png";
import jeremyLarge from "../../assets/image-jeremy-large.png";
import statementPattern from "../../assets/pattern-curved-line-2.svg";
import "./Statement.css";
const Statement = () => {
  return (
    <section className="statement">
      <picture>
        <source srcset={jeremyLarge} media="(min-width: 768px)"></source>

        <img className="statement__img" src={jeremySmall} alt="suit graphic" />
      </picture>
      <img
        className="statement__pattern"
        src={statementPattern}
        alt="decorative pattern"
      />
      <h2 className="statement__title">
        It just <span className="text--bold">works.</span>
      </h2>
      <figure className="figure padding-container">
        <blockquote className="statement__text">
          “I really like how it is an all-in-one solution that handle many of
          the tasks that you would normally need separate tools to do the same
          job. This thing is a miracle worker.”
        </blockquote>
        <figcaption className="statement__author">
          JEREMY ROBINSON <cite>CMO, FYLO</cite>
        </figcaption>
      </figure>
    </section>
  );
};

export default Statement;
