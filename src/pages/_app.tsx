import * as React from 'react';
import type { AppProps } from 'next/app';
import 'destyle.css';
import './global.css';

import { ThemeProvider } from 'next-themes';
import { client } from '@/apollo/lib';
import { ApolloProvider } from '@apollo/client';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default MyApp;
