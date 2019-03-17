import React from 'react'
import Header from './Header'
import Reset from './Reset'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'

const Layout = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Reset />
        <Header />
        {props.children}
      </React.Fragment>
    </ThemeProvider>
  )
}

export default Layout
