import { InfoBubble } from "./Icon"
import PropTypes from "prop-types"
import cn from "classnames"

export function Info({
  children,
  className,
  title = "Le saviez-vous ?",
  ...props
}) {
  const r = 50
  const d = 2 * r

  return (
    <div className={cn("relative", className)} {...props}>
      <InfoBubble
        className="absolute w-12 h-12 fill-current text-brand"
        style={{ top: "-10px", left: "-10px" }}
      />
      <div className="relative px-6 pt-16 pb-8 overflow-hidden text-white rounded-xl">
        <div
          className="absolute"
          style={{
            width: d,
            height: d,
            boxShadow: "0 0 0 1000px #1a38b1",
            top: -r,
            left: -r,
            borderRadius: "50%",
            zIndex: "-1",
          }}
        />
        <p
          className="absolute font-bold transform -translate-y-1/2"
          style={{ top: "25px", left: "calc(50px + 1rem)" }}
        >
          {title}
        </p>
        {children}
      </div>
    </div>
  )
}

Info.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
}
