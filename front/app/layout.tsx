import "../styles/globals.css"
import { Header } from "../components/Header/Header"
import { Footer } from "../components/Footer/Footer"
import { Favicon } from "../components/Favicon"
import { Analytics } from "@vercel/analytics/react"
import { ProgressBar } from "../components/ProgressBar"
import type { ReactNode } from "react"
import { Banners } from "./Banners"

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
