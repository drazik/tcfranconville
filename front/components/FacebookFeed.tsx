"use client"

import { FacebookProvider, Page } from "react-facebook"
import { useState, useEffect } from "react"
import { useBreakpoints } from "../hooks/useBreakpoints"

export function FacebookFeed() {
  const [clientRender, setClientRender] = useState(false)
  const { sm } = useBreakpoints()

  useEffect(() => {
    setClientRender(true)
  }, [])

  if (!process.browser || !clientRender) {
    return null
  }

  return (
    <div className={"space-y-4"}>
      <div className="text-center prose max-w-none">
        <p>
          Vous pouvez suivre l&lsquo;actualité du club sur la page Facebook{" "}
          <a href="https://www.facebook.com/TCFranconvilleOfficiel">
            TC Franconville Officiel
          </a>
        </p>
      </div>
      <div className="text-center">
        <FacebookProvider appId="2196169050680329">
          <Page
            href="https://www.facebook.com/TCFranconvilleOfficiel/"
            tabs="timeline"
            width={sm ? 500 : 300}
          />
        </FacebookProvider>
      </div>
    </div>
  )
}
