import NavBar from "../NavBar";
import MandatoryList from "./MandatoryList";
import OptionalList from "./OptionalList";

function ListSection() {
  return (
    <>
      <NavBar />
      <MandatoryList />
      <br />
      <OptionalList />
    </>
  );
}

export default ListSection;
