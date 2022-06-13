import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import App from '@/App';
import { StrictMode } from 'react';
import { theme } from '@/styles/theme';
import GlobalStyle from '@/styles/GlobalStyles';

const container = document.getElementById('root');
const root = createRoot(container as Element);

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
