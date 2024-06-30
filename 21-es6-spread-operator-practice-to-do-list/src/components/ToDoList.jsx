import React from "react";

import ToDoItem from "./ToDoItem";
function ToDoList(props) {
  return (
    <div>
      <ul>
        {props.itemList &&
          props.itemList.map((item, index) => (
            <ToDoItem
              key={item.id}
              index={index}
              deleteItem={props.deleteItem}
              item={item.item}
            />
          ))}
      </ul>
    </div>
  );
}

export default ToDoList;
