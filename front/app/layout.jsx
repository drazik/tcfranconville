import "../styles/globals.css"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Favicon } from "../components/Favicon"
import { Analytics } from "@vercel/analytics/react"
import { StickyBanner } from "../components/StickyBanner"
import Link from "next/link"
import { Button } from "../components/Button"
import { ProgressBar } from "../components/ProgressBar"

export default function RootLayout({ children }) {
  return (
    <html lang={"fr"}>
      <body>
        <Favicon />
        <Header />
        {children}
        <Footer />

        <StickyBanner>
          <div className={"flex gap-10 justify-between items-center"}>
            <div className={"grow"}>
              <p>
                <strong>Inscriptions 2024-2025&nbsp;:</strong> une permanence
                dédiée aux inscriptions aura lieu le{" "}
                <strong>samedi 6 juillet 2024 de 10h à 13h</strong>
              </p>
            </div>

            <div className={"shrink-0"}>
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

        <ProgressBar />
        <Analytics />
      </body>
    </html>
  )
}

export const metadata = {
  title: {
    template: "%s - TC Franconville",
    absolute: "TC Franconville",
  },
  description:
    "Club de tennis convivial à Franconville (Val d'Oise). 9 courts de tennis dont 3 couverts et 2 extérieurs éclairés",
  verification: {
    google: "sgP1a5KOzca0JDP7SLouQZMzj2LT8Aou5c-ViSnpF8o",
  },
}
