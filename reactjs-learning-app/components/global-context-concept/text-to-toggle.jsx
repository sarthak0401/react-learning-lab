import { useContext } from "react";
import { GlobalContext } from "../../src/context";

export function TextToBeToggled() {
  const { theme } = useContext(GlobalContext);
  return (
    <p style={{ color: theme === "light" ? "red" : "black" }}>Hello there</p>
  );
}
