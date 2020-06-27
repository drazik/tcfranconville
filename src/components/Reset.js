import React from "react"
import { Global, css } from "@emotion/core"
import { withTheme } from "emotion-theming"

function Reset(props) {
  return (
    <Global
      styles={css`
        html,
        body {
          height: 100%;
          margin: 0;
          box-sizing: border-box;
        }

        body {
          background-color: ${props.theme.background};
          font-family: sans-serif;
          color: #0d1321;
        }

        *,
        *::before,
        *::after {
          box-sizing: inherit;
        }

        a {
          color: inherit;
        }

        /* This rule puts the modal portal on top of the app */
        .ReactModalPortal {
          position: relative;
          z-index: 1000;
        }
      `}
    />
  )
}

export default withTheme(Reset)
