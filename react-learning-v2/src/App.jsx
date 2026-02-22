import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <h1>React app</h1>
        <p>Started my react journey</p>
      </div>
      <Button setCount={setCount} />
      <p>{count}</p>
    </>
  );
}

export default App;
