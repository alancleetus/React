import React, { useState } from "react";

// you can only use states inside of a function
function App() {
  // let state = useState(0);
  // this useState return an array of [number starting at 0, function]
  // console.log(state);

  // function reset() {
  //   return state[1](0);
  // }
  // function increase() {
  //   return state[1](state[0]++);
  // the function returned by useState can be used to set the value for the state
  // }

  let [count, setCount] = useState(0);
  console.log(count);

  function increase() {
    console.log("increase");
    setCount(++count);
  }
  const decrease = () => setCount(--count);

  return (
    <div className="container">
      {/* <h1>{state[0]}</h1>
      <button onClick={increase}>+</button>
      <button onClick={reset}>X</button> */}
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
