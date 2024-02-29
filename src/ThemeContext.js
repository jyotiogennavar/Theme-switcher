import React, {createContext, useState} from "react";
import { LIGHT_THEME, DARK_THEME } from "./constant";

const ThemeContext  = createContext();

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((preTheme) => (preTheme === 'light' ? 'dark' : 'light'));
  };

  const themeMode = theme === 'light' ? LIGHT_THEME : DARK_THEME;

  return (
    <ThemeContext.Provider value={{theme, toggleTheme, themeMode}}>
      {children}
    </ThemeContext.Provider>
  );
};

export {ThemeProvider, ThemeContext};