import { useState } from "react";
import "./App.css";
import { FetchDataFromAPI } from "../Components/FetchDataFromAPI";
import { PostRequestUsingAxios } from "../Components/PostRequestUsingAxios";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <FetchDataFromAPI /> */}
      <PostRequestUsingAxios />
    </>
  );
}

export default App;
