import React from "react";
import { render } from "react-dom";
import "./index.css";

const Greeting = () => <h1>Webpack, getting started using React</h1>;

render(<Greeting />, document.getElementById("mount"));
