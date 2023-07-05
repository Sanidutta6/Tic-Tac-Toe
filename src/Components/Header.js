import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import ThemeColor from "../Colors";
import { BiSun, BiMoon } from "react-icons/bi";

const Header = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);
  const currentTheme = ThemeColor[themeMode];

  return (
    <header
      className={`py-4 px-6 flex justify-between items-center ${currentTheme.borderBottom}`}
    >
      <h1 className="text-2xl font-semibold">Tic-Tac-Toe</h1>
      <button
        className={`py-2 px-4 rounded-lg ${currentTheme.backgroundColor} ${currentTheme.border}`}
        onClick={() => {
          setThemeMode(themeMode === "light" ? "dark" : "light");
        }}
      >
        {themeMode === "light" ? (
          <div>
            <BiSun className="inline mr-2" />
            <span>Lights On</span>
          </div>
        ) : (
          <div>
            <BiMoon className="inline mr-2" />
            <span>Lights Off</span>
          </div>
        )}
      </button>
    </header>
  );
};

export default Header;