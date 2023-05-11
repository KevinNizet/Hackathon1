import React from "react";
import NavBar from "../components/NavBar";
import ListSection from "../components/ToDoList/Listsection";

function HomePage() {
  return (
    <div>
      <NavBar />
      <p>Hello HomePage</p>
      <ListSection />
    </div>
  );
}

export default HomePage;
