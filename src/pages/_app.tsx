import * as React from 'react';
import type { AppProps } from 'next/app';
import 'destyle.css';
import './global.scss';

import { ThemeProvider } from 'next-themes';
import { ApolloProvider } from '@apollo/client';
import { client } from '@/apollo/lib';

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
