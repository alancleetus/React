import React from "react";
import Avatar from "./Avatar";
function Contact(
  props = {
    name: "N/A",
    imgUrl: "N/A",
    phone: "N/A",
    email: "N/A",
  }
) {
  return (
    <div className="card">
      <div className="card-content">
        <Avatar imgUrl={props.imgUrl} />
        <h2>Name: {props.name}</h2>
        <p>Phone: {props.phone}</p>
        <p>Email: {props.email}</p>
      </div>
    </div>
  );
}

export default Contact;
