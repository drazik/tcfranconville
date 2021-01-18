import cn from "classnames"
import PropTypes from "prop-types"
import { createContext } from "react"

const DEFAULT_COLOR = "normal"

export const SectionContext = createContext({ color: DEFAULT_COLOR })

export function Section({
  color = DEFAULT_COLOR,
  variant,
  skewed = false,
  className,
  children,
  ...props
}) {
  if (variant) {
    console.log("variant prop is deprecated on Section. Please use color prop")
    color = variant
  }

  return (
    <SectionContext.Provider value={{ color }}>
      <section
        className={cn("relative py-20", className, {
          "bg-brand text-white": color === "brand",
          "bg-white text-grey-900": color === "light",
          "bg-gray-100 text-grey-900": color === "normal",
          "transform origin-top-right skew-y-1": skewed,
        })}
        {...props}
      >
        {skewed ? (
          <div className={cn("transform", { "-skew-y-1": skewed })}>
            {children}
          </div>
        ) : (
          children
        )}
      </section>
    </SectionContext.Provider>
  )
}

Section.propTypes = {
  color: PropTypes.oneOf(["normal", "brand", "light"]),
  skewed: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
}
