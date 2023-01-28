import "../styles/globals.css"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import NextNprogress from "nextjs-progressbar"
import { Favicon } from "../components/Favicon"
import { Analytics } from "@vercel/analytics/react"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Favicon />
      <Header />
      <Component {...pageProps} />
      <Footer />
      <NextNprogress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height="5"
      />
      <Analytics />
    </>
  )
}

export default MyApp
