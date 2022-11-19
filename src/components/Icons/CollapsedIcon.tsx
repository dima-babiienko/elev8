import React from 'react';
// import IconWrapper from '../Icon';

const CollapsedIcon = ({ size, ...rest }: any) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <path d="M10 14H12.6667C13.0203 14 13.3594 13.8595 13.6095 13.6095C13.8595 13.3594 14 13.0203 14 12.6667V3.33333C14 2.97971 13.8595 2.64057 13.6095 2.39052C13.3594 2.14048 13.0203 2 12.6667 2H10" className="stroke-black dark:stroke-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.3335 11.3334L2.00016 8.00008L5.3335 4.66675" className="stroke-black dark:stroke-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 8H10" className="stroke-black dark:stroke-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>

);

export default CollapsedIcon;
// export default IconWrapper(DashboardIcon) ;
