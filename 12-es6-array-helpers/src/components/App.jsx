import React from "react";
import Contact from "./Contact";
import persons from "./PersonsList";

function createContact(contact) {
  /*
   * react will throw an error if there is no key. EX:
   * Warning: Each child in a list should have a unique "key" prop.
   ! key is a private prop you will not be able to use it in the component 
   * if you want to the use key, pass it in as an additional seperate prop
   * such as id={contact.id}
   */
  return (
    <Contact
      key={contact.id}
      id={contact.id}
      name={contact.name}
      imgUrl={contact.imgUrl}
      phone={contact.phone}
      email={contact.email}
    />
  );
}
function App() {
  return (
    <div>
      <h1>My Contacts</h1>
      <div className="cards">
        {persons.map(createContact)}
        {persons.map(createContact)}
        {persons.map(createContact)}
      </div>
    </div>
  );
}

export default App;
