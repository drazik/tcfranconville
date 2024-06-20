import PropTypes from "prop-types"
import cn from "classnames"
import Image from "next/image"

export function Illustration({ alt = "", className, ...props }) {
  return (
    <Image
      alt={alt}
      className={cn("max-w-full rounded-xl shadow-xl mx-auto", className)}
      {...props}
    />
  )
}

Illustration.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
}
