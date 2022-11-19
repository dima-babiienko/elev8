import React from 'react';
import Tooltip from '../../../Tooltip';
import CollapsedIcon from '../../../Icons/CollapsedIcon';

interface SidebarHeaderProps {
    isCollapsed: boolean
    toggleCollapsed: () => void
}

const SidebarHeader: React.FC<SidebarHeaderProps> = ({ isCollapsed, toggleCollapsed }) => (
  <>
    <div className="flex items-center justify-between">
      <div className={`flex text-2xl font-bold transition-all ${isCollapsed ? 'pl-0' : 'pl-3'}`}>
        <p className="text-black dark:text-white">
          {isCollapsed ? 'E' : 'ELEV'}
        </p>
        <p className="text-color-primary-active">8</p>
      </div>

      <Tooltip content={isCollapsed ? 'Show menu' : 'Hide menu'}>
        <CollapsedIcon
          data-testid="collapse"
          className={`transition-transform w-6 cursor-pointer ${isCollapsed ? 'rotate-180' : ''}`}
          onClick={toggleCollapsed}
          size={20}
        />
      </Tooltip>
    </div>

    <div className="h-32 pl-3 w-232px">
      {!isCollapsed && (
      <>
        <p className="text-sm text-color-secondary dark:text-white pt-7">
          Sierra Ferguson
        </p>
        <p className="text-extra-small text-color-secondary-light">
          s.ferguson@gmail.com
        </p>
      </>
      )}
    </div>
  </>
);

export default React.memo(SidebarHeader);
