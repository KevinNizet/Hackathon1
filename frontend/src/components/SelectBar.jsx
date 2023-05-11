import React, { useState, useEffect } from "react";
import "../style/_selectbar.scss";
import "../style/_config.scss";

function SelectBar() {
  const [pays, setPays] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");

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
                <img src={el.image} />
              </div>
            );
          })}
      </label>
    </form>
  );
}

export default SelectBar;
