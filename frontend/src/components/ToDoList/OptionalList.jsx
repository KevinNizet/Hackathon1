import { useEffect, useState } from "react";

function OptionalList() {
  const [optionalList, setOptionalList] = useState([]);
  const [object, setObject] = useState("");
  const [idObject, setIdObject] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5025/api/pays")
      .then((res) => res.json())
      .then((db) => {
        setData(db);
        console.warn(data);
      });
  }, []);

  const handleObject = (e) => {
    setObject(e.target.value);
  };

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
      <input
        className="opt-list-input"
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
