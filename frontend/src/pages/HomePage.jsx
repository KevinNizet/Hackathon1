import React from "react";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import SelectBar from "../components/SelectBar";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div>
      <NavBar />
      <SelectBar />
      <Card />
      <Footer />
    </div>
  );
}

export default HomePage;
