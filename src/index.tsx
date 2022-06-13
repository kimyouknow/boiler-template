import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import App from '@/App';
import { theme } from '@/styles/theme';
import GlobalStyle from '@/styles/GlobalStyles';
import { worker } from '@/mocks/browser';

const container = document.getElementById('root');
const root = createRoot(container as Element);

if (process.env.MOCK_TOOL === 'msw') {
  worker.start();
}

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
