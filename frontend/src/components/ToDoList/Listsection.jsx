import MandatoryList from "./MandatoryList";
import OptionalList from "./OptionalList";

function ListSection() {
  return (
    <>
      <MandatoryList />
      <br />
      <OptionalList />
    </>
  );
}

export default ListSection;
