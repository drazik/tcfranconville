import { FacebookProvider, Page } from "react-facebook"
import useSize from "@react-hook/size"
import { useRef } from "react"
import cn from "classnames"
import PropTypes from "prop-types"

export function FacebookFeed({ className, ...props }) {
  const ref = useRef(null)
  const [width] = useSize(ref)

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
      <div ref={ref} className="text-center">
        <FacebookProvider appId="2196169050680329" key={width}>
          <Page
            href="https://www.facebook.com/TCFranconvilleOfficiel/"
            tabs="timeline"
            width={width}
          />
        </FacebookProvider>
      </div>
    </div>
  )
}

FacebookFeed.propTypes = {
  className: PropTypes.string,
}
