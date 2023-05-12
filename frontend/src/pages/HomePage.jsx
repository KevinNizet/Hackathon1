import React from "react";
import PropTypes from "prop-types";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import SelectBar from "../components/SelectBar";
import Footer from "../components/Footer";

function HomePage({ selectedValue, setSelectedValue }) {
  return (
    <div>
      <NavBar />
      <SelectBar
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
      <Card />
      <Footer />
    </div>
  );
}

HomePage.propTypes = {
  selectedValue: PropTypes.string.isRequired,
  setSelectedValue: PropTypes.func.isRequired,
};

export default HomePage;
