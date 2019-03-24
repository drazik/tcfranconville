import React from 'react'
import Header from './Header'
import Reset from './Reset'
import Footer from './Footer'
import { ThemeProvider } from 'emotion-theming'
import theme from '../theme'

const Layout = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Reset />
        <Header />
        {props.children}
        <Footer />
      </React.Fragment>
    </ThemeProvider>
  )
}

export default Layout
