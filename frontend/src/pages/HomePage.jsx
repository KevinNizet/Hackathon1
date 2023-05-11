import React from "react";
import NavBar from "../components/NavBar";
import ListSection from "../components/ToDoList/Listsection";
import Card from "../components/Card";
import SelectBar from "../components/SelectBar";

function HomePage() {
  return (
    <div>
      <NavBar />
      <SelectBar />
      <Card />
      <ListSection />
    </div>
  );
}

export default HomePage;
