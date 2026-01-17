import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ClassBasedComponent from "../components/class-based-component";
import FunctionalComponent from "../components/functional-component";
import ProductList from "../components/products";
import FetchAllUsers from "../components/users";
import { TextToBeToggled } from "../components/global-context-concept/text-to-toggle";
import ButtonToggleText from "../components/global-context-concept/button";
import { UseReducerExample } from "../components/useReducer-example/user-reducer-example";

const dummyProductData = ["Product1", "Product2", "Product3"];

// Chaining : App -> ProductList -> ProductItem -> Any other component

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>This is the app.jsx</h1>
      <hr />
      {/* <ClassBasedComponent/> */}
      {/* <FunctionalComponent/> */}
      {/* <FetchAllUsers /> */}

      {/* <ButtonToggleText />
      <TextToBeToggled /> */}

      <UseReducerExample />

      {/* <ProductList listOfProducts={dummyProductData} name="Sarthak" age="23" /> */}
      {/* Keyname of the argument can be anything, we just need to use this keyname in the child components props destructuring */}
    </div>
  );
}

export default App;
