import { useState } from "react";

function OptionalList() {
  const [optionalList, setOptionalList] = useState([]);
  const [object, setObject] = useState("");
  const [idObject, setIdObject] = useState("");
  const handleObject = (e) => {
    setObject(e.target.value);
  };

  const suggestList = ["clés", "trousse de toilette", ""];

  const handleAddObject = () => {
    setOptionalList([...optionalList, object]);
  };
  const handleDeleteObject = (e) => {
    setIdObject(e.target.value);
    setOptionalList(
      optionalList.filter((el) => {
        return el !== idObject;
      })
    );
  };
  return (
    <div className="opt-list">
      <h3>Votre ToDoList : </h3>
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
        {suggestList.map((el) => {
          return (
            <div className="opt-list-box">
              <li>{el}</li>
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
