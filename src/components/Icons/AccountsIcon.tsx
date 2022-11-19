import React from 'react';
// import IconWrapper from '../Icon';

const AccountsIcon = ({
  size, color, className, ...rest
}: any) => (

  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <g clipPath="url(#clip0_1023_32935)">
      <path
        d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM6.023 15.416C7.491 17.606 9.695 19 12.16 19C14.624 19 16.829 17.607 18.296 15.416C16.6317 13.8606 14.4379 12.9968 12.16 13C9.88171 12.9966 7.68751 13.8604 6.023 15.416V15.416ZM12 11C12.7956 11 13.5587 10.6839 14.1213 10.1213C14.6839 9.55871 15 8.79565 15 8C15 7.20435 14.6839 6.44129 14.1213 5.87868C13.5587 5.31607 12.7956 5 12 5C11.2044 5 10.4413 5.31607 9.87868 5.87868C9.31607 6.44129 9 7.20435 9 8C9 8.79565 9.31607 9.55871 9.87868 10.1213C10.4413 10.6839 11.2044 11 12 11V11Z"
        fill={color}
        className={`fill-color-primary-light dark:fill-color-primary ${className}`}
      />
    </g>
    <defs>
      <clipPath id="clip0_1023_32935">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>

);

export default AccountsIcon;
// export default IconWrapper(DashboardIcon) ;
