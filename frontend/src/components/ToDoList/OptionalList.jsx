import { useState } from "react";

function OptionalList() {
  const valiseList = [
    "clés",
    "permis de conduire",
    "trousse de toilette",
    "sous-vêtements/chaussettes",
    "tongs",
    "appareil photo",
    "chargeur téléphone/ordi",
    "écouteurs",
    "protections périodiques",
    "crème solaire",
    "lunettes de soleil",
    "médicaments",
    "carte vitale/CEAM",
    "contraceptifs",
    "anti-moustique",
    "guide touristique",
    "plans/cartes",
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
      <h3 className="oubli">Votre ToDoList : </h3>
      <br />
      <p>
        Ici, créez votre propre liste de choses à emmener pendant vos vacances.
        Soyez assurés de ne plus jamais oublier quoique ce soit !
      </p>
      <br />
      <input
        className="opt-list-input"
        onChange={handleObject}
        type="text"
        placeholder="A rajouter..."
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
              <button value={el} onClick={handleDeleteObject} type="button">
                Retirer
              </button>
            </div>
          );
        })}
        <br />
        {suggestList.length >= 1 && <h3>Suggestions</h3>}
        <br />
        {suggestList.map((el) => {
          return (
            <div className="opt-list-box">
              <input type="checkbox" />
              <li value={el} key={el}>
                {el}
              </li>
              <button value={el} onClick={handleDeleteObject} type="button">
                Retirer
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default OptionalList;
