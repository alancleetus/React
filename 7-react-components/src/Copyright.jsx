import React from "react";

let Footer = () => {
  const year = new Date().getFullYear();
  return <p>Copyright {year}</p>;
};

export default Footer;
