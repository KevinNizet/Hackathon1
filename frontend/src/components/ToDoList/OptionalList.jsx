function OptionalList() {
  const optionalList = ["", "", "", "", ""];
  return (
    <>
      <h3>Votre ToDoList : </h3>
      {optionalList.map((el) => {
        return (
          <ul>
            <input type="checkbox" />
            <li>{el}</li>
          </ul>
        );
      })}
    </>
  );
}

export default OptionalList;
