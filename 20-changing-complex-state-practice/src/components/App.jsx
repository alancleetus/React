import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === "fName") {
      setContact((prevValue) => ({
        fName: value,
        lName: prevValue.lName,
        email: prevValue.email,
      }));
    } else if (name === "lName") {
      setContact((prevValue) => ({
        fName: prevValue.fName,
        lName: value,
        email: prevValue.email,
      }));
    } else if (name === "email") {
      setContact((prevValue) => ({
        fName: prevValue.fName,
        lName: prevValue.lName,
        email: value,
      }));
    }
  };

  /* you can use the spread operator to make this shorter */
  const handleChange2 = (e) => {
    const { value, name } = e.target;
    setContact((prevValue) => ({ ...prevValue, [name]: value })); // create a one item arr name variable is use not the the string "name"
  };

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleChange}
          value={contact.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleChange}
          value={contact.lName}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
