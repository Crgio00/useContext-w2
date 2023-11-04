import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import "./ThemedButton.css";

function ThemedButton({ children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <button className={`themed-button themed-button-${theme}`}>
      {children}
    </button>
  );
}

export default ThemedButton;
