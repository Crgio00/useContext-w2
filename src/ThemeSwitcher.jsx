import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import "./ThemeSwitcher.css";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-switcher">
      <button onClick={toggleTheme}>Cambiar tema</button>
      <p>Tema actual: {theme}</p>
    </div>
  );
}

export default ThemeSwitcher;
