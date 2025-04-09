import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle\`
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

  body {
    margin: 0;
    background: #0e0e0e;
    color: #00ffea;
    font-family: 'Press Start 2P', monospace;
    overflow-x: hidden;
  }

  a {
    color: #00ffea;
    text-decoration: none;
  }

  ::selection {
    background: #00ffea;
    color: #0e0e0e;
  }
\`;

export default GlobalStyle;
