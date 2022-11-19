import React from 'react';
// import IconWrapper from '../Icon';

const InventoryIcon = ({
  size, color, className, ...rest
}: any) => (
  <svg width={size} height={size} viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <path
      d="M22.875 6.5C22.7344 6.26562 21.3464 5.66609 21.3464 5.66609C21.5878 5.54141 21.7528 5.51562 21.7528 5C21.7528 4.4375 21.75 4.25 21.375 4.25H20.1028C20.0977 4.23875 20.092 4.22703 20.0869 4.21531C19.2656 2.42187 19.1555 1.96859 17.9306 1.35828C16.2877 0.54125 13.2075 0.5 12 0.5C10.7925 0.5 7.71234 0.54125 6.07078 1.35828C4.84453 1.96766 4.875 2.28125 3.91453 4.21531C3.91453 4.22047 3.90469 4.23406 3.89578 4.25H2.62219C2.25 4.25 2.24719 4.4375 2.24719 5C2.24719 5.51562 2.41219 5.54141 2.65359 5.66609C2.65359 5.66609 1.3125 6.3125 1.125 6.5C0.9375 6.6875 0.75 8 0.75 10.25C0.75 12.5 0.9375 14.75 0.9375 14.75H1.49719C1.49719 15.4062 1.59375 15.5 1.875 15.5H5.625C5.90625 15.5 6 15.4062 6 14.75H18C18 15.4062 18.0938 15.5 18.375 15.5H22.2188C22.4062 15.5 22.5 15.3594 22.5 14.75H23.0625C23.0625 14.75 23.25 12.4531 23.25 10.25C23.25 8.04688 23.0156 6.73438 22.875 6.5ZM5.87156 8.60656C5.01783 8.69989 4.15975 8.74778 3.30094 8.75C2.34375 8.75 2.31094 8.81141 2.24344 8.21375C2.21804 7.9402 2.22607 7.66458 2.26734 7.39297L2.29688 7.25H2.4375C3 7.25 3.52828 7.27391 4.52578 7.56781C5.03312 7.72005 5.51031 7.95888 5.93625 8.27375C6.14062 8.42188 6.1875 8.5625 6.1875 8.5625L5.87156 8.60656ZM17.4572 11.9816L17.25 12.5H6.75C6.75 12.5 6.76828 12.4714 6.51562 11.9759C6.32812 11.6094 6.5625 11.375 6.93328 11.2419C7.65141 10.9831 9.75 10.25 12 10.25C14.25 10.25 16.3903 10.8819 17.0859 11.2419C17.3438 11.375 17.6639 11.4688 17.4572 11.9844V11.9816ZM5.41031 5.58172C5.2589 5.59046 5.10715 5.59155 4.95563 5.585C5.07797 5.3675 5.14594 5.12516 5.26547 4.87203C5.64047 4.07516 6.06938 3.17328 6.83297 2.79312C7.93641 2.24375 10.2234 1.99625 12 1.99625C13.7766 1.99625 16.0636 2.24187 17.167 2.79312C17.9306 3.17328 18.3577 4.07563 18.7345 4.87203C18.855 5.1275 18.922 5.37172 19.0477 5.59063C18.9539 5.59578 18.8461 5.59063 18.5887 5.58172H5.41031ZM21.7097 8.21187C21.6094 8.79687 21.7031 8.75 20.6991 8.75C19.8403 8.74778 18.9822 8.69989 18.1284 8.60656C17.9948 8.58266 17.9569 8.35719 18.0637 8.27375C18.4875 7.95538 18.9654 7.71622 19.4742 7.56781C20.4717 7.27391 21.0333 7.23453 21.5878 7.25422C21.6251 7.25564 21.6605 7.27079 21.6872 7.29675C21.7139 7.32272 21.7301 7.35766 21.7327 7.39484C21.7592 7.6677 21.7514 7.9428 21.7097 8.21375V8.21187Z"
      fill={color}
      className={`fill-color-primary-light dark:fill-color-primary ${className}`}
    />
  </svg>

);

export default InventoryIcon;
// export default IconWrapper(DashboardIcon) ;
