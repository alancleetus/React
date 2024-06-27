import React from "react";
import ReactDOM from "react-dom";
import PI, { doublePI } from "./math"; // you can call the default import whatever you want: pi, PI, x,PI_Value, etc
import { triplePI, quadruplePI } from "./math"; // but the exported function's name must match exactly

// babel converts above es6 import export syntax to require syntax
// ex: var pi = require("math");

// you can also do this
import * as pi from "./math";

ReactDOM.render(
  <div>
    <p>Value of pi: {PI}</p>
    <p>Value of pi*2: {doublePI()}</p>
    <p>Value of pi*3: {triplePI()}</p>
    <p>Value of pi*3: {quadruplePI()}</p>

    <ul>
      <li>{pi.default}</li>
      <li>{pi.doublePI()}</li>
      <li>{pi.triplePI()}</li>
      <li>{pi.quadruplePI()}</li>
    </ul>
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
