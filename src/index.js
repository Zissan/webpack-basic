import React from "react";
import { render } from "react-dom";
import "./index.css";

const Greeting = () => {
  return (
    <div>
      <h1>Webpack, getting started using React</h1>
      <div className="image"></div>
    </div>
  );
};

render(<Greeting />, document.getElementById("mount"));
