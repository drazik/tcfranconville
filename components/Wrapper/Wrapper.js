import PropTypes from "prop-types"

export function Wrapper({ className, ...props }) {
  return (
    <div
      className={`relative w-11/12 max-w-6xl mx-auto ${className}`}
      {...props}
    />
  )
}

Wrapper.propTypes = {
  className: PropTypes.string,
}
