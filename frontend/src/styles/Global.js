import { createGlobalStyle, css } from 'styled-components'

const fontStyle = css`
  line-height: 1.5;
  font-size: 1.6rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  html {
    font-size: 62.5%;
    height: 100%;
  }

  body {
    background: ${({ theme }) => theme.baseBackground};
    color: ${({ theme }) => theme.primaryText};
    font-family: 'Monda', monospace;
    height: 100%;
    overflow-x: hidden;
    ${fontStyle}
  }

  #root {
    height: 100%;
  }

  textarea, input, button, code {
    font-family: 'Monda', monospace;
    ${fontStyle}
  }
`
