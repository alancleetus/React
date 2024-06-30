import React from "react";

function App() {
  /* this is too many variables so use objects*/
  // let [fName, setFName] = React.useState("");
  // let [lName, setLName] = React.useState("");
  // const changeFName = (e) => setFName(e.target.value);
  // const changeLName = (e) => setLName(e.target.value);

  let [fullName, setName] = React.useState({ fName: "", lName: "" });
  const changeName = (e) => {
    /*
     * use desructuring for the event **object**
     ! never try to use these "synthetic" events inside setState function because these events do not persist
     */
    const { value, name: targetName } = e.target;

    targetName === "fName"
      ? setName({ fName: value, lName: fullName.lName })
      : setName((prevValue) => ({
          fName: prevValue.fName,
          lName: value,
        }));
  };
  /* ^ This is a better way to get the previous value
   * Advantages of using a callback function:
   * Handles asynchronous updates: React state updates can be asynchronous.
   *    Using the callback function ensures that you are working with the most recent state.
   * Avoids potential bugs: If multiple state updates are triggered simultaneously, directly setting the state might lead to unexpected results.
   *    The callback function avoids this by ensuring each update is based on the latest state.
   */
  return (
    <div className="container">
      <h1>
        Hello {fullName.fName}
        {" " + fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={changeName}
          value={fullName.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={changeName}
          value={fullName.lName}
        />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
