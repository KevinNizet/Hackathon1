function MandatoryList() {
  const mandatoryList = [
    "Passeport/Carte d'identité",
    "VISA",
    "Argent",
    "Vaccins",
    "Valise",
    "Billet(s)",
  ];
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
