import React from 'react';
import { Header } from '../components/Header';
import { GlobalStyles } from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}

export default MyApp;
