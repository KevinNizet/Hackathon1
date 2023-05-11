import { useState } from "react";

function OptionalList() {
  const [optionalList, setOptionalList] = useState([]);
  const [object, setObject] = useState("");
  const handleObject = (e) => {
    setObject(e.target.value);
  };

  const handleAddObject = () => {
    setOptionalList([...optionalList, object]);
    console.warn(optionalList);
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
          return <li key={el}>{el}</li>;
        })}
      </ul>
    </>
  );
}

export default OptionalList;
