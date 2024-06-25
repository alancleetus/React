// Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

import React from "react";
import { render } from "react-dom";

// ReactDom.render(WHAT TO SHOW, WHERE TO SHOW IT)
const root = document.getElementById("root");
render(
  <div>
    <h1>List of foods</h1>
    <ul>
      <li>Apple</li>
      <li>Pear</li>
      <li>Peach</li>
    </ul>
  </div>,
  root
);

/* 
    ! NOTE: render is deprecated as of React-dom v18 
*/
