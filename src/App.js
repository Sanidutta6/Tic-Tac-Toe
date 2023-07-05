import React, { useState } from "react";
import ThemeContext from "./Context/ThemeContext";
import ThemeColor from "./Colors";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import "./App.css";

const App = () => {
  const [themeHook, setThemeHook] = useState("light");
  const currentTheme = ThemeColor[themeHook];

  return (
    <ThemeContext.Provider value={[themeHook, setThemeHook]}>
      <div
        className={`h-screen ${currentTheme.backgroundColor} ${currentTheme.color}`}
      >
        <Header />
        <Hero />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;