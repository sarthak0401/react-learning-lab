import { useState } from "react";
import { MouseTrackerProject } from "./MouseTrackerProject";

export const ParentComponent = () => {
  const [showComponent, setShowComponent] = useState(true);

  const toggleComponent = () => {
    setShowComponent((prev) => !prev);
  };

  return (
    <div>
      <button onClick={toggleComponent}>
        {showComponent ? "Unmount Tracker" : " Mount Tracker"}
      </button>

      {showComponent && <MouseTrackerProject />}
    </div>
  );
};
