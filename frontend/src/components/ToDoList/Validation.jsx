import React from "react";
import PropTypes from "prop-types";

function Validation({ settumevoieplus }) {
  return (
    <button
      type="button"
      className="fondblur"
      onClick={() => settumevoieplus(false)}
    >
      <div className="fondgris">
        <h1>Bonnes Vacances !</h1>
        <p className="popup-text">😎 💼</p>
      </div>
    </button>
  );
}

export default Validation;

Validation.propTypes = {
  settumevoieplus: PropTypes.func.isRequired,
};
