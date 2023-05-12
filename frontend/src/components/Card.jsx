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
      {data.map((el) => {
        return <h2>{el.name}</h2>;
      })}
      {data.map((el) => {
        return <img className="img" src={el.img} alt="" />;
      })}
      <div className="card_description" />
    </div>
  );
}

export default Card;
