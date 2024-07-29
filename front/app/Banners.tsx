"use client"

import { infoBanners } from "./data"
import { StickyBanner } from "../components/StickyBanner"
import Link from "next/link"
import { Button } from "../components/Button"
import { isAfter, isBefore } from "date-fns"
import { useEffect, useState } from "react"

export function Banners() {
  const [rendered, setRendered] = useState(false)

  const now = new Date()

  const infoBannersToShow = infoBanners.filter(
    ({ dateStart, dateEnd }) =>
      isAfter(now, dateStart) && isBefore(now, dateEnd)
  )

  useEffect(() => {
    setRendered(true)
  }, [])

  if (!rendered) {
    return null
  }

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
