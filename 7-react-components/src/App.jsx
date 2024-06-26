import React from "react";
import Footer from "./Copyright";
import FoodsList from "./FoodsList";

function HeadingComponent() {
  return <h1>My Favorite foods</h1>;
}

let App = () => {
  return (
    <div>
      <HeadingComponent></HeadingComponent>
      <FoodsList />
      <Footer />
    </div>
  );
};

export default App;
