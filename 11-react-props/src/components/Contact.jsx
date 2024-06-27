import React from "react";
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
        <h2>Name: {props.name}</h2>
        <img src={props.imgUrl} alt="avatar_img" />
        <p>Phone: {props.phone}</p>
        <p>Email: {props.email}</p>
      </div>
    </div>
  );
}

export default Contact;
