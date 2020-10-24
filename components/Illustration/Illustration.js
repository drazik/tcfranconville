import PropTypes from "prop-types"
import cn from "classnames"

export function Illustration({ alt = "", className, ...props }) {
  return (
    <img
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
