import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ClassBasedComponent from "../components/class-based-component";
import FunctionalComponent from "../components/functional-component";
import ProductList from "../components/products";
import FetchAllUsers from "../components/users";

const dummyProductData = ["Product1", "Product2", "Product3"];

// Chaining : App -> ProductList -> ProductItem -> Any other component

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>This is the app.jsx</h1>
      {/* <ClassBasedComponent/> */}

      {/* <FunctionalComponent/> */}

      <FetchAllUsers />

      {/* <ProductList listOfProducts={dummyProductData} name="Sarthak" age="23" /> */}

      {/* Keyname of the argument can be anything, we just need to use this keyname in the child components props destructuring */}
    </div>
  );
}

export default App;
