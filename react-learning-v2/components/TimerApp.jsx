import React, { useEffect, useState } from "react";
import "../src/App.css";

export const TimerApp = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return (
    <div className="clock">
      {/* {time.toLocaleTimeString()} */}
      {formattedTime}
    </div>
  );
};
