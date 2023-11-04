import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import "./ThemeDisplay.css";

function ThemeDisplay() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`theme-display theme-display-${theme}`}>
      <p>El tema actual es: {theme}</p>
    </div>
  );
}

export default ThemeDisplay;
