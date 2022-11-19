import { Sidebar as FlowbiteSidebar } from 'flowbite-react/lib/esm/components/Sidebar/Sidebar';
import React, { useCallback, useState } from 'react';
import LogoutIcon from '../Icons/LogoutIcon';
import SidebarToggleTheme from './components/SidebarToggleTheme';
import SidebarHeader from './components/SidebarHeader';
import { MENU_ITEMS } from './constants';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('');

  const toggleCollapsed = useCallback(() => {
    setIsCollapsed((prevIsCollapsed) => !prevIsCollapsed);
  }, []);

  return (
    <FlowbiteSidebar
      data-testid="sidebar"
      collapsed={isCollapsed}
      aria-label="Sidebar with content separator example"
      className={`overflow-hidden h-screen transition-all px-0 ${isCollapsed ? 'w-68px' : 'w-64'}`}
    >
      <div className="h-full flex flex-col">
        <SidebarHeader isCollapsed={isCollapsed} toggleCollapsed={toggleCollapsed} />

        <FlowbiteSidebar.Items className="flex flex-col grow justify-between">
          <FlowbiteSidebar.ItemGroup className="w-232px px-2px items-start">
            {MENU_ITEMS.map((item) => (
              <FlowbiteSidebar.Item
                key={item.label}
                className="cursor-pointer"
                onClick={() => setActiveMenuItem(item.label)}
                icon={() => (
                  <item.Icon
                    size={24}
                    className={activeMenuItem === item.label ? 'fill-color-primary-active dark:fill-color-primary-active' : ''}
                  />
                )}
              >
                <p className={`text-small ${activeMenuItem === item.label ? 'text-color-primary-active' : 'text-color-secondary-dark-blue dark:text-color-primary'}`}>
                  {item.label}
                </p>
              </FlowbiteSidebar.Item>
            ))}
          </FlowbiteSidebar.ItemGroup>

          <FlowbiteSidebar.ItemGroup className="w-232px items-start border-none">
            <SidebarToggleTheme />
            <FlowbiteSidebar.Item
              className="text-small text-color-secondary-dark-blue dark:text-color-primary-light cursor-pointer"
              icon={() => <LogoutIcon size={18} />}
            >
              Log Out
            </FlowbiteSidebar.Item>
          </FlowbiteSidebar.ItemGroup>
        </FlowbiteSidebar.Items>
      </div>
    </FlowbiteSidebar>
  );
};

export default React.memo(Sidebar);
