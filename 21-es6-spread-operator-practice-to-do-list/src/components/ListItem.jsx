import React from "react";

const ListItem = (props) => {
  const [style, setStyle] = React.useState({
    textDecoration: "none",
    color: "black",
  });

  const handleClick = () => {
    return style.textDecoration === "none"
      ? setStyle({ textDecoration: "line-through", color: "gray" })
      : setStyle({ textDecoration: "none", color: "black" });
  };

  return (
    <li onClick={handleClick} style={style}>
      {props.item}
    </li>
  );
};

export default ListItem;
