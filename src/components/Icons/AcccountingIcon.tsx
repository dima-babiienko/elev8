import React from 'react';
// import IconWrapper from '../Icon';

const AcccountingIcon = ({
  size, color, className, ...rest
}: any) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <path
      d="M2 0C0.89 0 0 0.89 0 2V16C0 16.5304 0.210714 17.0391 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18H16C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16V2C18 1.46957 17.7893 0.960859 17.4142 0.585786C17.0391 0.210714 16.5304 0 16 0H2ZM8 3H10V6H13V8H10V11H8V8H5V6H8V3ZM5 13H13V15H5V13Z"
      fill={color}
      className={`fill-color-primary-light dark:fill-color-primary ${className}`}
    />
  </svg>

);

export default AcccountingIcon;
// export default IconWrapper(DashboardIcon) ;
