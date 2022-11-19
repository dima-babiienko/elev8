import React, { useCallback } from 'react';
import { Sidebar } from 'flowbite-react/lib/esm/components/Sidebar/Sidebar';

import { ThemeContext } from '../../../../context/themeContext';
import ToggleTheme from '../../../ToggleTheme';
import { ThemeEnum } from '../../../../types/theme.enum';

const SidebarToggleTheme = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK));
  }, []);

  return (
    <Sidebar.Item
      icon={ToggleTheme}
      className="text-small cursor-pointer text-color-secondary-dark-blue dark:text-color-primary-light"
      onClick={toggleTheme}
      data-testid="theme-toggle"
    >
      {theme === ThemeEnum.DARK ? 'Light Mode' : 'Dark Mode'}
    </Sidebar.Item>
  );
};

export default React.memo(SidebarToggleTheme);
