import { useContext } from "react";
import { GlobalContext } from "../../src/context";

function ButtonToggleText() {
  const { theme, handleChangeStyleOnButtonClick } = useContext(GlobalContext);
  return (
    <button onClick={handleChangeStyleOnButtonClick}>
      Click to toggle text styling!
    </button>
  );
}

export default ButtonToggleText;
