import "../styles/globals.css"
import { Header } from "../components/Header/Header"
import { Footer } from "../components/Footer/Footer"
import { Favicon } from "../components/Favicon"
import { Analytics } from "@vercel/analytics/react"
import { StickyBanner } from "../components/StickyBanner"
import Link from "next/link"
import { Button } from "../components/Button"
import { ProgressBar } from "../components/ProgressBar"
import { infoBanners } from "./data"
import { isAfter, isBefore } from "date-fns"
import type { ReactNode } from "react"

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang={"fr"}>
      <body>
        <Favicon />
        <Header />
        {children}
        <Footer />

        <Banners />

        <ProgressBar />
        <Analytics />
      </body>
    </html>
  )
}

type RootLayoutProps = {
  children?: ReactNode
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

function Banners() {
  const now = new Date()

  const infoBannersToShow = infoBanners.filter(
    ({ dateStart, dateEnd }) =>
      isAfter(now, dateStart) && isBefore(now, dateEnd)
  )

  return infoBannersToShow.map(({ id, cta, content }) => (
    <StickyBanner key={id}>
      <div className={"flex gap-10 justify-between items-center"}>
        <div className={"grow"}>{content}</div>

        {cta ? (
          <div className={"shrink-0"}>
            <Button asChild size="small">
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
          </div>
        ) : null}
      </div>
    </StickyBanner>
  ))
}
