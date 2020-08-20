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
        <StickyBanner>
          <Text component="strong">Information : </Text>
          <Text component="span">
            Les journées portes ouvertes du club auront lieu les 5 et 6
            septembre 2020 de 10h à 17h.
          </Text>{" "}
          <Link to="/portes-ouvertes-2020">En savoir plus.</Link>
        </StickyBanner>
        <Header />
        {props.children}
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default Layout
