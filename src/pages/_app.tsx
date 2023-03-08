import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import Head from 'next/head';
import { MantineProvider } from '@mantine/core';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MantineProvider
        withNormalizeCSS
        withGlobalStyles
        theme={{
          fontFamily: 'Open Sans, sans serif',
          spacing: {
            xs: '1rem',
            sm: '1.2rem',
            md: '1.8rem',
            lg: '2.2rem',
            xl: '2.8rem'
          }
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
