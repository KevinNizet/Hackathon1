import { useState } from "react";

function OptionalList() {
  const [optionalList, setOptionalList] = useState([]);
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
    console.warn(idObject);
    setOptionalList(
      optionalList.filter((el) => {
        return el !== idObject;
      })
    );
  };
  return (
    <>
      <h3>Votre ToDoList : </h3>
      <input
        onChange={handleObject}
        type="text"
        placeholder="A rajouter..."
        id=""
      />
      <button type="button" onClick={handleAddObject}>
        Ajouter
      </button>
      <ul>
        {optionalList.map((el) => {
          return (
            <div>
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
    </>
  );
}

export default OptionalList;
