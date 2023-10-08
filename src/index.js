// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';  // Update the path if you move theme.js

const root = document.getElementById('root');
const rootElement = createRoot(root);

rootElement.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
