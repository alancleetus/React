import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";
ReactDOM.render(
  <div>
    <h1 className="red-text">My Favourite Foods</h1>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
    <img src={img} alt="random image" />
    <p contentEditable spellCheck="false">
      clickme:thistextwontbespellchecked
    </p>
    <p contentEditable>clickme:thistextWILLbespellchecked</p>
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
