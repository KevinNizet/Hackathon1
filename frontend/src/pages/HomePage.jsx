import React from "react";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import SelectBar from "../components/SelectBar";

function HomePage() {
  return (
    <div>
      <NavBar />
      <SelectBar />
      <Card />
      <p>Hello HomePage</p>
    </div>
  );
}

export default HomePage;
