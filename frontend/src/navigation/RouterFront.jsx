import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RecapPage from "../pages/RecapPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/recappage" element={<RecapPage />} />
    </Routes>
  );
}

export default Router;
