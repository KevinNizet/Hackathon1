import { useEffect, useState } from "react";

function MandatoryList() {
  const [data, setData] = useState([]);
  const [pays] = useState({});

  useEffect(() => {
    fetch("http://localhost:5025/api/pays")
      .then((res) => res.json())
      .then((db) => {
        setData(db);
        console.warn(data);
      });
  }, []);

  const mandatoryList = ["Billet(s) de transport", "la valise, bien sur !"];

  return (
    <div className="mand-list">
      <h2>Pays Choisi : {pays.pays}</h2>
      <br />
      <h3>A ne pas oublier !</h3>
      <ul>
        <div className="mand-list-box">
          <input type="checkbox" />
          <li>
            {pays.passeport === 1 ? "Passeport" : "Carte d'identité/Passeport"}
          </li>
          <br />
        </div>
        <div className="mand-list-box">
          <input type="checkbox" />
          <li>VISA : {pays.visa}</li>
        </div>
        <div className="mand-list-box">
          <input type="checkbox" />
          <li>prix du VISA : {pays.prix} euros</li>
        </div>
        <div className="mand-list-box">
          <input type="checkbox" />
          <li>Vaccins : {pays.vaccin}</li>
        </div>
      </ul>
      <ul>
        {mandatoryList.map((el) => {
          return (
            <div className="mand-list-box">
              <input type="checkbox" />
              <li key={el}>{el}</li>
              <br />
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default MandatoryList;
