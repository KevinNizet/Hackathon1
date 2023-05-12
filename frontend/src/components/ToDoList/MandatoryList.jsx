import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MandatoryList() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5025/api/pays/${id}`)
      .then((res) => res.json())
      .then((db) => {
        setData(db);
      })
      .catch((err) => console.error(err));
  }, []);

  const mandatoryList = ["Billet(s) de transport", "la valise, bien sur !"];
  console.warn("coucou", data);
  return (
    <div className="mand-list">
      <div className="pays">
        <h2> Destination choisie : {data.pays}</h2>
      </div>
      <br />
      <h3 className="oubli">A ne pas oublier !</h3>
      <ul>
        <div className="mand-list-box">
          <input type="checkbox" />
          <li>
            {data.passeport === 1 ? "Passeport" : "Carte d'identité/Passeport"}
          </li>
          <br />
        </div>
        <div className="mand-list-box">
          <input type="checkbox" />
          <li>VISA : {data.visa}</li>
        </div>
        <div className="mand-list-box">
          <input type="checkbox" />
          <li>prix du VISA : {data.prix} euros</li>
        </div>
        <div className="mand-list-box">
          <input type="checkbox" />
          <li>Vaccins : {data.vaccin}</li>
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
