import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../style/_selectbar.scss";
import "../style/_config.scss";

function SelectBar({ selectedValue, setSelectedValue }) {
  const [pays, setPays] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5025/api/pays")
      .then((res) => res.json())
      .then((res) => setPays(res))
      .catch((err) => console.error(err));
  }, []);

  function handleChange(e) {
    setSelectedValue(e.target.value);
    console.warn(selectedValue);
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
            return el.id === selectedValue;
          })

          .map((el) => {
            return (
              <div className="card">
                <h2 className="name">{el.pays}</h2>
                <img className="img" src={el.image} alt="" />
                <p className="card_description">{el.description}</p>
                <div className="full_button">
                  <button
                    className="button"
                    type="button"
                    onClick={handleChange}
                  >
                    To-do List
                  </button>
                </div>
              </div>
            );
          })}
      </label>
    </form>
  );
}

SelectBar.propTypes = {
  selectedValue: PropTypes.string.isRequired,
  setSelectedValue: PropTypes.func.isRequired,
};

export default SelectBar;
