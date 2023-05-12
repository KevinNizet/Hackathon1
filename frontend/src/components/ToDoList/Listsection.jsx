import NavBar from "../NavBar";
import MandatoryList from "./MandatoryList";
import OptionalList from "./OptionalList";
import Footer from "../Footer";

function ListSection() {
  return (
    <div className="list-section">
      <NavBar />
      <MandatoryList />
      <br />
      <OptionalList />
      <Footer />
    </div>
  );
}

export default ListSection;
