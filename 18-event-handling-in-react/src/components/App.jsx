import React from "react";

function App() {
  let [bgColor, setBgColor] = React.useState("white");

  let [name, setName] = React.useState("");
  let [headingText, setHeadingText] = React.useState("");

  const handleMouseEnter = () => {
    setBgColor("black");
  };
  const handleMouseLeave = () => {
    setBgColor("white");
  };
  const handleOnSubmit = (event) => {
    setHeadingText(name);
    event.preventDefault(); //stops the page from refreshing
  };

  const handleOnChange = (event) => {
    setName(event.target.value);
  };
  {
    /** set value={name} to follow single source of truth principle
     * https://react.dev/learn/sharing-state-between-components#a-single-source-of-truth-for-each-state */
  }
  return (
    <div className="container">
      {headingText.length > 0 ? <h1>Hello, {headingText}!</h1> : <h1>Hello</h1>}
      <form onSubmit={handleOnSubmit}>
        <input
          id="name-input"
          onChange={handleOnChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ background: bgColor }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
