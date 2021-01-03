import * as React from 'react';
import type { AppProps } from 'next/app';
import 'destyle.css';
import './global.css';

import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
