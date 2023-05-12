import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../style/_selectbar.scss";
import "../style/_config.scss";

function SelectBar() {
  const [pays, setPays] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");

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
        <div id="pif">
          <select id="localisation" onChange={handleChange}>
            <option value="">Destination </option>
            {pays.map((el) => {
              return (
                <option key={el.id} value={el.id}>
                  {" "}
                  {el.pays}
                </option>
              );
            })}
          </select>
        </div>

        {pays
          .filter((el) => {
            if (selectedValue === "") {
              return el;
            }
            return el.id === parseInt(selectedValue, 10);
          })

          .map((el) => {
            return (
              <div className="card">
                <h2 className="name">{el.pays}</h2>
                <img className="img" src={el.image} alt="" />
                <p className="card_description">{el.description}</p>
                <div className="full_button">
                  <NavLink to={`/todoList/${el.id}`}>
                    <button className="button" type="button">
                      Sélectionner
                    </button>
                  </NavLink>
                </div>
              </div>
            );
          })}
      </label>
    </form>
  );
}

export default SelectBar;
