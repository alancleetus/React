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

ReactDOM.render(
  <div>
    <p style={{ color: "red", fontSize: "2em" }}>Inline style</p>
    <p style={customStyle}>custom style</p>
    <p style={customStyle2}>changed style</p>
    <p></p>
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
