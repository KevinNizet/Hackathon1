import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../style/_selectbar.scss";
import "../style/_config.scss";

function SelectBar({ selectedValue, setSelectedValue }) {
  const [pays, setPays] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5025/api/voyage")
      .then((res) => res.json())
      .then((res) => setPays(res))
      .catch((err) => console.error(err));
  }, []);

  function handleChange(e) {
    setSelectedValue(e.target.value);
  }

  return (
    <form className="center">
      <label htmlFor="localisation_select">
        <select id="localisation" onChange={handleChange}>
          <option value="">Selectionne ta destination</option>
          {pays.map((el) => {
            return (
              <option key={el.id} value={el.id}>
                {" "}
                {el.pays}
              </option>
            );
          })}
        </select>

        {pays
          .filter((el) => {
            if (selectedValue === "") {
              return el;
            }
            return el.pays === selectedValue;
          })

          .map((el) => {
            return (
              <div className="Card">
                <p>{el.pays}</p>
                <img src={el.image} alt="" />
              </div>
            );
          })}
      </label>
    </form>
  );
}

SelectBar.propTypes = {
  selectedValue: PropTypes.number.isRequired,
  setSelectedValue: PropTypes.func.isRequired,
};

export default SelectBar;
