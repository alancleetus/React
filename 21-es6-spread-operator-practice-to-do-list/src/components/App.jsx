import React from "react";
import ToDoForm from "./TodoForm";
import ToDoList from "./ToDoList";

let nextId = 0;
function App() {
  const [itemList, setList] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");

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

  const deleteItem = (index) => {
    setList((prevValue) => {
      return prevValue.filter((item, i) => {
        return index !== i;
      });
    });
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <ToDoForm
        addToList={addToList}
        inputValue={inputValue}
        changeInput={changeInput}
      />
      <ToDoList itemList={itemList} deleteItem={deleteItem} />
    </div>
  );
}

export default App;

//CHALLENGE: Make this app work by applying what you've learnt.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s
