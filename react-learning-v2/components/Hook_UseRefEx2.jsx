import React, { useEffect, useRef } from "react";

export const Hook_UseRefEx2 = () => {
  useEffect(() => {
    console.log("Component re-rendered");
  });

  const myRef = useRef(null);
  const doFocus = () => {
    myRef.current.focus();
    myRef.current.style.backgroundColor = "orange";
  };

  const myRef2 = useRef(null);
  const doFocus2 = () => {
    myRef2.current.focus();
    myRef2.current.style.backgroundColor = "orange";
  };

  const resetFocus = () => {
    myRef.current.style.backgroundColor = "";
    myRef2.current.style.backgroundColor = "";
  };

  return (
    <div>
      <p>Meow</p>
      <input ref={myRef} type="text" placeholder="Enter your name" />

      <button onClick={doFocus}>Focus</button>

      <input ref={myRef2} type="text" placeholder="Enter your name" />

      <button onClick={doFocus2}>Focus</button>
      <button onClick={resetFocus}>Reset</button>

      {/* With the help of useRef we can select the HTML element, and change then without re-rendering the elements */}
      {/* No re-rendering increases the performance */}
    </div>
  );
};
