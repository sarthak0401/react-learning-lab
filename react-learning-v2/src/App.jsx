import { useState } from "react";
import "./App.css";

import { LearningProps } from "../components/LearningProps";

import { Button } from "../components/Button";
import { GreetingFunc } from "../components/GreetingFunc";

function App() {
  const [count, setCount] = useState(0);
  const meow = <h1> hello </h1>;
  const isLoggedIn = true;
  const messages = ["1", "2", "3", "4"];
  const props = [
    {
      Name: "Sarthak",
      Education: "Engineer",
    },
    {
      Name: "Rohan",
      Qualification: "Doctor",
    },
  ];

  const hobbies = ["Dancing", "Coding", "Fitness"];

  const HandleHobbyClick = (hobby) => {
    alert(`You clicked ${hobby}`);
  };

  return (
    <>
      {/* <div>
        <h1>React app</h1>
        <p>Started my react journey</p>
      </div>
      <Button setCount={setCount} /> */}
      {/* We use {} curly braces to use js expression inside it */}
      {/* <p>{count}</p> */}
      {/* <p>{meow}</p> */}
      {/* <p style={{ color: "red", textDecoration: "underline" }}>
        This is the styled text!
      </p> */}
      {/* {isLoggedIn == true ? <h1>Meow</h1> : <p>Yeashadasdaksj</p>} */}

      {/* {messages.length > 0 ? (
        <h1>You have {messages.length} unread messages</h1>
      ) : (
        ""
      )} */}
      <GreetingFunc />
      <LearningProps
        prop={props}
        isMember={false}
        hobbies={hobbies}
        hobbyHandler={HandleHobbyClick}
        // This prop is passed, it will be used as a callback function with some event lets say Onclick event
      />
    </>
  );
}

export default App;
