import React from 'react';
import { getInitialTheme } from '../utils/initialTheme';
import { ThemeEnum } from '../types/theme.enum';

interface ThemeContextType {
    theme: ThemeEnum;
    setTheme: React.Dispatch<React.SetStateAction<ThemeEnum>>
}

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: getInitialTheme(),
  setTheme: () => null,
});
