import React, { useEffect, useState } from "react";

export const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark",
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);
  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="p-2 bg-gray-200 text-gray-800 rounded dark:bg-gray-900 dark:text-white"
    >
      Dark mode Toggle
    </button>
  );
};
