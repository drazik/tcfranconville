import { createGlobalStyle } from 'styled-components'

const Reset = createGlobalStyle`
  html,
  body {
    height: 100%;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #fcf7f8;
    font-family: sans-serif;
    color: #0d1321;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`

export default Reset
