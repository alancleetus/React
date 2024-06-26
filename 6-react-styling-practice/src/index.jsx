//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "blue",
  fontSize: "1.75em",
};

const customStyle2 = {
  color: "blue",
  fontSize: "1.5em",
  border: "1px solid red",
};

if (customStyle.color === customStyle2.color) {
  customStyle2.color = "green";
  customStyle2.border = "1px solid green";
}

const hour = new Date().getHours() + 1; // hours between 1-24
let dynamicHeading = "";
const headingColor = {};
if (hour >= 1 && hour <= 12) {
  dynamicHeading = "Good Morning";
  headingColor.color = "yellow";
} else if (hour >= 13 && hour <= 18) {
  dynamicHeading = "Good Afternoon";
  headingColor.color = "amber";
} else if (hour > 19 && hour <= 24) {
  dynamicHeading = "Good Evening";
  headingColor.color = "blue";
}

ReactDOM.render(
  <div>
    <p style={{ color: "red", fontSize: "2em" }}>Inline style</p>
    <p style={customStyle}>custom style</p>
    <p style={customStyle2}>changed style</p>
    <h1 className="heading" style={headingColor}>
      {dynamicHeading}
    </h1>
  </div>,
  document.getElementById("root")
);
