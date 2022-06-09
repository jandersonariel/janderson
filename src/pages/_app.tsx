import type { AppProps } from 'next/app'
import '../translator/i18n/index'
import GlobalStyle from "../../styles/global";
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from "react";
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { combineTheme, dark, light } from '../../styles/themes';
import { HeaderComp } from '../components/Header';
import { FooterComp } from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<DefaultTheme>(combineTheme(dark));

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? combineTheme(dark) : combineTheme(light));
 };

  return (
      <ThemeProvider theme={theme}>
        <div className='divheader'>
        <HeaderComp checked={theme.title === 'dark'} onChange={toggleTheme}/>
        </div>
        <Component {...pageProps} />
        <GlobalStyle/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
          <FooterComp />
      </ThemeProvider>
  )
}

export default MyApp