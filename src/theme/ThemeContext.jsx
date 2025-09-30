import { createContext, useState, useEffect} from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children}) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = isDarkMode? "dark-mode": "light-mode";
}, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode}}>
      {children}
    </ThemeContext.Provider>
);
};