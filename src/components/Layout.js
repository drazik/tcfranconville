import React from "react"
import Header from "./Header"
import Reset from "./Reset"
import Footer from "./Footer"
import { ThemeProvider } from "emotion-theming"
import theme from "../theme"
import { Text } from "./Text"
import { StickyBanner } from "./StickyBanner"
import { Link } from "gatsby"

const Layout = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Reset />
        <Header />
        {props.children}
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default Layout
