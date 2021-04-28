import "../styles/globals.css"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import NextNprogress from "nextjs-progressbar"
import { Favicon } from "../components/Favicon"
import { StickyBanner } from "../components/StickyBanner"
import Link from "next/link"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Favicon />
      <Header />
      <StickyBanner>
        <p className="text-center">
          <strong>Information :</strong>{" "}
          Le club est ouvert.{" "}
          <Link href="/information"><a className="underline">En savoir plus</a></Link>
        </p>
      </StickyBanner>
      <Component {...pageProps} />
      <Footer />
      <NextNprogress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height="5"
      />
    </>
  )
}

export default MyApp