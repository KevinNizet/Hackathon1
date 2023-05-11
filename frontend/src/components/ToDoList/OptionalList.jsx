import { useState } from "react";

function OptionalList() {
  const optionalList = ["", ""];
  const [object, setObject] = useState("");
  const handleObject = (e) => {
    setObject(e.target.value);
  };

  const handleAddObject = () => {
    optionalList.push(object);
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
      <input type="submit" onClick={() => handleAddObject()} />
      <ul>
        {optionalList.length > 1 &&
          optionalList.map(() => {
            return <li>{optionalList}</li>;
          })}
      </ul>
    </>
  );
}

export default OptionalList;
