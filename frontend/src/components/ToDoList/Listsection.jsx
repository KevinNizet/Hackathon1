import NavBar from "../NavBar";
import MandatoryList from "./MandatoryList";
import OptionalList from "./OptionalList";
import Footer from "../Footer";

function ListSection() {
  return (
    <>
      <NavBar />
      <MandatoryList />
      <br />
      <OptionalList />
      <Footer />
    </>
  );
}

export default ListSection;
