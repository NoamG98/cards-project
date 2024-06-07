import { createContext, useCallback, useContext, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const ThemeContext = createContext();

export default function CustomThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  const theme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
      primary: {
        main: '#2e7d32',
      },
      secondary: {
        main: '#ffcc80',
      },
      background: {
        default: isDark ? '#121212' : '#e8f5e9',
      },
      text: {
        primary: isDark ? '#e0f7fa' : '#004d40',
        secondary: isDark ? '#80cbc4' : '#00796b',
      },
    },
    typography: {
      fontFamily: 'Arial, sans-serif',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ toggleDarkMode, isDark }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a Provider");
  return context;
};
