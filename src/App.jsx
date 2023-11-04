import React, { useState } from "react";
import ThemeContext from "./ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";
import ThemeDisplay from "./ThemeDisplay";
import ThemedButton from "./ThemedButton";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app app-${theme}`}>
        <h1>Contexto y useContext en React</h1>
        <ThemeSwitcher />
        <ThemeDisplay />
        <ThemedButton>Botón con tema</ThemedButton>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
