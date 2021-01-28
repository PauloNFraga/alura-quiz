import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from '../db.json';
<<<<<<< HEAD
import Head from 'next/head'
=======
>>>>>>> f34ad02aa897a0fa3beb0007bf2dd1efd9723fbc

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-size: 14px;
    display: flex;
    flex-direction: column;
<<<<<<< HEAD
    font-family: 'Lato', sans-serif; // Arial x Fantasy
=======
    font-family: Arial; // Arial x Fantasy x Lato
>>>>>>> f34ad02aa897a0fa3beb0007bf2dd1efd9723fbc
    color: ${({ theme }) => theme.colors.contrastText}; // primary x secundary
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

// const GlobalStyle = createGlobalStyle`
//   body {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }
// `

const theme = db.theme;

// const theme = {
//   colors: {
//     primary: '#0070f3',
//   },
// }

export default function App({ Component, pageProps }) {
  return (
    <>
<<<<<<< HEAD
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" /> 
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap" rel="stylesheet" />  
      </head>
=======
>>>>>>> f34ad02aa897a0fa3beb0007bf2dd1efd9723fbc
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}