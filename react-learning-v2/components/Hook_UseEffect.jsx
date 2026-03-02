import React, { useEffect, useState } from "react";

// The useEffect hook in react lets us run code automatically when something changes or when component loads

// It executes certain task when screen updates or when certain data is ready

// SYNTAX
// useEffect(() => {
//      code to run
// }, [dependency]);

// useEffect(() => {});    This runs on EVERY render

// useEffect(() => {}, []); This runs only ONCE on initial render

// useEffect(() => {}, [count]); This runs on INITIAL render AND when there is CHANGE in the dependency

export const Hook_UseEffect = () => {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState(0);

  const incrementCnt = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    document.title = `Count: ${count}`;
    console.log(`useEffect triggered`);
  });
  // Without dependency array it gets triggered on any sort of change in any component

  return (
    <div>
      <h1>Use Effect Hook</h1>
      <button onClick={incrementCnt}>Increment</button>
      <button onClick={() => setVal(val + 1)}>Val btn</button>
    </div>
  );
};
