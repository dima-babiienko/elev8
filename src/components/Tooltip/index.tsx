import React, { ReactNode } from 'react';
import { Tooltip as FlowbiteTooltip } from 'flowbite-react/lib/esm/components/Tooltip';
import { ThemeContext } from '../../context/themeContext';

interface TooltipType {
    children: ReactNode,
    content: string
}

const Tooltip: React.FC<TooltipType> = ({ children, content }) => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <FlowbiteTooltip
      content={content}
      style={theme}
    >
      {children}
    </FlowbiteTooltip>
  );
};

export default React.memo(Tooltip);
