import PropTypes from "prop-types"
import logo from "./logo.png"

export function Logo({ size = 100, className, ...props }) {
  return (
    <div
      className={`inline-flex items-center justify-center p-1 bg-white border-2 rounded-full border-brand ${className}`}
      {...props}
    >
      <img
        src={logo}
        alt="TC Franconville"
        style={{ width: size, height: size }}
      />
    </div>
  )
}

Logo.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string,
}
