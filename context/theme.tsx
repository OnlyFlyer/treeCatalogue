// Make sure the shape of the default value passed to

import { createContext } from "react";

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

// createContext matches the shape that the consumers expect!
export const ThemeContext = createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});