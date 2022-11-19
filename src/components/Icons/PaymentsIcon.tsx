import React from 'react';
// import IconWrapper from '../Icon';

const PaymentsIcon = ({
  size, color, className, ...rest
}: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <path
      d="M17.2632 4H6.73684C4.12632 4 2 6.12632 2 8.73684H22C22 6.12632 19.8737 4 17.2632 4ZM2 10.8421V15.0526C2 17.6632 4.12632 19.7895 6.73684 19.7895H17.2632C19.8737 19.7895 22 17.6632 22 15.0526V10.8421H2ZM9.89474 16.1053H6.73684C6.1579 16.1053 5.68421 15.6316 5.68421 15.0526C5.68421 14.4737 6.1579 14 6.73684 14H9.89474C10.4737 14 10.9474 14.4737 10.9474 15.0526C10.9474 15.6316 10.4737 16.1053 9.89474 16.1053Z"
      fill={color}
      className={`fill-color-primary-light dark:fill-color-primary ${className}`}
    />
  </svg>
);

export default PaymentsIcon;
// export default IconWrapper(DashboardIcon) ;
