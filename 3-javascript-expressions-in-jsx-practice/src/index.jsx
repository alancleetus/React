//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

import React from "react";
import { render } from "react-dom";

const fName = "alan";
const lName = "c";
const year = new Date().getFullYear();
const number = 7;
const randNum = Math.floor(Math.random() * 6 + 1);
// ReactDom.render(WHAT TO SHOW, WHERE TO SHOW IT)
const root = document.getElementById("root");
render(
  <div>
    <p>Created by {fName + " " + lName} .</p>
    <p>
      Name in reverse: {lName} {fName} .
    </p>
    <p>Again name in reverse using template literal: {`${lName}  ${fName}`}.</p>
    <p>
      Lucky number: {number} and here is a random number: {randNum}.
    </p>

    <p>
      Random number between 0 and {number}:{" "}
      {Math.floor(Math.random() * number + 1)}.
    </p>
    <p>Copyright {year}</p>
  </div>,
  root
);

/* 
    ! NOTE: render is deprecated as of React-dom v18 
*/
