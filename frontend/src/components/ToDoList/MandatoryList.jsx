import { useEffect, useState } from "react";

function MandatoryList() {
  const [data, setData] = useState([]);
  const mandatoryList = [
    "Passeport/Carte d'identité",
    "VISA",
    "Argent",
    "Vaccins",
    "Valise",
    "Billet(s)",
  ];

  useEffect(() => {
    fetch("http://localhost:5025/api/pays")
      .then((res) => res.json())
      .then((db) => {
        setData(db);
        console.warn(data);
      });
  }, []);

  return (
    <div className="mand-list">
      <h3>A ne pas oublier !</h3>
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
