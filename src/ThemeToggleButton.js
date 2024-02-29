import React from "react";

const ThemeToggleButton = ({ theme, toggleTheme }) => {
  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "Switch to Dark Theme" : "Switch to Light Theme"}
    </button>
  );
};

export default ThemeToggleButton;
