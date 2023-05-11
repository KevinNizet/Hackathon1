function MandatoryList() {
  const mandatoryList = [
    "Passeport/CI",
    "VISA",
    "Moyens de paiements (CB, chèques, espèces,...)",
    "Vaccins",
  ];
  return (
    <>
      <h3>A ne pas oublier !</h3>
      {mandatoryList.map((el) => {
        return (
          <ul>
            <input type="checkbox" />
            <li key={el}>{el}</li>
          </ul>
        );
      })}
    </>
  );
}

export default MandatoryList;
