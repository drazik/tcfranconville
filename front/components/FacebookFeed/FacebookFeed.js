"use client"

import { FacebookProvider, Page } from "react-facebook"
import { useState, useEffect } from "react"
import cn from "classnames"
import PropTypes from "prop-types"
import { useBreakpoints } from "../../hooks/useBreakpoints"

export function FacebookFeed({ className, ...props }) {
  const [clientRender, setClientRender] = useState(false)
  const { sm } = useBreakpoints()

  useEffect(() => {
    setClientRender(true)
  }, [])

  if (!process.browser || !clientRender) {
    return null
  }

  return (
    <div className={cn("space-y-4", className)} {...props}>
      <div className="text-center prose max-w-none">
        <p>
          Vous pouvez suivre l'actualité du club sur la page Facebook{" "}
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

FacebookFeed.propTypes = {
  className: PropTypes.string,
}
