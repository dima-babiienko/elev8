import { ThemeEnum } from '../types/theme.enum';

export const getInitialTheme: () => ThemeEnum = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const colorTheme = window.localStorage.getItem('color-theme');
    if (colorTheme) {
      return colorTheme as ThemeEnum;
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) {
      return ThemeEnum.DARK;
    }
  }

  return ThemeEnum.LIGHT; // default theme;
};
