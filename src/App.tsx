import React, { FC } from 'react';
import Background from './components/Background';
import ThemeProvider from './providers/ThemeProvider';
import Sidebar from './components/Sidebar';

const App: FC = () => (
  <ThemeProvider>
    <Background>
      <Sidebar />
    </Background>
  </ThemeProvider>
);

export default App;
