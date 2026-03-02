import React, { useEffect, useState } from "react";
// We will be using useEffect hook here

export const MouseTrackerProject = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div>
      <h2>Mouse Position</h2>
      <p>
        X : {mousePosition.x}, Y : {mousePosition.y}
      </p>
    </div>
  );
};
