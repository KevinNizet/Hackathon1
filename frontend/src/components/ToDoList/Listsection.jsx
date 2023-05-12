import PropTypes from "prop-types";
import NavBar from "../NavBar";
import MandatoryList from "./MandatoryList";
import OptionalList from "./OptionalList";

function ListSection({ selectedValue, setSelectedValue }) {
  return (
    <>
      <NavBar />
      <MandatoryList
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
      <br />
      <OptionalList />
    </>
  );
}

ListSection.propTypes = {
  selectedValue: PropTypes.number.isRequired,
  setSelectedValue: PropTypes.func.isRequired,
};

export default ListSection;
