import React, { useState } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import { changeCssRootVariables } from './changeSssRoot';

const ThemeProvider = ({ children, ...props }) => {
  const [theme, setTheme] = useState('light');

  changeCssRootVariables(theme);

  const changeTheme = (theme) => {
    setTheme(theme);
    changeCssRootVariables(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }} {...props}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
