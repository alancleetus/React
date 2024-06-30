import React from "react";
import ListItem from "./ListItem";

let nextId = 0;
function App() {
  const [inputValue, setInputValue] = React.useState("");
  const [itemList, setList] = React.useState([]);

  const changeInput = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const addToList = () => {
    if (inputValue.length > 0) {
      setList((prevValue) => [
        ...prevValue,
        { id: nextId++, item: inputValue },
      ]);
      setInputValue("");
    }
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={changeInput} value={inputValue} />
        <button onClick={addToList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemList.map((item) => (
            <ListItem key={item.id} item={item.item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

//CHALLENGE: Make this app work by applying what you've learnt.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s
