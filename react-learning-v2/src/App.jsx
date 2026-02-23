import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";

function App() {
  const [count, setCount] = useState(0);
  const meow = <h1> hello </h1>;

  return (
    <>
      <div>
        <h1>React app</h1>
        <p>Started my react journey</p>
      </div>
      <Button setCount={setCount} />
      {/* We use {} curly braces to use js expression inside it */}
      <p>{count}</p>
      <p>{meow}</p>
      <p style={{ color: "red", textDecoration: "underline" }}>
        This is the styled text!
      </p>
    </>
  );
}

export default App;
