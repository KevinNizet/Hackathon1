import React, { useState, useEffect } from "react";
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
              <div className="card">
                <h2 className="name">{el.pays}</h2>
                <img className="img" src={el.image} alt="" />
                <p className="card_description">{el.description}</p>
                <div className="full_button">
                  <button className="button" type="button">
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

export default SelectBar;
