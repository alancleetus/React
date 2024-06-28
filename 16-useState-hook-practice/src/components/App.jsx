import React, { useState } from "react";

function App() {
  let [currTime, setTime] = useState(0);

  function getTime() {
    let time = new Date().toLocaleTimeString();
    setTime(time);
  }

  const clickedButton = () => {
    console.log("clicked");
    return setInterval(getTime, 1000);
  };
  return (
    <div className="container">
      {currTime === 0 ? <h1>TIME</h1> : <h1>{currTime}</h1>}
      <button onClick={clickedButton}>Get Time</button>
    </div>
  );
}

export default App;

//Challenge:
//1. Given that you can get the current time using:
//Show the latest time in the <h1> when the Get Time button
//is pressed.

//2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?

//e.g. uncomment the code below to see Hey printed every second.
// function sayHi() {
//   console.log("Hey");
// }
// setInterval(sayHi, 1000);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
