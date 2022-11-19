import React, { ReactNode, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/themeContext';
import { getInitialTheme } from '../../utils/initialTheme';
import { setStorageTheme } from '../../utils/storageTheme';
import { ThemeEnum } from '../../types/theme.enum';

interface ThemeProviderType {
    children: ReactNode
}

const ThemeProvider:React.FC<ThemeProviderType> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeEnum>(getInitialTheme);

  useEffect(() => {
    setStorageTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default React.memo(ThemeProvider);
