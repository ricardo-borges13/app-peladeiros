import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background: ${({ theme }) => theme.colors.background.global};
    color: ${({ theme }) => theme.colors.black};
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;
  }

  button {
    font-family: inherit;
    -webkit-tap-highlight-color: transparent;
  }

  input, textarea, select {
  font-family: inherit;
}

  a {
    text-decoration: none;
    color: inherit;
  }
`
