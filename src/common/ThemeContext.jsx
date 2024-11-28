import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Always use light theme

  useEffect(() => {
    document.body.setAttribute('data-theme', 'light');
  }, []);

  const toggleTheme = () => {
    // Do nothing or keep it set to light
    setTheme('light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
