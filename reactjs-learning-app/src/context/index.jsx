import { createContext, useContext, useState } from "react";

// Used export, so it will be visible by all the components
export const GlobalContext = createContext(null);
// This is the global Context, initially set to null, whatever is defined in this can be accessed by all the children components of Root component

export function GlobalState({ children }) {
  const [theme, setTheme] = useState("light");

  function handleChangeStyleOnButtonClick() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <GlobalContext.Provider value={{ theme, handleChangeStyleOnButtonClick }}>
      {children}
    </GlobalContext.Provider>
  );
}
// Note : THis GloabalState function is just created to wrap the root component around it, that's it, its nowhere used after that, use GlobalContext everywhere
