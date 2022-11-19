import React from 'react';
import { ThemeContext } from '../../context/themeContext';
import SunIcon from '../Icons/SunIcon';
import MoonIcon from '../Icons/MoonIcon';
import { ThemeEnum } from '../../types/theme.enum';

const ToggleTheme = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <div className="flex items-center justify-center bg-black dark:bg-white rounded-full h-7 w-7">
      {theme === ThemeEnum.DARK ? <SunIcon size={18} /> : <MoonIcon size={18} />}
    </div>
  );
};

export default React.memo(ToggleTheme);
