import { useState } from "react";

function OptionalList() {
  const valiseList = [
    "Clés",
    "Permis de conduire",
    "Trousse de toilette",
    "Chaussettes",
    "Tongs",
    "Appareil photo",
    "Chargeur",
    "Ecouteurs",
    "Tampons",
    "Crème solaire",
    "Lunettes de soleil",
    "Médicaments",
    "Carte vitale/CEAM",
    "Contraceptifs",
    "Anti-moustique",
    "Guide touristique",
    "GPS",
  ];
  const [optionalList, setOptionalList] = useState([]);
  const [suggestList, setSuggestList] = useState(valiseList);
  const [object, setObject] = useState("");
  const [idObject, setIdObject] = useState("");
  const handleObject = (e) => {
    setObject(e.target.value);
  };

  const handleAddObject = () => {
    setOptionalList([...optionalList, object]);
  };
  const handleDeleteObject = (e) => {
    setIdObject(e.target.value);
    setSuggestList(
      suggestList.filter((el) => {
        return el !== idObject;
      })
    );
    setOptionalList(
      optionalList.filter((el) => {
        return el !== idObject;
      })
    );
  };
  return (
    <div className="opt-list">
      <h3 className="oubli">Ma valise : </h3>
      <br />
      <p>
        Ici, crée ta propre liste d'affaires à emmener pendant tes vacances.
        Sois assuré de ne plus jamais oublier quoique ce soit !
      </p>
      <br />
      <input
        className="opt-list-input"
        onChange={handleObject}
        type="text"
        placeholder="À rajouter..."
        id=""
      />
      <button className="add-button" type="button" onClick={handleAddObject}>
        Ajouter
      </button>
      <ul>
        {optionalList.map((el) => {
          return (
            <div className="opt-list-box">
              <input type="checkbox" />
              <li value={el} key={el}>
                {el}
              </li>
              <button
                className="delete-button"
                value={el}
                onClick={handleDeleteObject}
                type="button"
              >
                Retirer
              </button>
            </div>
          );
        })}
        <br />

        {suggestList.length >= 1 && (
          <h3 className="suggestions">Suggestions</h3>
        )}
        <br />
        {suggestList.map((el) => {
          return (
            <div className="sugg-list">
              <ul className="sugg-list-box">
                <input type="checkbox" />
                <li value={el} key={el}>
                  {el}
                </li>
                <button
                  className="delete-button"
                  value={el}
                  onClick={handleDeleteObject}
                  type="button"
                >
                  Retirer
                </button>
              </ul>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default OptionalList;
