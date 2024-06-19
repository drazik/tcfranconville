import "../styles/globals.css"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import NextNprogress from "nextjs-progressbar"
import { Favicon } from "../components/Favicon"
import { Analytics } from "@vercel/analytics/react"
import { StickyBanner } from "../components/StickyBanner"
import Link from "next/link"
import { Button } from "../components/Button"

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
      <StickyBanner>
        <div className={"flex gap-10 justify-between items-center"}>
          <div className={"flex-grow"}>
            <p>
              <strong>Inscriptions 2024-2025&nbsp;:</strong> une permanence
              dédiée aux inscriptions aura lieu le{" "}
              <strong>samedi 6 juillet 2024 de 10h à 13h</strong>
            </p>
          </div>

          <div className={"flex-shrink-0"}>
            <Button
              component={Link}
              href="/le-club#contact"
              className="w-full"
              size="small"
            >
              Venir au club
            </Button>
          </div>
        </div>
      </StickyBanner>
      <Analytics />
    </>
  )
}

export default MyApp
