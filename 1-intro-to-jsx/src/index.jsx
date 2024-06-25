import React from "react";
import { render } from "react-dom";

// ReactDom.render(WHAT TO SHOW, WHERE TO SHOW IT)
const root = document.getElementById("root");
render(<h1>Hello World</h1>, root);

/* 
    ! NOTE: render is deprecated as of React-dom v18 
*/
