import React from 'react';
import Header from '../components/Header';
import '../styles/globals.sass';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
