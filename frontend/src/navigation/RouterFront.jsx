import { React } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ListSection from "../components/ToDoList/Listsection";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/todolist" element={<ListSection />} />
      <Route path="/todoList/:id" element={<ListSection />} />
    </Routes>
  );
}

export default Router;
