import React, { useEffect, useRef, useState } from "react";

// useRef
// - persist values across renders
// - Does not cause the component to re-render
// When the value changes

export const Hook_UseRef = () => {
  const [stateCnt, setStateCnt] = useState(0);
  const refCnt = useRef(0);

  useEffect(() => {
    console.log("Component re-rendered");
  });

  const incrementStateCount = () => {
    setStateCnt(stateCnt + 1);
  };

  const incrementRefCount = () => {
    refCnt.current += 1;
    console.log(`Ref cnt : ${refCnt.current}`);
  };

  return (
    <div>
      <p>State Count : {stateCnt}</p>
      <button onClick={incrementStateCount}>Increment State Count</button>

      <p>Ref Count : {refCnt.current}</p>
      <button onClick={incrementRefCount}>Increment State Count</button>
    </div>
  );
};
