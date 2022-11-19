import React, { ReactNode } from 'react';

interface BackgroundType {
    children: ReactNode
}

const Background: React.FC<BackgroundType> = ({ children }) => (
  <body className="bg-primary-bg dark:bg-black transition-all">
    {children}
  </body>
);

export default React.memo(Background);
