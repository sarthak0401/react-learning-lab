import { createContext, useContext, useState } from "react";

// We need to create this createContext globally, not inside any functional component

// useContext()

// Create a context :
// const MyContext = createContext(defaultVal);

// Consume a context:
// const contextVal = useContext(myContext);

// Provide the context :
// <MyContext.provider value = {someVal} >
// <ComponentA />
// </MyContext.provider>

const ThemeContext = createContext("dark");

export const Hook_UseContext = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prev) => (prev == "light" ? "dark" : "light"));
  };

  return (
    <div>
      <OutsideComp />
      <ThemeContext.Provider value={theme}>
        <div style={{ border: "2px solid yellow", padding: "20px" }}>
          <button onClick={toggleTheme}>Toggle</button>
          <h1>Parent container</h1>
          <ComponentA />
        </div>
      </ThemeContext.Provider>

      <ThemeContext.Provider value="light">
        <OutsideComp />
      </ThemeContext.Provider>
    </div>
  );
};

function OutsideComp() {
  return (
    <div style={{ border: "10px solid red " }}>
      <p>The theme is : {useContext(ThemeContext)}</p>
    </div>
  );
}

function ComponentA() {
  return (
    <div style={{ border: "2px solid red", padding: "20px" }}>
      <h1>Child container</h1>
      <ComponentB />
    </div>
  );
}

function ComponentB() {
  return (
    <div style={{ border: "2px solid blue", padding: "20px" }}>
      <h1>Grand child container</h1>
      <ComponentC />
    </div>
  );
}

function ComponentC() {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ border: "2px solid green", padding: "20px" }}>
      <h1>Great grand child container</h1>
      <p>Theme is : {theme}</p>
    </div>
  );
}
