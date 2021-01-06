import { useState, createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './themes.js';

export const CustomThemeContext = createContext('light');

export default function WithThemeProvider({children}) {
  const [theme, setTheme] = useState('light');


  const themeToggler = () => theme === 'light' ? setTheme('dark') : setTheme('light');

  return (
      <CustomThemeContext.Provider value={{theme, themeToggler}}>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
      </CustomThemeContext.Provider>
  )
}