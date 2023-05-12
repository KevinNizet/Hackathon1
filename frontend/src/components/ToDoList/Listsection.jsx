import { useState } from "react";
import NavBar from "../NavBar";
import MandatoryList from "./MandatoryList";
import OptionalList from "./OptionalList";
import Validation from "./Validation";
import Footer from "../Footer";


function ListSection() {
  const [tumevoie, settumevoieplus] = useState(undefined);
  const handleClick = () => {
    return settumevoieplus(true);
  };

  return (
    <>
      <NavBar />
      <MandatoryList />
      <br />
      <OptionalList />
      <div className="buttonContainer">
        <button type="button" onClick={handleClick} className="buttonValider">
          Valider
        </button>
        {tumevoie && <Validation settumevoieplus={settumevoieplus} />}
      </div>

      <Footer />

    </>
  );
}

export default ListSection;
