import React from "react";

function welcome(name) {
  return <h1>Welcome {name}</h1>;
}

function greet(isMorning) {
  if (isMorning) return <p> Good Morning!</p>;
  else return <p>Good Evening!</p>;
}

export const GreetingFunc = () => {
  const now = new Date();
  const isMorning = now.getHours() < 12;

  return (
    <>
      {welcome("Sarthak")}
      {greet(isMorning)}
    </>
  );
};
