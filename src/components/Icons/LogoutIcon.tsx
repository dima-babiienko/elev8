import React from 'react';
// import IconWrapper from '../Icon';

const LogoutIcon = ({ size, ...rest }: any) => (
  <div className="flex items-center justify-center bg-color-dangerous rounded-full h-7 w-7">
    <svg width={size} height={size} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path d="M9.38889 0H7.61111V8.88889H9.38889V0ZM13.6822 1.92889L12.42 3.19111C13.8244 4.32 14.7222 6.05333 14.7222 8C14.7222 11.44 11.94 14.2222 8.5 14.2222C5.06 14.2222 2.27778 11.44 2.27778 8C2.27778 6.05333 3.17556 4.32 4.57111 3.18222L3.31778 1.92889C1.59333 3.39556 0.5 5.56444 0.5 8C0.5 12.4178 4.08222 16 8.5 16C12.9178 16 16.5 12.4178 16.5 8C16.5 5.56444 15.4067 3.39556 13.6822 1.92889Z" fill="white" />
    </svg>
  </div>
);

export default LogoutIcon;
// export default IconWrapper(DashboardIcon) ;
