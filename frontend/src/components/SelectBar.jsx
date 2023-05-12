import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style/_selectbar.scss";
import "../style/_config.scss";

function SelectBar() {
  const [pays, setPays] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5025/api/pays")
      .then((res) => res.json())
      .then((res) => setPays(res))
      .catch((err) => console.error(err));
  }, []);

  function handleChange(e) {
    setSelectedValue(e.target.value);
  }
  function handleClick() {
    navigate("/todolist");
  }

  return (
    <form className="center">
      <label htmlFor="localisation_select">
        <div id="pif">
          <select id="localisation" onChange={handleChange}>
            <option value="">Destination</option>
            {pays.map((el) => {
              return (
                <option key={el.id} value={el.pays}>
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
            return el.pays === selectedValue;
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
                    onClick={handleClick}
                  >
                    Sélectionner
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
