import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from 'styled-components';
import GlobalSyles from './styles/global';

import { AuthProvider } from './hooks/auth';

import { Routes }  from './routes';

import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalSyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>    
    </ThemeProvider>
  </React.StrictMode>,
)