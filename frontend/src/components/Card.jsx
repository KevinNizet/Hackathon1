import React, { useState, useEffect } from "react";
import "../style/_card.scss";

function Card() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5025/api/voyage")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="card">
      <h2 className="name">Argentine</h2>
      <img className="img" alt="" />
      {data.map((el) => {
        return <p>{el.name}</p>;
      })}
      <div className="card_description">
        <p />
      </div>
    </div>
  );
}

export default Card;
