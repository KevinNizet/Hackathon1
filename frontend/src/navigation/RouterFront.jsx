import { React, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ListSection from "../components/ToDoList/Listsection";

function Router() {
  const [selectedValue, setSelectedValue] = useState(1);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
          />
        }
      />
      <Route
        path="/todolist"
        element={
          <ListSection
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
          />
        }
      />
    </Routes>
  );
}

export default Router;
