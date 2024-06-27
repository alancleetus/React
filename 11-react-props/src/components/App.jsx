import React from "react";
import Contact from "./Contact";
import persons from "./PersonsList";

function App() {
  return (
    <div>
      <h1>My Contacts</h1>
      <div className="cards">
        {Contact()}
        {Contact(persons[0])}
        <Contact
          name="Jack Bauer"
          imgUrl="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
          phone="+987 654 321"
          email="jack@nowhere.com"
        />
        <Contact {...persons[2]} />
      </div>
    </div>
  );
}

export default App;
