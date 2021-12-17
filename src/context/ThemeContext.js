import React, { createContext, useState } from "react";

export const ThemeContexts = createContext();

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState({
    isLightTheme: true,
    light: {
      background: "rgb(240, 240, 240)",
      color: "black",
    },
    dark: {
      background: "rgb(39, 39, 39)",
      color: "white",
    },
  });
  const themeContextData = {
    theme,
  };
  return (
    <ThemeContexts.Provider value={themeContextData}>
      {children}
    </ThemeContexts.Provider>
  );
};

export default ThemeContext;
