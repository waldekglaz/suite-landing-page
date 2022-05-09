import React from "react";
import Counter from "./Counter";
import Statement from "./Statement";
import "./Main.css";

const Main = () => {
  return (
    <main className="main">
      <div className="counters padding-container">
        <Counter number="2K+" description="companies" />
        <Counter number="8" description="languages" />
        <Counter number="1.2M" description="leads" />
      </div>
      <Statement />
    </main>
  );
};

export default Main;
