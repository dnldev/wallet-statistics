import React from 'react';

import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import AppContent from './components/AppContent';

import theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
