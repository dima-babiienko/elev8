import React from 'react';
// import IconWrapper from '../Icon';

const DealsIcon = ({
  size, className, ...rest
}: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <g clipPath="url(#clip0_1023_32941)">
      <path
        d="M20 2C20.552 2 21 2.448 21 3V6.757L12.001 15.757L11.995 19.995L16.241 20.001L21 15.242V21C21 21.552 20.552 22 20 22H4C3.448 22 3 21.552 3 21V3C3 2.448 3.448 2 4 2H20ZM21.778 8.808L23.192 10.222L15.414 18L13.998 17.998L14 16.586L21.778 8.808ZM12 12H7V14H12V12ZM15 8H7V10H15V8Z"
        className={`fill-color-primary-light dark:fill-color-primary ${className}`}
      />
    </g>
    <defs>
      <clipPath id="clip0_1023_32941">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>

);

export default DealsIcon;
// export default IconWrapper(DashboardIcon) ;
