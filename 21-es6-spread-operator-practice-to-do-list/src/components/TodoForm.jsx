import React from "react";

function ToDoForm(props) {
  return (
    <div className="form">
      <input
        type="text"
        onChange={props.changeInput}
        value={props.inputValue}
      />
      <button onClick={props.addToList}>
        <span>Add</span>
      </button>
    </div>
  );
}
export default ToDoForm;
