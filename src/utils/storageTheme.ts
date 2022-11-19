import { ThemeEnum } from '../types/theme.enum';

export const setStorageTheme = (rawTheme: ThemeEnum) => {
  const root = window.document.documentElement;
  const isDark = rawTheme === ThemeEnum.DARK;

  root.classList.remove(isDark ? ThemeEnum.LIGHT : ThemeEnum.DARK);
  root.classList.add(rawTheme);

  localStorage.setItem('color-theme', rawTheme);
};
