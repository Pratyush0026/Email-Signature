import React from 'react';
import { createGlobalStyle } from 'styled-components';
import SignatureBuilder from './components/SignatureBuilder';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto Mono', monospace;
  }

  @keyframes flipdown {
    0% {
      opacity: 0;
      transform-origin: top center;
      transform: rotateX(-90deg);
    }
    90% {
      opacity: 1;
    }
    100% {
      transform-origin: top center;
      transform: rotateX(0deg);
    }
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <SignatureBuilder />
    </>
  );
}

export default App;
