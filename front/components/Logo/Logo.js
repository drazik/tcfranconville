import PropTypes from "prop-types"
import logo from "./logo.png"
import Image from "next/image"

export function Logo({ size = 100 }) {
  return (
    <div
      className="inline-flex items-center justify-center p-1 bg-white border-2 rounded-full border-brand"
      style={{ width: size, height: size }}
    >
      <div className="h-full w-full relative">
        <Image src={logo} alt="TC Franconville" layout="fill" />
      </div>
    </div>
  )
}

Logo.propTypes = {
  size: PropTypes.number,
}
