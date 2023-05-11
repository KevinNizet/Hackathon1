import React, { useState } from "react";
import "../style/_selectbar.scss";

function SelectBar() {
  const [selectedValue, setSelectedValue] = useState("");
  console.warn(selectedValue);

  function handleChange(e) {
    setSelectedValue(e.target.value);
  }

  return (
    <form className="center">
      <label htmlFor="localisation_select">
        <select id="localisation" onChange={handleChange}>
          <option value="">Selectionne ton pays</option>
        </select>
      </label>
    </form>
  );
}

export default SelectBar;
