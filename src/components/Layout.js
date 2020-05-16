import React from "react"
import Header from "./Header"
import Reset from "./Reset"
import Footer from "./Footer"
import { ThemeProvider } from "emotion-theming"
import theme from "../theme"
import { Text } from "./Text"
import { StickyBanner } from "./StickyBanner"
import { Link } from "gatsby"

const Layout = props => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Reset />
        <StickyBanner>
          <Text component="strong">Information : </Text>
          <Text component="span">Le club réouvre à partir du 15 mai.</Text>{" "}
          <Link to="/coronavirus-reouverture">En savoir plus.</Link>
        </StickyBanner>
        <Header />
        {props.children}
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default Layout
